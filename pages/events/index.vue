<template>
  <div>
    <!-- Image to display in the header part of the page -->
    <div class="image-header mb-5">
      <img class="img" :src="require(`~/assets/homeImg/eventCopertina.webp`)" alt="background"/>
      <div class="overlay"></div>
      <h1>Events</h1>
    </div>
    <!-- filters section -->
    <section class="container filters">
      <div class="row row-cols-4 justify-content-start">
        <div class="col-sm-4 col-lg-3">
          <button id="Summer" class="filter m-1 w-100" @click="filterSeason('Summer')" >
            summer
          </button>
        </div>
        <div class="col-sm-4 col-lg-3">
          <button id="Winter" class="filter m-1 w-100" @click="filterSeason('Winter')" >
            winter
          </button>
        </div>
      </div>
    </section>
    <!-- Part to display the cards of all events -->
    <section class="mt-3 event-list">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          <preview-card
            v-for="(event, eventIndex) of eventList"
            :id="event.id"
            :key="`event-index-${eventIndex}`"
            class="event"
            :name="event.name"
            :img="event.img"
            :season="event.season"
            :texts="[event.date, event.locName]"
            :category="'events'"
            :icons="['event', 'navigation']"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PreviewCard from '~/components/PreviewCard.vue'
export default {
  name: 'EventsPage',
  components: {
    PreviewCard,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  },
  methods: {
    // Method to handle the content of the displayed filters
    filterSeason(season) {
      const filters = document.getElementsByClassName('filter')
      for (let i = 0; i < filters.length; i++) {
        const filter = filters[i]
        if (filter.id === season) {
          if (filter.style.background === '') {
            this.seeSeason(season)
            filter.style.background = 'royalblue'
            filter.style.color = 'white'
          } else {
            this.seeAll()
            filter.style.background = ''
            filter.style.color = 'royalblue'
          }
        } else {
          filter.style.background = ''
          filter.style.color = 'royalblue'
        }
      }
    },
    // method to display all the events in the selected season
    seeSeason(season) {
      const events = document.getElementsByClassName('event')
      for (let i = 0; i < events.length; i++) {
        if (events[i].id === season) {
          events[i].style.display = ''
        } else {
          events[i].style.display = 'none'
        }
      }
    },
    // Method to display all the events, when a filter is applied
    seeAll() {
      const events = document.getElementsByClassName('event')
      for (let i = 0; i < events.length; i++) {
        events[i].style.display = ''
      }
    },
  },
}
</script>

<style scoped>
.filter {
  font-size: 20px;
  background: white;
  border: 1px solid royalblue;
  color: royalblue;
  overflow: hidden;
  border-radius: 30px 30px 30px 30px;
}
.image-header {
  height: 30rem;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30rem;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.3);
}
</style>