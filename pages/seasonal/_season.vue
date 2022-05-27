<template>
  <div class="container-fluid px-0 mt-1 mb-4">
    <div class="text-white sign row justify-content-between">
      <div class="col">
        <h1 class="title text-left">{{ seasonName }} events</h1>
        <ul class="ms-3 breadcrumb">
          <li class="breadcrumb-item text-white">
            <a @click="backToEvents()">All events/</a>
            <a>{{ seasonName }} events</a>
          </li>
        </ul>
      </div>
      <div class="col align-self-center botton-cont">
        <button
          type="button"
          class="btn btn-lg mb-3 ms-2 btn-back text-white"
          @click="backToEvents()"
        >
          See all events
        </button>
      </div>
    </div>
    <div>
      <div class="row row-line list mt-3">
        <events-card
          v-for="(event, eventIndex) of eventList"
          :id="event.id"
          class="col"
          :key="`event-index-${eventIndex}`"
          :name="event.name"
          :img="event.img"
          :category="'event'"
          :date="event.date"
          :location="event.locName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EventsCard from '~/components/EventsCard.vue'
export default {
  name: 'EventsPage',
  components: {
    EventsCard,
  },
  // Note: This happens on backend (server) side
  async asyncData({ route, $axios }) {
    const { season } = route.params
    const { data } = await $axios.get('/api/events/' + season)
    return {
      eventList: data,
      seasonName: season,
    }
  },
  methods: {
    backToEvents() {
      this.$router.push('/events')
    },
  },
}
</script>

<style scoped>
.title {
  margin-left: 10px;
}
.row-line {
  display: flex;
  justify-content: center;
}
.sign {
  background: rgb(195, 75, 75);
}
.list {
  margin-left: 12%;
  margin-right: 8%;
}
.btn-details {
  background: white;
  text-shadow: 4px 4px 4px rgb(195, 75, 75);
  border: 2px solid rgb(195, 75, 75);
  font-size: 15px;
}
.btn-back {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(0%, -50%);
  border-color: whitesmoke;
  color: rgb(195, 75, 75);
}
.botton-cont {
  position: relative;
}
</style>