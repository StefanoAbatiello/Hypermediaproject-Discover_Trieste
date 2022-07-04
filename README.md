# **Hypermedia Application project - AY 2021-2022**
## Team members and contribution [ACSS]

| Team member | Personal e-mail | Developed section | Personal workload |
|:-----------------------|:---------------------------:|:-------------------------:|:-------------------:|
| Abatiello Stefano [10615759]| stefano.abatiello@mail.polimi.it | Events pages | 49 hours |
| Bianco Alessandro [10659523] | alessandro2.bianco@mail.polimi.it | Itinerary pages | 46 hours |
| Blasucci Camilla [10640601]| camilla.blasucci@mail.polimi.it | Type of service pages | 45 hours |
| Taborelli Stefano [10608112]| stefano.taborelli@mail.polimi.it | Point of interest pages | 47 hours |

All the components in common and the other pages were developed in group (parallel co-work) for a total amount of al least 75 hours.

## Project documentation
The website has been developed following a tree structure.
The main page is the homepage where there are links for the group pages of the website: Services, Points of interest, Itineraries, Events, Contacts and About.
Services, Pois, Itineraries and Events structure in the website follows more or less the same scheme: there is an index page with a menu that groups all the previews of the single detailed pages of that specific theme.
Starting from the index page, the user have a general view on all the "group of topics" pages and can decide to detailed explore one of them clicking on the preview. At this point the user can visit the "kind of topic" page where he finds detailed info and eventually links to other correlated pages.
All the "group of topic"  pages that can be found in the homepage are reachable at any time while browsing the website thanks to a menu on the header and the logo (which is a link to the homepage and it's clickable also from the footer).

You can find the official documentation at this link: add link.. 

## Database design
In order to retrieve information for dynamical pages, we design a database containing all the "topics" data.
Here is given the ER-Diagram to have an high-level view of the entities we decided to store in the database and the relationships among them.

## Best practice adopted
In this project we have used Vue and Nuxt as frameworks.
### Nuxt
We exploit the potentialities of Nuxt, mostly used to write the backend, as follows:
– Project structure well
-divided in category to work in a organized manner during the deployment
– asyncData function allowed us to easily retrieve data from the database
– Nuxt-link exploit to route the user trough the different pages
### Vue
We exploit the potentialities of Vue, used to write the frontend, as follows:
– Modularity and reusability allow to create components and taking advantage of them to create reusable code structures
– Logical statements used in the components (i.e. v-if, v-for,...) allowed us to create dynamic components
– Apply styling directly on the page/component helps to develop pages layout in an easy way

## Build Setup
To test the website in localhost (without the server), you need to remove the comment in line 60 and comment the line 61 in nuxt.config.js and then remove the comment in line 8 and comment from line 9 to line 14 in api.js; at this point, type the following line commands in the terminal of the project:
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```
Otherwise, if you want just to try our webpage you can also click ok this link [__app__](https://discovertrieste.herokuapp.com/) to visit it as a normal page (runned on Heroku server).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
