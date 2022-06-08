//Here we put all the datas, according to the structure defined in api.js
export default async (models) => {
    const itineraryList = [
        {
            name: "Liberty Tour",
            img: ["itineraries/churches/sanMichele.jpeg", "itineraries/churches/sanBernardino.jpeg", "itineraries/churches/insideChurch.jpeg"],
            description: "Viene a scoprire i palazzi in stile liberty della città"
        },
        {
            name: "Trip in roman archeology",
            img: ["itineraries/undergound/undPer1.jpeg", "itineraries/undergound/undPer2.jpeg", "itineraries/undergound/undPer3.jpeg"],
            description: "Viene a scoprire la perugia sotterranea!"
        },
        {
            name: "Discover the most important chuches",
            img: ["itineraries/heart/squarePer.jpeg", "itineraries/heart/nightHeart.jpeg", "itineraries/heart/skyView.jpeg"],
            description: "Le chiese più belle di tutta Trieste"
        },
    ]
    const itinerary0 = await models.Itinerary.create(itineraryList[0])
    const itinerary1 = await models.Itinerary.create(itineraryList[1])
    const itinerary2 = await models.Itinerary.create(itineraryList[2])
    const poiList = [
        {
            name: "Casa De Stabile",
            img: ["pois/liberty/casaDeStabile.jpeg","pois/liberty/casaDeStabile3.jpeg","pois/liberty/casaDeStabileOld.jpeg"],
            itineraryId: itinerary0.id,
            description: "Nulla da aggiungere visto che è considerata come Meraviglia Del Mondo"
        },
        {
            name: "Banca di Praga",
            img: ["pois/liberty/bancaPraga.jpeg","pois/liberty/banca2.jpeg","pois/liberty/banca3.jpeg"],
            itineraryId: itinerary0.id,
            description: "questa è la descrizion e di un punto di interesse"
        },
        {
            name: "Casa Terni",
            img: ["pois/liberty/casaTerni.jpeg","pois/liberty/casaTerni2.jpeg","pois/liberty/casaTerni3.jpeg"],
            itineraryId: itinerary0.id,
            description: "Questa è una descrizione per il punto di interesse"
        },
        {
            name: "Palazzo Vivanti-Gilberti",
            img: ["pois/liberty/palazzoVivanti.jpeg","pois/liberty/palazzoVivanti2.jpeg","pois/liberty/palazzoVivanti3.jpeg"],
            itineraryId: itinerary0.id,
            description: "Questa è una descrizione p"
        },
        {
            name: "Salone Degli Incanti",
            img: ["pois/liberty/saloneIncanti.jpeg","pois/liberty/salone2.jpeg","pois/liberty/salone3.jpeg"],
            itineraryId: itinerary0.id,
            description: "Questa è una descrizione per pozzo etrusco"
        },
        {
            name: "Antiquarium",
            img: ["pois/roman/antiquarium.jpeg","pois/roman/antiquarium2.jpeg","pois/roman/antiquarium3.jpeg"],
            itineraryId: itinerary1.id,
            description: "Questa porta è dedicata ad una santa"
        },
        {
            name: "Arco Riccardo",
            img: ["pois/roman/arcoRiccardo.jpeg","pois/roman/arco2.jpeg","pois/roman/arco3.jpeg"],
            itineraryId: itinerary1.id,
            description: "Fontana maggiore, la più bella del rione!"
        },
        {
            name: "Castello San Giusto",
            img: ["pois/roman/castelloGiusto.jpeg","pois/roman/castle2.jpeg","pois/roman/castle3.jpeg"],
            itineraryId: itinerary1.id,
            description: "Questa porta perugina è stata citata nella DIvina Commedia dal sommo maestro.."
        },
        {
            name: "Lapidario Tergestino",
            img: ["pois/roman/lapidarioTergestino.jpeg","pois/roman/lapidario2.jpeg","pois/roman/lapidario3.jpeg"],
            itineraryId: itinerary1.id,
            description: "Questa è una cattedrale spoglia e rudimentale nel centro di Perugia"
        },
        {
            name: "Teatro Romano",
            img: ["pois/roman/teatro.jpeg","pois/roman/teatro2.jpeg","pois/roman/teatro3.jpeg"],
            itineraryId: itinerary1.id,
            description: "Arco bianco che più bianco non c'è!"
        },
        {
            name: "Cattedrale San Giusto",
            img: ["pois/churches/sanGiusto.jpeg","pois/churches/insideSanGiusto.jpeg","pois/churches/sanGiusto2.jpeg"],
            itineraryId: itinerary2.id,
            description: "Arco bianco che più bianco non c'è!"
        },
        {
            name: "Sinagoga di Trieste",
            img: ["pois/churches/sinagoga.jpeg","pois/churches/insideSinagoga.jpeg","pois/churches/sinagoga2.jpeg"],
            itineraryId: itinerary2.id,
            description: "Famosissima porta di Perugia"
        },
        {
            name: "Chiesa Ortodossa di San Spiridione",
            img: ["pois/churches/chiesaOrtodossa.jpeg","pois/churches/ortodossa2.jpeg","pois/churches/ortodossa3.jpeg"],
            itineraryId: itinerary2.id,
            description: "Famosissima chiesa di Perugia"
        },
        {
            name: "Chiesa di Nicolò Dei Greci",
            img: ["pois/churches/nicoloGreci.jpeg","pois/churches/insideNicoloGreci.jpeg","pois/churches/nicoloGreci2.jpeg"],
            itineraryId: itinerary2.id,
            description: "Acquedotto etrusco di Perugia"
        },
        {
             name: "Chiesa della Beata Vergine",
             img: ["pois/churches/beataVergine.png","pois/churches/insideBeataVergine.jpeg","pois/churches/beataVergine2.png"],
             itineraryId: itinerary2.id,
             description: "Famosissima chiesa di Perugia"
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
            img: ["events/umbriaJazz.jpeg","events/umbriaJazz.jpeg","events/umbriaJazz.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi0.id,
            accessInfo: "col-sm-2 m-2",
            timeInfo: "even",
            directions: "event.name",
            prices: "event.img",
        },
        {
            name: "Eurochocolate",
            description: "Details about marathon",
            img: ["events/eurochocolate.jpeg","events/eurochocolate.jpeg","events/eurochocolate.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi0.id,
            accessInfo: "col-sm-2 m-2",
            timeInfo: "even",
            directions: "event.name",
            prices: "event.img",
        },
        {
            name: "International Journalism Festival",
            description: "Details about ",
            img: ["events/ijf22.jpeg","events/ijf22.jpeg","events/ijf22.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi0.id,
            accessInfo: "col-sm-2 m-2",
            timeInfo: "even",
            directions: "event.name",
            prices: "event.img",
        },
        {
            name: "Festa di San Costanzo",
            description: "Corsa podistica storica di Perugia",
            img: ["events/sanCostanzo.jpeg","events/sanCostanzo.jpeg","events/sanCostanzo.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi3.id,
            accessInfo: "col-sm-2 m-2",
            timeInfo: "even",
            directions: "event.name",
            prices: "event.img",
        },
        {
            name: "Musica per i borghi",
            description: "Details about concert",
            img: ["events/musicaBorghi.jpeg","events/musicaBorghi.jpeg","events/musicaBorghi.jpeg"],
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId: poi3.id,
            accessInfo: "col-sm-2 m-2",
            timeInfo: "even",
            directions: "event.name",
            prices: "event.img",
        },
        {
            name: "Perugia Flowers Show",
            description: "alla ricerca dei fiori ",
            img: ["events/flowerShow.jpeg","events/flowerShow.jpeg","events/flowerShow.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi0.id,
            accessInfo: "col-sm-2 m-2",
            timeInfo: "even",
            directions: "event.name",
            prices: "event.img",
        },
        {
            name: "Umbria che Spacca",
            description: "Details about ",
            img: ["events/umbriaCheSpacca.jpeg","events/umbriaCheSpacca.jpeg","events/umbriaCheSpacca.jpeg"],
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId: poi1.id,
            accessInfo: "col-sm-2 m-2",
            timeInfo: "even",
            directions: "event.name",
            prices: "event.img",
        },
        {
            name: "Rally dell'Umbria",
            description: "Details about this event ",
            img: ["events/rallyUmbria.jpeg","events/rallyUmbria.jpeg","events/rallyUmbria.jpeg"],
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId: poi1.id,
            accessInfo: "col-sm-2 m-2",
            timeInfo: "even",
            directions: "event.name",
            prices: "event.img",
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
            description: "",
            time: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "services/medicals/ospedale.jpeg",

        },
        {
            name: "farmacia2",
            serviceTypeId: type0.id,
            address: "via blabla",
            description: "",
            time: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "services/medicals/ospedale.jpeg",

        },
        {
            name: "Ospedale Santa Maria della Misericordia",
            serviceTypeId: type0.id,
            address: "S. Andrea delle Fratte",
            description: "L'Azienda ospedalieara di Perugia - Ospedale 'Santa Maria della Misericordia' è l'ospedale unico e policlinico universitario di Perugia.",
            time: "la segreteria degli ambulatori è aperta dal lunedì al venerdì dalle 8,00 alle 13,00, il martedì e giovedì pomeriggio dalle 14,30 alle 17,00; ambulatori chiusi sabato e giorni festivi",
            img: "services/medicals/ospedale.jpeg",

        },
        {
            name: "Istituto Clinico Porta Sole",
            serviceTypeId: type0.id,
            address: "Via del Giochetto, 49",
            description: "Struttura sanitaria accreditata con la Regione Umbria per le seguenti discipline specialistiche: CHIRURGIA GENERALE, MEDICINA GENERALE, ORTOPEDIA, GINECOLOGIA, OTORINOLARINGOIATRIA, OCULISTICA.",
            // time: "Ufficio accettazione dal Lunedì al Venerdì dalle ore 08.00 alle ore 17.00, il Sabato dalle ore 08.00 alle 12.00",
            img: "services/medicals/portaSole.jpeg",

        },
        {
            name: "Sangallo Palace Hotel",
            serviceTypeId: type1.id,
            address: "via Luigi Masi, 9",
            description: "Elegante e raffinato hotel nel cuore culturale, dello shopping e del turismo di Perugia.",
            time: "L'hotel ha una reception aperta 24/7",
            img: "services/hotels/sangallo.jpeg"
        },
        {
            name: "Borgo Dei Conti Resort",
            serviceTypeId: type1.id,
            address: "Strada Montepetriolo, 26",
            description: "il Borgo Dei Conti Resort Relais & Chateaux occupa un palazzo fortificato del 17° secolo e vanta un centro benessere, una palestra, un ristorante umbro, WiFi e camere moderne ed eleganti.",
            time: "L'hotel ha una reception aperta 24/7",
            img: "services/hotels/borgoConti.jpeg"
        },
        {
            name: "Sangallo Palace Hotel",
            serviceTypeId: type1.id,
            address: "via blabla",
            description: "",
            time: "reception open everyday  from 8am to 11pm",
            img: "services/hotels/sangallo.jpeg"
        },
        {
            name: "Sangallo Palace Hotel",
            serviceTypeId: type1.id,
            address: "via blabla",
            description: "",
            time: "reception open everyday  from 8am to 11pm",
            img: "services/hotels/sangallo.jpeg"
        },
        {
            name: "Osteria a Priori",
            serviceTypeId: type2.id,
            address: "Via dei Priori, 39",
            description: "Un menu 100% umbro, ingredienti locali di piccoli produttori artigianali, dai formaggi ai legumi. Ma la regione qui è rappresentata benissimo anche nel bicchiere, tra vino e birra artigianale. Disponibilità e gentilezza in sala.",
            time: "Dal lunedi al sabato Pranzo 12,30-14,30 Cena 19,30-22,00 Domenica chiuso per turno di riposo (ad eccezione di domenica 5 gennaio e della domenica di Pasqua) La prenotazione è sempre consigliata al fine di evitare spiacevoli indisponibilità di posto.",
            img: "services/restaurants/osteriaPriori.jpeg"
        },
        {
            name: "Civico 25",
            serviceTypeId: type2.id,
            address: "Via della Viola, 25 ",
            description: "Un wine bar in pieno centro, sviluppato su due piani, con una cucina di tradizione che promuove le tante specialità regionali. Il rifugio ideale per chi ama i sapori sinceri e il buon vino.",
            time: "tutti i giorni 19:00-02:00. Chiuso la domenica",
            img: "services/restaurants/civico25.jpeg"
        },
        {
            name: "Stella",
            serviceTypeId: type2.id,
            address: "Via Narcisi, 47A",
            description: "Materie prime del territorio, stagionalità, ricette umbre della tradizione costituiscono gli ingredienti dei piatti tipici umbri da Stella.",
            time: "Lunedì-sabato aperti solo a cena. Domenica aperti solo a pranzo (ad eccezione dei mesi di luglio e agosto in cui siamo aperti solo a cena). Martedì chiuso per turno.",
            img: "services/restaurants/stella.jpeg"
        },
        {
            name: "cafe1",
            serviceTypeId: type3.id,
            address: "via blabla",
            description: "",
            time: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "cafe2",
            serviceTypeId: type3.id,
            address: "via blabla",
            description: "",
            time: "lunedì: 8-12, martedì, mercoledì, giovedì, venerdì: 8-20, sabato e domenica chiusi",
            img: "https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg",

        },
        {
            name: "Gradisca Club",
            serviceTypeId: type4.id,
            address: "Strada Montalcino, 2",
            description: "Il locale è composto da ben 7 sale di cui 5 invernali e 2 estive ed organizza serate ed eventi con generi musicali diversi.",
            time: "Aperto venerdì e sabato dalle 21.30 alle 03.00",
            img: "services/entertinments/gradisca.jpeg",

        },
        {
            name: "Cinema Zenith",
            serviceTypeId: type4.id,
            address: "Via Benedetto Bonfigli, 11",
            description: "La sala ha 216 poltrone distribuite su 18 file. E’ equipaggiata con un proiettore Sony 4k e con un impianto audio dolby surround.",
            time: "Programmazioni tutti i giorni alle 18-18.30 e alle 21-21.30",
            img: "services/entertinments/zenith.jpeg",

        },
        {
            name: "Teatro Morlacchi",
            serviceTypeId: type4.id,
            address: "Piazza Morlacchi, 13",
            description: "",
            time: "Programmazioni tutti i giorni alle 18-18.30 e alle 21-21.30",
            img: "services/entertinments/morlacchi.jpeg",

        },
    ]
    //with create is just one element
    //with bulkCreate is moreElements like arrays
    await models.Event.bulkCreate(eventList)
    //await models.PointOfInterest.bulkCreate(poiList)
    await models.SingleService.bulkCreate(singleServiceList)
}