<template>
  <!-- Page to Describe some important information about Trieste -->
  <div class="mb-4">
    <!-- header image -->
    <header-carousel class="carousel" :images="image" />
    <!-- title -->
    <h1 class="title">About Trieste</h1>
    <!-- Content of the Page -->
    <div class="container">
      <!-- Single Paragraph -->
      <p class="mt-4">
        The city of Trieste is located in northeastern Italy, bordering
        Slovenia, and is the capital of the autonomous region Friuli-Venezia
        Giulia and Trieste province. Since it is situated at the head of the
        Gulf of Trieste, a shallow bay of the Adriatic Sea, it serves as an
        important seaport in the region.
      </p>
      <img
        class="map"
        :src="require(`~/assets/homeImg/ancientMap.jpeg`)"
        alt="ancient map"
      />
      <!-- Single Paragraph -->
      <p class="mt-4">
        Trieste's population is an ethnic mix of its neighbouring regions and
        countries: Venice, Austria and Slovenia. The dominant local Venetian
        dialect of Trieste is called Triestine (in Italian "Triestino"). This
        dialect and the official Italian language are spoken in the city centre
        while Slovene is spoken in several of the immediate suburbs. The
        Venetian and Slovene languages are considered autochthonous to the area.
        There are also a small number of German language speakers.
      </p>
      <!-- Single Paragraph -->
      <p class="mt-3">
        Geographically,Trieste enjoys a unique and beautiful natural location as
        it is surrounded by the Carsic hills and the Adriatic Sea. The quality
        of life is high, and one's leisure time can be spent in tourism, culture
        and sports without the drawbacks that affect larger Italian cities such
        as heavy traffic jams, smog, and delinquency.
      </p>
      <img
        class="panorama"
        :src="require(`~/assets/homeImg/panorama.jpeg`)"
        alt="view"
      />
      <p class="mt-3">
        The origins of the city of Trieste are very ancient, however the traces,
        which have come down to us, of its more remote past are modest. Already
        in the second millennium BC the whole territory of the province of
        Trieste, from the plateau to the sea, was the seat of protohistoric
        settlements: the castellieri; they were very small villages, perched on
        the heights and protected by characteristic stone fortifications, whose
        inhabitants belonged to an Illyrian population of Indo- European
        lineage. In about 50 BC, the small fishing village became a Roman colony
        and the residential nucleus was surrounded by strong walls and,
        subsequently, enriched with important buildings such as the Forum and
        the Theater, whose remains are still visible today on the hill of San
        Giusto.
      </p>
      <img
        class="panorama"
        :src="require(`~/assets/about/castellieri.webp`)"
        alt="view"
      />
      <p class="mt-3">
        The transition to modern Trieste took place in 1719, when Charles VI
        decreed, with an edict, the freedom of navigation, thus opening the
        doors to commerce and assigning the privilege of Porto Franco to the
        city. The old village, within the medieval perimeter, was no longer
        enough to accommodate the inhabitants, whose number, in a short time,
        had significantly increased and, consequently, the city expanded,
        gaining ground on the seafront and progressively connecting the various
        hills. that stretch out like a fan from the inside towards the coast. In
        the 19th century, in a climate of general prosperity, large insurance
        groups and shipping companies were founded, the Stock Exchange developed
        and artistic and cultural production grew. The growth of the city, on
        the one hand, made it one of the most important centers of the then
        Habsburg Empire, on the other it strengthened the feeling of
        Italianness, both cultural and political. The return to Italy, so long
        awaited, took place in 1918, in an Italian triumph, but this annexation
        relegated Trieste to the role of "ordinary port", having lost its
        uniqueness once it was released from the Central European context.
      </p>
      <img
        class="panorama"
        :src="require(`~/assets/about/trieste19th.webp`)"
        alt="view"
      />
      <p class="mt-3">
        The Second World War involved the loss of the lands of the Istrian
        peninsula, passed to the newly established Yugoslavia, and the history
        of the city in that dark period is characterized by numerous sad events,
        many of which still cast obscure today, after more than half a century.
        shadows. The fate of the city, claimed by Yugoslavia, remained uncertain
        for a long time: pending definition, the hinterland was divided into two
        parts, one administered by the Anglo- Americans and the other by the
        Yugoslavs. Specifically, the city was subject to the allied
        administration with the constitution of the Free Territory of Trieste.
        Only in 1954, with the signing of the London Memorandum, Trieste and its
        hinterland were definitively returned to Italy.
      </p>
      <img
        class="panorama"
        :src="require(`~/assets/about/yugoslavia.webp`)"
        alt="view"
      />
    </div>
  </div>
</template>
<script>
import HeaderCarousel from '~/components/HeaderCarousel.vue'
export default {
  name: 'AboutPage',
  components: {
    HeaderCarousel,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/about')
    const image = data.images
    return {
      description,
    }
  },
  head() {
    return {
      title: 'About Trieste',
      meta: [
        {
          hid:'description',
          name:'description',
          content:'A short description of the city and its history',
        }
      ]
    }
  },
}
</script>
<style scoped>
img {
  height: 24rem;
  width: 30rem;
  margin-left: 50%;
  transform: translate(-50%, 0);
  border-radius: 10px 10px 10px 10px;
}
.title {
  width: 100%;
  text-align: center;
}
@media (max-width: 992px) {
  h1 {
    top: 9rem;
  }
}
</style>