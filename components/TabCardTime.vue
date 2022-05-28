<template>
  <div class="tabTime">
    <div class=" d-flex justified-content-start ">
      <!-- <div class="col-1"> -->
        <div>
        <ul :id="`${id}`" class="nav flex-column nav-pills nav-justified pe-0 pt-4" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              :id="`${id}`"
              class="nav-link active"
              data-bs-toggle="tab"
              :data-bs-target="`#description-${id}`"
              type="button"
              role="tab"
            >
              <span class="input-group-addon">
                <img
                  src="../assets/services/info_black_24dp.svg"
                  class="icon-img img-responsive"
                />
              </span>
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
              <span class="input-group-addon">
                <img
                  src="../assets/services/schedule_black_24dp.svg"
                  class="icon-img img-responsive"
                />
              </span>
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
              <span class="input-group-addon">
                <img
                  src="../assets/services/place_black_24dp.svg"
                  class="icon-img img-responsive"
                />
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div class="col-10 pt-4 ps-0">
        <div :id="`${id}`" class="tab-content">
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
            style="height: 50px"
            role="tabpanel"
          >
            {{ address }}
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
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.nav-pills {
  width: 100%;
  /* max-width: 1000px; */
}
.nav-pills .nav-item {
  max-height: 60px;
}
.nav-pills .nav-item .nav-link {
  background-color: rgb(195, 75, 75);
  opacity: 0.5;
  color: #fff;
}
.icon-img {
  width: 35px;
  height: 35px;
  background-color: rgb(195, 75, 75);
}
.nav-pills .nav-item .nav-link.active {
  color: #fff;
  border: rgb(195, 75, 75);
  opacity: 1;
}

.tab-content {
  border: 1px solid rgb(195, 75, 75);
  padding: 15px;
  max-height: 200px;
  width: 100%;
  min-height: 150px;
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
</style>