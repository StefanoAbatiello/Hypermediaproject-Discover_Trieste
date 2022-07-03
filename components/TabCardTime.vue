<template>
  <!-- Component used to display the information in TypeOfServices -->
  <div class="justified-content-start">
    <div>
      <!-- Showing the icon of info -->
      <ul
        :id="`${id}`"
        class="nav nav-tabs justify-content-between nav-justified"
        role="tablist"
      >
      <!-- icon for the general info -->
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
        <!-- icon for the opening time -->
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
        <!-- Icon for the map -->
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
        <!-- icon for the contact section -->
        <li class="nav-item" role="presentation">
          <button
            :id="`${id}`"
            class="nav-link"
            data-bs-toggle="tab"
            :data-bs-target="`#info-${id}`"
            type="button"
            role="tab"
          >
            <span class="material-icons icon"> phone </span>
          </button>
        </li>
      </ul>
      <!-- content of the general info -->
      <div id="myTabContent" class="tab-content d-flex">
        <div
          :id="`description-${id}`"
          class="tab-pane fade show active"
          style="height: 50px"
          role="tabpanel"
        >
          <div class="text">
            <h5 class="mb-0">
              <span class="place material-icons"> place </span> {{ address }}
            </h5>
            <div
              v-for="(text, textIndex) of description"
              :key="`text-index-${textIndex}`"
              class="mt-0 description"
            >
              {{ text }}
            </div>
          </div>
        </div>
        <!-- Content of the opening time -->
        <div
          :id="`time-${id}`"
          class="tab-pane fade"
          style="height: 50px"
          role="tabpanel"
        >
          <div v-if="serviceTypeId != 2" class="text">
            <div
              v-for="(t, tIndex) of timeInfo"
              :key="`time-index-${tIndex}`"
              class="mt-0 row justify-content-center"
            >
              <div class="col-6 text-center">{{ t.day }}</div>
              <div class="col-6 text-center">{{ t.hour }}</div>
            </div>
          </div>
          <div v-else class="text">
            <div
              v-for="(t2, t2Index) of time"
              :key="`time-index-${t2Index}`"
              class="mt-0 description"
            >
              {{ t2 }}
            </div>
          </div>
        </div>
        <!-- Showing the map -->
        <div
          :id="`address-${id}`"
          class="tab-pane fade"
          style="height: 50px; justify-content: center"
          role="tabpanel"
        >
          <div class="map rounded">
            <iframe
              width="600"
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
        <!-- Contents of contact info -->
        <div
          :id="`info-${id}`"
          class="tab-pane fade show"
          style="height: 50px"
          role="tabpanel"
        >
          <div class="text">
            <h5>Click and visit the website of <a :href="info[0]" target="_blank">{{ name}}</a></h5>
            <h5> {{ info[1] }} </h5>
            <h5 v-if="info[2]!=null"> {{ info[2] }} </h5>
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
    name:{
      type:String,
      required:true,
    },
    id: {
      type: Number,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
    serviceTypeId:{
      type: Number,
      required:true,
    },
    timeInfo: {
      type: Array,
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
    info: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.nav-pills {
  border-bottom-color: royalblue;
}
.nav-tabs .nav-item {
  max-height: 60px;
  border-radius: 20px;
  margin-bottom: 5px;
  align-content: center;
  width: 75px;
}
.nav-tabs .nav-item .nav-link {
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: transparent;
  opacity: 0.9;
  border-radius: 20px;
  font-size: 1.2vw;
}
.icon {
  vertical-align: middle;
  background-color: rgb(65, 105, 225, 0.7);
  border-radius: 60px;
  font-size: 45px;
  padding: 3px;
  margin-bottom: 2;
}
.place {
  color: royalblue;
  vertical-align: middle;
  font-size: 30px;
  padding-bottom: 4px;
}
.nav-tabs .nav-item .nav-link.active {
  color: white;
  border: transparent;
  opacity: 1;
  font-size: 1.2vw;
}
.nav-tabs .nav-item .nav-link.active .icon {
  background-color: royalblue;
}
.tab-content {
  padding: 20px;
  padding-top: 20px;
  width: 100%;
  height: auto;
  min-height: 280px;
  overflow: auto;
}
.tab-content .tab-pane {
  color: black;
  height: auto;
  padding-bottom: 2;
  width: 100%;
}
.text{
  font-size: 20px;
  font-weight: 400;
}
</style>