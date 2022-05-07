// Devo runnare questa riga di codice "npm install express"
const express = require('express')
const app = express()
// Importinf Sequelize
const { Sequelize, DataTypes } = require("sequelize")
// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body
app.use(express.json())

// Configurare con il postgres nel mio pc
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/ACSS")


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    // Tiro fuori i dati della tabella "cat"
    const Cat = database.define("cat", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        breed: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    await database.sync({ force: true })
    return {
        Cat
    }
}

// Come se creassi un db fake per avere tutte le info per le pagine fissate nel codice
const pageContentObject = {
    index: {
        title: "Homepage",
        image: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
        description: "Short description of homepage"
    },
    about: {
        title: "About",
        image: "https://fs.i3lab.group/hypermedia/images/about.jpeg",
        description: "Short description of about"
    },
}

// Versione vecchia del db implementato con js
// Our fake database 
// const catList = [
//     {
//         id: 1,
//         name: "Cat 1",
//         breed: "Siberian",
//         details: "Details about cat 1",
//         img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
//     },
//     {
//         id: 2,
//         name: "Cat 2",
//         breed: "Birman",
//         details: "Details about cat 2",
//         img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
//     },
//     {
//         id: 3,
//         name: "Cat 3",
//         breed: "Bombay",
//         details: "Details about cat 3",
//         img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
//     },
//     {
//         id: 4,
//         name: "Cat 4",
//         breed: "Calico",
//         details: "Details about cat 4",
//         img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
//     },
//     {
//         id: 5,
//         name: "Cat 5",
//         breed: "Maine Coon",
//         details: "Details about cat 5",
//         img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
//     },
// ]

// Qua dentro metto tutte le API che voglio creare
async function runMainApi() {
    //Recupero il DB e uso l'oggetto models come riferimento al DB
    const models = await initializeDatabaseConnection()

    // aggiungio un nuovo gatto al db in modo forzato
    await models.Cat.create(
        {
            name: "Cat 5",
            breed: "Maine Coon",
            description: "Details about cat 5",
            img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
        }

    )

    // Api to retrive the info for the page from the above component. Così prima di modificare qualcosa bisogna modificare tutto il codice
    // e non il DB dove non potrei vedere le modifiche
    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    // utilizzo una richiesta particolare ed utilizzo il parametro id passato per fare la ricerca richiesta
    app.get('/cats/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Cat.findOne({ where: { id } })
        return res.json(result)
    })

    // GET api that returns all the cats in database
    // Nel path per la richiesta non devo mettere più /api perchè è gestito dal middleweare
    app.get("/cats", async (req, res) => {
        const result = await models.Cat.findAll()
        const filtered = []
        // aggiungo gli elementi dell'oggetto che vado a recuperare dal db, in modo da recuperare solo i dettagli che mi servono e ridurre la pesantezza
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                breed: element.breed,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    // HTTP POST apio that will push (and therefore create) a new element in 
    // our fake database 
    app.post("/cats", (req, res) => {
        const { body } = req
        catList.push(body)
        return res.sendStatus(200)
    })
}

// Devo per forza mettere questa riga in modo tale che ogni volta le API vengano runnate e pronte per essere chiamate
runMainApi()


export default app
