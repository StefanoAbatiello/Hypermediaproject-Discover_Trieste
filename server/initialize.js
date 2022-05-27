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
            img: "https://www.floreale.org/wp-content/uploads/2016/09/san-pietro1.jpg",
            itineraryId: itinerary0.id,
            description: "Nulla da aggiungere visto che è considerata come Meraviglia Del Mondo"
        },
        {
            name: "Palazzo dei Priori",
            img: "https://www.secretumbria.it/wp-content/uploads/2021/05/palazzo-dei-priori-perugia-facciata.jpg",
            itineraryId: itinerary2.id,
            description: "The Palazzo dei Priori or comunale is one of the best examples in Italy of public Palace of the età comunale (XI century)."
        },
        {
            name: "Rocca Paolina",
            img: "https://api.viaggiart.com/resources/images/xl/list/image/173697-27ee75ca22b6ac81ad2a7c8215f76777-1581325965.jpg",
            itineraryId: itinerary1.id,
            description: "Questa è una descrizione per il punto di interesse"
        },
        {
            name: "Ipogeo dei Volumni",
            img: "https://www.viaggiatricecuriosa.it/wp-content/uploads/2018/05/Ipogeo-volumni-urna-Arnth-velimnas-aules.jpg",
            itineraryId: itinerary1.id,
            description: "Questa è una descrizione p"
        },
        {
            name: "Pozzo etrusco",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Pozzo_etrusco-_passerella.jpg",
            itineraryId: itinerary1.id,
            description: "Questa è una descrizione per pozzo etrusco"
        },
        {
            name: "Porta Santa Susanna",
            img: " https://www.visitaperugia.it/wp-content/uploads/2019/02/03-03-10-01-porta-trasimena.jpg",
            itineraryId: itinerary2.id,
            description: "Questa porta è dedicata ad una santa"
        },
        {
            name: "Sala del Conclave",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/17/5a/f8/81/img-20190425-110746-largejpg.jpg",
            itineraryId: itinerary1.id,
            description: "Questa è una descrizione per sala del conclave"
        },
        {
            name: "Fontana Maggiore",
            img: "https://www.turismo.it/typo3temp/pics/fcb41a0141.jpg",
            itineraryId: itinerary2.id,
            description: "Fontana maggiore, la più bella del rione!"
        },
        {
            name: "Porta Sole",
            img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Arco_di_via_Bontempi_Perugia.jpg",
            itineraryId: itinerary2.id,
            description: "Questa porta perugina è stata citata nella DIvina Commedia dal sommo maestro.."
        },
        {
            name: "Cattedrale di San Lorenzo",
            img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Catedral_de_perugia.jpg",
            itineraryId: itinerary0.id,
            description: "Questa è una cattedrale spoglia e rudimentale nel centro di Perugia"
        },
        {
            name: "Arco Etrusco",
            img: "https://www.exploring-umbria.com/wp-content/uploads/2019/05/PERUGIA-ARCO-ETRUSCO.jpeg",
            itineraryId: itinerary0.id,
            description: "Arco bianco che più bianco non c'è!"
        },
        {
            name: "Porta Crucia",
            img: " https://mapio.net/images-p/130075040.jpg",
            itineraryId: itinerary0.id,
            description: "Arco bianco che più bianco non c'è!"
        },
        {
            name: "San Francesco al Prato",
            img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/09a.sfrancesco.JPG",
            itineraryId: itinerary0.id,
            description: "Famosissima chiesa di Perugia"
        },
        {
            name: "Porta Marzia",
            img: "https://www.ansa.it/webimages/img_700/2017/3/8/ee6ff0ce5f491b093cd77e258abf3b54.jpg",
            itineraryId: itinerary2.id,
            description: "Famosissima porta di Perugia"
        },
        {
            name: "Chiesa di San Ercolano",
            img: "https://www.floreale.org/wp-content/uploads/2016/09/SantErcolano1.jpg",
            itineraryId: itinerary0.id,
            description: "Famosissima chiesa di Perugia"
        },
        {
            name: "Acquedotto medievale",
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Acquedotto_medievale_%28Perugia%29.jpg",
            itineraryId: itinerary2.id,
            description: "Acquedotto etrusco di Perugia"
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
    const poi9 = await models.PointOfInterest.create(poiList[9])
    const poi10 = await models.PointOfInterest.create(poiList[10])
    const poi11 = await models.PointOfInterest.create(poiList[11])
    const poi12 = await models.PointOfInterest.create(poiList[12])
    const poi13 = await models.PointOfInterest.create(poiList[13])
    const poi14 = await models.PointOfInterest.create(poiList[14])
    const poi15 = await models.PointOfInterest.create(poiList[15])
    const eventList = [
        {
            name: "Umbria Jazz",
            description: "Details about concert",
            img: "https://www.umbriajazz.it/wp-content/uploads/2020/04/Umbria-Jazz-ArenaS.Giuliana-Varie-07140780.jpg",
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId:poi0.id,
        },
        
        {
            name: "Eurochocolate",
            description: "Details about marathon",
            img: "https://www.eurochocolate.com/perugia2022/assets/1920_perugia2022.jpg",
            season: "Winter",  
            date: "dal 10/7 al 21/7",
            poiId:poi0.id,
        },
        {
            name: "International Journalism Festival",
            description: "Details about ",
            img: "https://www.visitaumbria.com/wp-content/uploads/2021/06/Internetional-Journalism-Festival-1.jpg",
            season: "Winter",  
            date: "dal 10/7 al 21/7",
            poiId:poi0.id,
        },
        {
            name: "Urban Night Trail",
            description: "Corsa podistica storica di Perugia",
            img: "https://citynews-perugiatoday.stgy.ovh/~media/horizontal-mid/62962969971768/perugia-urban-night-trail_repertorio-2.jpeg",
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId:poi3.id,
        },
        {
            name: "Musica per i borghi",
            description: "Details about concert",
            img: "https://www.musicaperiborghi.it/wp-content/uploads/2022/05/Elisa-Marsciano-18-Luglio.jpg",
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId:poi3.id,
        },
        {
            name: "MercaTezio",
            description: "Mercato equosolidale che si svolge a Perugia in estate ",
            img: "https://cdn.stayhappening.com/events5/banners/95788b32581d804b900e3fbb31ec1e5789c34a83de757e6b9a010628e15dad90-rimg-w526-h264-gmir.jpg?v=1620422073",
            season: "Summer",  
            date: "dal 10/7 al 21/7",
            poiId:poi0.id,
        },
        {
            name: "Umbria che Spacca",
            description: "Details about ",
            img: "https://perugiacomunica.comune.perugia.it/wp-content/uploads/2022/02/UCS22Stampa.jpg",
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId:poi1.id,
        },   
        {
            name: "Festa di Sant'Antonio Abate",
            description: "Details about this event ",
            img: "https://www.umbriatourism.it/documents/20126/4764779/imgSantantonioAbate2022-1024x1024.jpg/1d131ac2-66a9-74bc-a2ff-3d51387a750f",
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId:poi1.id,
        }, 
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
            description: "If you don't know where to go for breakfast or a simple break, here you can find some good cafes with delicious pastries and drinks",
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
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            
        }, 
        {   
            name: "farmacia2",
            serviceTypeId: type0.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        }, 
        {   
            name: "hospital",
            serviceTypeId: type0.id,
            address: "via blabla",
            info: "For emergencies the number to call is 112",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            
        },
        {   
            name: "hotel1",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "reception open everyday  from 8am to 11pm",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
           
        }, 
        {   
            name: "hotel2",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "reception open everyday  from 8am to 11pm",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
          
        }, 
        {   
            name: "hotel3",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "reception open everyday  from 8am to 11pm",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            
        },
        {   
            name: "restaurant1",
            serviceTypeId: type2.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
           
        }, 
        {   
            name: "restaurant2",
            serviceTypeId: type2.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
          
        },
        {   
            name: "cafe1",
            serviceTypeId: type3.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
           
        }, 
        {   
            name: "cafe2",
            serviceTypeId: type3.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
           
        },
        {   
            name: "club",
            serviceTypeId: type4.id,
            address: "via blabla",
            info: "open everyday from 8pm to 3am",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
           
        }, 
        {   
            name: "cinema",
            serviceTypeId: type4.id,
            address: "via blabla",
            info: "lunedì: 16-22, martedì, mercoledì, giovedì, venerdì: 10-00, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
          
        },
    ]
    //with create is just one element
    //with bulkCreate is moreElements like arrays
    await models.Event.bulkCreate(eventList)
    //await models.PointOfInterest.bulkCreate(poiList)
    await models.SingleService.bulkCreate(singleServiceList)
}