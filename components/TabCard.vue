<template>
  <div>
    <ul
      id="myTab"
      class="nav nav-tabs justify-content-between nav-justified"
      role="tablist"
    >
      <li class="nav-item pe-0" role="presentation">
        <button
          id="tab"
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#accessibility"
          type="button"
          role="tab"
        >
          <p><span class="material-icons icon"> accessibility_new </span></p>
        </button>
      </li>
      <li class="nav-item pe-0" role="presentation">
        <button
          id="tab"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#time"
          type="button"
          role="tab"
        >
          <p><span class="material-icons icon"> schedule </span></p>
        </button>
      </li>
      <!-- <li class="nav-item pe-0" role="presentation">
        <button
          id="tab"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#howToReach"
          type="button"
          role="tab"
        >
          <p><span class="material-icons icon"> navigation </span></p>
        </button>
      </li> -->
      <li class="nav-item pe-0" role="presentation">
        <button
          id="tab"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#prices"
          type="button"
          role="tab"
        >
          <p><span class="material-icons icon"> confirmation_number </span></p>
        </button>
      </li>
    </ul>
    <div id="myTabContent" class="tab-content d-flex">
      <div id="accessibility" class="tab-pane fade show active" role="tabpanel">
        <div class="row info-box">
          <div class="icons col">
            <span class="mi material-icons" style="color: green">{{
              accessInfo[0]
            }}</span
            >Step-Free
          </div>
          <div class="icons col">
            <span class="mi material-icons" style="color: green">{{
              accessInfo[1]
            }}</span
            >Testo in Brile
          </div>
          <div class="icons col">
            <span class="mi material-icons" style="color: red">{{
              accessInfo[2]
            }}</span
            >Audio Description
          </div>
        </div>
      </div>
      <div
        id="time"
        class="tab-pane fade justify-content-between"
        role="tabpanel"
      >
        <ul>
          <li
            v-for="(time, timeIndex) of timeInfo"
            :key="`time-index-${timeIndex}`"
          >
            {{ time }}
          </li>
        </ul>
      </div>
      <!-- <div id="howToReach" class="tab-pane fade" role="tabpanel">
        {{ directions }}
      </div> -->
      <div id="prices" class="tab-pane fade" role="tabpanel">
        It is accessible in different prices:
        <ul>
          <li
            v-for="(price, priceIndex) of prices"
            :key="`price-index-${priceIndex}`"
          >
            {{ price }}
          </li>
        </ul>
        <div v-if="website !== null">
          <p>
            For more information about the tickets visit the following site:
            <a :href="website[0]">{{website[1]}}</a>
          </p>
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
    // directions: {
    //   type: String,
    //   required: true,
    // },
    prices: {
      type: Array,
      required: true,
    },
    website:{
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
.nav-tabs .nav-item .nav-link {
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: transparent;
  opacity: 0.9;
  border-radius: 20px;
  font-size: 1.2vw;
}

.nav-tabs .nav-item .nav-link.active .icon {
  background-color: royalblue;
}

.nav-tabs .nav-item .nav-link.active {
  color: white;
  border: transparent;
  opacity: 1;
  font-size: 1.2vw;

  /* background-color: rgb(65, 105, 225, 0.3); */
}
.nav-tabs .nav-item {
  max-height: 60px;
  border-radius: 20px;
  margin-bottom: 5px;
  align-content: center;
  width: 75px;
}
.tab-content {
  /* border: 1px solid royalblue; */
  height: 200px;
  padding: 10px;
}
.nav-tabs {
  border-bottom-color: royalblue;
}
.tab-content .tab-pane {
  background-color: #fff;
  color: black;
}
.icon {
  vertical-align: middle;
  background-color: rgb(65, 105, 225, 0.7);
  border-radius: 60px;
  font-size: 45px;
  padding: 3px;
  margin-bottom: 2;
}

</style>