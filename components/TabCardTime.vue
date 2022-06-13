<template>
  <div>
    <ul :id="`${id}`" class="nav nav-tabs nav-justified" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          :id="`${id}`"
          class="nav-link active"
          data-bs-toggle="tab"
          :data-bs-target="`#description-${id}`"
          type="button"
          role="tab"
        >
          <span class="material-icons icon"> info </span>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          :id="`${id}`"
          class="nav-link"
          data-bs-toggle="tab"
          :data-bs-target="`#time-${id}`"
          type="button"
          role="tab"
        >
          <span class="material-icons icon"> schedule </span>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          :id="`${id}`"
          class="nav-link"
          data-bs-toggle="tab"
          :data-bs-target="`#address-${id}`"
          type="button"
          role="tab"
        >
          <span class="material-icons icon"> place </span>
        </button>
      </li>
    </ul>
    <div id="myTabContent" class="tab-content d-flex">
      <div
        :id="`description-${id}`"
        class="tab-pane fade show active"
        style="height: 50px"
        role="tabpanel"
      >
        {{ description }}
      </div>
      <div
        :id="`time-${id}`"
        class="tab-pane fade"
        style="height: 50px"
        role="tabpanel"
      >
        {{ time }}
      </div>
      <div
        :id="`address-${id}`"
        class="tab-pane fade"
        style="height: 50px; justify-content:center"
        role="tabpanel"
      >
        <!-- {{ address }} -->
        <div class="map rounded">
          <iframe
            width="450"
            height="250"
            frameborder="0"
            style="border: 0"
            referrerpolicy="no-referrer-when-downgrade"
            :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyADzK4sxJZO_98ynJdb3WaW0e1CrcZjJcc&q=${map}`"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabCardTimeComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    map:{
      type: String,
      required:true,
    }
  },
}
</script>

<style scoped>
.nav-tabs {
  width: 100%;
  /* max-width: 1000px; */
}
.nav-tabs .nav-item {
  max-height: 60px;
  border-radius: 20px;
  margin-bottom: 5px;
}
.nav-tabs .nav-item .nav-link {
  background-color: transparent;
  opacity: 0.7;
  border-radius: 20px;
}
/* .icon-btn {
  width: 70px;
  height: 100px;
  background-color: red;
} */

.icon {
  color: royalblue;
}

.nav-tabs .nav-item .nav-link.active {
  color: transparent;
  border: transparent;
  opacity: 1;
}

.tab-content {
  padding: 15px;
  /* max-height: 200px; */
  width: 100%;
  height: auto;
  min-height: 100px;
}

.tab-content .tab-pane {
  background-color: #fff;
  color: black;
  height: auto;
  padding-bottom: 2;
}
.tabTime {
  width: 100%;
}
/* .map{
margin-left: 3vw;
} */
</style>