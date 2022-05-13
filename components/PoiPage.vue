<template>
  <div class="main">
    <div class="sx"></div>
    <div class="central">
      <div class="title"><h1>Ortona</h1></div>
    <div class="location">
      <img class="logo" src="https://www.pikpng.com/pngl/m/557-5577328_home-new-casa-logo-png-clipart.png"><div class="address">Location: Put Location Here</div>
    </div>
    <div class="images">
      <img class="image" src="https://content.skyscnr.com/m/2261cc4361fd90d9/original/GettyImages-507574256.jpg?resize=1800px:1800px&quality=100">
      <img class="image" src="https://content.skyscnr.com/m/585f7e4d7c2d6c4b/original/GettyImages-532577501.jpg?resize=1800px:1800px&quality=100">
      <img class="image" src="https://turismo.abruzzo.it/wp-content/uploads/sites/118/ortona.jpg">
    </div>
    <div class="description">
      cisfdhbgiurh kd vnj jkvn kn f vkrnjkfvn jn fd j jnf j  jn <br>
      fo fdn jnvf  j n dn n voknk fdnkl  k k nkn vkn j nf jknjn jvnnv
    </div>
    <div class="infoBox">
      <div class="tabs"><button @click="clickedOrari()">Orari</button><button @click="clickedAccessibilita()">accessibilità</button></div>
      <div id="box"></div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23593.626639003916!2d14.378153035402722!3d42.33818814049598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133104082d5d89df%3A0xf1ff7c8c09a6566b!2s66026%20Ortona%20CH!5e0!3m2!1sit!2sit!4v1652428997729!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="dx"></div>
  </div>
</template>

<script>
export default {
  name: 'PoiPage',
  components:{
  },
  methods: {
    clickedOrari(){
      document.getElementById("box").textContent = "Hello bro"
    },
    clickedAccessibilita(){
      document.getElementById("box").textContent = "Hello sis"
    },
  }
}
</script>

<style scoped>
.sx{
  width: 3cm;
}
.dx{
  width: 3cm;
}
.title{
  text-align: center;
  background-color: yellowgreen;
}
.logo{
  height: 30px;
  width: auto;
}
.location{
  display: inline;
}
.images{
  display: inline;
}
.image{
  width: 300px;
  height: auto;
}
</style>