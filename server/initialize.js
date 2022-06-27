//Here we put all the datas, according to the structure defined in api.js
export default async (models) => {
    const itineraryList = [
        {
            name: " Architectural Liberty tour",
            img: ["pois/liberty/casaTerni2.jpeg", "pois/liberty/casaDeStabileOld.jpeg", "pois/liberty/banca2.jpeg"],
            map: "Casa+De+Stabile,Trieste,Italy&destination=Casa+Terni,Trieste,Italy&waypoints=Palazzo+Vivante,Trieste,Italy|Salone+Incanti,Trieste,Italy|Banca+Di+Praga,Trieste,Italy&avoid=tolls|highways&mode=walking",
            distances: ["2,1 km", "6889 feet"],
            description: "Liberty was a style that aroused more than a few controversies and objections, often having more of a political and ideological nature than an artistic one. An example is the final verdict of Silvio Benco, a well-known exponent of Trieste's culture who had clear irredentist tendencies.With the significant demographic changes and, more importantly, the incredible economic development of the city, the emerging middle class had new stylistic and construction needs. Liberty became the only decorative style that could be grafted onto Eclecticism, the previous trend that had heavily influenced the city."
        },
        {
            name: "Dip into Roman archeology",
            img: ["pois/roman/teatro.jpeg", "pois/roman/lapidarioTergestino.jpeg","pois/roman/antiquarium.jpeg"],
            map: "Teatro+Romano,Trieste,Italy&destination=Antiquarium,Trieste,Italy&waypoints=Arco+Riccardo,Trieste,Italy|Castello+Di+San+Giusto,Trieste,Italy|Lapidario+Tergestino,Trieste,Italy&avoid=tolls|highways&mode=walking",
            distances: ["7,1 km", "23294 feet"],
            description: "The most ancient traces of the urban settlement of Trieste are considered to be the remains of the Roman colony of Tergeste, founded toward the middle of the 1st century B.C. and extending to the northwestern slope of the hill of San Giusto, overlooking the Adriatic Sea. The coast was farther back than it is now, and evidence of the harbor structures have been found along via del Teatro Romano and via Cavana: the wharves, built of sandstone slabs in the 1st and early 2nd century A.D., were in use at least until the 5th century. In 33-32 B.C. the city was enclosed by walls, which soon lost their defensive function and served for containment and terracing of the slope. The lay of the land conditioned urban organization from the outset, with the business district close to the harbor, a largely residential district on the hillside and the political, administrative and religious center at the top of the hill."
        },
        {
            name: "Discover the most important churches",
            img: ["pois/churches/insideNicoloGreci.jpeg", "pois/churches/chiesaOrtodossa.jpeg", "pois/churches/sanGiusto.jpeg"],
            map: "Cattedrale+San+Giusto,Trieste,Italy&destination=Chiesa+Della+Beata+Vergine,Trieste,Italy&waypoints=Chiesa+Di+Nicolo+Dei+Greci,Trieste,Italy|Chiesa+ortodossa,Trieste,Italy|Sinagoga,Trieste,Italy&avoid=tolls|highways&mode=walking",
            distances: ["3 km", "9842 feet"],
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
            stepDescription:"",
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
            stepDescription:"",
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
            stepDescription:"",
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
            stepDescription:"",
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
            stepDescription:"",
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
            stepDescription:"",
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