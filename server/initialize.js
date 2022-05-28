//Here we put all the datas, according to the structure defined in api.js
export default async (models) => {
    const itineraryList = [
        {
            name: "Tour tra le chiese perugine",
            img: ["https://www.viedellabellezza.it/wp-content/uploads/2018/03/cropped-head-1024.jpg","https://www.secretumbria.it/wp-content/uploads/2021/03/cattedrale-san-lorenzo-perugia-copertina.jpg","https://2.bp.blogspot.com/-4AOJUCjx3Ys/T4P_5m8D27I/AAAAAAAACic/aEYGjaGvdYQ/s1600/389768_313488005383472_100001668244914_730968_966872066_n.jpg"],
            description: "Viene a scoprire le chiese della città"
        },
        {
             name: "La Perugia sotterranea",
             img: ["https://www.vaticannews.va/content/dam/vaticannews/multimedia/2020/07/15/MG_9230-1024x682aem.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1000.563.jpeg","https://www.touringclub.it/sites/default/files/styles/gallery_full/public/immagini_georiferite/perugia_roccapaolina.jpg?itok=tMj921PG","https://culturefor.files.wordpress.com/2019/02/img_7357.jpg"],
             description: "Viene a scoprire la perugia sotterranea!"
        },
        {
            name: "Scopri il cuore di Perugia",
            img: ["https://tremetrisoprailcielo.net/wp-content/uploads/2019/02/piazza-iv-novembre-perugia-1.jpg","https://www.umbriajournal.com/wp-content/uploads/2019/11/via-appia-centro-storico.jpg","https://www.stellaperugia.it/wp-content/uploads/2022/02/Articity-artigiani-centro-Perugia-1184x592-1-e1644497017360.jpg"],
            description: "Il fascino dell'Umbria racchiuso in una sola città"
        },
    ]
    const itinerary0 = await models.Itinerary.create(itineraryList[0])
    const itinerary1 = await models.Itinerary.create(itineraryList[1])
    const itinerary2 = await models.Itinerary.create(itineraryList[2])
    const poiList = [
        {
            name: "Abbazia di San Pietro",
            img: "pois/abbaziaSanPietro.jpeg",
            itineraryId: itinerary0.id,
            description: "Nulla da aggiungere visto che è considerata come Meraviglia Del Mondo"
        },
        {
            name: "Palazzo dei Priori",
            img: "pois/palazzoPriori.jpeg",
            itineraryId: itinerary2.id,
            description: "The Palazzo dei Priori or comunale is one of the best examples in Italy of public Palace of the età comunale (XI century)."
        },
        {
            name: "Rocca Paolina",
            img: "pois/roccaPaolina.jpeg",
            itineraryId: itinerary1.id,
            description: "Questa è una descrizione per il punto di interesse"
        },
        {
            name: "Ipogeo dei Volumni",
            img: "pois/ipogeoDeiVolumni.jpeg",
            itineraryId: itinerary1.id,
            description: "Questa è una descrizione p"
        },
        {
            name: "Pozzo etrusco",
            img: "pois/pozzoEtrusco.jpeg",
            itineraryId: itinerary1.id,
            description: "Questa è una descrizione per pozzo etrusco"
        },
        {
            name: "Porta Santa Susanna",
            img: "pois/portaSusanna.jpeg",
            itineraryId: itinerary2.id,
            description: "Questa porta è dedicata ad una santa"
        },
        {
            name: "Fontana Maggiore",
            img: "pois/fontanaMaggiore.jpeg",
            itineraryId: itinerary2.id,
            description: "Fontana maggiore, la più bella del rione!"
        },
        {
            name: "Porta Sole",
            img: "pois/portaSole.jpeg",
            itineraryId: itinerary2.id,
            description: "Questa porta perugina è stata citata nella DIvina Commedia dal sommo maestro.."
        },
        {
            name: "Cattedrale di San Lorenzo",
            img: "pois/cattedraleSanLorenzo.jpeg",
            itineraryId: itinerary0.id,
            description: "Questa è una cattedrale spoglia e rudimentale nel centro di Perugia"
        },
        {
            name: "Arco Etrusco",
            img: "pois/arcoEtrusco.jpeg",
            itineraryId: itinerary0.id,
            description: "Arco bianco che più bianco non c'è!"
        },
        {
            name: "Porta Crucia",
            img: "pois/portaCrucia.jpeg",
            itineraryId: itinerary0.id,
            description: "Arco bianco che più bianco non c'è!"
        },
        {
            name: "San Francesco al Prato",
            img: "pois/sanFrancesco.jpeg",
            itineraryId: itinerary0.id,
            description: "Famosissima chiesa di Perugia"
        },
        {
            name: "Porta Marzia",
            img: "pois/portaMarzia.jpeg",
            itineraryId: itinerary2.id,
            description: "Famosissima porta di Perugia"
        },
        {
            name: "Chiesa di San Ercolano",
            img: "pois/sanErcolano.jpeg",
            itineraryId: itinerary0.id,
            description: "Famosissima chiesa di Perugia"
        },
        {
            name: "Acquedotto medievale",
            img: "pois/acquedottoMedievale.jpeg",
            itineraryId: itinerary2.id,
            description: "Acquedotto etrusco di Perugia"
        },
         // {
        //     name: "Sala del Conclave",
        //     img: "https://media-cdn.tripadvisor.com/media/photo-s/17/5a/f8/81/img-20190425-110746-largejpg.jpg",
        //     itineraryId: itinerary1.id,
        //     description: "Questa è una descrizione per sala del conclave"
        // },
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
    const poi9 = await models.PointOfInterest.create(poiList[9])
    const poi10 = await models.PointOfInterest.create(poiList[10])
    const poi11 = await models.PointOfInterest.create(poiList[11])
    const poi12 = await models.PointOfInterest.create(poiList[12])
    const poi13 = await models.PointOfInterest.create(poiList[13])
    const poi14 = await models.PointOfInterest.create(poiList[14])
    const eventList = [
         {
             name: "Umbria Jazz",
             description: "Details about concert",
             img: "events/umbriaJazz.jpeg",
             season: "Winter",
             date: "dal 10/7 al 21/7",
             poiId:poi0.id,
         },
        {
             name: "Eurochocolate",
             description: "Details about marathon",
             img: "events/eurochocolate.jpeg",
             season: "Winter",
             date: "dal 10/7 al 21/7",
             poiId:poi0.id,
         },
         {
             name: "International Journalism Festival",
             description: "Details about ",
             img: "events/ijf22.jpeg",
             season: "Winter",
             date: "dal 10/7 al 21/7",
             poiId:poi0.id,
         },
         {
             name: "Festa di San Costanzo",
             description: "Corsa podistica storica di Perugia",
             img: "events/sanCostanzo.jpeg",
             season: "Winter",
             date: "dal 10/7 al 21/7",
             poiId:poi3.id,
         },
         {
             name: "Musica per i borghi",
             description: "Details about concert",
             img: "events/musicaBorghi.jpeg",
             season: "Summer",
             date: "dal 10/7 al 21/7",
             poiId:poi3.id,
         },
        {
            name: "Perugia Flowers Show",
            description: "alla ricerca dei fiori ",
            img: "events/flowerShow.jpeg",
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId:poi0.id,
        },
        {
            name: "Umbria che Spacca",
            description: "Details about ",
            img: "events/umbriaCheSpacca.jpeg",
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId:poi1.id,
        },
        {
            name: "Rally dell'Umbria",
            description: "Details about this event ",
            img: "events/rallyUmbria.jpeg",
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId:poi1.id,
        },
    ]
        const servicesList = [
        {
            name: "Medical services",
            img: "services/medical.jpeg",
            description: "Here you can find all the pharmacies, hospital and clinics in the city ",
        },
        {
            name: "Hotel and B&B",
            img: "services/hotels.jpeg",
            description: "Here you can find the best hotels and B&Bs that this city offers!",

        },
        {
            name: "Restaurants",
            img: "services/restaurants.jpeg",
            description: "Here you can find the best restaurants to try during your stay",
        },
         {
             name: "Cafes",
             img: "services/cafes.jpeg",
             description: "If you don't know where to go for breakfast or a simple break, here you can find some good cafes with delicious pastries and drinks",
        },
        {
            name: "Entertainment",
            img: "services/entertainment.jpeg",
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
            description:"",
            time: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "farmacia2",
            serviceTypeId: type0.id,
            address: "via blabla",
            description:"",
            time: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "hospital",
            serviceTypeId: type0.id,
            address: "via blabla",
            description:"",
            time: "For emergencies the number to call is 112",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "hotel1",
            serviceTypeId: type1.id,
            address: "via blabla",
            description:"",
            time: "reception open everyday  from 8am to 11pm",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "hotel2",
            serviceTypeId: type1.id,
            address: "via blabla",
            description:"",
            time: "reception open everyday  from 8am to 11pm",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "hotel3",
            serviceTypeId: type1.id,
            address: "via blabla",
            description:"",
            time: "reception open everyday  from 8am to 11pm",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "restaurant1",
            serviceTypeId: type2.id,
            address: "via blabla",
            description:"",
            time: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "restaurant2",
            serviceTypeId: type2.id,
            address: "via blabla",
            description:"",
            time: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "cafe1",
            serviceTypeId: type3.id,
            address: "via blabla",
            description:"",
            time: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "cafe2",
            serviceTypeId: type3.id,
            address: "via blabla",
            description:"",
            time: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "club",
            serviceTypeId: type4.id,
            address: "via blabla",
            description:"",
            time: "open everyday from 8pm to 3am",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "cinema",
            serviceTypeId: type4.id,
            address: "via blabla",
            description:"",
            time: "lunedì: 16-22, martedì, mercoledì, giovedì, venerdì: 10-00, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
    ]
    //with create is just one element
    //with bulkCreate is moreElements like arrays
    await models.Event.bulkCreate(eventList)
    //await models.PointOfInterest.bulkCreate(poiList)
    await models.SingleService.bulkCreate(singleServiceList)
}