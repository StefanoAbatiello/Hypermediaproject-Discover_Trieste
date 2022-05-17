const express = require('express')
const app = express()
const { Sequelize, DataTypes, where } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

// Development
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/hyp")

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })
// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    //Defining the struct of the tables in the db
    await database.authenticate()
    const Cat = database.define("cat", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        breed: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const Event = database.define("event", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        img: DataTypes.STRING,
        season: DataTypes.STRING,
    })
    const Itinerary = database.define("itinerary", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const PointOfInterest = database.define("poi", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const Location  = database.define("location", {
        name: DataTypes.STRING,
        city: DataTypes.STRING,
    })
    const SingleService =database.define("singleService",{
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        info: DataTypes.STRING,
    })
    const ServiceType = database.define("serviceType", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    //Definition of the reletionships between two tables
    Location.hasMany(Cat)    
    Cat.belongsTo(Location)
    Itinerary.hasMany(PointOfInterest)
    PointOfInterest.belongsTo(Itinerary)
    ServiceType.hasMany(SingleService)
    SingleService.belongsTo(ServiceType)
    Event.belongsTo(PointOfInterest)
    PointOfInterest.hasMany(Event)
   
    await database.sync({ force: true })
    return {
        Cat,
        Event,
        Location,
        Itinerary,
        PointOfInterest,
        SingleService,
        ServiceType
    }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

const pageContentObject = {
    index: {
        title: "Homepage",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Perugia_panoramic.jpg",
        description: `questa è la home page del sito`
    },
    about: {
        title: "About",
        image: "https://fs.i3lab.group/hypermedia/images/about.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
    },
}


async function runMainApi() {
    //Here we initialize te values of tables
    const models = await initializeDatabaseConnection()
    await initialize(models)

    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    app.get('/cats/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Cat.findOne({ where: { id }, include: [{model: models.Location}] })
        return res.json(result)
    })

    // HTTP GET api that returns all the cats in our actual database
    app.get("/cats", async (req, res) => {
        //const name = "Cat 1"
        //const result = await models.Cat.findAll({ where: { name} })
        const result = await models.Cat.findAll()
        const filtered = []
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

    app.get("/events/:season", async (req, res) => {
        const { season } = req.params
        console.log(season)
        const filtered = []
        if (season === 'allYear') {
            const result = await models.Event.findAll()
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                id: element.id,
            })
        }
        } else {
            const result = await models.Event.findAll({where: { season }})
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                id: element.id,
            })
        }
        }
        return res.json(filtered)
    })

     // HTTP GET api that returns all the itineraries in our actual database
     app.get("/itineraries", async (req, res) => {
        const result = await models.Itinerary.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

     // HTTP GET api that returns all the itineraries in our actual database
     app.get("/pois", async (req, res) => {
        const result = await models.PointOfInterest.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    app.get('/event/:id', async (req, res) => {
        const id = +req.params.id
        // const eventId = +req.params.id
        const result = await models.Event.findOne({ where: { id }})
        return res.json(result)
    })
    app.get('/event/len', async (req, res) => {
        const len = (await models.PointOfInterest.findAll()).length
        return res.json(len)
    })

    app.get('/itineraries/:id', async (req, res) => {
        const id = +req.params.id
        const itineraryId = +req.params.id
        const result = {
            itinerary: await models.Itinerary.findOne({ where: { id } }),
            relatedPois: await models.PointOfInterest.findAll({ where: { itineraryId } })
        }
        return res.json(result)
    })
    
    app.get('/pois/:id', async (req, res) => {
        const id = +req.params.id
        const len = (await models.PointOfInterest.findAll()).length
        const result = {
            poi:await models.PointOfInterest.findOne({ where: { id }, include: [{model: models.Itinerary}] }),
            len: len
        }
        return res.json(result)
    })

    app.get('/service/:id', async (req, res) => {
        const id = +req.params.id
        const serviceTypeId = +req.params.id

        const result ={
            type: await models.ServiceType.findOne({ where: { id }}),
            services: await models.SingleService.findAll({ where: { serviceTypeId } })
        }    
        return res.json(result)
    })

    // app.get('/service/find/:id', async (req, res) => {
    //     const serviceTypeId = +req.params.id
    //     const result = await models.SingleService.findAll({ where: { serviceTypeId } })
    //     const filtered = []
    //     for (const element of result) {
    //         filtered.push({
    //             name: element.name,
    //             address: element.address,
    //             info: element.info,
    //         })
    //     }
    //     return res.json(filtered)    
    // })

    app.get("/services", async (req, res) => {
        const result = await models.ServiceType.findAll()
        const filtered = []
        // aggiungo gli elementi dell'oggetto che vado a recuperare dal db, in modo da recuperare solo i dettagli che mi servono e ridurre la pesantezza
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                id: element.id,
            })
        }
        return res.json(filtered)
    })


    // HTTP POST api, that will push (and therefore create) a new element in
    // our actual database
    app.post("/cats", async (req, res) => {
        const { body } = req
        await models.Cat.create(body);
        return res.sendStatus(200)
    })

}

runMainApi()

export default app
