<template>
<!-- page of the single event -->
  <div>
    <!-- a carousel of images related to the event is shown -->
    <header-carousel class="carousel" :images="img"/>
    <!-- main section of the event -->
    <section class="main-container">
      <div class="container">
        <div class="row justify-content-between">
          <main class="col-lg-7">
            <section class="main-text">
              <!-- breadcrumps -->
              <nuxt-link to="/events">
                <div class="btn back-btn px-0">
                  <h4>
                    <span class="material-icons px-0 back-icon"
                      >arrow_back_ios</span
                    >
                    Events
                  </h4>
                </div>
              </nuxt-link>
              <!-- title -->
              <h2 class="mb-3 title">{{ name }}</h2>
              <!-- Date of the event -->
              <h5>
                <span class="material-icons px-0 date-icon"> event </span>
                {{ date }}
              </h5>
              <!-- Description of the event -->
              <div class="mt-5 description-events">
                <p
                  v-for="(text, textIndex) of description"
                  :key="`text-index-${textIndex}`"
                  class="mt-3"
                >
                  {{ text }}
                </p>
              </div>
            </section>
          </main>
          <!-- contents in the aside secection -->
          <aside class="col-lg-4">
            <!-- related poi with the event -->
            <div class="sticky-top row justify-content-between pt-1 info">
              <div class="my-5 col-lg-12 col-md-5 col-sm-12 col-xs-12 location">
                <related-card
                  :id="poi.id"
                  class="location-card"
                  :name="poi.name"
                  :img="poi.img[0]"
                  category="pois"
                  icon="place"
                  text="This event takes place at:"
                />
              </div>
              <!-- additional informations of the event -->
              <!-- we pass also 1 as number of column to display access-info properly -->
              <div class="mt-3 col-lg-12 col-md-7 col-sm-12 col-xs-12 tab">
                <tab-card
                  :access-info="accessInfo"
                  :time-info="timeInfo"
                  :prices="prices"
                  :website="website"
                  :col="1"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TabCard from '~/components/TabCard.vue'
import RelatedCard from '~/components/RelatedCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    TabCard,
    RelatedCard,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    const timeInfo=[]
    for (let i=0;i<data.timeInfo.length;i=i+2) {
      timeInfo.push({ day: data.timeInfo[i], hour: data.timeInfo[i+1] })
    }
    return {
      name: data.name,
      img: data.img,
      date: data.date,
      description: data.description,
      poi: data.poi,
      accessInfo: data.accessInfo,
      timeInfo,
      prices: data.prices,
      website: data.website,
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid:'description',
          name:'description',
          content:'here you can find all the events which take place in Trieste',
        }
      ]
    }
  },
}
</script>

<style scoped>
.location{
  display: flex;
  justify-content: center;
}
.material-icons {
  vertical-align: middle;
}
.date-icon{
  color: royalblue;
}
</style>