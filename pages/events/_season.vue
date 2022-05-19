<template>
  <div class="container-fluid px-0 mb-4 mt-1">
    <div class="text-white text-left sign">
      <h1 class="title">{{seasonName}} events list</h1>
    </div>
    <div class="row mt-3 row-line">
      <list-card
        v-for="(event, eventIndex) of eventList"
        :id="event.id"
        :key="`event-index-${eventIndex}`"
        class="col-sm-2 m-2"
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
  // Note: This happens on backend (server) side
  async asyncData({ route,$axios }) {
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
.title{
  margin-left: 10px;
}
.row-line {
  display: flex;
  justify-content: center;
}
.sign{
  background: rgb(195, 75, 75);
}
</style>