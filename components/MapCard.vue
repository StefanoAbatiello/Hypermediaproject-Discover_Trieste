<template>
  <div class="MapCard"/>
</template>

<script>
import gmapsInit from '~/.nuxt/utils.js';

export default {
  name: 'MapCard',
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({ address: 'Perugia' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }
        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
        map.setZoom(13);
      });
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
html,body {
  margin: 2;
  padding: 2;
}
.MapCard {
  /* width: 1000px;*/
  height:400px; 
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4px;
  border: 3px solid rgb(195, 75, 75);
  border-radius: 5%;
  position: relative;
}
</style>