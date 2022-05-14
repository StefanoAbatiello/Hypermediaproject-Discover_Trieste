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

    const servicesList = [
        {
            title: "Medical services",
            img: "https://www.assidai.it/wp-content/uploads/2019/05/diritto-salute-italia.jpg",
            description: "Here you can find all the pharmacies, hospital and clinics in the city ",
        },    
        {
            title: "Hotel and B&B",
            img: "https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850__480.jpg",
            description: "Here you can find the best hotels and B&Bs that this city offers!",
            
        },
        {
            title: "Restaurants",
            img: "https://https://zipinventory.com/assets/images/topiccluster/10-restaurant-service-models-1607720498-5934-800x400.png.pixabay.com/photo/2020/06/30/15/03/table-5356682__480.jpg",
            description: "Here you can find the best restaurants to try during your stay",
        }, 
        {
            title: "Cafes",
            img: "https://saveatrain-12e85.kxcdn.com/blog/wp-content/uploads/2020/01/bar-vom-eingang-aus.jpg",
            //img: "https://latuaattivita.it/adm/Images/contents/large/ann_vpr266_05.jpg",
            description: "if you don't know where to go for breakfast or a simple break, here you can find some good cafes with delicious pastries and drinks",
        }, 
        {
            title: "Entertainment ",
            img: "https://images.xceed.me/clubs/covers/milk-club-torino-xceed-0705.jpg?w=600&fm=auto",
            description: "Here you can find the best activities in the city",
        }, 
        
    ]   
    const type0 = await models.ServiceType.create(servicesList[0])
    const type1 = await models.ServiceType.create(servicesList[1])
    const type2 = await models.ServiceType.create(servicesList[2])
    const type3 = await models.ServiceType.create(servicesList[3])
    const type4 = await models.ServiceType.create(servicesList[4])


    const singleServiceList = [
        {   
            name: "farmacia1",
            serviceTypeId: type0.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        }, 
        {   
            name: "farmacia2",
            serviceTypeId: type0.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        }, 
        {   
            name: "hospital",
            serviceTypeId: type0.id,
            address: "via blabla",
            info: "For emergencies the number to call is 112",
        
        },
        {   
            name: "hotel1",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "reception open everyday  from 8am to 11pm",
        
        }, 
        {   
            name: "hotel2",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "reception open everyday  from 8am to 11pm",
        
        }, 
        {   
            name: "hotel3",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "reception open everyday  from 8am to 11pm",
        
        },
        {   
            name: "restaurant1",
            serviceTypeId: type2.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        }, 
        {   
            name: "restaurant2",
            serviceTypeId: type2.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        },
        {   
            name: "cafe1",
            serviceTypeId: type3.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        }, 
        {   
            name: "cafe2",
            serviceTypeId: type3.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        },
        {   
            name: "club",
            serviceTypeId: type4.id,
            address: "via blabla",
            info: "open everyday from 8pm to 3am",
        
        }, 
        {   
            name: "cinema",
            serviceTypeId: type4.id,
            address: "via blabla",
            info: "lunedì: 16-22, martedì, mercoledì, giovedì, venerdì: 10-00, sabato e domenica chiusi",
        
        },
    ]
    //with create is just one element
    //with bulkCreate is moreElements like arrays
    await models.Cat.bulkCreate(catList)
    await models.PointOfInterest.bulkCreate(poiList)
    await models.SingleService.bulkCreate(singleServiceList)

}