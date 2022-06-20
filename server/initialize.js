//Here we put all the datas, according to the structure defined in api.js
export default async (models) => {
    const itineraryList = [
        {
            name: " Architectural Liberty tour",
            img: ["pois/liberty/casaTerni2.jpeg", "pois/liberty/casaDeStabileOld.jpeg", "pois/liberty/banca2.jpeg"],
            map: "Casa+De+Stabile,Trieste,Italy&destination=Casa+Terni,Trieste,Italy&waypoints=Palazzo+Vivante,Trieste,Italy|Salone+Incanti,Trieste,Italy|Banca+Di+Praga,Trieste,Italy&avoid=tolls|highways&mode=walking",
            description: "Liberty was a style that aroused more than a few controversies and objections, often having more of a political and ideological nature than an artistic one. An example is the final verdict of Silvio Benco, a well-known exponent of Trieste's culture who had clear irredentist tendencies.With the significant demographic changes and, more importantly, the incredible economic development of the city, the emerging middle class had new stylistic and construction needs. Liberty became the only decorative style that could be grafted onto Eclecticism, the previous trend that had heavily influenced the city."
        },
        {
            name: "Dip into Roman archeology",
            img: ["pois/roman/teatro.jpeg", "pois/roman/lapidarioTergestino.jpeg","pois/roman/antiquarium.jpeg"],
            map: "Teatro+Romano,Trieste,Italy&destination=Antiquarium,Trieste,Italy&waypoints=Arco+Riccardo,Trieste,Italy|Castello+Di+San+Giusto,Trieste,Italy|Lapidario+Tergestino,Trieste,Italy&avoid=tolls|highways&mode=walking",
            description: "The most ancient traces of the urban settlement of Trieste are considered to be the remains of the Roman colony of Tergeste, founded toward the middle of the 1st century B.C. and extending to the northwestern slope of the hill of San Giusto, overlooking the Adriatic Sea. The coast was farther back than it is now, and evidence of the harbor structures have been found along via del Teatro Romano and via Cavana: the wharves, built of sandstone slabs in the 1st and early 2nd century A.D., were in use at least until the 5th century. In 33-32 B.C. the city was enclosed by walls, which soon lost their defensive function and served for containment and terracing of the slope. The lay of the land conditioned urban organization from the outset, with the business district close to the harbor, a largely residential district on the hillside and the political, administrative and religious center at the top of the hill."
        },
        {
            name: "Discover the most important churches",
            img: ["pois/churches/insideNicoloGreci.jpeg", "pois/churches/chiesaOrtodossa.jpeg", "pois/churches/sanGiusto.jpeg"],
            map: "Cattedrale+San+Giusto,Trieste,Italy&destination=Chiesa+Della+Beata+Vergine,Trieste,Italy&waypoints=Chiesa+Di+Nicolo+Dei+Greci,Trieste,Italy|Chiesa+ortodossa,Trieste,Italy|Sinagoga,Trieste,Italy&avoid=tolls|highways&mode=walking",
            description: "The various ethnic-religious communities flocked to Trieste during the 19th century, attracted by the prosperity of the free port: Greeks, Serbs, Armenians, Albanians, Turks joined the Italian and Slovenian natives. Due to this influence, in Trieste there are a lot of multi-cultural churches which merge the ethics and the cultures of a big community!"
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
            stepDescription:"The tour starts on the corner between river Grumula and Belpoggio street, with an house built in 1907 and became a symbol of the Trieste architectural style.",
            description: "Nulla da aggiungere visto che è considerata come Meraviglia Del Mondo",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Vivanti-Giberti Palace",
            img: ["pois/liberty/palazzoVivanti.jpeg", "pois/liberty/palazzoVivanti2.jpeg", "pois/liberty/palazzoVivanti3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"The next step is aniother Liberty palace cbuilt in the same period of the previous step. Here we can observe same difference between these two first houses in terms of facade and side prospets.",
            description: "Questa è una descrizione p",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Salone Degli Incanti",
            img: ["pois/liberty/saloneIncanti.jpeg", "pois/liberty/salone2.jpeg", "pois/liberty/salone3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"This building is the Expositive Center of Modern and Contemporary Art, build in 1913 by Giorgio Polli: it's really interesting due to its innovative and functional construction both with its sinuose and aestethic magnificent",
            description: "Questa è una descrizione per pozzo etrusco",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Bank of Prague",
            img: ["pois/liberty/bancaPraga.jpeg", "pois/liberty/banca2.jpeg", "pois/liberty/banca3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"This palace is the result of a project realized by Josip Costaperaria and Osvaldo Poliva and represents a clear example of rationalism characterized by solid and compact volumes.",
            description: "questa è la descrizion e di un punto di interesse",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Casa Terni",
            img: ["pois/liberty/casaTerni.jpeg", "pois/liberty/casaTerni2.jpeg", "pois/liberty/casaTerni3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"The tour ended in Via Dante Alighieri, with the building which represents one of the best modernist evidence of Romeo Despoli. The continuous alternate of elements sunken or projecting, columns and terraces, decorative pilasters and structural pilasters creates a game of chiaroscuros that animate the facade.",
            description: "Questa è una descrizione per il punto di interesse",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Antiquarium",
            img: ["pois/roman/antiquarium.jpeg", "pois/roman/antiquarium2.jpeg", "pois/roman/antiquarium3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"",
            description: "Questa porta è dedicata ad una santa",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Arch of Riccardo",
            img: ["pois/roman/arcoRiccardo.jpeg", "pois/roman/arco2.jpeg", "pois/roman/arco3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"",
            description: "Fontana maggiore, la più bella del rione!",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Castle of St. Justus",
            img: ["pois/roman/castelloGiusto.jpeg", "pois/roman/castle2.jpeg", "pois/roman/castle3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"",
            description: "Questa porta perugina è stata citata nella DIvina Commedia dal sommo maestro..",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Lapidario Tergestino",
            img: ["pois/roman/lapidarioTergestino.jpeg", "pois/roman/lapidario2.jpeg", "pois/roman/lapidario3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"",
            description: "Questa è una cattedrale spoglia e rudimentale nel centro di Perugia",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Roman Theater",
            img: ["pois/roman/teatro.jpeg", "pois/roman/teatro2.jpeg", "pois/roman/teatro3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"",
            description: "Arco bianco che più bianco non c'è!",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Cathedral of St. Justus",
            img: ["pois/churches/sanGiusto.jpeg", "pois/churches/insideSanGiusto.jpeg", "pois/churches/sanGiusto2.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"",
            description: "Arco bianco che più bianco non c'è!",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Greek-Oriental Church of St. Nicolò",
            img: ["pois/churches/nicoloGreci.jpeg", "pois/churches/insideNicoloGreci.jpeg", "pois/churches/nicoloGreci2.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"",
            description: "Acquedotto etrusco di Perugia",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Serbian-Orthodox Church of St. Spiridione",
            img: ["pois/churches/chiesaOrtodossa.jpeg", "pois/churches/ortodossa2.jpeg", "pois/churches/ortodossa3.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"",
            description: "la mette tabo",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Israelite Temple Synagogue",
            img: ["pois/churches/sinagoga.jpeg", "pois/churches/insideSinagoga.jpeg", "pois/churches/sinagoga2.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"",
            description: "Famosissima porta di Perugia",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Sanctuary of St. Mary Major",
            img: ["pois/churches/beataVergine.png", "pois/churches/insideBeataVergine.jpeg", "pois/churches/beataVergine2.png"],
            itineraryId: itinerary2.id,
            stepDescription:"",
            description: "Famosissima chiesa di Perugia",
            accessInfo: ["done","done","block"],
            timeInfo: ["Monday: 10-19", "Tuesday:10-19", "Wednesday: 10-19","Thursday: 10-19", "Friday: 10-19", "Saturday: 10-19", "Sunday: 10-19"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
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
            name: "Spring Run",
            description: ["L’evento di running per eccellenza della città di Trieste torna con un nuovo nome e con un nuovo format, pronto ad accogliere tutti i runner, professionisti e amatori, con il suo percorso unico, tra Carso e mare.",
                "Nell’anno in cui tutto il mondo sportivo italiano sta tornando a vivere i grandi eventi con migliaia di spettatori, Trieste si unisce a questa ripartenza riabbracciando finalmente la sua storica mezza maratona, uno degli eventi più cari a tutti i podisti italiani. La Trieste Spring Run si ripropone a tutti gli agonisti e appassionati di corsa su strada, che hanno sempre amato l’evento lungo la costa giuliana, grazie ad un’organizzazione profondamente rinnovata alla cui guida c’è la società A.p.d. Miramar che unisce le forze con la A.S.D Trieste Atletica",
                "La Trieste 21K è la corsa competitiva della Trieste Spring Run: una mezza maratona, gara tra le più entusiasmanti del calendario nazionale delle corse su strada. La partenza è prevista dalla piazza centrale di Aurisina: il percorso porterà i runner verso Sistiana per poi impegnare il lungomare triestino fino all’arrivo lungo le Rive di Trieste, all’altezza di Ponterosso.",
                "Torna anche la Family Run più amata dai triestini con il tradizionale percorso dal Castello di Miramare alle Rive e con un nuovo arrivo all’altezza del canale di Ponterosso. 7 chilometri di gioia da condividere in famiglia, con gli amici e in gruppi organizzati, camminando, marciando, utilizzando pattini e roller, un evento aperto alle persone di tutte le età che punta all’inclusione sociale e all’educazione allo sport.",
		        "La Corsa degli Eroi è una camminata in cosplay e/o in maschera per adulti e bambini la cui unica regola è essere mascherati e il cui obiettivo è celebrare gli eroi e le eroine della pandemia e le lotte affrontate negli ultimi due anni. La gara si svolgerà nel tardo pomeriggio di sabato 7 maggio, lungo le vie del centro della città, e coinvolgerà grandi e piccoli, atleti e amatori in un progetto di charity a favore di “Atleti anche noi”, il progetto di Trieste Atletica per la promozione dello sport per bambini e ragazzi con autismo e/o disabilità intellettivo-relazionali. L’iscrizione è aperta a tutti, compreso chi non prenderà parte agli eventi della TSR il giorno seguente.",
		    ],
            img: ["events/springRun/logo.jpeg", "events/springRun/targhetta.jpeg", "events/springRun/arrivo.jpeg"],
            season: "Summer",
            date: "dal 5/5 al 8/5",
            poiId: poi0.id,
            accessInfo: ["done","block","block"],
            timeInfo: ["May 5 at 10am: Trieste Spring Young", "May 7 at 5pm: La Corsa degli Eroi", "May 8 at 10am: Trieste Family Spring Run","May 8 at 10am: Trieste 21K", ], 
            // directions: "event.name",
            prices: ["Trieste 21K: iscrizione online di 30€ entro il 5 maggio", "Trieste Family Spring Run: iscrizione online 10€ per adulti e gratis per bambini fino a 5 annni entro il 7 maggio", "Trieste Spring Young: gratis per tutte i bambini e le bambine delle scuole di Trieste", "La Corsa degli Eroi:Iscrizione online con donazione libera devoluta a \"ATLETI ANCHE NOI\""],
            website: ["https://triestespringrun.com", "www.triestespringrun.com" ],
        },
        {
            name: "Eurochocolate",
            description: ["Details about marathon"],
            img: ["events/eurochocolate.jpeg", "events/eurochocolate.jpeg", "events/eurochocolate.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi0.id,
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "International Journalism Festival",
            description: ["Details about "],
            img: ["events/ijf22.jpeg", "events/ijf22.jpeg", "events/ijf22.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi0.id,
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Festa di San Costanzo",
            description: ["Corsa podistica storica di Perugia"],
            img: ["events/sanCostanzo.jpeg", "events/sanCostanzo.jpeg", "events/sanCostanzo.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi3.id,
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
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
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],},
        {
            name: "Perugia Flowers Show",
            description: ["alla ricerca dei fiori "],
            img: ["events/flowerShow.jpeg", "events/flowerShow.jpeg", "events/flowerShow.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi0.id,
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Umbria che Spacca",
            description: ["Details about "],
            img: ["events/umbriaCheSpacca.jpeg", "events/umbriaCheSpacca.jpeg", "events/umbriaCheSpacca.jpeg"],
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId: poi1.id,
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
        },
        {
            name: "Rally dell'Umbria",
            description: ["Details about this event "],
            img: ["events/rallyUmbria.jpeg", "events/rallyUmbria.jpeg", "events/rallyUmbria.jpeg"],
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId: poi1.id,
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
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