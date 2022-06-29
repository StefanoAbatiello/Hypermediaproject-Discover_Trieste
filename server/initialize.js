//Here we put all the datas, according to the structure defined in api.js
export default async (models) => {
    const itineraryList = [
        {
            name: "Architectural Liberty tour",
            img: ["pois/liberty/casaTerni2.jpeg", "pois/liberty/casaDeStabileOld.jpeg", "pois/liberty/banca2.jpeg"],
            map: "Casa+De+Stabile,Trieste,Italy&destination=Casa+Terni,Trieste,Italy&waypoints=Palazzo+Vivante,Trieste,Italy|Salone+Incanti,Trieste,Italy|Banca+Di+Praga,Trieste,Italy&avoid=tolls|highways&mode=walking",
            distances: ["2,1 km", "2755 steps"],
            description: "Liberty was a style that aroused more than a few controversies and objections, often having more of a political and ideological nature than an artistic one. An example is the final verdict of Silvio Benco, a well-known exponent of Trieste's culture who had clear irredentist tendencies.With the significant demographic changes and, more importantly, the incredible economic development of the city, the emerging middle class had new stylistic and construction needs. Liberty became the only decorative style that could be grafted onto Eclecticism, the previous trend that had heavily influenced the city."
        },
        {
            name: "Dip into Roman archeology",
            img: ["pois/roman/teatro.jpeg", "pois/roman/lapidarioTergestino.jpeg","pois/roman/antiquarium.jpeg"],
            map: "Teatro+Romano,Trieste,Italy&destination=Antiquarium,Trieste,Italy&waypoints=Arco+Riccardo,Trieste,Italy|Castello+Di+San+Giusto,Trieste,Italy|Lapidario+Tergestino,Trieste,Italy&avoid=tolls|highways&mode=walking",
            distances: ["7,1 km", "9317 steps"],
            description: "The most ancient traces of the urban settlement of Trieste are considered to be the remains of the Roman colony of Tergeste, founded toward the middle of the 1st century B.C. and extending to the northwestern slope of the hill of San Giusto, overlooking the Adriatic Sea. The coast was farther back than it is now, and evidence of the harbor structures have been found along via del Teatro Romano and via Cavana: the wharves, built of sandstone slabs in the 1st and early 2nd century A.D., were in use at least until the 5th century. In 33-32 B.C. the city was enclosed by walls, which soon lost their defensive function and served for containment and terracing of the slope. The lay of the land conditioned urban organization from the outset, with the business district close to the harbor, a largely residential district on the hillside and the political, administrative and religious center at the top of the hill."
        },
        {
            name: "Discover the multireligious churches",
            img: ["pois/churches/insideNicoloGreci.jpeg", "pois/churches/chiesaOrtodossa.jpeg", "pois/churches/sanGiusto.jpeg"],
            map: "Cattedrale+San+Giusto,Trieste,Italy&destination=Chiesa+Della+Beata+Vergine,Trieste,Italy&waypoints=Chiesa+Di+Nicolo+Dei+Greci,Trieste,Italy|Chiesa+ortodossa,Trieste,Italy|Sinagoga,Trieste,Italy&avoid=tolls|highways&mode=walking",
            distances: ["3 km", "3937 steps"],
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
            description: ["The corner of the house is dominated by the erker, the protruding window that Ernesto de Stabile requested in 1906 from Max Fabiani, the designer of both the building and furnishings, so he could enjoy the spectacle of the sea and his yacht moored at the nearby sailing club from the top floor.",
            "The Architect Max Fabiani, born in Štanjel (now in Slovenia) into a trilingual family - Italian, Slovenian and German - was one of the great protagonists of the architecture of the Sezession not only in Trieste, but also in Ljubljana and in even Vienna itself where he designed the extraordinary Urania palace-observatory."],
            accessInfo: ["done","done","block"],
            timeInfo: ["14-19", "10-19", "10-19","10-19", "closed", "closed", "closed"], 
            directions: "Riva Grumula, 4, 34123 Trieste TS",
            prices: ["For over65 is free", "For students there the admission is free", "The regular admission is 5€"],
            website: ["https://www.triestemetro.eu/poi/133", "www.triestemetro.eu" ],
            map: "Casa+De+Stabile,Trieste,Italy"
        },
        {
            name: "Viviani-Giberti Palace",
            img: ["pois/liberty/palazzoVivanti.jpeg", "pois/liberty/palazzoVivanti2.jpeg", "pois/liberty/palazzoVivanti3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"The next step is an other Liberty palace built in the same period of the previous step. Here we can observe same difference between these two first houses in terms of facade and side prospets.",
            description: ["Palazzo Viviani Giberti is the only large Trieste Liberty building to be signed off by an Italian architect, Giuseppe Sommaruga. Inaugurated on Christmas Day in 1907 as the Teatro filodrammatico. It later became the Cinema Eden, and now, albeit with another name, remains a cinema.",
            "The two female statues by Romeo Rathmann attract attention. For the spirit and sense of humor of the Triestines, these represent Barbara and Gigogin, two “entertainers” at the then neighbouring casa di tolleranza, the Villa Orientale. There is even a popular song that celebrates their loveliness."],
            accessInfo: ["done","done","done"],
            timeInfo: ["18-23", "18-23", "18-23","18-23", "18-23", "18-24", "18-24"], 
            directions: "Viale XX Settembre, 35, 34125 Trieste TS",
            prices: ["For over65 there is a discount of 20%", "For students there is a discount of 10%", "The regular admission is based on show"],
            website: ["https://www.triestemetro.eu/poi/134", "www.triestemetro.eu" ],
            map: "Casa+Viviani+Gilberti,Trieste,Italy" 
        },
        {
            name: "Salone Degli Incanti",
            img: ["pois/liberty/saloneIncanti.jpeg", "pois/liberty/salone2.jpeg", "pois/liberty/salone3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"This building is the Expositive Center of Modern and Contemporary Art, build in 1913 by Giorgio Polli: it's really interesting due to its innovative and functional construction both with its sinuose and aestethic magnificent",
            description: ["The magnificent salone degli incanti is the heart of the exhibition centre for contemporary and modern art better known as “ex pescheria centrale” and located in riva nazario sauro.",
            "The imposing Art Novueau building designed by the local architect Giorgio Polli in 1913 and originally used as a fish market is, in fact, an original and great example of eclectic architecture perfectly integrated with the neighbouring neoclassical building along the town’s river bank. Created specifically for a business requiring an extensive sales floor space, the vast three-section area is toned down by the large windows built on reinforced concrete structures and embellished by nautical-themed decorations reproduced on the bricked and white stoned walls. Overall it resembles a spacious cathedral nicked named by locals “Santa Maria del Guato” with the aim, that is very far from being sacrilegious as it seeks to be noble, to combine utilitas and venustas (functionality and beauty) in an unbreakable bond entirely devoted to the promotion of culture.",],
            accessInfo: ["done","block","done"],
            timeInfo: ["10-19", "10-14", "14-18","10-19", "10-19", "closed", "closed"], 
            directions: "Riva Nazario Sauro, 1, 34123 Trieste TS",
            prices: ["For over65 is free", "For students there is a discount of 20%", "The regular admission is 7€"],
            website: ["https://triesteantiqua.com/en/visitors/exhibition-area-congress-centre/", "www.triesteantiqua.com" ],
            map: "Salone+Degli+Incanti,Trieste,Italy"
        },
        {
            name: "Bank of Prague",
            img: ["pois/liberty/bancaPraga.jpeg", "pois/liberty/banca2.jpeg", "pois/liberty/banca3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"This palace is the result of a project realized by Josip Costaperaria and Osvaldo Poliva and represents a clear example of rationalism characterized by solid and compact volumes.",
            description: ["In 1911, the municipal administration of Trieste decided to demolish some buildings in order to widen Via Ponterosso (today Via Roma), an important artery between the old and new parts of the city, due to the large amount of vehicular traffic that made it difficult for pedestrians to pass. New plots of land were thus created, one of which was purchased by the Bank of Prague (Živnostenská banka pro Čechy in Moravu), which erected a building there to house its headquarters, offices and housing. The project was developed by architects Josip Costaperaria and Osvald Polívka.",
            "In 1928, the building was given to the Bank of America and Italy, which commissioned several alterations to the interior. Specifically, in 1957, the polygonal glazing of the waiting room was dismantled; in 1986, the original spiral staircase was replaced by a staircase consisting of three orthogonal flights. Since 1995, the building has housed a branch of Deutsche Bank. The building presents a style that combines elements of late Secessionist taste from the Central European area with others of rationalist derivation, and is characterised by solid and compact volumes. The lower area, consisting of the ground floor and mezzanine, originally intended to house the bank's offices, features large windows with chequered metal frames. The upper area, used as living quarters, has a series of rectangular and centred windows with light stone cornices and is characterised by the presence of barely sketched erkers developed on two levels culminating in polygonal terraces in turn surmounted by small balconies.",
            "On the ground floor, on the façade facing Roma Street, there is a large monumental entrance that is accessed via a staircase, at the sides of which are two bronze statues depicting Work and Industry, the work of sculptor Ladislav Šaloun. These were not placed there until 1926, as they had been stuck in Prague due to the war events of the First World War."],
            accessInfo: ["done","done","block"],
            timeInfo: ["10-19", "closed", "14-21","10-19", "closed", "14-21", "closed"], 
            directions: "Via Roma, 7, 34121 Trieste TS",
            prices: ["You don't need to buy a ticket the entrance is free"],
            website: ["https://www.triestemetro.eu/poi/46", "www.triestemetro.eu" ],
            map: "Banca+Di+Praga,Trieste,Italy"
        },
        {
            name: "Casa Terni",
            img: ["pois/liberty/casaTerni.jpeg", "pois/liberty/casaTerni2.jpeg", "pois/liberty/casaTerni3.jpeg"],
            itineraryId: itinerary0.id,
            stepDescription:"The tour ended in Via Dante Alighieri, with the building which represents one of the best modernist evidence of Romeo Despoli. The continuous alternate of elements sunken or projecting, columns and terraces, decorative pilasters and structural pilasters creates a game of chiaroscuros that animate the facade.",
            description: ["The palace was designed in 1906 by architect Romeo Depaoli, commissioned by knight Augusto Terni. The building took its current name following the opening on the ground floor of the Smolars stationery shop, founded by Costanza Carniel Smolars. In 1970, the palace underwent a renovation of the interior designed by architects Giampaolo Batoli and Claudio Visintini. Between 1994 and 1995, Enrico Colosimo was responsible for the cleaning and restoration of the stonework on the façades on Via San Nicolò and Via Dante Alighieri.",
            "The building, which occupies a lot exposed on three sides, consists of three distinct bodies, one central, slightly recessed, and two lateral ones. The façade is animated by a continuous alternation of recessed and protruding bodies, small columns and terraces, pilasters and pilaster strips, which together make up the exuberant and plastic decorative apparatus of the palace. It represents one of the most celebrated examples of Art Nouveau in Trieste.",
            "The ground floor and the mezzanine, used for commercial purposes, are characterised by the presence of large windows, inspired by those in Max Fabiani's designs. Above the main entrance is a large circular window decorated on the sides with two statues of female figures, the work of Romeo Rathmann, who also designed the sculptural groups adorning the roof. The windows on the first and second floors are crowned by lowered arches. Also on the first floor are two corner balconies that bring additional movement to the façades. The round-arched openings on the third floor overlook balconies decorated with wrought iron railings with floral motifs. Finally, the top floor of the building is characterised by the presence of a perimeter hanging loggia, surmounted by a projecting cornice culminating at the sides in two domes."],
            accessInfo: ["done","block","block"],
            timeInfo: ["00-24", "00-24", "00-24","00-24", "00-24", "00-24", "00-24"], 
            directions: "Via Dante Alighieri, 6, 34122 Trieste TS",
            prices: ["You don't need to buy a ticket the entrance is free"],
            website: ["https://www.culturalheritageonline.com/location-1819_Terni-Smolars-House.php", "www.culturalheritageonline.com" ],
            map: "Casa+Terni,Trieste,Italy"
        },
        {
            name: "Roman Theater",
            img: ["pois/roman/teatro.jpeg", "pois/roman/teatro2.jpeg", "pois/roman/teatro3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"This itinerary starts in one of the most ancient place of Trieste: the theater. Mnay years ago this place was the center of the Roman culture and entertainment. Let you suggest by this amazing place to start the itinerary on the right foot!",
            description: ["The Roman Theatre behind Piazza Unità d'Italia at the foot of the San Giusto hill is one of the most striking remains of ancient Roman Tergeste.",
            "The theatre (1st to 2nd century AD.) could accommodate up to 3,500 spectators, and was built almost entirely of masonry, except for the stage, which was made of wood.",
            "In 1814 Pietro Nobile inferred the theatre's existence from the name of a village built on its ruins, Rena Vecia (Old Arena), but it was brought to light only in 1938 following major work of demolition and urban regeneration.",
            "Today, the theatre is the most impressive archaeological site in Trieste, and many other traces of the Roman past of the city can be found. Behind the theatre, in Via di Donota, an Antiquarium includes an area of excavations and an exhibition space created in the tower of the medieval walls. The remains of the late Republican walls can still be seen in another Antiquarium, in Via del Seminario. Those who visit Trieste, will certainly discover the so-called  “Arco di Riccardo” (Richard's Arch), in the heart of the Roman urban centre, now the current city centre. Not far away, the remains of an early Christian basilica can be seen."],
            accessInfo: ["block","done","done"],
            timeInfo: ["closed", "closed", "closed","10-19", "10-19", "14-21", "10-19"], 
            directions: "Via del Teatro Romano, 34121 Trieste TS",
            prices: ["For over65 the admission is 6€", "For students the admission is free", "The regular admission is 8€"],
            website: ["https://www.turismofvg.it/archaeology/archaeological-area-of-trieste?LangSetCMS=en", "www.turismofvg.it" ],
            map: "Teatro+Romano,Trieste,Italy"
        },
        {
            name: "Arch of Riccardo",
            img: ["pois/roman/arco.jpeg", "pois/roman/arco2.jpeg", "pois/roman/arco3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"The trip continues with the Roman gate, which is an important sign of reconstruction of the city. It was a passage through the city walls built by Augustus in 33-32 B.C., after they had lost their defensive function.",
            description: ["Probably dating from the 1st century AD, the Arch of Riccardo, in the heart of old Trieste, is a Roman gate in the ancient walls of Tergeste that were built by Augustus in 33 BC.",
            "Various origins have been attributed to the name Riccardo. Some recall legendary events like the passage of Charlemagne or Richard the Lionheart into this city, while other, perhaps more reliable, sources suggest a derivation of the term 'Cardo', the Latin name of one of the two main axes around which Roman towns were built, the other being the Decumanus."],
            accessInfo: ["block","block","block"],
            timeInfo: ["00-24", "00-24", "00-24","00-24", "00-24", "00-24", "00-24"], 
            directions: "Piazza del Barbacan, 34121 Trieste TS",
            prices: ["For over65 the admission is 4€", "For students the admission is free", "The regular admission is 6€"],
            website: ["https://www.discover-trieste.it/en/15353/Arco-di-Riccardo", "www.discover-trieste.it" ],
            map: "Arco+Riccardo,Trieste,Italy"
        },
        {
            name: "Castle of St. Justus",
            img: ["pois/roman/castelloGiusto.jpeg", "pois/roman/castle2.jpeg", "pois/roman/castle3.jpg"],
            itineraryId: itinerary1.id,
            stepDescription:"Now we are moving towards the hill, to visit one of the most representative places of the city: the castle. Inside the castle is possible to visit also the armory, the walls and the museum.",
            description: ["In the prehistoric age on the hill of San Giusto there was a castelliere (fortified borough), which in the Roman age became an important urban centre. The fortress, built by the Venetians in the Middle Ages, was pulled down in the 14th century by will of the Patriarch of Aquileia and, in 1470 only, it was rebuilt by Friedrich II of Habsburg; the square tower and the two-storey building, which today houses the Castle Museum, date back to this period.",
            "Under the rule of the Republic of Venice, which at the beginning of the sixteenth century had re-established its rule over Trieste, the castle's defences were strengthened and, under the Austrian rule again, the works continued until the building, in 1630, of the large ramparts and of the linking walls.",
            "The fortified complex can be accessed from a ramp ending in a wooden drawbridge, over a not very wide moat; after crossing the cross-vaulted hall, you will reach the Piazzale delle Milizie (Square of the Troops), where stairs and allures lead to the ramparts.",
            "Since 1930 the castle has been a property of the Municipality, which has equipped it for tourist purposes and uses it for cultural events, shows and temporary exhibitions.",
            "Since 2001 the Lalio rampart of the Castle of San Giusto has been housing the new Lapidario Tergestino, which preserves all the Roman stone finds that were previously displayed in the Orto Lapidario garden."],
            accessInfo: ["done","block","block"],
            timeInfo: ["closed", "closed", "14-21","10-19", "8-17", "14-21", "8-23"], 
            directions: "P.za della Cattedrale, 3, 34131 Trieste TS",
            prices: ["For over65 is free", "For students is free", "The regular admission is 2€"],
            website: ["https://www.turismofvg.it/castles/san-giusto-castle?LangSetCMS=en", "www.turismofvg.it" ],
            map: "Castello+Di+San+Giusto,Trieste,Italy"
        },
        {
            name: "Lapidario Tergestino",
            img: ["pois/roman/lapidarioTergestino.jpeg", "pois/roman/lapidario2.jpeg", "pois/roman/lapidario3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"In the under ground of Bastione Lallo, we'll find a big collection of ancient monuments (around hundred units) coming from the Capitoline area, from sacred buildings, from the Theater and from the necropolis.",
            description: ["The sixteenth century Lalio Bastion of San Giusto Castle houses the Lapidario Tergestino, which has 130 inscriptions and sculptures illustrating the story of Roman Tergeste and its monuments, religious buildings, theatre and necropolis.",
            "The exhibits include: inscriptions posted at the city gates; fragments of the equestrian monument given by the plebs tergestinorum to Lucio Fabio Severo, a distinguished citizen and Roman senator; imperial inscriptions commemorating initiatives by the emperors Hadrian, Antoninus Pius and Marcus Aurelius for the erection of public buildings in the city; materials from the civil Basilica, whose extensive archaeological remains are still visible in the square at the base of the castle; the exceptional series of statues - of Venus, Bacchus, Apollo, Minerva, Igea and Aesculapius - found during excavation of the Roman Theatre; and beautiful mosaics from the luxurious seaside villa discovered in Barcola."],
            accessInfo: ["done","done","done"],
            timeInfo: ["10-19", "closed", "10-19","10-19", "closed", "14-21", "10-19"], 
            directions: "P.za della Cattedrale, 3, 34124 Trieste TS",
            prices: ["For over65 is free", "For students is free", "The regular admission is 5€"],
            website: ["https://www.discover-trieste.it/en/15464/Tergeste-Lapidarium", "www.discover-trieste.it" ],
            map: "Lapidario+Tergestino,Trieste,Italy"
        },
        {
            name: "Antiquarium",
            img: ["pois/roman/antiquarium.jpeg", "pois/roman/antiquarium2.jpeg", "pois/roman/antiquarium3.jpeg"],
            itineraryId: itinerary1.id,
            stepDescription:"The archeological tour ends under the ground in Via Donota: here there are the ancient rests of many Roman buildings of the Ist century A.D. In order to reach this place, is suggested to use the car or the bus, due to its far positioning with respect to the previous step!",
            description: ["The Antiquarium was created following discoveries in the 1980s-84 to coincide with the first restoration work in the Cittavecchia, Donota area: the remains of a domus/sepolcrete and Roman city walls were discovered. Therefore, what was found was highlighted, some showcases of objects, to which others from the later excavation above Via Barbacan were added. The explanatory panels also explain something about the Roman theatre, the sculptures of which, however, are in the Terestine Lapidarium at the castle.",
            "These turn out to be the first systematic excavations conducted in Trieste after those of the 1930s, those characterised by an objective of exalting Tergestine Romanity, these with more contemporary criteria.",
            "The Via Donota is considered to be the road that connected Aquileia with the central part of ancient Tergeste, on the extension of the Cardo maximus, although its course is parallel to the coastline and the Roman theatre. The buildings are therefore outside the city walls.",
            "The small antiquarium exhibits include Roman remains, oil lamps, ceramics, and glass, but unlike those on display in the Civic Museum, which often come from the antiques market and their provenance is unknown, these came directly from local excavations and thus testify to life on site."],
            accessInfo: ["block","done","done"],
            timeInfo: ["closed", "closed", "closed","10-19", "10-19", "closed", "closed"], 
            directions: "Via di Donota, 18, 34121 Trieste TS",
            prices: ["For over65 is free", "For students there is a discount of 5%", "The regular admission is 5€"],
            website: ["https://www.beniculturali.it/luogo/antiquarium-e-acquedotto-romano-di-trieste/", "www.beniculturali.it" ],
            map: "Antiquarium,Trieste,Italy"
        },
        {
            name: "Cathedral of St. Justus",
            img: ["pois/churches/sanGiusto.jpeg", "pois/churches/insideSanGiusto.jpeg", "pois/churches/sanGiusto2.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"The multireligious tour in Trieste starts on the St. Julius' hill, in an early Christian basilica which cointains some Roman remains in the current floor.",
            description: ["The Cathedral of San Giusto stands on the hill of the same name, in the heart of the ancient Roman city of Tergeste. Initially, towards the middle of the fifth century, an Early Christian basilica featuring a nave and two aisles, a presbytery with an apse, and mosaic flooring, was built where the capitolium (temple) once stood.",
            "During the ninth century, two sacred buildings were built. The first was a cathedral smaller than the previous, dedicated to the Assumption of the Blessed Virgin Mary, with a nave, two aisles and three apses, while the second was the Sacellum (Shrine) of San Giusto. The remaining central apses of the two buildings were later covered with precious mosaics, the first depicting the Virgin Mary enthroned, and the second an inspiring Christ, Saint Justus and Saint Servulus.",
            "In the fourteenth century, the cathedral and sacellum were merged into a single building by demolishing the right aisle of the cathedral and the left aisle of the sacellum to create the nave of the current Cathedral of San Giusto.",
            "The façade is adorned with a delicate and elegant Gothic rose window. The solid, squat bell tower incorporates the remains of the Roman propylaeum. The niche contains a fourteenth-century sculpture of Saint Justus holding a martyr's palm and a model of the walled city he protects. The interior, with its nave and four aisles, offers a striking sight. The Byzantine-Ravenna inspired mosaics adorning the two apses are exquisite.",
            "The Chapel of the Treasure holds important objects like the reliquary urn of Saint Justus and the Battuti crucifix, both dating from the thirteenth century, and the halberd of Saint Sergius, which has become the emblem of Trieste (according to legend, the weapon miraculously fell from the sky into the city forum on 8 October 303, when the holy soldier was martyred in Syria)."],
            accessInfo: ["done","done","block"],
            timeInfo: ["closed", "closed", "closed","10-19", "closed", "10-19", "10-19"], 
            directions: "P.za della Cattedrale, 3, 34131 Trieste TS",
            prices: ["The admission is free for all"],
            website: ["https://www.discover-trieste.it/en/15593/Cathedral-of-San-Giusto", "www.discover-trieste.it" ],
            map: "Cattedrale+Di+San+Giusto"
        },
        {
            name: "Church of St. Nicolò",
            img: ["pois/churches/nicoloGreci.jpeg", "pois/churches/insideNicoloGreci.jpeg", "pois/churches/nicoloGreci2.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"The tour continues on the banks, near Canal Grande, where we can observe most important church of Trieste, dedicated to St. Nicolò patron of seafarers and shipowners.",
            description: ["Built on the seafront in the first half of the eighteenth century, it was not by chance that the Greek Orthodox church was dedicated to Saint Nicholas, the patron saint of sailors, ship owners and all those involved in maritime trade, and to the Holy Trinity.",
            "The Greek community was one of the most active in making the city of Trieste an important commercial hub.",
            "The Greek Orthodox Church, where the first mass was held on 18 February 1787, features a basilica floor plan having a nave without aisles. The interior features gilded wood icons and paintings with gilt backgrounds or silver rizas.",
            "On the side walls there are two large paintings by the artist Cesare dell'Acqua, depicting the Preaching of John the Baptist and Christ with the"],
            accessInfo: ["done","done","block"],
            timeInfo: ["closed", "closed", "closed","10-19", "closed", "10-19", "10-19"], 
            directions: "Piazza Niccolo Tommaseo, 34121 Trieste TS",
            prices: ["The admission is free for all"],
            website: ["https://www.discover-trieste.it/en/15591/Greek-Orthodox-Church-of-San-Nicolo", "www.discover-trieste.it" ],
            map: "Chiesa+Greco+Ortodossa+di+San+Nicolò,Trieste,Italy"
        },
        {
            name: "Church of St. Spiridione",
            img: ["pois/churches/chiesaOrtodossa.jpeg", "pois/churches/ortodossa2.jpeg", "pois/churches/ortodossa3.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"The next step is a church in pure Byzantine style, characterized by white stone with red marble columns (from Verona) rises on the canal with its very imponent and large dome.  ",
            description: ["The work of architect Carlo Maciachini (1869), it stands on the site of the pre-existing Church of San Spiridione from 1753.",
            "Much of the information known about the Serbs of Trieste in this period comes from the attempts of Trieste's Serbs to document their numbers and their social and economic standing in order to justify their request for a permanent Serbian priest. At one point in 1769 the Serbs reminded the empress of their wealth and suggested that another city might be more amenable for their trade. Only then did Maria Theresa issue the Triestine Serbs the right to have an 'Illyrian' (Serbian) priest. The first permanent Serbian priest in Trieste was Haralampije Mamula from Ogulin in the western Military Frontier. He served from 1771 until his death in 1790.",
            "The architectural complex, located in the Borgo Teresiano near the Grand Canal, reflects a Byzantine taste and is characterised by a dome that is higher than the four bell towers, blue hemispherical domes and extensive mosaic decorations embellishing the exterior walls. Nine large statues by the Milanese sculptor Emilio Bisi (1850-1920) adorn the façade.",
            "The interior is richly decorated according to Byzantine canons, entirely adorned with oil paintings imitating mosaic. There is a rich iconostasis with four icons of great value: St Spyridon, Madonna and Child, Christ the King, the Annunciation. They are covered in gold and silver and were made in Russia in the early 19th century. Three altars are located in the presbytery. The large silver lamp hanging at the entrance is a gift from Paul Petrovich Romanov, the future Tsar of Russia under the name Paul I."],
            accessInfo: ["done","done","block"],
            timeInfo: ["closed", "closed", "closed","10-19", "closed", "10-19", "10-19"], 
            directions: "Via Spiridione, 9, 34122 Trieste TS",
            prices: ["The admission is free for all"],
            website: ["https://en.wikipedia.org/wiki/Saint_Spyridon_Church,_Trieste", "www.wikipedia.org" ],
            map: "Tempio+serbo-ortodosso+della+Santissima+Trinità+e+di+San Spiridione,Trieste,Italy"
        },
        {
            name: "Israelite Temple Synagogue",
            img: ["pois/churches/sinagoga.jpeg", "pois/churches/insideSinagoga.jpeg", "pois/churches/sinagoga3.jpeg"],
            itineraryId: itinerary2.id,
            stepDescription:"The tour continue on the west of the city, in order to let you observe one of the biggest Israelite church in Europe. This church is the main point for culture and religion among the different ethnicities since the 90s.",
            description: ["The Trieste Synagogue was built in 1908-12 to the plans of Ruggero Berlam, in collaboration with his son Arduino, replacing four earlier smaller synagogues.",
            "The Jewish temple in Trieste is one of the largest in Europe. In fact, when it was built, the Jewish community in Trieste had more than 5,000 members and played an important role in the city's economic and cultural life. The community had grown to 6,000 members by 1938, but after the proclamation of the Racial Laws by Mussolini (in Unità di Italia Square, no less, in 1938) and the German occupation in 1943, the Nazis began harsh roundups and persecutions. In fact, the only concentration camp in Italy was built at the Risiera di San Sabba (San Sabba Rice Mill), and 710 Jews were deported from the city. At the end of the war, in 1945, only 2,300 Jews remained in Trieste. Today, the Jewish community has approximately 700 members.",
            "But the Jewish community has very deep roots. The oldest official document that mentions a Jewish settlement in Trieste, albeit a small one, is dated 1236 and consists of a notary act that mentions the Jew Daniel David of Trieste, who spent 500 marks to fight thieves on the Karst plateau.",
            "From an architectural perspective, the synagogue is rather original - it features Middle Eastern-inspired decorations and stylized Jewish symbols. The large central dome can only be glimpsed from a distance, while the half-dome and small side domes are visible from the square and nearby streets."],
            accessInfo: ["done","done","block"],
            timeInfo: ["closed", "closed", "closed","10-19", "closed", "10-19", "10-19"], 
            directions: "Via S. Francesco D'Assisi, 19, 34133 Trieste TS",
            prices: ["The admission is free for all"],
            website: ["https://www.discover-trieste.it/en/15598/Jewish-Synagogue", "www.discover-trieste.it" ],
            map: "Sinagoga+di+Trieste,Trieste,Italy"
        },
        {
            name: "Sanctuary of St. Mary Major",
            img: ["pois/churches/beataVergine.png", "pois/churches/insideBeataVergine.jpeg", "pois/churches/beataVergine2.png"],
            itineraryId: itinerary2.id,
            stepDescription:"The tour ends in the Roman ancient zone, in the center of Trieste with a Jesuits church built around the XVII century in honor of the Madonna.",
            description: ["The Sanctuary of Santa Maria Maggiore rises majestically alongside the small Romanesque church of San Silvestro. The church was built between 1627 and 1682 by the Jesuits, who arrived in Trieste in the early years of the century.",
            "It was not completed until much later. In fact the façade was not finished until the beginning of the eighteenth century, apparently to plans by the famous architect Brother Andrea Pozzo. In 1849 a cholera epidemic broke out in Trieste, claiming many lives in just a few months. During this terrible plight, the city placed its faith in the protection of Our Lady of Health and on 21 November gathered together for a procession at the Jesuit church, where the bishop held a solemn pontifical high mass.",
            "Since then, each year on the Feast of the Presentation of Mary in the Temple, commonly known as Our Lady of Health, large numbers of residents congregate at the sanctuary to participate in liturgies in her honour. The devotion to Our Lady is promoted primarily by the Confraternita della Madonna della Salute (Brotherhood of Our Lady of Health), founded in 1827.",
            "The floor plan of the church is a Latin cross. The interior comprises a nave and two aisles with barrel vaulting, while a dome (rebuilt in 1817 after a fire) rises above the intersection of the transept. "],
            accessInfo: ["done","done","block"],
            timeInfo: ["closed", "closed", "closed","10-19", "closed", "10-19", "10-19"], 
            directions: "Via del Collegio, 6, 34121 Trieste TS",
            prices: ["The admission is free for all"],
            website: ["https://www.discover-trieste.it/en/15587/Sanctuary-of-Santa-Maria-Maggiore", "www.discover-trieste.ite" ],
            map: "Chiesa+Parrocchiale+di+S.Maria+Maggiore,Trieste,Italy"
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
            description: ["The running event par excellence of the city of Trieste returns with a new name and a new format , ready to welcome all runners, professionals and amateurs, with its unique path, between Karst and the sea.",
                "In the year in which the whole Italian sports world is returning to live the great events with thousands of spectators, Trieste joins this restart by finally embracing its historic half marathon, one of the most dear events to all Italian runners. The Trieste Spring Run is proposed to all agonists and road racing enthusiasts, who have always loved the event along the Julian coast, thanks to a deeply renewed organization led by the Apd Miramar company that joins forces with ASD Trieste Atletica",
                "The Trieste 21K is the competitive race of the Trieste Spring Run: a half marathon, one of the most exciting races on the national road racing calendar. The departure is scheduled from the central square of Aurisina: the route will take the runners towards Sistiana and then engage the Trieste seafront until the arrival along the Rive di Trieste, at Ponterosso.",
                "The Family Run most loved by Trieste is also back with the traditional route from the Miramare Castle to the Rive and with a new arrival at the Ponterosso canal. 7 kilometers of joy to share with family, friends and organized groups, walking, marching, using skates and rollers, an event open to people of all ages that aims at social inclusion and sports education.",
                "Trieste Spring Young is a party dedicated to the little ones, to the boys and girls of the Trieste elementary and middle schools, ready to get involved in an event designed and structured for them.",
                "The Race of Heroes is a walk in cosplay and / or masquerade for adults and children whose only rule is to be masked and whose goal is  to celebrate the heroes and heroines of the pandemic and the struggles faced in the last two years.The competition will take place in the late afternoon of Saturday 7 May, along the streets of the city center, and will involve young and old, athletes and amateurs in a charity project in favor of \"ATLETI ANCHE NOI\", the Trieste Atletica project for the promotion of sport for children and young people with autism and / or intellectual-relational disabilities. Registration is open to everyone, including those who will not take part in the TSR events the following day.",
            ],
            img: ["events/springRun/logo.png", "events/springRun/targhetta.jpeg", "events/springRun/arrivo.jpeg"],
            season: "Summer",
            date: "from 5/5 to 8/5",
            poiId: poi6.id,
            accessInfo: ["done", "block", "block"],
            timeInfo: ["May 5 at 10am:"," Trieste Spring Young", "May 7 at 5pm:"," The race of the Hero", "May 8 at 10am:"," Trieste Family Spring Run", "May 8 at 10am:"," Trieste 21K",],
            prices: ["Trieste 21K: online registration of 30€ within May 5", "Trieste Family Spring Run: online registration of 10€ for adults and free for children up to 5 years within May 7", "Trieste Spring Young: free for all the children of Trieste's Elementary schools", "La Corsa degli Eroi:online registration with free donation to \"ATLETI ANCHE NOI\""],
            website: ["https://triestespringrun.com", "www.triestespringrun.com"],
        },
        {
            name: "54th Barcolana",
            description: ["For all sea and sailing enthusiasts, for those who do not want to miss a show that is unique in the world, the appointment takes place in Trieste, every year, on the second Sunday of October. It is the Barcolana, the international sailing regatta which has reached its 54th edition this year: a magical mix of competitive competition and “pop” sailing party.",
            "Barcolana is not only the largest regatta in the world, but also a fantastic container that welcomes the different facets of the world of sailing. From the Barcolana Young, the two days dedicated to the Optimist class, to the Barcolana Classic, the regatta dedicated to vintage, classic and spirit of tradition boats; and again Barcolana Nuota, Barcolana Fun and the Barcolana By Night, a regatta that becomes a show just a few steps from the ground and eventually the Autumn Cup.",
            "In the days preceding the event, temporary stores are lined up on land to host the sponsors of the regatta, products and services for boating, the crews: it is the “Barcolana Village”. The fascinating Piazza Unità d'Italia, the largest square in Europe open to the sea, is transformed in the evening into a parterre dedicated to entertainment and shows. A few steps from the moored boats and the Maritime Station, stories of the sea, tradition and seafaring culture involve the public. In this section you will find all the information to experience the great Barcolana party. From the Village to exhibitions, from shows to meeting opportunities: we are waiting for you in Trieste starting from 1st October!",
        ],
            img: ["events/barcolana/logo.jpeg", "events/barcolana/statua.jpeg", "events/barcolana/piazza.jpeg"],
            season: "Winter",
            date: "from 1/10 to 9/10",
            poiId: poi11.id,
            accessInfo: ["done", "block", "done"],
            timeInfo: ["October 1-2:"," Barcolana Young", "October 2:"," Barcolana Nuota", "October 8:"," Barcolana Classic", "October 8:"," Barcolana by Night", "October 9:"," Autumn cup"],
            prices: ["The enrollments rules will be published on the following site", "For all visitors the regatta and the “Barcolana Village” are free"],
            website: ["https://www.barcolana.it/", "www.barcolana.it"],
        },
        {
            name: "Boramata",
            description: ["Welcome to the seventh edition of the event dedicated to the most Triestine thing there is. Invisible, but memorable. A little mata, much loved. Boramata is a messy party, as the wind likes it.",
            "It is an opportunity to celebrate the mother of all gusts, in a season that is not really hers, when it is easier to meet a borin than a true bora.",
            "The most famous square in Trieste is filled with pinwheels for an extraordinary glance. This year the pinwheels are colored yellow and blue in solidarity with the Ukrainian people. And we hope that the winds of peace will soon take the place of the winds of war. Come and photograph yourself and share your shots using the hashtag #boramata.",
            "Find out what we have prepared for you this year. Good wind!",
        ],
            img: ["events/boramata/logo.jpeg", "events/boramata/girandola.jpeg", "events/boramata/piazza.jpeg"],
            season: "Summer",
            date: "from 03/06 to 05/06",
            poiId: poi0.id,
            accessInfo: ["done", "block", "block"],
            timeInfo: ["from 03/06 to 05/06:","all day long"],
            prices: ["free access"],
            website: ["https://museobora.org/boramata.php", "www.museobora.org"],
        },
        {
            name: "The Impressionists",
            description: ["Painters such as Monet , Renoir , Delacroix and Courbet - on display together with many others - capture the immediacy and vitality of the Norman landscape by impressing on the canvas the moods of the sky, the sparkle of the water and the verdant valleys of Normandy, the cradle of Impressionism.",
            "The exhibition focuses above all on the heritage of the Peindre en Normandie Collection - one of the most representative collections of the Impressionist period - tell of the exchanges, comparisons and collaborations between the greatest artists of the time who - immersed in a dazzling nature with intense colors and sparkling panoramas - gave Normandy the emblematic image of happiness of painting.",
            "Furthermore, on the occasion of the exhibition on the Impressionists, it is also possible to visit with a single entrance ticket the stupendous Museo Revoltella, a modern art gallery in Trieste that boasts a prestigious collection: starting from the very rich legacy of the homonymous baron Pasquale Revoltella - who made it his home until 1869 - to reach the most recent acquisitions with works by great artists such as Fattori, De Nittis, Sironi, Carrà, De Chirico, Fontana, Pomodoro, Hayez and many other important exponents of modern and contemporary art.",
        ],
            img: ["events/impressionisti/locandina.png", "events/impressionisti/stanza.png", "events/impressionisti/quadro.png"],
            season: "Winter",
            date: "from 4/1 to 7/4",
            poiId: poi1.id,
            accessInfo: ["block", "done", "done"],
            timeInfo: ["Monday:","9-19", "Tuesday:","closed", "Wednesday:","9-19", "Thursday:","9-19", "Friday:","9-19", "Sturday:","9-19", "Sunday:","9-19"],
            prices: ["For over65 is free", "For students is 5€", "The regular admission is 10€"],
            website: ["http://www.triestecultura.it/news/index/id/4809/", "www.triestecultura.it"],
        },
        {
            name: "Gianna Nannini concert",
            description: ["Due to delays in the preparation independent of the artist, due to the impossibility of carrying out the musical and set-up rehearsals in the last month due to the restrictive regulations in force, the first part of \"In Theater Tour 2022\", the Italian tour of Gianna Nannini. The concert scheduled at the Castle of St.Justus in Trieste on March 28th is therefore rescheduled to November 22nd 2022, again starting at 9.00pm. Tickets for the show are on sale on the Ticketone circuit, while the tickets already purchased remain valid for a new date.",
            "After the extraordinary success of the summer tour throughout Italy, Gianna Nannini returns to the stage with the piano and sound design of the German musician Christian Lhor.",
            "Soft and strong, sweetness and energy, are the two souls of the rocker who in recent years has conquered the stages of all Europe with her unique stage presence and a very direct approach. The tour in the most beautiful theaters in Italy is an unmissable opportunity to listen to the rocker's most loved songs in a new artistic expression.",            
        ],
            img: ["events/Nannini/logo.jpeg", "events/Nannini/pianoforte.jpeg", "events/Nannini/platea.jpeg"],
            season: "Winter",
            date: "The 22th of November",
            poiId: poi5.id,
            accessInfo: ["done", "block", "block"],
            timeInfo: ["The 23th of November:","from 9:00pm to 00:00am"],
            prices: ["Gold stalls: 79€","Stalls A: 70€","Stalls B: 49€"],
            website: ["https://www.ticketone.it/event/gianna-nannini-in-teatro-politeama-rossetti-14390848/", "www.ticketone.it"],
        },
        {
            name: "Il Caos Dentro",
            description: ["\"Caos dentro\" recounts Frida Kahlo by highlighting as much the cultural and political temperament in which the painter lived as her frailties and strengths. Above all, it puts the visitor's emotionality in touch with Frida's, thanks to the use of modern immersive technologies that reinforce the suggestions and bring visitors of all ages closer to a woman and artist of great appeal.",
            "The exhibition itinerary at the Salone degli Incanti in Trieste features the original painting Piden aeroplanos y les dan alas de petate attributed to Frida Kahlo and 15 reproductions of famous self-portraits made between1926 and 1949 reproduced with sophisticated modlight technology, which restores the viewer to the details of the oil painting with impressive realism. ",
            "Original works also include six watercolor lithographs by the artist and husband Diego Rivera, from private Mexican collections, and a hundred black-and-white and color shots by Colombian photographer Leo Matiz from the Leo Matiz Foundation in Bogota. ", "Also on display are letters and diary pages, more than 40 philatelic issues (including the issue featuring the famous Self-Portrait with Necklace (1933), alongside digital reproductions of Mexican self-portraits and murals, life-size reproductions of environments such as Frida Kahlo's bedroom, studio and garden, and a high-tech 10D cinema room for multi-sensory video projection.",
        ],
            img: ["events/fridaKahlo/logo.jpeg", "events/fridaKahlo/interno.jpeg", "events/fridaKahlo/ingresso.jpeg"],
            season: "Summer",
            date: "from 12/3 to 23/7",
            poiId: poi2.id,
            accessInfo: ["done", "done", "block"],
            timeInfo: ["Monday:","10-17", "Tuesday:","10-17", "Wednesday:","10-17", "Thursday:","10-17", "Friday:","10-17", "Sturday:","8-21", "Sunday:","8-21"],
            prices: ["For over65 and under18 is free", "For students there is a discount of 50%", "The regular admission is 10€"],
            website: ["https://mostrafridakahlo.it/", "www.mostrafridakahlo.it"],
        },
        {
            name: "Trieste for Peace",
            description: ["The sanctuary of St. Mary Major offers the city of Trieste a unique event of its kind and perfectly set in the new artistic cultural path identified by the Church of Pope Francis. A poetic secular world knocks on the door of heaven with words sealed in authoritative writings that the Pope himself sees as a proposal for a new and renewed spring of awakening of peace.",
            "The actor and director Francesco Gusmitta with the extraordinary participation of the voice of the great actor Giuseppe Pambieri addresses the texts of international authors Tagore- Albert Einstein- Friedrich Nietzsche - Simon Weil - Mons. Rafffaele Nogaro -Sandro Veronesi - Umberto Galimberti and Patrizio Ranieri Ciu among the musical notes of the famous orchestra fil (m) harmonica of Mossa APS conducted by Maestro Fabio Persoglia who introduces memorable musical reasons by E. Morricone, J. Williams H. Mancini and N . Rain.",
            "The show, which will last one hour, is the occasion of a tacit and sublime circumstance of request for help and intercession for a miracle of Peace inside and outside of us. in one of the saddest and darkest periods of our history.",
        ],
            img: ["events/pace/logo.jpeg", "events/pace/speaker.jpeg", "pois/churches/beataVergine.png",],
            season: "Summer",
            date: "The 12th of June",
            poiId: poi14.id,
            accessInfo: ["block", "block", "done"],
            timeInfo: ["The 12th of June:","from 08:30pm to 10:00pm"],
            prices: ["free access"],
            website: ["", ""],
        },
        {
            name: "Voxxed day Trieste",
            description: ["After Milan, Belgium, Switzerland, Romania, Greece, Luxembourg and Australia, the series of conferences known as Voxxed Days, part of the larger Devoxx family, arrives for the first time in Friuli Venezia Giulia, which welcomes thousands of programmers from all over the world. Voxxed Days Trieste will be a day dedicated to the Java programming language and modern software development techniques.",
            "Among the guests, well-known names in the field, such as Mario Fusco (RedHat), Java Champion and co-author of the book \"Modern Java In Action\" published by Manning who is entrusted with the keynote, Andres Almiray (Oracle), Java Champion and longtime Java / Groovy developer who will talk about microservices and data exchange with databases, and Heather Vancura (Oracle / JCP), program director of the Java Community Process who will talk about how decisions are made about new Java developments and how to contribute to those decisions. Then there will be Peter Palaga (RedHat), Nate Schutta (VMware) and Jakub Pilimon (VMware), other well-known names, who will talk about two frameworks widely used in the Java world, Spring and Quarkus.",
            "We will also talk about Chaos Engineering with Margherita Bonetto (AWS), Kubernetes and Istio with Sergii Bishyr (Hazelcast), Explainable AI with Irene Ferfoglia, and how to effectively migrate legacy code with Marco Denisi (Klarna). He will also not miss the opportunity to discuss with Kelly Jille (Order) about the importance of mentorship. Voxxed Days Trieste will therefore be an international event that plans to attract developers from the Triveneto and neighboring countries, thanks to the presence of international and local speakers and the use of English as the official language of the event.",
        ],
            img: ["events/Voxxed/logo.jpeg", "events/Voxxed/platea.png", "events/Voxxed/tizio.jpeg"],
            season: "Winter",
            date: "The 26th of November",
            poiId: poi4.id,
            accessInfo: ["done", "block", "done"],
            timeInfo: ["The 26th of November","from 9:00am to 04:00pm"],
            prices: ["For students the ticket costs 5€", "The regular admission is 12€"],
            website: ["https://voxxeddays.com/trieste/", "www.voxxeddays.com"],
        },
        {
            name: "Margherita Hack",
            description: ["On the day of the centenary of Margherita Hack's birth, at 10.00 at the U3E city headquarters, there will be a real moment of celebration.",
            "Will partecipate: Prof. Mauro Messerotti (CADIT), framing the astronomy environment in Trieste, both from a historical and human point of view, the prof. Paolo Molaro (INAF), former collaborator of Prof. Hack, will speak on his commitment in the scientific field andProf. Maria Luisa Princivalli (UniIIIE), her colleague and personal friend, will speak outlining the human side of our protagonist, her great social commitment, both for dissemination (especially in favor of young people) and towards society as a whole.",
            "Also a member of the regional astronomical poetry group \"From the Cosmos to the Word\" will participate.", 
            "The pianist Andrea Virtuoso will conclude the morning with a short program of classical and modern music on topics related to the topic of the event.",
        ],
            img: ["events/Hack/logo.jpeg", "events/Hack/cannocchiale.jpeg", "events/Hack/spazio.jpeg"],
            season: "Summer",
            date: "The 12th of June",
            poiId: poi0.id,
            accessInfo: ["done", "block", "done"],
            timeInfo: ["The 12th of June:","from 10:00am to 01:00pm"],
            prices: ["free for all"],
            website: ["https://www.astrofilitrieste.it/margherita-hack-una-grande-scienziata-dal-cuore-universale", "www.astrofilitrieste.it"],
        },
        {
            name: "Goran Bregovic concert",
            description: ["The long-awaited return of Goran Bregovic, accompanied by his “Wedding and Funeral Band”, for a concert that promises to be a great party!",
            "Contemporary composer, traditional musician or rock star, he didn't have to choose, he combined everything to invent music that is both universal and absolutely his own.",
            "Bregovic carries within himself the melting pot that characterized all his work \“I am from Sarajevo, I was born on a frontier: the only one where Orthodox, Catholics, Jews and Muslims met. My dad is Catholic, my mom is Orthodox, my wife is Muslim. And I also feel a bit of a gypsy, perhaps because for my father, a colonel in the army, it was unacceptable for me to be a musician - a gypsy profession - as he used to say\""        
        ],
            img: ["events/Bregovic/logo.jpeg", "events/Bregovic/palco.jpeg", "events/Bregovic/primopiano.jpeg"],
            season: "Summer",
            date: "The 23th of July",
            poiId: poi7.id,
            accessInfo: ["done", "block", "block"],
            timeInfo: ["The 23th of July:","from 9:00pm to 00:00am"],
            prices: ["Gold stalls: 57€","Stalls A: 46€","Stalls B: 40€"],
            website: ["https://www.ticketone.it/event/goran-bregovic-castello-san-giusto-15330134/", "www.ticketone.it"],
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
            img: "services/cafes/caffè.jpeg",
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
            name: "Farmacia al Cammello",
            serviceTypeId: type0.id,
            address: "viale XX Settembre 6, 34126 Trieste",
            description: [
                "The pharmacy performs the following services:",
                "- Blood pressure measurement (for a fee)",
                "- Online booking of specialist visits and examinations from 8:30 a.m. to 12:30 p.m.",
                "- Self-analysis service (cholesterol and triglycerides measurement).",
                "In this pharmacy you will find the breastfeeding and diaper changing corner." 
            ],           
            time: [
                "MONDAY: 8:30 - 19:30", 
                "TUESDAY: 8:30 - 19:30", 
                "WEDNESDAY: 8:30 - 19:30", 
                "THURSDAY: 8:30 - 19:30", 
                "FRIDAY: 8:30 - 19:30", 
                "SATURDAY: 8:30 - 12:30", 
                "SUNDAY: CLOSED"
                ],                 
            img: "services/medicals/cammello.jpeg",
            map: "Farmacia+al+Cammello,Trieste,Italy",
            info:[
                "website: www.comune.trieste.it/it/sociale-10345/farmacie-comunali-13332/farmacia-comunale-al-cammello-13448 ",
                "phone: +39 040 371377",
                "email: farmacam@comune.trieste.it" 
                ]

        },
        {
            name: "Farmacia al Cedro",
            serviceTypeId: type0.id,
            address: "Piazza Oberdan 2, 34133 Trieste",
            description: [
                "The pharmacy performs the following services:",
                "- Weight measurement (for a fee)",
                "- Online booking of specialist visits and examinations from 8:30 a.m. to 12:30 p.m.",
                "- Sale of oxygen cylinders.",
                "This pharmacy has some deals on masks and veterinary products" 
            ],            
            time: [
                "MONDAY: 8:30 - 13:00 / 16:00 - 19:30", 
                "TUESDAY: 8:30 - 13:00 / 16:00 - 19:30", 
                "WEDNESDAY: 8:30 - 13:00 / 16:00 - 19:30", 
                "THURSDAY: 8:30 - 13:00 / 16:00 - 19:30", 
                "FRIDAY: 8:30 - 13:00 / 16:00 - 19:30", 
                "SATURDAY: 8:30 - 12:30", 
                "SUNDAY: CLOSED"
                ],             
                img: "services/medicals/cedro.jpeg",
            map: "Farmacia+Cedro,Trieste,Italy",
            info:[
                "website: www.comune.trieste.it/it/sociale-10345/farmacie-comunali-13332/farmacia-comunale-al-cedro-13446 ",
                "phone: +39 040 364928",
                "email: farmacedro@comune.trieste.it" 
                ]

        },
        {
            name: "Parafarmacia Stazione",
            serviceTypeId: type0.id,
            address: "Piazza della Libertà 8, 34145 Trieste",
            description: [
                "Here you can find free sale and non-prescription medicines, drugs and products for veterinary use, homeopathic medicines, supplements, herbal medicines, and sanitary appliances.",
                "Services:",
                "- Food Intolerance Testing PAYMENT SERVICE, cost €35.00",
                "- BioTrico Test PAID SERVICE 79.00€",
                "- Fecal diagnostic tests PAID SERVICES (price upon request)",
                "- Hair and scalp check-up FREE SERVICE",
                "- Blood pressure measurement FREE SERVICE"
            ],            
            time: [
                "MONDAY: 7:30 - 13:30 / 15:00 - 19:00", 
                "TUESDAY: 7:30 - 13:30 / 15:00 - 19:00", 
                "WEDNESDAY: 7:30 - 13:30 / 15:00 - 19:00", 
                "THURSDAY: 7:30 - 13:30 / 15:00 - 19:00", 
                "FRIDAY: 7:30 - 13:30 / 15:00 - 19:00", 
                "SATURDAY: 8:30 - 12:30", 
                "SUNDAY: CLOSED"
                ],             
                img: "services/medicals/parafarmStazione.jpeg",
            map: "Parafarmacia+Alla+Stazione,Trieste,Italy",
            info:[
                "website: www.parafarmaciaallastazione.com",
                "phone: +39 040 415277",
                "email: info@parafarmaciaallastazione.com" 
                ]

        },
        {
            name: "Ospedale Cattinara",
            serviceTypeId: type0.id,
            address: "Strada di Fiume 447, 34149 Trieste",
            description: [
                "Cattinara Hospital is the main hospital facility that is part of the Julian Isontine University Health Authority. The hospital has been a Joint Commission International Academic Hospital accredited facility since 2008.", 
                "Through the CUP service it is possible to book and/or pay for specialist and radiological examinations and services provided by the Azienda Sanitaria Universitaria Integrata di Trieste (ASUITs)"
                ],            
            time: [
                "CUP booking hours:",
                "MONDAY: 7:30 - 13:30", 
                "TUESDAY: 7:30 - 13:30", 
                "WEDNESDAY: 7:30 - 13:30", 
                "THURSDAY: 7:30 - 13:30", 
                "FRIDAY: 7:30 - 13:30", 
                "SATURDAY: CLOSED", 
                "SUNDAY: CLOSED"
                ],              
            img: "services/medicals/cattinara.jpeg",
            map: "Ospedale+Cattinara,Trieste,Italy",
            info:[
                "website: asugi.sanita.fvg.it/it/presidi-ospedalieri/ospedale-cattinara/",
                "phone: +39 040 3994843/ 0434 223522",
                ]

        },
        {
            name: "Addicted to Paradise B&b",
            serviceTypeId: type1.id,
            address: "Via Benvenuto Cellini 2, 34132 Trieste",
            description: [
                "Located in Trieste, 800 meters from Piazza Unità d'Italia, Addicted to Paradise offers air-conditioned rooms and free WiFi throughout.",
                "All accommodations have a flat-screen TV, private bathroom and kettle with tea and coffee.",
                "Addicted to Paradise is 2.1 km from Trieste Port, 2.6 km from Lighthouse of Victory and 30 km from Trieste Airport.",
                "- Non-smoking facility",
                "- Wi-Fi",
                "- No parking",
                "- VIP check-in/check-out",
                "- Pets not allowed",
                "- Security",
                "- Adults only",
                "- Luggage storage",
                "- Elevator"
            ],            
            time: ["Check-in: from 15:00 till 22:00",
                    "Check-out: from 08:00 till 10:00"
            ],
            img: "services/hotels/paradise.jpeg",
            map: "Addicted+to+Paradise, Trieste,Italy",
            info:[
                "website: www.booking.com/hotel/it/addicted-to-paradise.it.html?aid=303945&label=trieste-GHW42veeBvqGTJwjDMhX6AS387551541816%3Apl%3Ata%3Ap1240%3Ap2€30%3Aac%3Aap%3Aneg%3Afi%3Atikwd-5152014741%3Alp1008358%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YasQqy722txixmRxsiY7aeU&sid=3b9a027e65f796d4797989dc886f2c7a&dest_id=-131346;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;nflt=class%3D4;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=bayesian_review_score;srepoch=1656420276;srpvid=03ec5990527e037c;type=total;ucfs=1&#hotelTmpl ",
                "phone: +39 339 642 6799",
                ]

        },
        {
            name: "DOMO Trieste",
            serviceTypeId: type1.id,
            address: "Via Mazzini, 33, 34121 Trieste",
            description: [
                "Located in Trieste, 400 meters from San Giusto Castle and 500 meters from Piazza Unità d'Italia, DOMO Trieste offers city views and free WiFi.",
                "All air-conditioned, accommodations feature a fully equipped kitchenette with dining area, a flat-screen TV and a private bathroom with bidet, hairdryer and toiletries. Some accommodations include a seating area and/or a balcony.",
                "Popular nearby sights include the Port of Trieste, the Roman Theater, and Kleine Berlin. Trieste Airport, the nearest, is located 30 km from DOMO Trieste.",
                "Services:",
                "- Non-smoking facility",
                "- Wi-Fi",
                "- Parking",
                "- Pets allowed",
                "- Security"
            ],            
            time: ["Check-in: from 15:30 till 18:00",
                "Check-out: until 11:00"
            ],
            img: "services/hotels/DOMO.jpeg",
            map: "DOMO+Trieste, Trieste,Italy",
            info:[
                "website: www.booking.com/hotel/it/domo-trieste.it.html?aid=303945&label=trieste-GHW42veeBvqGTJwjDMhX6AS387551541816%3Apl%3Ata%3Ap1240%3Ap2€30%3Aac%3Aap%3Aneg%3Afi%3Atikwd-5152014741%3Alp1008358%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YasQqy722txixmRxsiY7aeU&sid=3b9a027e65f796d4797989dc886f2c7a&dest_id=-131346;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=7;hpos=7;nflt=class%3D4;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=bayesian_review_score;srepoch=1656420276;srpvid=03ec5990527e037c;type=total;ucfs=1&#hotelTmpl",
                "phone: +39 040 982 0426" 
                ]

        },
        {
            name: "CA’MILLA Luxury Apartments",
            serviceTypeId: type1.id,
            address: "Via Cesare Beccaria 4, 34133 Trieste",
            description: [
                "Located in Trieste, near the Port, Piazza Unità d'Italia and San Giusto Castle, CA'MILLA Luxury Apartments Trieste offers free WiFi.",
                "The air-conditioned accommodations include a washing machine, a safe, a living room, a flat-screen TV, a kitchen with a dishwasher and microwave, and a private bathroom with a hairdryer and toiletries. They all include a seating area and a dining area.",
                "In the area you will find renowned sights such as the Kleine Berlin, Trieste's Roman Theater, and the Revoltella Museum. Trieste Airport, the nearest airport, is 30 km from CA'MILLA Luxury Apartments Trieste.",         
                "Services:",
                "- Non-smoking facility",
                "- Wi-Fi",
                "- Parking",
                "- Cot available on request ( € 5,00 extra per night)",
                "- Soundproofed rooms",
                " End-of-stay cleaning (compulsory 25,00 €)",
                "- Pets not allowed",
                "- Security"
            ],
            time: ["Check-in: from 15:00 till 23:30",
                "Check-out: from 08.30 till 11:00"
            ],            
            img: "services/hotels/camilla.jpeg",
            map: "CA'MILLA+Luxury+Apartments,Trieste,Italy",
            info:[
                "website: https://camilla-apartments.com/en/home-en/",
                "phone: +39 347 0885289",
                "email: info@camilla-apartments.com" 
                ]

        },
        {
            name: "DoubleTree By Hilton Trieste",
            serviceTypeId: type1.id,
            address: "Piazza della Repubblica 1, 34122 Trieste",
            description: [
                "Located in Trieste, 1.4 km from San Giusto Castle, Doubletree By Hilton Trieste offers a restaurant, private parking, a bar and a shared lounge. Awarded 4 stars, the hotel boasts a concierge service and tour desk. A 24-hour front desk, airport transfer service, room service and free WiFi throughout the building are also available.",
                "Rooms at the hotel are equipped with air conditioning, a work desk, kettle, minibar, safe, flat-screen TV and private bathroom with bidet. Accommodations also include a closet and coffee maker. Guests at the DoubleTree By Hilton Trieste can enjoy a continental or buffet breakfast. The wellness area includes a spa center and sauna.",
                "Popular points of interest nearby the Doubletree By Hilton Trieste include Piazza Unità d'Italia, Trieste's Roman Theater and Kleine Berlin. The nearest airport is Trieste Airport, 34 km away.",
                "Services:",
                "- Non-smoking facility",
                "- Wi-Fi",
                "- Parking",
                "- Pets allowed",
                "- Security"
            ],   
            time: ["Check-in:  from 15:00",
                "Check-out: until 12:00"
            ],             
            img: "services/hotels/hilton.jpeg",
            map: "DoubleTree+By+Hilton, Trieste,Italy",
            info:[
                "website: https://www.hiltonhotels.it/italia/doubletree-by-hilton-trieste/",
                "phone: +39 040 9712950",
                "email: TRSDT_RES@hilton.com" 
                ]

        },
        {
            name: "Vecio Buffet Marascutti",
            serviceTypeId: type2.id,
            address: "via Battisti 2/b, 34100 Trieste",
            description: ["Since 1914, Buffet Marascutti has been one of the landmarks for the people of Trieste and for those who want to feel, while eating, centuries of history.",
            "Among the dishes offered at the Marascutti Buffet many are of Austrian origin. The menu is rich, but always respectful of the tradition.",
            "Definitely try the hot ham crusted with horseradish, the bread and ham dumplings, the jota and the mixed boiled meat dish, and in summer even the fish! For the super sweet tooth excellent homemade desserts. Good wine labels from the region along with a good selection of beers."
            ],
            time: [
                "MONDAY: 12:00-15:00/ 19:00-22:00", 
                "TUESDAY: CLOSED", 
                "WEDNESDAY: 12:00-15:00/ 19:00-22:00", 
                "THURSDAY: 12:00-15:00/ 19:00-22:00", 
                "FRIDAY: 12:00-15:00/ 19:00-22:00", 
                "SATURDAY: 12:00-15:00/ 19:00-22:00", 
                "SUNDAY: 12:00-15:00/ 19:00-22:00"
                ],            
            img: "services/restaurants/marascutti.jpeg",
            map: "Vecio+Buffet+Marascutti,Trieste,Italy",
            info:[
                "website: http://www.buffetmarascutti.it",
                "phone: +39 040 633719 / 389 6595444",
                "email: info@buffetmarascutti.it" 
                ]

        },
        {
            name: "Osteria Marise",
            serviceTypeId: type2.id,
            address: "Via Felice Venezian 11/F,34124 Trieste ",
            description: [
                "Marise is a small Trieste osteria located right in the heart of the old city, in the Cavana area, just a few steps from the beautiful Piazza Unità d'Italia. It is since 2010, the year the osteria opened, that Gianfranco and Monica have been trying to create a family atmosphere by offering dishes of typical local gastronomy and more.",
                "Even though the menu they have is not extremely wide, it is possible to find various fish and meat dishes, as well as some vegetarian proposals. All this can be consumed in a warm and cozy atmosphere, with attention to detail to make you feel like at home, with the unfailing presence of a good glass of local wine."
            ],            
            time: [
                "MONDAY: 12:00-14:30/ 19:00-22:30", 
                "TUESDAY: 12:00-14:30/ 19:00-22:30", 
                "WEDNESDAY: CLOSED", 
                "THURSDAY: CLOSED", 
                "FRIDAY: 12:00-14:30/ 19:00-22:30", 
                "SATURDAY: 12:00-14:30/ 19:00-22:30", 
                "SUNDAY: 12:00-14:30/ 19:00-22:30"
            ],             
            img: "services/restaurants/marise.jpeg",
            map: "Osteria+Marise,Trieste,Italy",
            info:[
                "website: www.osteriamarise.it",
                "phone: +39 040 3229149",
                "email: info@osteriamarise.it" 
            ]

        },
        {
            name: "Buffet da Pepi",
            serviceTypeId: type2.id,
            address: "Via Cassa di Risparmio 3, 34121 Trieste",
            description: [
                "The unique cuisine of Buffet da Pepi is rooted in the Austro-Hungarian tradition, which has come intact to this day using the original technique of cooking pork in a cauldron, a local variant of boiled meat in broth. ",
                "You can therefore be delighted by the incomparable mixed platter, which will give you the opportunity to taste all their specialties together. Or, if you are in a hurry, a quick and tasty porzin (porcina, spiced pork neck) sandwich, seasoned and flavored with mustard and kren (fresh grated horseradish)."
            ],            
            time: [
                "MONDAY: 08.30-22.00", 
                "TUESDAY: 08.30-22.00", 
                "WEDNESDAY: 08.30-22.00", 
                "THURSDAY: 08.30-22.00", 
                "FRIDAY: 08.30-22.00", 
                "SATURDAY: 08.30-22.00", 
                "SUNDAY: 10.00-16.00"
            ],             
            img: "services/restaurants/pepi.jpeg",
            map: "Buffet+da+Pepi,Trieste,Italy",
            info:[
                "website: www.buffetdapepi.it",
                "phone: +39 040 366858",
                "email: info@buffetdapepi.it" 
                ]

        },
        {
            name: "Caffè Tommaseo",
            serviceTypeId: type3.id,
            address: "Piazza Nicolò Tommaseo, 4, 34122 Trieste",
            description: [
            "Café Tommaseo is the oldest café still in operation in the city of Trieste. Opened in 1830, the café was one of the centers of Trieste's irredentist movement and is still a gathering place for Trieste's merchants, artists and intellectuals. It is part of Italy's historic cafes.",
            "The Tommaseo is characterized by a reserved and elegant décor, along the lines of Viennese clubs. It is possible to admire its spaces as they used to be: through its main entrance one reaches an elegant cream-colored lounge, with neoclassical-style decor.",
            "The venue offers a Pastry Shop, Cafeteria, Breakfast, Buffet, Restaurant, American Bar specializing in Tropical Cocktails and Long Drinks. Live music performances are offered in the evenings from Thursday to Saturday and Concertini every Sunday morning from 11 a.m. to 1:30 p.m. Art Exhibitions are also organized."
            ],
            time: [
            "MONDAY: 9:00-22:30", 
            "TUESDAY: 9:00-22:30", 
            "WEDNESDAY: 9:00-22:30", 
            "THURSDAY: 9:00-22:30", 
            "FRIDAY: 9:00-22:30", 
            "SATURDAY: 9:00-22:30", 
            "SUNDAY: 9:00-22:30"
            ],
            img: "services/cafes/caffè_tommaseo.jpeg",
            map: "Caffè+Tommaseo,Trieste,Italy",
            info:[
            "website: www.caffetommaseo.it ",
            "phone: +39 040 362666",
            "email: info@caffetommaseo.it" 
            ]

        },
        {
            name: "Antico Caffè San Marco",
            serviceTypeId: type3.id,
            address: "via Battisti 18/A, 34125 Trieste",
            description: [
                "Caffè San Marco, one of Trieste's best-known historic cafes, was opened in 1914 at 18 Via Battisti. The café preserves its charm intact and is awarded the prestigious distinction of 'historical café of Italy'",                
                "As soon as you walk through the front door, you are immediately enraptured by a magical atmosphere: the Art Nouveau furnishings, the brass chandeliers hanging from the high ceilings covered with bronze-colored coffee leaves, the red Verona marble tables, the large mirrors on the walls where images of the original paintings are reflected.",                
                "The cafè offers a pastry shop, cafeteria, breakfast, restaurant service and a library",
                "There are many concerts, meetings, presentations, reviews and events held at the café both during the week and on weekends."                
            ],
            time: [
            "MONDAY: 8:30-23:00", 
            "TUESDAY: 8:30-23:00", 
            "WEDNESDAY: 8:30-23:00", 
            "THURSDAY: 8:30-23:00", 
            "FRIDAY: 8:30-23:00", 
            "SATURDAY: 8:30-23:45", 
            "SUNDAY: 9:00-21:00"
            ],
            img: "services/cafes/caffè_san_marco.jpeg",
            map: "Antico+Caffè+San+Marco,Trieste,Italy",
            info:[
            "website: www.caffesanmarco.com",
            "phone: +39 040 2035357",
            "email: info@caffesanmarco.com"
        ]


        },
        {
            name: "Molo 4 Club",
            serviceTypeId: type4.id,
            address: "Corso Camillo Benso Conte di Cavour 3, 34132 Trieste",
            description: [
            "One of the top advantages of city living is the opportunity to experience ultra-fun attractions.", 
            "Molo4 is a spot to hoof it all night. Either you are a devoted dancer or a beginner, take a break from the real world and enjoy the period of release on the fantastic terrace by the sea.",
            "The club is one of the most loved by the locals and is highly advisable by the visitors."
            ],
            time:[
            "MONDAY: CLOSED", 
            "TUESDAY: CLOSED", 
            "WEDNESDAY: 22:00-04:00", 
            "THURSDAY: CLOSED", 
            "FRIDAY: 22:00-04:00", 
            "SATURDAY: 22:00-04:00", 
            "SUNDAY: CLOSED"
            ],            
            img: "services/entertainments/molo4.jpeg",
            map: "Molo+4,Trieste,Italy",
            info:[
                "website: www.facebook.com/AnubiMolo4",
                "email: anubitrieste@libero.it"
            ]
        },
        {
            name: "The Space Cinema",
            serviceTypeId: type4.id,
            address: "Via Italo Svevo, 14, 34144 Trieste",
            description:[
                "The Space Cinema Trieste offers 7 theaters, all equipped with Digital Dolby Surround technology, comfortable and spacious seats, including VIP.  There is also a food court, where you can find soft drinks and cafeteria, popcorn, snacks, candy and more.", 
                "You can enjoy all the latest releases, including in original language or 3D. Experience a world of entertainment with Extra events: opera, ballet, concerts, documentaries and theater."
            ],
            time:[
            "MONDAY: 15:30-23:00", 
            "TUESDAY: 15:30-23:00", 
            "WEDNESDAY: 15:30-23:00", 
            "THURSDAY: 16:00-23:00", 
            "FRIDAY: 16:00-23:00", 
            "SATURDAY: 16:00-01:00", 
            "SUNDAY: 16:00-00:00"
            ],
            img: "services/entertainments/space_cinema.jpeg",
            map: "The+Space+Cinema,Trieste,Italy",
            info:[
                "website: https://www.thespacecinema.it/i-nostri-cinema/trieste/al-cinema",
                "phone: +39 892111",
            ]
        },
        {
            name: "Teatro Verdi",
            serviceTypeId: type4.id,
            address: "Piazza Giuseppe Verdi, 34121 Trieste",
            description: ["The Teatro Verdi, which originated as the Teatro Nuovo, is one of the oldest opera houses in operation. The Giuseppe Verdi Opera Theater Foundation of Trieste carries out a busy year-round activity through an Opera and Ballet season, a rich season of symphonic and chamber music.", 
            "The entire program is available on their website."
            ],
            time:[
                "Ticket office:",
                "MONDAY: 15:30-23:00", 
                "TUESDAY: 09:00-16:00", 
                "WEDNESDAY: 09:00-16:00", 
                "THURSDAY: 09:00-16:00", 
                "FRIDAY: 09:00-16:00", 
                "SATURDAY: 09:00-16:00", 
                "SUNDAY: 09:00-13:30"
                ],
            img: "services/entertainments/teatro_verdi.jpeg",
            map: "Teatro+Verdi,Trieste,Italy",
            info:[
                "website: www.teatroverdi-trieste.com/en/",
                "phone: +39 040 6722298 / 040 6722299",
                "email: boxoffice@teatroverdi-trieste.com or info@teatroverdi-trieste.com"
            ]
        },
    ]
    //with create is just one element
    //with bulkCreate is moreElements like arrays
    await models.Event.bulkCreate(eventList)
    //await models.PointOfInterest.bulkCreate(poiList)
    await models.SingleService.bulkCreate(singleServiceList)
}