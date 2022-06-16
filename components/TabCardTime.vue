<template>
  <div class="d-flex justified-content-start">
    <div>
      <!-- <ul :id="`${id}`" class="nav nav-tabs nav-justified" role="tablist"> -->
      <ul
        :id="`${id}`"
        class="nav flex-column nav-pills nav-justified ps-0 pe-0 pt-4"
        role="tablist"
      >
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
      </div>
      <!-- <div id="myTabContent" class="tab-content d-flex"> -->
      <div class="col-10 pt-3 ps-0">
        <div :id="`${id}`" class="tab-content d-flex">
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
            <div>
              <p
                v-for="(text, textIndex) of time"
                :key="`text-index-${textIndex}`"
                class="mt-0 description"
              >
                {{ text }}
              </p>
            </div>
          </div>
          <div
            :id="`address-${id}`"
            class="tab-pane fade"
            style="height: 50px; justify-content: center"
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
      type: Array,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    map: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
/* .nav-tabs {
  width: 100%;
  --max-width: 1000px; --
} */
.nav-pills {
  border-bottom-color: royalblue;
}
/* .nav-tabs .nav-item {
  max-height: 60px;
  border-radius: 20px;
  margin-bottom: 5px;
} */

.nav-pills .nav-item {
  max-height: 60px;
  border-radius: 20px;
  margin-bottom: 5px;
  align-content: center;
  width: 75px;
}
/* .nav-tabs .nav-item .nav-link {
  background-color: transparent;
  opacity: 0.7;
  border-radius: 20px;
} */
.nav-pills .nav-item .nav-link {
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: transparent;
  opacity: 0.9;
  border-radius: 20px;
  font-size: 1.2vw;
}
/* .icon {
  color: royalblue;
} */
.icon {
  vertical-align: middle;
  background-color: rgb(65, 105, 225, 0.7);
  border-radius: 60px;
  font-size: 45px;
  padding: 3px;
  margin-bottom: 2;
}
/* .nav-tabs .nav-item .nav-link.active {
  color: transparent;
  border: transparent;
  opacity: 1;
} */

.nav-pills .nav-item .nav-link.active {
  color: white;
  border: transparent;
  opacity: 1;
  font-size: 1.2vw;

  /* background-color: rgb(65, 105, 225, 0.3); */
}
.nav-pills .nav-item .nav-link.active .icon {
  background-color: royalblue;
}

.tab-content {
  padding: 15px;
  padding-top: 0px;
  /* max-height: 200px; */
  width: 100%;
  height: auto;
  min-height: 300px;
  /* background-color: lightblue; */
}

.tab-content .tab-pane {
  /* background-color: lightblue; */
  color: black;
  height: auto;
  padding-bottom: 2;
}

/* .map{
margin-left: 3vw;
} */
</style>