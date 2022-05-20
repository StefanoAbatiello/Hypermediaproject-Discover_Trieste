<template>
  <div class="container-fluid px-0 mt-1 mb-4">
    <div class="text-white text-left sign">
      <h1 class="title">Events grouped by season</h1>
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
.title {
  margin-left: 10px;
}
.sign {
  background: rgb(195, 75, 75);
}
</style>