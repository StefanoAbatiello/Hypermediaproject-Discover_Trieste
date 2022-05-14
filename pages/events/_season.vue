<template>
  <div class="page container mt-5">
    <h1 class="display-4">Events</h1>
    <div class="row mt-3">
      <list-card
        v-for="(event, eventIndex) of eventList"
        :key="`event-index-${eventIndex}`"
        class="col-sm-2 m-2"
        :id="event.id"
        :category="`event`"
        :name="event.name"
        :img="event.img"
      />
    </div>
  </div>
</template>

<script>
import ListCard from '~/components/ListCard.vue'
export default {
  name: 'EventsPage',
  components: {
    ListCard
  },
  data() {
    return {
      // eventList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ route,$axios }) {
    const { season } = route.params
    const { data } = await $axios.get('/api/events/' + season)
    return {
      eventList: data,
    }
  },

}
</script>