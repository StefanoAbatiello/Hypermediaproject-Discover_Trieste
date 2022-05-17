//Here we put all the datas, according to the structure defined in api.js
export default async (models) => { 
    const itineraryList = [
        {
            name: "Venezia",
            img: "https://www.dire.it/wp-content/uploads/2020/06/palazzi-colorati_casa_case_Sigma-Coatings-5-scaled.jpg",
            description: "Viene a scoprire la città sull'acqua"
        },
        {
            name: "Roma",
            img: "https://st.depositphotos.com/1006880/5055/i/600/depositphotos_50556395-stock-photo-modern-city-buildings-in-the.jpg",
            description: "La città eterna ospita tra i piu importanti reperti del patrimonio dell'umanità"
        },
        {
            name: "Perugia",
            img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Perugia_panoramic.jpg",
            description: "Il fascino dell'Umbria racchiuso in una sola città"
        },
    ]
    const itinerary0 = await models.Itinerary.create(itineraryList[0])
    const itinerary1 = await models.Itinerary.create(itineraryList[1])
    const itinerary2 = await models.Itinerary.create(itineraryList[2])
    const poiList = [
        {
            name: "Palazzo dei Priori",
            img: "https://www.secretumbria.it/wp-content/uploads/2021/05/palazzo-dei-priori-perugia-facciata.jpg",
            itineraryId: itinerary2.id,
            description: "Questa è una descrizione per palazzo dei priori"
        },
        {
            name: "Fontana Maggiore",
            img: "https://online.scuola.zanichelli.it/artemondo-blog/wp-content/uploads/2018/08/perugia-3.jpg",
            itineraryId: itinerary2.id,
            description: "Questa è una descrizione per fontana maggiore"
        },
        {
            name: "Pozzo etrusco",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Pozzo_etrusco-_passerella.jpg",
            itineraryId: itinerary2.id,
            description: "Questa è una descrizione per pozzo etrusco"
        },
        {
            name: "Chiesa di San Michele Arcangelo",
            img: "https://www.floreale.org/wp-content/uploads/2016/10/chiesa-di-san-michele-arcangelo-perugia.jpg",
            itineraryId: itinerary2.id,
            description: "Questa è una descrizione per fontana maggiore"
        },
        {
            name: "Abbazia San Pietro",
            img: "https://www.fondazioneagraria.it/wp-content/uploads/2015/07/san-pietro.jpg",
            itineraryId: itinerary2.id,
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
    const poi0 = await models.PointOfInterest.create(poiList[0])
    const poi1 = await models.PointOfInterest.create(poiList[1])
    const poi2 = await models.PointOfInterest.create(poiList[2])
    const poi3 = await models.PointOfInterest.create(poiList[3])
    const poi4 = await models.PointOfInterest.create(poiList[4])
    const poi5 = await models.PointOfInterest.create(poiList[5])
    const poi6 = await models.PointOfInterest.create(poiList[6])
    const poi7 = await models.PointOfInterest.create(poiList[7])
    const poi8 = await models.PointOfInterest.create(poiList[8])
    const eventList = [
        {
            name: "concert",
            description: "Details about concert",
            img: "https://spazio13.org/wp-content/uploads/2020/06/concerti-milano-1200x900.jpg",
            season: "winter",
            poiId:poi0.id,
        },
        {
            name: "marathon",
            description: "Details about marathon",
            img: "http://mezzamaratonascandicci.it/wp-content/uploads/2020/01/mezza-maratona-partenza.jpg",
            season: "winter",  
            poiId:poi0.id,
        },
        {
            name: "sagra della salsiccia",
            description: "Details about sagra della salsiccia",
            img: "https://searoundpress.com/wp-content/uploads/2016/09/Searound_Eventi_Salsiccia-e1477306494235.jpg",
            season: "summer",
            poiId:poi1.id,
        }    
    ]
        const servicesList = [
        {
            name: "Medical services",
            img: "https://www.assidai.it/wp-content/uploads/2019/05/diritto-salute-italia.jpg",
            description: "Here you can find all the pharmacies, hospital and clinics in the city ",
        },    
        {
            name: "Hotel and B&B",
            img: "https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850__480.jpg",
            description: "Here you can find the best hotels and B&Bs that this city offers!",
            
        },
        {
            name: "Restaurants",
            img: "https://zipinventory.com/assets/images/topiccluster/10-restaurant-service-models-1607720498-5934-800x400.png",
            description: "Here you can find the best restaurants to try during your stay",
        }, 
        {
            name: "Cafes",
            img: "https://saveatrain-12e85.kxcdn.com/blog/wp-content/uploads/2020/01/bar-vom-eingang-aus.jpg",
            description: "if you don't know where to go for breakfast or a simple break, here you can find some good cafes with delicious pastries and drinks",
        }, 
        {
            name: "Entertainment ",
            img: "https://eventcheckbox.com/wp-content/uploads/2017/10/entertainment.jpg",
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
            name: "farmacia3",
            serviceTypeId: type0.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        },
        {   
            name: "hotel1",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        }, 
        {   
            name: "hotel2",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        }, 
        {   
            name: "hotel3",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
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
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        }, 
        {   
            name: "cinema",
            serviceTypeId: type4.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
        
        },
    ]
    //with create is just one element
    //with bulkCreate is moreElements like arrays
    await models.Event.bulkCreate(eventList)
    //await models.PointOfInterest.bulkCreate(poiList)
    await models.SingleService.bulkCreate(singleServiceList)
}