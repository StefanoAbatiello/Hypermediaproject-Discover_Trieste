<template>
  <div class="page container mt-5">
    <h1 class="display-4">Events</h1>
    <div class="row mt-3">
      <menu-card
        class="col-sm-2 m-2"
        :season="`summer`"
        :name="`Summer Event`"
        :img="`https://www.creativebloggingworld.com/wp-content/uploads/2021/07/Corporate-Summer-Event-Ideas-1024x768.jpg`"
      />
      <menu-card
        class="col-sm-2 m-2"
        :season="`winter`"
        :name="`Winter Event`"
        :img="`https://www.lanottevola.com/wp-content/uploads/2018/11/La-Notte-Vola-Winter-edition-1024x589.jpg`"
      />
      <menu-card
        class="col-sm-2 m-2"
        :season="`allYear`"
        :name="`All Event of the year`"
        :img="`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUrcKD15Ed83Cx64PgjjPfbWuV_1-WYEjaA&usqp=CAU`"
      />
    </div>
  </div>
</template>

<script>
import MenuCard from '~/components/MenuCard.vue'
export default {
  name: 'EventsPage',
  components: {
    MenuCard,
  },
  data() {
    return {
      // eventList: []
    }
  },
  // Note: This happens on backend (server) side
  // async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/events')
    // const { data } = await $axios.get('/api/allEvents')
    // return {
    //  eventList: data,
    // }
  // },

}
</script>