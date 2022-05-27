<template>
  <div class="container-fluid px-0 mt-1 mb-4">
    <div class="text-white text-left sign">
      <h1 class="title">Events</h1>
    </div>
    <div class="filters">
      Filter by season:
      <div class="filter mb-1">
        <nuxt-link :to="`/seasonal/Summer`" class="col">
          <div class="btn text-danger btn-details w-100">summer</div>
        </nuxt-link>
      </div>
      <div class="filter mt-1">
        <nuxt-link :to="`/seasonal/Winter`" class="col">
          <div class="btn text-danger btn-details w-100">winter</div>
        </nuxt-link>
      </div>
    </div>
    <div class="row row-line list">
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
</template>

<script>
import EventsCard from '~/components/EventsCard.vue'
export default {
  name: 'EventsPage',
  components: {
    EventsCard,
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
.filters {
  position: fixed;
  top: 150px;
  left: 10px;
}
.filter {
  opacity: 0.6;
}
.filter:hover {
  opacity: 1;
}
</style>