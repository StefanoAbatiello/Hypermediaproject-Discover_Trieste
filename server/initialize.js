

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
            name: "Itinerary 1",
            img: "https://www.dire.it/wp-content/uploads/2020/06/palazzi-colorati_casa_case_Sigma-Coatings-5-scaled.jpg",
        },
        {
            name: "Itinerary 2",
            img: "https://st.depositphotos.com/1006880/5055/i/600/depositphotos_50556395-stock-photo-modern-city-buildings-in-the.jpg",
        },
        {
            name: "Itinerary 3",
            img: "https://www.ottaviotomasini.it/wp-content/uploads/2017/10/ot-viaggi-cina-hong-kong-6-2000x1333.jpg",
        },
    ]
    await models.Cat.bulkCreate(catList)
    await models.Itinerary.bulkCreate(itineraryList)
}