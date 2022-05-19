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

      geocoder.geocode({ address: 'Austria' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
html,
body {
  margin: 2;
  padding: 2;
}

.MapCard {
  width: 1000px;
  height: 1000px;
}
</style>