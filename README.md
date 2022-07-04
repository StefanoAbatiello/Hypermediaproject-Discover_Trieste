# **Hypermedia Application project - AY 2021-2022**
## Project documentation
The website has been developed following a tree structure.
The main page is the homepage where there are links for the group pages of the website: Services, Points of interest, Itineraries, Events, Contacts and About.
Services, Pois, Itineraries and Events structure in the website follows more or less the same scheme: there is an index page with a menu that groups all the previews of the single detailed pages of that specific theme.
Starting from the index page, the user have a general view on all the "group of topics" pages and can decide to detailed explore one of them clicking on the preview. At this point the user can visit the "kind of topic" page where he finds detailed info and eventually links to other correlated pages.
All the "group of topic"  pages that can be found in the homepage are reachable at any time while browsing the website thanks to a menu on the header and the logo (which is a link to the homepage and it's clickable also from the footer).

You can find the official documentation at this link:[__documentation__](https://github.com/stefanotaborelli/ACSS/blob/main/DesignDocument/latex/DesignProject.pdf)

## Database design
In order to retrieve information for dynamical pages, we design a database containing all the "topics" data.
Here is given the ER-Diagram to have an high-level view of the entities we decided to store in the database and the relationships among them.

![alt text](https://github.com/stefanotaborelli/ACSS/blob/main/DesignDocument/latex/assets/Tables/ER-Diagram.png)

## Best practice adopted
In this project we have used Vue and Nuxt as frameworks.
### Nuxt

We exploit the potentialities of Nuxt, mostly used to write the backend, as follows:
* Project structure well
* Divided in category to work in a organized manner during the deployment
* AsyncData function allowed us to easily retrieve data from the database
* Nuxt-link exploit to route the user trough the different pages

### Vue

We exploit the potentialities of Vue, used to write the frontend, as follows:
* Modularity and reusability allow to create components and taking advantage of them to create reusable code structures
* Logical statements used in the components (i.e. v-if, v-for,...) allowed us to create dynamic components
* Apply styling directly on the page/component helps to develop pages layout in an easy way

## Project structure

### `assets`

The assets directory contains all the images needed for the website and the global css file.

### `components`

The components directory contains Vue.js components used to build the website in a reusable way. Components make up the different parts of your page and can be reused and imported into pages and even other components.

### `pages`

This directory contains the application views and routes. It is organized in a tree structured way in order to have the main "index page" (the homepage) from where we can access to all "group pages" (organized in folder, containing another _index_ page for the group page and the _id_ one for the detailed page).

### `server`

This directory is divided into:

* api : handle the requests to retrieve the data from the database
* inizialize : this file is used to load data in the database when the server is starting


## Build Setup
To test the website in localhost (without the server), you need to remove the comment in line 60 and comment the line 61 in nuxt.config.js and then remove the comment in line 8 and comment from line 9 to line 14 in api.js; at this point, type the following line commands in the terminal of the project:
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```
Otherwise, if you want just to try our webpage you can also click ok this link [__app__](https://discovertrieste.herokuapp.com/) to visit it as a normal page (runned on Heroku server).

## Team members and contribution [ACSS]
| Team member | Personal e-mail | Developed section | Personal workload |
|:-----------------------|:---------------------------:|:-------------------------:|:-------------------:|
| Abatiello Stefano [10615759]| stefano.abatiello@mail.polimi.it | Events pages | 49 hours |
| Bianco Alessandro [10659523] | alessandro2.bianco@mail.polimi.it | Itinerary pages | 46 hours |
| Blasucci Camilla [10640601]| camilla.blasucci@mail.polimi.it | Type of service pages | 45 hours |
| Taborelli Stefano [10608112]| stefano.taborelli@mail.polimi.it | Point of interest pages | 47 hours |

All the components in common and the other pages were developed in group (parallel co-work) for a total amount of al least 75 hours.
