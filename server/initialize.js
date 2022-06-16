//Here we put all the datas, according to the structure defined in api.js
export default async (models) => {
    const itineraryList = [
        {
            name: "Liberty Tour",
            img: ["pois/liberty/casaTerni2.jpeg", "pois/liberty/casaDeStabileOld.jpeg", "pois/liberty/banca2.jpeg"],
            description: "Viene a scoprire i palazzi in stile liberty della città"
        },
        {
            name: "Trip in roman archeology",
            img: ["pois/roman/antiquarium.jpeg", "pois/roman/lapidarioTergestino.jpeg", "pois/roman/teatro.jpeg"],
            description: "Viene a scoprire la perugia sotterranea!"
        },
        {
            name: "Discover the most important chuches",
            img: ["pois/churches/insideNicoloGreci.jpeg", "pois/churches/chiesaOrtodossa.jpeg", "pois/churches/sanGiusto.jpeg"],
            description: "Le chiese più belle di tutta Trieste"
        },
    ]
    const itinerary0 = await models.Itinerary.create(itineraryList[0])
    const itinerary1 = await models.Itinerary.create(itineraryList[1])
    const itinerary2 = await models.Itinerary.create(itineraryList[2])
    const poiList = [
        {
            name: "Casa De Stabile",
            img: ["pois/liberty/casaDeStabile.jpeg", "pois/liberty/casaDeStabile3.jpeg", "pois/liberty/casaDeStabileOld.jpeg"],
            itineraryId: itinerary0.id,
            description: "Nulla da aggiungere visto che è considerata come Meraviglia Del Mondo"
        },
        {
            name: "Banca di Praga",
            img: ["pois/liberty/bancaPraga.jpeg", "pois/liberty/banca2.jpeg", "pois/liberty/banca3.jpeg"],
            itineraryId: itinerary0.id,
            description: "questa è la descrizion e di un punto di interesse"
        },
        {
            name: "Casa Terni",
            img: ["pois/liberty/casaTerni.jpeg", "pois/liberty/casaTerni2.jpeg", "pois/liberty/casaTerni3.jpeg"],
            itineraryId: itinerary0.id,
            description: "Questa è una descrizione per il punto di interesse"
        },
        {
            name: "Palazzo Vivanti-Gilberti",
            img: ["pois/liberty/palazzoVivanti.jpeg", "pois/liberty/palazzoVivanti2.jpeg", "pois/liberty/palazzoVivanti3.jpeg"],
            itineraryId: itinerary0.id,
            description: "Questa è una descrizione p"
        },
        {
            name: "Salone Degli Incanti",
            img: ["pois/liberty/saloneIncanti.jpeg", "pois/liberty/salone2.jpeg", "pois/liberty/salone3.jpeg"],
            itineraryId: itinerary0.id,
            description: "Questa è una descrizione per pozzo etrusco"
        },
        {
            name: "Antiquarium",
            img: ["pois/roman/antiquarium.jpeg", "pois/roman/antiquarium2.jpeg", "pois/roman/antiquarium3.jpeg"],
            itineraryId: itinerary1.id,
            description: "Questa porta è dedicata ad una santa"
        },
        {
            name: "Arco Riccardo",
            img: ["pois/roman/arcoRiccardo.jpeg", "pois/roman/arco2.jpeg", "pois/roman/arco3.jpeg"],
            itineraryId: itinerary1.id,
            description: "Fontana maggiore, la più bella del rione!"
        },
        {
            name: "Castello San Giusto",
            img: ["pois/roman/castelloGiusto.jpeg", "pois/roman/castle2.jpeg", "pois/roman/castle3.jpeg"],
            itineraryId: itinerary1.id,
            description: "Questa porta perugina è stata citata nella DIvina Commedia dal sommo maestro.."
        },
        {
            name: "Lapidario Tergestino",
            img: ["pois/roman/lapidarioTergestino.jpeg", "pois/roman/lapidario2.jpeg", "pois/roman/lapidario3.jpeg"],
            itineraryId: itinerary1.id,
            description: "Questa è una cattedrale spoglia e rudimentale nel centro di Perugia"
        },
        {
            name: "Teatro Romano",
            img: ["pois/roman/teatro.jpeg", "pois/roman/teatro2.jpeg", "pois/roman/teatro3.jpeg"],
            itineraryId: itinerary1.id,
            description: "Arco bianco che più bianco non c'è!"
        },
        {
            name: "Cattedrale San Giusto",
            img: ["pois/churches/sanGiusto.jpeg", "pois/churches/insideSanGiusto.jpeg", "pois/churches/sanGiusto2.jpeg"],
            itineraryId: itinerary2.id,
            description: "Arco bianco che più bianco non c'è!"
        },
        {
            name: "Sinagoga di Trieste",
            img: ["pois/churches/sinagoga.jpeg", "pois/churches/insideSinagoga.jpeg", "pois/churches/sinagoga2.jpeg"],
            itineraryId: itinerary2.id,
            description: "Famosissima porta di Perugia"
        },
        {
            name: "Chiesa Ortodossa di San Spiridione",
            img: ["pois/churches/chiesaOrtodossa.jpeg", "pois/churches/ortodossa2.jpeg", "pois/churches/ortodossa3.jpeg"],
            itineraryId: itinerary2.id,
            description: "Famosissima chiesa di Perugia"
        },
        {
            name: "Chiesa di Nicolò Dei Greci",
            img: ["pois/churches/nicoloGreci.jpeg", "pois/churches/insideNicoloGreci.jpeg", "pois/churches/nicoloGreci2.jpeg"],
            itineraryId: itinerary2.id,
            description: "Acquedotto etrusco di Perugia"
        },
        {
            name: "Chiesa della Beata Vergine",
            img: ["pois/churches/beataVergine.png", "pois/churches/insideBeataVergine.jpeg", "pois/churches/beataVergine2.png"],
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
            description: ["Details about concert"],
            img: ["events/umbriaJazz.jpeg", "events/umbriaJazz.jpeg", "events/umbriaJazz.jpeg"],
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
            description: ["Details about marathon"],
            img: ["events/eurochocolate.jpeg", "events/eurochocolate.jpeg", "events/eurochocolate.jpeg"],
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
            description: ["Details about "],
            img: ["events/ijf22.jpeg", "events/ijf22.jpeg", "events/ijf22.jpeg"],
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
            description: ["Corsa podistica storica di Perugia"],
            img: ["events/sanCostanzo.jpeg", "events/sanCostanzo.jpeg", "events/sanCostanzo.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi3.id,
            accessInfo: "col-sm-2 m-2",
            timeInfo: "even",
            directions: "event.name",
            prices: "event.img",
        },
        {
            name: "Il Caos Dentro",
            description: ["Il Caos Dentro racconta Frida Kahlo mettendo in evidenza tanto la temperie culturale e politica in cui la pittrice visse, quanto le sue fragilità e la sua forza. Soprattutto, mette in contatto l’emotività del visitatore con quella di Frida, grazie all’uso delle moderne tecnologie immersive che rafforzano le suggestioni e avvicinano i visitatori di ogni età a una donna e artista dalla grande forza attrattiva.",
                " Il percorso espositivo al Salone degli Incanti di Trieste presenta il dipinto originale Piden aeroplanos y les dan alas de petate attribuito a Frida Kahlo e 15 riproduzioni di celebri autoritratti realizzati tra il1926 e il 1949 riprodotti con la sofisticata tecnologia modlight, che restituisce allo spettatore i dettagli della pittura a olio con impressionante realismo. ",
                " Tra le opere originali, figurano anche sei litografie acquerellate dell’artista e marito Diego Rivera, provenienti dal collezioni private messicane, e un centinaio di scatti del fotografo colombiano Leo Matiz, in bianco e nero e a colori, provenienti dalla Fondazione Leo Matiz di Bogotà.", "In mostra anche lettere e pagine di diario, oltre 40 emissioni filateliche (tra le quali l’emissione con il famoso Autoritratto con collana (1933), accanto a riproduzioni digitali di autoritratti e murales messicani, riproduzioni a grandezza reale di ambienti come la camera da letto, lo studio e il giardino di Frida Kahlo, e una sala cinema 10D ad alta tecnologia per una proiezione video multisensoriale.",
            ],
            img: ["events/fridaKahlo/logo.jpeg", "events/fridaKahlo/interno.jpeg", "events/fridaKahlo/ingresso.jpeg"],
            season: "Summer",
            date: "Dal 12/3 al 23/7",
            poiId: poi4.id,
            accessInfo: "All'ingresso è presente una piccola scalinata affiancata da scivoli per superare il dislivello. All'interno la mostra è dislocata totalmente al pian terreno, dunque non vi sono dislivelli ed è accessibile a chiunque",
            timeInfo: "Dal lunedì al venerdì: dalle 09.30 alle 20.00 | sabato, domenica e festivi: dalle 09.30 alle 21.00",
            directions: "Il Salone degli Incanti si trova in prossimità della fermata bus Riva Nazario Sauro (Pescheria centrale) delle linee 8 e 9. Ampio parcheggio in prossimità del Salone degli Incanti per chidesidera raggiungerlo in auto",
            prices: "Biglietti acquistabili su ticketone, al costo di €16,30 | coloro che pernotteranno almeno una notte nelle strutture alberghiere convenzionate, potranno visitare gratuitamente la mostra.",
        },
        {
            name: "Perugia Flowers Show",
            description: ["alla ricerca dei fiori "],
            img: ["events/flowerShow.jpeg", "events/flowerShow.jpeg", "events/flowerShow.jpeg"],
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
            description: ["Details about "],
            img: ["events/umbriaCheSpacca.jpeg", "events/umbriaCheSpacca.jpeg", "events/umbriaCheSpacca.jpeg"],
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
            description: ["Details about this event "],
            img: ["events/rallyUmbria.jpeg", "events/rallyUmbria.jpeg", "events/rallyUmbria.jpeg"],
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
            description: "Giunta alla terza generazione, la Farmacia Neri, situata nel centro storico di Trieste, nel cuore della zona pedonale, si è trasformata negli anni in un vero e proprio punto dedicato al benessere. Proiettati all’ innovazione, siamo sempre attenti ad ogni novità nel campo della salute, del benessere e della bellezza, coniugando disponibilità e professionalità. Il nostro personale in continuo aggiornamento,",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/medicals/ospedale.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "farmacia2",
            serviceTypeId: type0.id,
            address: "via blabla",
            description: "Giunta alla terza generazione, la Farmacia Neri, situata nel centro storico di Trieste, nel cuore della zona pedonale, si è trasformata negli anni in un vero e proprio punto dedicato al benessere. Proiettati all’ innovazione, siamo sempre attenti ad ogni novità nel campo della salute, del benessere e della bellezza, coniugando disponibilità e professionalità. Il nostro personale in continuo aggiornamento,",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/medicals/ospedale.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Ospedale Santa Maria della Misericordia",
            serviceTypeId: type0.id,
            address: "S. Andrea delle Fratte",
            description: "Giunta alla terza generazione, la Farmacia Neri, situata nel centro storico di Trieste, nel cuore della zona pedonale, si è trasformata negli anni in un vero e proprio punto dedicato al benessere. Proiettati all’ innovazione, siamo sempre attenti ad ogni novità nel campo della salute, del benessere e della bellezza, coniugando disponibilità e professionalità. Il nostro personale in continuo aggiornamento,",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/medicals/ospedale.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Istituto Clinico Porta Sole",
            serviceTypeId: type0.id,
            address: "Via del Giochetto, 49",
            description: "Giunta alla terza generazione, la Farmacia Neri, situata nel centro storico di Trieste, nel cuore della zona pedonale, si è trasformata negli anni in un vero e proprio punto dedicato al benessere. Proiettati all’ innovazione, siamo sempre attenti ad ogni novità nel campo della salute, del benessere e della bellezza, coniugando disponibilità e professionalità. Il nostro personale in continuo aggiornamento,",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/medicals/portaSole.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Sangallo Palace Hotel",
            serviceTypeId: type1.id,
            address: "via Luigi Masi, 9",
            description: "Elegante e raffinato hotel nel cuore culturale, dello shopping e del turismo di Perugia.",
            time: ["L'hotel ha una reception aperta 24/7"],
            img: "services/hotels/sangallo.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Borgo Dei Conti Resort",
            serviceTypeId: type1.id,
            address: "Strada Montepetriolo, 26",
            description: "il Borgo Dei Conti Resort Relais & Chateaux occupa un palazzo fortificato del 17° secolo e vanta un centro benessere, una palestra, un ristorante umbro, WiFi e camere moderne ed eleganti.",
            time: ["L'hotel ha una reception aperta 24/7"],
            img: "services/hotels/borgoConti.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Sangallo Palace Hotel",
            serviceTypeId: type1.id,
            address: "via blabla",
            description: "",
            time: ["reception open everyday  from 8am to 11pm"],
            img: "services/hotels/sangallo.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Sangallo Palace Hotel",
            serviceTypeId: type1.id,
            address: "via blabla",
            description: "",
            time: ["reception open everyday  from 8am to 11pm"],
            img: "services/hotels/sangallo.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Osteria a Priori",
            serviceTypeId: type2.id,
            address: "Via dei Priori, 39",
            description: "Proprio nei pressi della bellissima piazza Unità d'Italia, un piccolo locale dai toni caldamente rustici e dall'atmosfera signorile dove si propone una cucina soprattutto di mare caratterizzata da uno stile personale fatto di colori, accostamenti con verdure e aromi, materie prime ben selezionate. Frequentato da tutti, triestini e non, una prenotazione è sempre consigliata vista l'esiguità della capienza.",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/restaurants/osteriaPriori.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Civico 25",
            serviceTypeId: type2.id,
            address: "Via della Viola, 25 ",
            description: "Proprio nei pressi della bellissima piazza Unità d'Italia, un piccolo locale dai toni caldamente rustici e dall'atmosfera signorile dove si propone una cucina soprattutto di mare caratterizzata da uno stile personale fatto di colori, accostamenti con verdure e aromi, materie prime ben selezionate. Frequentato da tutti, triestini e non, una prenotazione è sempre consigliata vista l'esiguità della capienza.",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/restaurants/civico25.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Stella",
            serviceTypeId: type2.id,
            address: "Via Narcisi, 47A",
            description: "Proprio nei pressi della bellissima piazza Unità d'Italia, un piccolo locale dai toni caldamente rustici e dall'atmosfera signorile dove si propone una cucina soprattutto di mare caratterizzata da uno stile personale fatto di colori, accostamenti con verdure e aromi, materie prime ben selezionate. Frequentato da tutti, triestini e non, una prenotazione è sempre consigliata vista l'esiguità della capienza.",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/restaurants/stella.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "cafe1",
            serviceTypeId: type3.id,
            address: "via blabla",
            description: "",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/cafes/caffè1.jpeg",
            map: "Trieste,Italy"


        },
        {
            name: "cafe2",
            serviceTypeId: type3.id,
            address: "via blabla",
            description: "",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/cafes/caffè1.jpeg",
            map: "Trieste,Italy"


        },
        {
            name: "Gradisca Club",
            serviceTypeId: type4.id,
            address: "Strada Montalcino, 2",
            description: "Il locale è composto da ben 7 sale di cui 5 invernali e 2 estive ed organizza serate ed eventi con generi musicali diversi.",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/entertainments/gradisca.jpeg",
            map: "Trieste,Italy"


        },
        {
            name: "Cinema Zenith",
            serviceTypeId: type4.id,
            address: "Via Benedetto Bonfigli, 11",
            description: "La sala ha 216 poltrone distribuite su 18 file. E’ equipaggiata con un proiettore Sony 4k e con un impianto audio dolby surround.",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/entertainments/zenith.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Teatro Morlacchi",
            serviceTypeId: type4.id,
            address: "Piazza Morlacchi, 13",
            description: "",
            time: ["MONDAY: 8-12","TUESDAY: 8-12","WEDNESDAY: 8-12","THURSDAY: 8-12","FRIDAY: 8-12","SATURDAY: 8-12","SUNDAY: 8-12"],
            img: "services/entertainments/morlacchi.jpeg",
            map: "Trieste,Italy"

        },
    ]
    //with create is just one element
    //with bulkCreate is moreElements like arrays
    await models.Event.bulkCreate(eventList)
    //await models.PointOfInterest.bulkCreate(poiList)
    await models.SingleService.bulkCreate(singleServiceList)
}