

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
    await models.Cat.bulkCreate(catList)
    await models.Itinerary.bulkCreate(itineraryList)

    const poiList = [
        {
            name: "Basilica San Marco",
            img: "https://images.placesonline.com/photos/424011111200302_Venezia_1232574946.jpg?quality=80&w=700",
            itineraryId: itineraryList[0].id,
            description: "The best church you can find in Venezia!"
        },
        {
            name: "Campidoglio",
            img: "https://i0.wp.com/www.hisour.com/wp-content/uploads/2020/06/Campidoglio-Square-Capitoline-Museums.jpg?fit=960%2C640&ssl=1&resize=1280%2C720",
            itineraryId: itineraryList[1].id,
            description: "The house of Mattarella"
        },
        {
            name: "Colosseo",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
            itineraryId: itineraryList[1].id,
            description: "Nulla da aggiungere visto che è considerata come Meraviglia Del Mondo"
        },
        {
            name: "Ponte Di Rialto",
            img: "https://venicewiki.org/images/thumb/3/37/Rialto_e_gondola.jpg/450px-Rialto_e_gondola.jpg",
            itineraryId: itineraryList[0].id,
            description: "Un ponticello carino che puoi vedere a Venezia"
        },
        {
            name: "Villa Borghese",
            img: "https://www.romegardenhotel.com/visitaroma/wp-content/uploads/2019/01/villa-borghese-roma.jpg",
            itineraryId: itineraryList[1].id,
            description: "Famosissima per il suo giardino è tra le ville piu belle d'Italia"
        },
    ]
   
    await models.PointOfInterest.bulkCreate(poiList)
}