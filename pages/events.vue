<template>
  <div class="container-fluid px-0 mt-1 mb-4">
    <div class="text-white text-left sign">
      <h1 class="title">Events</h1>
    </div>
    <div class="row mt-3 row-line">
      <season-card
        class="col-sm-2 m-2"
        :season="`Summer`"
        :name="`Summer Event`"
        :img="`https://www.creativebloggingworld.com/wp-content/uploads/2021/07/Corporate-Summer-Event-Ideas-1024x768.jpg`"
      />
      <season-card
        class="col-sm-2 m-2"
        :season="`Winter`"
        :name="`Winter Event`"
        :img="`https://www.lanottevola.com/wp-content/uploads/2018/11/La-Notte-Vola-Winter-edition-1024x589.jpg`"
      />
    </div>
    <div class="row mt-3 row-line">
      <list-card
        v-for="(event, eventIndex) of eventList"
        :id="event.id"
        :key="`event-index-${eventIndex}`"
        class="col-sm-2 m-2"
        :name="event.name"
        :img="event.img"
        :category="'event'"
      />
    </div>
  </div>
</template>

<script>
import ListCard from '~/components/ListCard.vue'
import SeasonCard from '~/components/SeasonCard.vue'
export default {
  name: 'EventsPage',
  components: {
    ListCard,
    SeasonCard
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  },
}
</script>

<style scoped>
.row-line {
  display: flex;
  justify-content: center;
}
.title {
  margin-left: 10px;
}
.sign {
  background: rgb(195, 75, 75);
}
</style>