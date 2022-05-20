<template>
  <div class="container-fluid px-0 mt-1 mb-4">
    <div class="text-white sign row">
      <div class="col">
        <h1 class="title text-left">{{ seasonName }} events list</h1>
        <ul class="ms-3 breadcrumb">
          <li class="breadcrumb-item text-white">
            <a @click="backToEventsMenu()">eventsMenu/</a>
          </li>
        </ul>
      </div>

      <div class="col offset-md-6 align-self-end botton-cont">
        <button
          type="button"
          class="btn btn-lg mb-3 ms-2 btn-back text-white"
          @click="backToEventsMenu()"
        >
          Back to the events' Menu
        </button>
      </div>
    </div>
    <div class="list">
      <itinerary-step
        v-for="(event, eventIndex) of eventList"
        :id="event.id"
        :key="`event-index-${eventIndex}`"
        class="m-2 rounded-3"
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
    backToEventsMenu() {
      this.$router.push('/eventsMenu')
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
  margin-left: 100px;
  margin-right: 100px;
}
.btn-back {
  border-color: whitesmoke;
  color: rgb(195, 75, 75);
}
.botton-cont{
  align-items: center;
}
</style>