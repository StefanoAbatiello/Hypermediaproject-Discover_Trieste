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
    const Event = database.define("event", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        img: DataTypes.STRING,
        season: DataTypes.STRING,
        date: DataTypes.TEXT,
    })
    const Itinerary = database.define("itinerary", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        img: DataTypes.ARRAY(DataTypes.STRING),
    })
    const PointOfInterest = database.define("poi", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        img: DataTypes.STRING,
    })
    const SingleService =database.define("singleService",{
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        info: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const ServiceType = database.define("serviceType", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        img: DataTypes.STRING,
    })
    //Definition of the reletionships between two tables
    Itinerary.hasMany(PointOfInterest)
    PointOfInterest.belongsTo(Itinerary)
    ServiceType.hasMany(SingleService)
    SingleService.belongsTo(ServiceType)
    Event.belongsTo(PointOfInterest)
    PointOfInterest.hasMany(Event)
   
    await database.sync({ force: true })
    return {
        Event,
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
        title: "Perugia",
        image: "https://etrurianews.it/wp-content/uploads/2021/02/perugia.jpg",
        description: `Perugia lovingly preserves precious traces of its bright historical periods. Today it is the administrative capital of the Umbria region, a major cultural and tourist destination and the prestigious home of the University of Studies for more than 700 years. The historic Academy of Fine Arts, the Music Conservatory and its University for Foreigners, with students from all over the world, define its distinct international vocation.`
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

    // HTTP GET api that returns the events of a certain season
    app.get("/events/:season", async (req, res) => {
        const { season } = req.params
        const filtered = []
        const result = await models.Event.findAll({where: { season }})
        for (const element of result) {
            const id=element.poiId
            const location= await models.PointOfInterest.findOne({where: {id}})
            filtered.push({
                name: element.name,
                img: element.img,
                id: element.id,
                date: element.date,
                locName : location.name,
            })
        }
        return res.json(filtered)
    })

     // HTTP GET api that returns all the itineraries
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

    // HTTP GET api that returns all the events in our actual database
    app.get("/events", async (req, res) => {
        const result = await models.Event.findAll()
        const filtered = []
        for (const element of result) {
            const id=element.poiId
            const location= await models.PointOfInterest.findOne({where: {id}})
            filtered.push({
                name: element.name,
                img: element.img,
                id: element.id,
                date: element.date,
                locName : location.name,
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
        const poi = await models.PointOfInterest.findOne({ where: { id }, include: [{model: models.Itinerary}] })
        const itineraryId = poi.itineraryId
        const pois = await models.PointOfInterest.findAll({ where: { itineraryId} })
        const relatedPois = []
        for (const element of pois) {
            if (element.id != id){
                relatedPois.push({
                    name: element.name,
                    img: element.img,
                    id: element.id,
                })
            }
        }
        const result = {
            relatedPois,
            poi,
            len: (await models.PointOfInterest.findAll()).length
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

    app.get('/service/:id', async (req, res) => {
        const id = +req.params.id
        const serviceTypeId = +req.params.id
        const result ={
            type: await models.ServiceType.findOne({ where: { id }}),
            services: await models.SingleService.findAll({ where: { serviceTypeId } })
        }    
        return res.json(result)
    })

}

runMainApi()

export default app
