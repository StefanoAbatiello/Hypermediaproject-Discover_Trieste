<template>
    <div class="container-fluid mt-4 p-5 text-white rounded">
      <div class="text-white text-left sign">
        <h1 class="title">{{ seasonName }} events list</h1>
      </div>
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
</style>