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
            description: "Art Nouveau building from 1906 designed by architect Max Fabiani between Via Belpoggio and Riva Grumola - Mr Ernesto de Stabile entrusts Max Fabiani's project for a four-storey building, ground floor and cellars only minimally intended for residential use. The owner reserved the top floor as a manor house, (for which Fabiani also personally designed the interior furnishings in the Secessionist style), and designated the ground floor as a Viennese café. De Stabile also made a specific request to the architect for Erker to be built on the façade to allow him to enjoy the view of the sea and, above all, to see his yacht moored at the Yacht Club Adriaco from home. The façade therefore presents on the corner of the riva Grumula and via Belpoggio a rather projecting erker forming a cylindrical turret, Renaissance ashlar covering the ground floor and at different heights the first floor, above the windows of the second and third floors rectangular fields decorated in stucco with a foliage motif, and from the roof downpipes intended as decorative elements, all typical elements of Max Fabiani's architecture.",
            accessInfo: ["done","done","block"],
            timeInfo: ["14-19", "10-19", "10-19","10-19", "closed", "closed", "closed"], 
            directions: "Riva Grumula, 4, 34123 Trieste TS",
            prices: ["For over65 is free", "For students there the admission is free", "The regular admission is 5€"],
            website: ["https://www.catalogo.beniculturali.it/detail/ArchitecturalOrLandscapeHeritage/0600007571", "name_website" ],
            map: "JQW5%2B3M Trieste, UTI Giuliana"
        },
        {
            name: "Vivanti-Giberti Palace",
            img: ["pois/liberty/palazzoVivanti.jpeg", "pois/liberty/palazzoVivanti2.jpeg", "pois/liberty/palazzoVivanti3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"The next step is an other Liberty palace built in the same period of the previous step. Here we can observe same difference between these two first houses in terms of facade and side prospets.",
            description: "The palace was named after its two patrons, Cesare Viviani and Arturo Giberti, partners in the construction company Viviani e Giberti, thus both patrons and builders at the same time, and was immediately considered a work worthy of all expectations for its modernity, elegance and accuracy of detail. On the main façade, the majestic appearance of the building is emphasised by the imposing female statues placed under the wide entrance, the work of Romeo Rathmann, which divide the entrance into three parts, and in the upper part by two putti by Romeo de Paoli supporting the balcony. The statues and friezes are not sculpted as in the other palaces but are made in an almost industrial manner, namely that of 'reconstituted stone' by Ambrogio Pirovano, modelled on Rathmann. The two figures were christened 'Gigogin' and 'Barbara', a custom of humorous baptism very common in the city. The two statues would actually bear the names of two famous 'entertainers' from the then nearby tolerance house known as the 'Villa Orientale'",
            accessInfo: ["done","done","done"],
            timeInfo: ["18-23", "18-23", "18-23","18-23", "18-23", "18-24", "18-24"], 
            directions: "Viale XX Settembre, 35, 34125 Trieste TS",
            prices: ["For over65 there is a discount of 20%", "For students there is a discount of 10%", "The regular admission is based on show"],
            website: ["https://www.triestecinema.it/", "name_website" ],
            map: "MQ2J%2BVX Trieste, UTI Giuliana", 
        },
        {
            name: "Salone Degli Incanti",
            img: ["pois/liberty/saloneIncanti.jpeg", "pois/liberty/salone2.jpeg", "pois/liberty/salone3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"This building is the Expositive Center of Modern and Contemporary Art, build in 1913 by Giorgio Polli: it's really interesting due to its innovative and functional construction both with its sinuose and aestethic magnificent",
            description: "The Exhibition Centre for Modern and Contemporary Art, Ex-Pescheria Centrale in Riva Nazario Sauro 1, built in 1913, is the work of architect Giorgio Polli, who devised a functional and aesthetically acceptable type of construction. Polli had to comply on the one hand with the technical requirements dictated by the intended use of the building (hygienic characteristics, the functionality of the salesroom, a certain differentiation and specialisation of the structures) and on the other hand with the need that had to guide the design: the inappropriateness, that is, of shielding the neoclassical perspective of the banks, almost entirely free of port structures and therefore open to the sea, with the intrusive construction of hangars or large warehouses. The mediation between the two different requirements seemed to be accomplished in the basilica model, which was thus reconverted to its original profane function as a market place. The three wide naves allowed for everything that a large commercial establishment required, while the reinforced concrete structures made it possible to lighten the perimeter walls and interrupt them with large windows. The very 'articulations' of the building acquired a specific function: the pronaos, for example, was intended to house the fish auctions, while the bell tower masked the seawater tank that had to be 'raised' to serve the sales counters. The interior is an example of functional purism. Reinforced concrete pillars support the roof using solutions similar to those used in bridge engineering. The load of the roof slab, which is slightly sloping for the obvious reasons of water drainage, is distributed over the main and secondary concrete beams resting on the arches. The load-bearing structures, which on the inside are exposed, are completely clad on the outside. The use, according to tradition, of brick in the walls (with a decorative play of minimal recesses and emergencies) and of white stone prominences, as well as the seafaring decorations (prore and crustaceans), give the building a Venetian style, already suggested by its location between the docks of the dock.",
            accessInfo: ["done","block","done"],
            timeInfo: ["10-19", "10-14", "14-18","10-19", "10-19", "closed", "closed"], 
            directions: "Riva Nazario Sauro, 1, 34123 Trieste TS",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 7€"],
            website: ["https://salonedeglincanti.comune.trieste.it/", "name_website" ],
            map: "JQX6%2B4V Trieste, UTI Giuliana"
        },
        {
            name: "Bank of Prague",
            img: ["pois/liberty/bancaPraga.jpeg", "pois/liberty/banca2.jpeg", "pois/liberty/banca3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"This palace is the result of a project realized by Josip Costaperaria and Osvaldo Poliva and represents a clear example of rationalism characterized by solid and compact volumes.",
            description: "In 1911, the municipal administration of Trieste decided to demolish some buildings in order to widen Via Ponterosso (today Via Roma), an important artery between the old and new parts of the city, due to the large amount of vehicular traffic that made it difficult for pedestrians to pass. New plots of land were thus created, one of which was purchased by the Bank of Prague (Živnostenská banka pro Čechy in Moravu), which erected a building there to house its headquarters, offices and housing. The project was developed by architects Josip Costaperaria and Osvald Polívka. In 1928, the building was given to the Bank of America and Italy, which commissioned several alterations to the interior. Specifically, in 1957, the polygonal glazing of the waiting room was dismantled; in 1986, the original spiral staircase was replaced by a staircase consisting of three orthogonal flights. Since 1995, the building has housed a branch of Deutsche Bank. The building occupies a corner lot between Via Roma and Via Mazzini in the centre of Trieste. The building presents a style that combines elements of late secessionist taste of the Central European area with others of rationalist derivation, and is characterised by solid and compact volumes. The lower area, consisting of the ground floor and mezzanine, originally intended to house the bank's offices, features large windows with chequered metal frames. The upper area, used as living quarters, has a series of rectangular and centred windows with light stone cornices and is characterised by the presence of barely sketched erkers developed on two levels culminating in polygonal terraces in turn surmounted by small balconies. On the ground floor, on the facade facing Roma Street, there is a large monumental entrance that is accessed via a staircase, at the sides of which stand two bronze statues representing Work and Industry, the work of sculptor Ladislav Šaloun. These were not placed there until 1926, as they had been stuck in Prague due to the war events of the First World War.",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            directions: "Via Roma, 7, 34121 Trieste TS",
            prices: ["You don't need to buy a ticket the entrance is free"],
            website: ["https://www.tripadvisor.it/Attraction_Review-g187813-d10158819-Reviews-Palazzo_della_Banca_di_Praga_Budova_Prague_Bank-Trieste_Province_of_Trieste_Friu.html", "name_website" ],
            map: "MQ2C%2BGQ Trieste, UTI Giuliana"
        },
        {
            name: "Casa Terni",
            img: ["pois/liberty/casaTerni.jpeg", "pois/liberty/casaTerni2.jpeg", "pois/liberty/casaTerni3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"The tour ended in Via Dante Alighieri, with the building which represents one of the best modernist evidence of Romeo Despoli. The continuous alternate of elements sunken or projecting, columns and terraces, decorative pilasters and structural pilasters creates a game of chiaroscuros that animate the facade.",
            description: "In Piazza della Repubblica on the corner of Via Dante and Via Mazzini up to Via San Nicolò, there is Terni Smolars House, designed in 1906 by the architect Romeo Depaoli in Art Nouveau style for the cavalier Augusto Terni. The building was called 'Smolars house', since on the ground floor at the corner of via Mazzini and via Dante the Smolars stationery was founded by Costanza Carniel and is still active in the city. The palace is still in its original condition and is one of the best examples of liberty in the city. In reality it is made up of three distinct buildings: The central part is slightly indented with respect to the side ones. The continuous alternation of falling and protruding bodies, columns and terraces, pilasters and pilasters creates a play of chiaroscuro that animates the facade. The overabundant plastic richness of the ornamental motifs characterizes an example of rough and vibrant liberty. The ground floor and mezzanine, characterized by the Wagnerian theme of full on empty, highlight the clear derivation from Max Fabiani, in the arrangement of open mezzanines in large windows for the display of goods from the shops on the ground floor. The windows of the first and second floors are crowned by lowered arches. At the level of the first floor two corner balconies further enliven the facades. The windows on the third floor, with round arch, are completed by balconies with wrought iron railing with floral motifs. Above the main entrance there is a circular window and laterally two female statues, the work of Paolo Rathmann. The building culminates in a perimeter hanging loggia with two domes at the ends and a protruding cornice.",
            accessInfo: ["done","block","block"],
            timeInfo: ["00-24", "00-24", "00-24","00-24", "00-24", "00-24", "00-24"], 
            directions: "Via Dante Alighieri, 6, 34122 Trieste TS",
            prices: ["You don't need to buy a ticket the entrance is free"],
            website: ["https://www.culturalheritageonline.com/location-1819_Terni-Smolars-House.php", "name_website" ],
            map: "MQ2F%2B5C Trieste, UTI Giuliana"
        },
        {
            name: "Roman Theater",
            img: ["pois/roman/teatro.jpeg", "pois/roman/teatro2.jpeg", "pois/roman/teatro3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"",
            description: "Ancient Tergeste was founded approximately in the middle of the 1st century BC in an area between the Colle di San Giusto and the sea. The theatre, still visible in the town centre, dates back to a few decades later. Its steps, on the slopes of the hill to benefit from the natural gradient, once hosted 3,500 spectators. Today, the theatre is the most impressive archaeological site in Trieste, and many other traces of the Roman past of the city can be found. Behind the theatre, in Via di Donota, an Antiquarium includes an area of excavations and an exhibition space created in the tower of the medieval walls. The remains of the late Republican walls can still be seen in another Antiquarium, in Via del Seminario. Those who visit Trieste, will certainly discover the so-called  'Arco di Riccardo' (Richard's Arch), in the heart of the Roman urban centre, now the current city centre. Not far away, the remains of an early Christian basilica can be seen.",
            accessInfo: ["block","done","done"],
            timeInfo: ["closed", "closed", "closed","10-19", "10-19", "14-21", "10-19"], 
            directions: "Via del Teatro Romano, 34121 Trieste TS",
            prices: ["For over65 the admission is 6€", "For students the admission is free", "The regular admission is 8€"],
            website: ["https://www.turismofvg.it/archaeology/archaeological-area-of-trieste?LangSetCMS=en", "name_website" ],
            map: "JQXC%2BMM Trieste, UTI Giuliana"
        },
        {
            name: "Arch of Riccardo",
            img: ["pois/roman/arco.jpeg", "pois/roman/arco2.jpeg", "pois/roman/arco3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"The trip continues with the Roman gate, which is an important sign of reconstruction of the city. It was a passage through the city walls built by Augustus in 33-32 B.C., after they had lost their defensive function.",
            description: "The Arch of Riccardo is according to some sources one of the Roman gates of Trieste dating back to the 1st century BC. It was probably built under Emperor Octavian Augustus in the years 33-32 BC. The forms of the architectural decoration allow us to date the present form of the arch to the Claudian-Neronian or possibly Flavian period (50-75 AD). According to other sources, however, it is one of the entrances to the sanctuary of the Magna Mater. A popular legend holds that the name derives from Richard the Lionheart, who, on his return from the Holy Land, was also held prisoner in Trieste. Greater credence is given to the version that derives the name from its probable position at the entrance to the cardo massimo, hence the name 'Arco del Cardo', which would gradually evolve into 'Arco di Riccardo'. According to another theory, the name goes back to the medieval magistracy of the Ricario whose seat was nearby.",
            accessInfo: ["block","block","block"],
            timeInfo: ["00-24", "00-24", "00-24","00-24", "00-24", "00-24", "00-24"], 
            directions: "Piazza del Barbacan, 34121 Trieste TS",
            prices: ["For over65 the admission is 4€", "For students the admission is free", "The regular admission is 6€"],
            website: ["https://www.turismofvg.it/archaeology/archaeological-area-of-trieste?LangSetCMS=en", "name_website" ],
            map: "JQX9%2B4H Trieste, UTI Giuliana"
        },
        {
            name: "Castle of St. Justus",
            img: ["pois/roman/castelloGiusto.jpeg", "pois/roman/castle2.jpeg", "pois/roman/castle3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"Now we are moving towards the hill, to visit one of the most representative places of the city: the castle. Inside the castle is possible to visit also the armory, the walls and the museum.",
            description: "Questa porta perugina è stata citata nella DIvina Commedia dal sommo maestro..",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
            map: "JQW5%2B3M Trieste, UTI Giuliana"
        },
        {
            name: "Lapidario Tergestino",
            img: ["pois/roman/lapidarioTergestino.jpeg", "pois/roman/lapidario2.jpeg", "pois/roman/lapidario3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"In the under ground of Bastione Lallo, we'll find a big collection of ancient monuments (around hundred units) coming from the Capitoline area, from sacred buildings, from the Theater and from the necropolis.",
            description: "taborelli stefano",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
            map: "JQW5%2B3M Trieste, UTI Giuliana"
        },
        {
            name: "Antiquarium",
            img: ["pois/roman/antiquarium.jpeg", "pois/roman/antiquarium2.jpeg", "pois/roman/antiquarium3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"The archeological tour ends under the ground in Via Donota: here there are the ancient rests of many Roman buildings of the Ist century A.D. In order to reach this place, is suggested to use the car or the bus, due to its far positioning with respect to the precious step!",
            description: "taborelli stefano",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
            map: "JQW5%2B3M Trieste, UTI Giuliana"
        },
        {
            name: "Cathedral of St. Justus",
            img: ["pois/churches/sanGiusto.jpeg", "pois/churches/insideSanGiusto.jpeg", "pois/churches/sanGiusto2.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"",
            description: "taborelli stefano",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
            map: "JQW5%2B3M Trieste, UTI Giuliana"
        },
        {
            name: "Greek-Oriental Church of St. Nicolò",
            img: ["pois/churches/nicoloGreci.jpeg", "pois/churches/insideNicoloGreci.jpeg", "pois/churches/nicoloGreci2.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"",
            description: "Ataborelli stefano",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
            map: "JQW5%2B3M Trieste, UTI Giuliana"
        },
        {
            name: "Serbian-Orthodox Church of St. Spiridione",
            img: ["pois/churches/chiesaOrtodossa.jpeg", "pois/churches/ortodossa2.jpeg", "pois/churches/ortodossa3.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"",
            description: "la mette tabo",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
            map: "JQW5%2B3M Trieste, UTI Giuliana"
        },
        {
            name: "Israelite Temple Synagogue",
            img: ["pois/churches/sinagoga.jpeg", "pois/churches/insideSinagoga.jpeg", "pois/churches/sinagoga2.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"",
            description: "Ftaborelli di Perugia",
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
            map: "JQW5%2B3M Trieste, UTI Giuliana"
        },
        {
            name: "Sanctuary of St. Mary Major",
            img: ["pois/churches/beataVergine.png", "pois/churches/insideBeataVergine.jpeg", "pois/churches/beataVergine2.png"],
            itineraryId: itinerary2.id,
            stepDescription:"",
            description: "taborelli stefano",
            accessInfo: ["done","done","block"],
            timeInfo: ["Monday: 10-19", "Tuesday:10-19", "Wednesday: 10-19","Thursday: 10-19", "Friday: 10-19", "Saturday: 10-19", "Sunday: 10-19"], 
            directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website" ],
            map: "JQW5%2B3M Trieste, UTI Giuliana"
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
            accessInfo: ["done", "block", "block"],
            timeInfo: ["May 5 at 10am: Trieste Spring Young", "May 7 at 5pm: La Corsa degli Eroi", "May 8 at 10am: Trieste Family Spring Run", "May 8 at 10am: Trieste 21K",],
            // directions: "event.name",
            prices: ["Trieste 21K: iscrizione online di 30€ entro il 5 maggio", "Trieste Family Spring Run: iscrizione online 10€ per adulti e gratis per bambini fino a 5 annni entro il 7 maggio", "Trieste Spring Young: gratis per tutte i bambini e le bambine delle scuole di Trieste", "La Corsa degli Eroi:Iscrizione online con donazione libera devoluta a \"ATLETI ANCHE NOI\""],
            website: ["https://triestespringrun.com", "www.triestespringrun.com"],
        },
        {
            name: "54^ Barcolana",
            description: ["Per tutti gli appassionati di mare e di vela, per chi non vuol perdersi uno spettacolo unico al mondo, l'appuntamento si svolge a Trieste, ogni anno, la seconda domenica di ottobre. È la Barcolana, la regata velica internazionale giunta quest'anno alla 54a edizione: un magico mix di competizione agonistica e festa “pop” della vela che trasforma Trieste nella capitale europea della vela.",
            "Barcolana non è solo la regata più grande del mondo, ma anche un fantastico contenitore che accoglie le diverse sfaccettature del mondo della vela. Dalla Barcolana Young, la due giorni dedicata alla classe Optimist, alla Barcolana Classic, la regata dedicata alle barche d’epoca, classiche e spirit of tradition; e ancora Barcolana Nuota, la Barcolana By Night, una regata che diventa spettacolo a pochi passi da terra e per finire la Coppa d'Autunno, .",
        ],
            img: ["events/barcolana/logo.jpeg", "events/barcolana/statua.jpeg", "events/barcolana/piazza.jpeg"],
            season: "Winter",
            date: "dal 1/10 al 9/10",
            poiId: poi11.id,
            accessInfo: ["done", "block", "done"],
            timeInfo: ["October 1-2: Barcolana Young", "October 2: Barcolana Nuota", "October 8: Barcolana Classic", "October 8: Barcolana by Night", "October 9: Coppa d'Autunno"],
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.barcolana.it/", "www.barcolana.it"],
        },
        {
            name: "International Journalism Festival",
            description: ["Details about "],
            img: ["events/ijf22.jpeg", "events/ijf22.jpeg", "events/ijf22.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi0.id,
            accessInfo: ["done", "done", "block"],
            timeInfo: ["10-19", "closed", "14-21", "10-19", "closed", "14-21", "closed"],
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website"],
        },
        {
            name: "Festa di San Costanzo",
            description: ["Corsa podistica storica di Perugia"],
            img: ["events/sanCostanzo.jpeg", "events/sanCostanzo.jpeg", "events/sanCostanzo.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi3.id,
            accessInfo: ["done", "done", "block"],
            timeInfo: ["10-19", "closed", "14-21", "10-19", "closed", "14-21", "closed"],
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website"],
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
            accessInfo: ["done", "done", "block"],
            timeInfo: ["10-19", "closed", "14-21", "10-19", "closed", "14-21", "closed"],
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website"],
        },
        {
            name: "Perugia Flowers Show",
            description: ["alla ricerca dei fiori "],
            img: ["events/flowerShow.jpeg", "events/flowerShow.jpeg", "events/flowerShow.jpeg"],
            season: "Winter",
            date: "dal 10/7 al 21/7",
            poiId: poi0.id,
            accessInfo: ["done", "done", "block"],
            timeInfo: ["10-19", "closed", "14-21", "10-19", "closed", "14-21", "closed"],
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website"],
        },
        {
            name: "Umbria che Spacca",
            description: ["Details about "],
            img: ["events/umbriaCheSpacca.jpeg", "events/umbriaCheSpacca.jpeg", "events/umbriaCheSpacca.jpeg"],
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId: poi1.id,
            accessInfo: ["done", "done", "block"],
            timeInfo: ["10-19", "closed", "14-21", "10-19", "closed", "14-21", "closed"],
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website"],
        },
        {
            name: "Rally dell'Umbria",
            description: ["Details about this event "],
            img: ["events/rallyUmbria.jpeg", "events/rallyUmbria.jpeg", "events/rallyUmbria.jpeg"],
            season: "Summer",
            date: "dal 10/7 al 21/7",
            poiId: poi1.id,
            accessInfo: ["done", "done", "block"],
            timeInfo: ["10-19", "closed", "14-21", "10-19", "closed", "14-21", "closed"],
            // directions: "event.name",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 20€"],
            website: ["https://www.google.it", "name_website"],
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
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
            img: "services/medicals/ospedale.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "farmacia2",
            serviceTypeId: type0.id,
            address: "via blabla",
            description: "Giunta alla terza generazione, la Farmacia Neri, situata nel centro storico di Trieste, nel cuore della zona pedonale, si è trasformata negli anni in un vero e proprio punto dedicato al benessere. Proiettati all’ innovazione, siamo sempre attenti ad ogni novità nel campo della salute, del benessere e della bellezza, coniugando disponibilità e professionalità. Il nostro personale in continuo aggiornamento,",
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
            img: "services/medicals/ospedale.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Ospedale Santa Maria della Misericordia",
            serviceTypeId: type0.id,
            address: "S. Andrea delle Fratte",
            description: "Giunta alla terza generazione, la Farmacia Neri, situata nel centro storico di Trieste, nel cuore della zona pedonale, si è trasformata negli anni in un vero e proprio punto dedicato al benessere. Proiettati all’ innovazione, siamo sempre attenti ad ogni novità nel campo della salute, del benessere e della bellezza, coniugando disponibilità e professionalità. Il nostro personale in continuo aggiornamento,",
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
            img: "services/medicals/ospedale.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Istituto Clinico Porta Sole",
            serviceTypeId: type0.id,
            address: "Via del Giochetto, 49",
            description: "Giunta alla terza generazione, la Farmacia Neri, situata nel centro storico di Trieste, nel cuore della zona pedonale, si è trasformata negli anni in un vero e proprio punto dedicato al benessere. Proiettati all’ innovazione, siamo sempre attenti ad ogni novità nel campo della salute, del benessere e della bellezza, coniugando disponibilità e professionalità. Il nostro personale in continuo aggiornamento,",
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
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
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
            img: "services/restaurants/osteriaPriori.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Civico 25",
            serviceTypeId: type2.id,
            address: "Via della Viola, 25 ",
            description: "Proprio nei pressi della bellissima piazza Unità d'Italia, un piccolo locale dai toni caldamente rustici e dall'atmosfera signorile dove si propone una cucina soprattutto di mare caratterizzata da uno stile personale fatto di colori, accostamenti con verdure e aromi, materie prime ben selezionate. Frequentato da tutti, triestini e non, una prenotazione è sempre consigliata vista l'esiguità della capienza.",
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
            img: "services/restaurants/civico25.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Stella",
            serviceTypeId: type2.id,
            address: "Via Narcisi, 47A",
            description: "Proprio nei pressi della bellissima piazza Unità d'Italia, un piccolo locale dai toni caldamente rustici e dall'atmosfera signorile dove si propone una cucina soprattutto di mare caratterizzata da uno stile personale fatto di colori, accostamenti con verdure e aromi, materie prime ben selezionate. Frequentato da tutti, triestini e non, una prenotazione è sempre consigliata vista l'esiguità della capienza.",
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
            img: "services/restaurants/stella.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "cafe1",
            serviceTypeId: type3.id,
            address: "via blabla",
            description: "",
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
            img: "services/cafes/caffè1.jpeg",
            map: "Trieste,Italy"


        },
        {
            name: "cafe2",
            serviceTypeId: type3.id,
            address: "via blabla",
            description: "",
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
            img: "services/cafes/caffè1.jpeg",
            map: "Trieste,Italy"


        },
        {
            name: "Gradisca Club",
            serviceTypeId: type4.id,
            address: "Strada Montalcino, 2",
            description: "Il locale è composto da ben 7 sale di cui 5 invernali e 2 estive ed organizza serate ed eventi con generi musicali diversi.",
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
            img: "services/entertainments/gradisca.jpeg",
            map: "Trieste,Italy"


        },
        {
            name: "Cinema Zenith",
            serviceTypeId: type4.id,
            address: "Via Benedetto Bonfigli, 11",
            description: "La sala ha 216 poltrone distribuite su 18 file. E’ equipaggiata con un proiettore Sony 4k e con un impianto audio dolby surround.",
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
            img: "services/entertainments/zenith.jpeg",
            map: "Trieste,Italy"

        },
        {
            name: "Teatro Morlacchi",
            serviceTypeId: type4.id,
            address: "Piazza Morlacchi, 13",
            description: "",
            time: ["MONDAY: 8-12", "TUESDAY: 8-12", "WEDNESDAY: 8-12", "THURSDAY: 8-12", "FRIDAY: 8-12", "SATURDAY: 8-12", "SUNDAY: 8-12"],
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