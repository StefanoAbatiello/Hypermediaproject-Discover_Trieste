<template>
  <div class="container-fluid px-0 mt-1 mb-4">
    <div class="text-white sign row justify-content-between">
      <div class="col">
        <h1 class="title text-left">{{ name }}</h1>
        <ul class="ms-3 breadcrumb">
          <li class="breadcrumb-item text-white">
            <a @click="backToEventsMenu()">eventsMenu/</a>
            <a @click="backToEvents(season)">{{ season }}Events/</a>
          </li>
        </ul>
      </div>
      <div class="col align-self-center botton-cont">
        <button
          v-if="season === 'summer'"
          type="button"
          class="btn btn-lg mb-3 ms-2 btn-back text-white"
          @click="backToEvents(season)"
        >
           See all summer events
        </button>
        <button
          v-else
          type="button"
          class="btn btn-lg mb-3 ms-2 btn-back text-white"
          @click="backToEvents(season)"
        >
          See all winter events
        </button>
      </div>
    </div>
    <div class="container px-0 mt-1 mb-4">
      <div class="image-event text-center">
        <img class="img rounded ms-2 mt-5" :src="img" />
      </div>
      <p class="lead">
        {{ description }}
      </p>
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        @click="goToPoi(poiId)"
      >
        See the location
      </button>
      <tab-card
        :access-info="`col-sm-2 m-2`"
        :time-info="`event`"
        :directions="`event.name`"
        :prices="`event.img`"
      />
    </div>
  </div>
</template>

<script>
import TabCard from '~/components/TabCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    TabCard,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    return {
      name: data.name,
      img: data.img,
      description: data.description,
      poiId: data.poiId,
      season: data.season,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  methods: {
    backToEvents(season) {
      this.$router.push('/events/' + season)
    },
    back() {
      this.$router.push('/events/allYear')
    },
    goToPoi(poiId) {
      this.$router.push('/details/poi/' + poiId)
    },
  },
}
</script>

<style scoped>
.title {
  margin-left: 10px;
}
.sign {
  background: rgb(195, 75, 75);
}
.img {
  height: 300px;
  width: 450px;
}
.btn-poi {
  border-color: rgb(195, 75, 75);
  color: rgb(195, 75, 75);
}
.btn-back {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(0%,-50%);
  border-color: whitesmoke;
  color: rgb(195, 75, 75);
}
.botton-cont {
    position: relative;
}
</style>