//Here we put all the datas, according to the structure defined in api.js
export default async (models) => {
    const locationList = [
        {
            name: "Cat Paradise",
            city: "Milan"
        },
        {
            name: "Cat City",
            city: "Rome"
        }
    ]
    const location0 = await models.Location.create(locationList[0])
    const location1 = await models.Location.create(locationList[1])
    const catList = [
        {
            name: "Cat 1",
            breed: "Siberian",
            description: "Details about cat 1",
            img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 2",
            breed: "Birman",
            description: "Details about cat 2",
            img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 3",
            breed: "Bombay",
            description: "Details about cat 3",
            img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 4",
            breed: "Calico",
            description: "Details about cat 4",
            img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
            locationId: location1.id
        },
        {
            name: "Cat 5",
            breed: "Maine Coon",
            description: "Details about cat 5",
            img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
            locationId: location1.id
        },
    ]
    const eventList = [
        {
            name: "concert",
            description: "Details about concert",
            img: "https://spazio13.org/wp-content/uploads/2020/06/concerti-milano-1200x900.jpg",
            season: "winter",
        },
        {
            name: "marathon",
            description: "Details about marathon",
            img: "http://mezzamaratonascandicci.it/wp-content/uploads/2020/01/mezza-maratona-partenza.jpg",
            season: "winter",        },
        {
            name: "sagra della salsiccia",
            description: "Details about sagra della salsiccia",
            img: "https://searoundpress.com/wp-content/uploads/2016/09/Searound_Eventi_Salsiccia-e1477306494235.jpg",
            season: "summer",
        },
        
    ]
    const itineraryList = [
        {
            name: "Venezia",
            img: "https://www.dire.it/wp-content/uploads/2020/06/palazzi-colorati_casa_case_Sigma-Coatings-5-scaled.jpg",
        },
        {
            name: "Roma",
            img: "https://st.depositphotos.com/1006880/5055/i/600/depositphotos_50556395-stock-photo-modern-city-buildings-in-the.jpg",
        },
    ]
    const itinerary0 = await models.Itinerary.create(itineraryList[0])
    const itinerary1 = await models.Itinerary.create(itineraryList[1])
    const poiList = [
        {
            name: "Basilica San Marco",
            img: "https://images.placesonline.com/photos/424011111200302_Venezia_1232574946.jpg?quality=80&w=700",
            itineraryId: itinerary0.id,
            description: "The best church you can find in Venezia!"
        },
        {
            name: "Campidoglio",
            img: "https://i0.wp.com/www.hisour.com/wp-content/uploads/2020/06/Campidoglio-Square-Capitoline-Museums.jpg?fit=960%2C640&ssl=1&resize=1280%2C720",
            itineraryId: itinerary1.id,
            description: "The house of Mattarella"
        },
        {
            name: "Colosseo",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
            itineraryId: itinerary1.id,
            description: "Nulla da aggiungere visto che è considerata come Meraviglia Del Mondo"
        },
        {
            name: "Ponte Di Rialto",
            img: "https://venicewiki.org/images/thumb/3/37/Rialto_e_gondola.jpg/450px-Rialto_e_gondola.jpg",
            itineraryId: itinerary0.id,
            description: "Un ponticello carino che puoi vedere a Venezia"
        },
        {
            name: "Villa Borghese",
            img: "https://www.romegardenhotel.com/visitaroma/wp-content/uploads/2019/01/villa-borghese-roma.jpg",
            itineraryId: itinerary1.id,
            description: "Famosissima per il suo giardino è tra le ville piu belle d'Italia"
        },
    ]
    //with create is just one element
    //with bulkCreate is moreElements like arrays
    await models.Cat.bulkCreate(catList)
    await models.Event.bulkCreate(eventList)
    await models.PointOfInterest.bulkCreate(poiList)
}