<template>
  <div class="tabTime">
    <div class="d-flex justified-content-start">
      <!-- <div class="col-1"> -->
      <div>
        <ul
          :id="`${id}`"
          class="nav flex-column nav-pills nav-justified pe-0 pt-4"
          role="tablist"
        >
          <li class="nav-item icon-btn" role="presentation">
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
          <li class="nav-item icon-btn" role="presentation">
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
          <li class="nav-item icon-btn" role="presentation">
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
      <div class="col-10 pt-4 ps-0">
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
  background-color: royalblue;
  opacity: 0.5;
  color: #fff;
}
.icon-btn {
  width: 70px;
  height: 100px;
  background-color: royalblue;
}

.nav-pills .nav-item .nav-link.active {
  color: #fff;
  border: royalblue;
  opacity: 1;
}

.tab-content {
  border: 1px solid royalblue;
  padding: 15px;
  /* max-height: 200px; */
  width: 100%;
  height: auto;
  min-height: 200px;
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