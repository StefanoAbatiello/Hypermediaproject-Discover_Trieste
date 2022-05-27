//Here we put all the datas, according to the structure defined in api.js
export default async (models) => { 
    const itineraryList = [
        {
            name: "Tour tra le chiese perugine",
            img: ["https://www.viedellabellezza.it/wp-content/uploads/2018/03/cropped-head-1024.jpg","https://tremetrisoprailcielo.net/wp-content/uploads/2019/02/piazza-iv-novembre-perugia-1.jpg"],
            description: "Viene a scoprire le chiese della città"
        },
        {
            name: "La Perugia sotterranea",
            img: ["https://www.vaticannews.va/content/dam/vaticannews/multimedia/2020/07/15/MG_9230-1024x682aem.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1000.563.jpeg","https://tremetrisoprailcielo.net/wp-content/uploads/2019/02/piazza-iv-novembre-perugia-1.jpg"],
            description: "La città eterna ospita tra i piu importanti reperti del patrimonio dell'umanità"
        },
        {
            name: "Scopri il cuore di Perugia",
            img: ["https://tremetrisoprailcielo.net/wp-content/uploads/2019/02/piazza-iv-novembre-perugia-1.jpg","https://tremetrisoprailcielo.net/wp-content/uploads/2019/02/piazza-iv-novembre-perugia-1.jpg"],
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
            img: "https://www.turismo.it/typo3temp/pics/814ae704a1.jpg",
            itineraryId: itinerary1.id,
            description: "Questa è una descrizione per il punto di interesse"
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
            name: "Ipogeo dei Volumni",
            img: "https://www.musei.umbria.beniculturali.it/wp-content/uploads/2018/04/fig-7.jpg",
            itineraryId: itinerary1.id,
            description: "Questa è una descrizione p"
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
    const eventList = [
        {
            name: "Umbria Jazz",
            description: "Details about concert",
            img: "https://www.umbriajazz.it/wp-content/uploads/2020/04/Umbria-Jazz-ArenaS.Giuliana-Varie-07140780.jpg",
            season: "Winter",
            date: " from a to b ajbbali aufbslhbv iòsebflsjbdpi u Hiebfipubd òskejbfiu kebfiuag ib from a to b ajbbali aufbslhbv iòsebflsjbdpi u Hiebfipubd òskejbfiu kebfiuag ib from a to b ajbbali aufbslhbv iòsebflsjbdpi u Hiebfipubd òskejbfiu kebfiuag ib from a to b ajbbali aufbslhbv iòsebflsjbdpi u Hiebfipubd òskejbfiu kebfiuag ib from a to b ajbbali aufbslhbv iòsebflsjbdpi u Hiebfipubd òskejbfiu kebfiuag ib",
            poiId:poi0.id,
        },
        {
            name: "Eurochocolate",
            description: "Details about marathon",
            img: "https://www.eurochocolate.com/perugia2022/assets/1920_perugia2022.jpg",
            season: "Winter",  
            date: " from ac to b",
            poiId:poi0.id,
        },
        {
            name: "International Journalism Festival",
            description: "Details about ",
            img: "https://www.visitaumbria.com/wp-content/uploads/2021/06/Internetional-Journalism-Festival-1.jpg",
            season: "Winter",  
            date: " from afg to b",
            poiId:poi0.id,
        },
        {
            name: "MercaTezio",
            description: "Mercato equosolidale che si svolge a Perugia in estate ",
            img: "https://cdn.stayhappening.com/events5/banners/95788b32581d804b900e3fbb31ec1e5789c34a83de757e6b9a010628e15dad90-rimg-w526-h264-gmir.jpg?v=1620422073",
            season: "Summer",  
            date: " from agtd to b",
            poiId:poi0.id,
        },
        {
            name: "Umbria che Spacca",
            description: "Details about ",
            img: "https://perugiacomunica.comune.perugia.it/wp-content/uploads/2022/02/UCS22Stampa.jpg",
            season: "Summer",
            date: " from a to bfghgfed",
            poiId:poi1.id,
        },   
        {
            name: "Festa di Sant'Antonio Abate",
            description: "Details about this event ",
            img: "https://www.umbriatourism.it/documents/20126/4764779/imgSantantonioAbate2022-1024x1024.jpg/1d131ac2-66a9-74bc-a2ff-3d51387a750f",
            season: "Summer",
            date: " from a to bfffff",
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
            //img: "https://latuaattivita.it/adm/Images/contents/large/ann_vpr266_05.jpg",
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
            mon:"8-12",
            tue:"blabla",
            wed:"bohboh",
            thur:"yyyyy",
            fri:"ueee",
            sat:"ciao",
            sun:"8-12",
        }, 
        {   
            name: "farmacia2",
            serviceTypeId: type0.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        }, 
        {   
            name: "hospital",
            serviceTypeId: type0.id,
            address: "via blabla",
            info: "For emergencies the number to call is 112",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        },
        {   
            name: "hotel1",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "reception open everyday  from 8am to 11pm",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        }, 
        {   
            name: "hotel2",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "reception open everyday  from 8am to 11pm",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        }, 
        {   
            name: "hotel3",
            serviceTypeId: type1.id,
            address: "via blabla",
            info: "reception open everyday  from 8am to 11pm",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        },
        {   
            name: "restaurant1",
            serviceTypeId: type2.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        }, 
        {   
            name: "restaurant2",
            serviceTypeId: type2.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        },
        {   
            name: "cafe1",
            serviceTypeId: type3.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        }, 
        {   
            name: "cafe2",
            serviceTypeId: type3.id,
            address: "via blabla",
            info: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        },
        {   
            name: "club",
            serviceTypeId: type4.id,
            address: "via blabla",
            info: "open everyday from 8pm to 3am",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        }, 
        {   
            name: "cinema",
            serviceTypeId: type4.id,
            address: "via blabla",
            info: "lunedì: 16-22, martedì, mercoledì, giovedì, venerdì: 10-00, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",
            mon:"8-12",
            tue:"8-12",
            wed:"8-12",
            thur:"8-12",
            fri:"8-12",
            sat:"8-12",
            sun:"8-12",
        },
    ]
    //with create is just one element
    //with bulkCreate is moreElements like arrays
    await models.Event.bulkCreate(eventList)
    //await models.PointOfInterest.bulkCreate(poiList)
    await models.SingleService.bulkCreate(singleServiceList)
}