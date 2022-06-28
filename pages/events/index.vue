<template>
  <div>
    <div class="image-header mb-5">
      <img style="height: 22rem; widht: 25rem" />
      <ht> Events </ht>
    </div>
    <section class="container filters">
      <div class="row justify-content-start">
        <div class="col-sm-2">
          <button
            id="Summer"
            class="filter m-1 w-100"
            @click="filterSeason('Summer')"
          >
            <a>summer</a>
          </button>
        </div>
        <div class="col-sm-2">
          <button
            id="Winter"
            class="filter m-1 w-100"
            @click="filterSeason('Winter')"
          >
            <a>winter</a>
          </button>
        </div>
      </div>
    </section>
    <section class="mt-3 event-list">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
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
            :icons="['schedule', 'navigation']"
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
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  },
  methods: {
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
  font-size: 1.5vw;
  background: white;
  border: 1px solid royalblue;
  color: royalblue;
  overflow: hidden;
  border-radius: 30px 30px 30px 30px;
}
.image-header {
  background-image: url('assets\homeImg\trieste2.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
}
</style>