<template>
  <!-- Component used to display the information in a single Poi/Event -->
  <div>
    <!-- All the icons of the section are displayed -->
    <ul
      id="myTab"
      class="nav nav-tabs justify-content-between nav-justified"
      role="tablist"
    >
    <!-- accessibility icon -->
      <li class="nav-item" role="presentation">
        <button
          id="tab"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#accessibility"
          type="button"
          role="tab"
        >
          <span class="material-icons tab-icon"> accessibility_new </span>
        </button>
      </li>
      <!-- Opening Time Icon -->
      <li class="nav-item" role="presentation">
        <button
          id="tab"
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#time"
          type="button"
          role="tab"
        >
          <span class="material-icons tab-icon"> schedule </span>
        </button>
      </li>
      <!-- Tickets icon -->
      <li class="nav-item" role="presentation">
        <button
          id="tab"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#prices"
          type="button"
          role="tab"
        >
          <span class="material-icons tab-icon"> confirmation_number </span>
        </button>
      </li>
    </ul>
    <!-- Contents of accessibility -->
    <div id="myTabContent" class="tab-content">
      <div id="accessibility" class="tab-pane fade" role="tabpanel">
        <div class="row justify-content-between">
          <div class="col text">
            <span class="material-icons access-icon">{{ accessInfo[0] }}</span
            >Step-Free
          </div>
          <div class="col text">
            <span class="material-icons access-icon">{{ accessInfo[1] }}</span
            >Flyers in Braille
          </div>
          <div class="info col text">
            <span class="material-icons access-icon">{{ accessInfo[2] }}</span
            >Audio Description
          </div>
        </div>
      </div>
      <!-- Content of Opening Time -->
      <div id="time" class="tab-pane fade show active" role="tabpanel">
        <div
          v-for="(time, timeIndex) of timeInfo"
          :key="`time-index-${timeIndex}`"
          class="row justify-content-center"
        >
          <div class="col-6 text text-center">{{ time.day }}</div>
          <div class="col-6 text text-center">{{ time.hour }}</div>
        </div>
      </div>
      <!-- Content of Tickets price -->
      <div id="prices" class="tab-pane text fade" role="tabpanel">
        It is accessible in different prices:
        <ul>
          <li
            v-for="(price, priceIndex) of prices"
            :key="`price-index-${priceIndex}`"
          >
            {{ price }}
          </li>
        </ul>
        <!-- show the link to the website of the content -->
        <div v-if="website !== null">
          For more information about the tickets visit:
          <a :href="website[0]" target="_blank">{{ website[1] }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabCardComponent',
  props: {
    accessInfo: {
      type: Array,
      required: true,
    },
    timeInfo: {
      type: Array,
      required: true,
    },
    prices: {
      type: Array,
      required: true,
    },
    website: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.nav-tabs {
  border-bottom-color: royalblue;
}
.nav-tabs .nav-item .nav-link {
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: transparent;
  opacity: 0.7;
  border-radius: 20px;
  font-size: 1.2vw;
}
.nav-tabs .nav-item .nav-link.active {
  opacity: 1;
}
.tab-icon {
  vertical-align: middle;
  background-color: royalblue;
  border-radius: 60px;
  font-size: 45px;
  padding: 3px;
  margin-bottom: 2;
}
.tab-content {
  min-height: 200px;
  height: auto;
  padding: 10px;
}
.access-icon {
  vertical-align: bottom;
  color: royalblue;
}
.text{
  font-size: 22px;
  font-weight: 400;
}
</style>