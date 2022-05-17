<template>
  <div class="container-fluid px-5 mb-5 mt-3">
    <div class="bg-danger text-white text-left">
      <h1>Events grouped by season</h1>
    </div>
    <div class="row mt-3 row-line">
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
}
</script>

<style scoped>
.row-line {
  display: flex;
  justify-content: center;
}
</style>