<template>
  <div class="container-fluid px-0 mt-1 mb-4">
    <div class="text-white sign row justify-content-between">
      <div class="col">
        <h1 class="title text-left">{{ seasonName }} events</h1>
        <ul class="ms-3 breadcrumb">
          <li class="breadcrumb-item text-white">
            <a @click="backToEvents()">All events/</a>
            <a>{{seasonName}} events</a>
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
    <div class="list">
      <itinerary-step
        v-for="(event, eventIndex) of eventList"
        :id="event.id"
        :key="`event-index-${eventIndex}`"
        class="rounded-3 step"
        :name="event.name"
        :img="event.img"
        :description="event.date"
        :category="`event`"
      />
    </div>
  </div>
</template>

<script>
import ItineraryStep from '~/components/ItineraryStep.vue'
export default {
  name: 'EventsPage',
  components: {
    ItineraryStep,
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
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 25px;
}
.step:hover {
  border: 3px solid rgb(195, 75, 75);
  opacity: 1;
}
.step {
  opacity: 0.8;
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