<template>
  <div class="tabTime">
    <ul id="myTab2" class="nav nav-tabs nav-justified" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          id="tab2"
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#description"
          type="button"
          role="tab"
        >
          Info
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="tab2"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#time"
          type="button"
          role="tab"
        >
          Time
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="tab2"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#address"
          type="button"
          role="tab"
        >
          Address
        </button>
      </li>
    </ul>
    <div id="myTabContent2" class="tab-content">
      <div id="description" class="tab-pane fade show active" style="height: 50px" role="tabpanel">
        {{ description }}
      </div>
      <div id="time" class="tab-pane fade" style="height: 50px" role="tabpanel">{{ time }}</div>
      <div id="address" class="tab-pane fade" style="height: 50px" role="tabpanel">
        {{ address }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabCardTimeComponent',
  props: {
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

.nav-tabs{
  width: 100%;
  /* max-width: 1000px; */
}

.nav-tabs .nav-item .nav-link {
  background-color: rgb(195, 75, 75);
  opacity: 0.5;
  color: #fff;
}

.nav-tabs .nav-item .nav-link.active {
  color: #fff;
  border: rgb(195, 75, 75);
  opacity: 1;
}

.tab-content {
  border: 1px solid rgb(195, 75, 75);
  padding: 15px; 
  height: 150px;
  width: 100%;
  /* max-width: 1000px; */
}

.tab-content .tab-pane {
  background-color: #fff;
  color: black;
  height: 20px;
} 
.tabTime{
  width: 100%;
}
</style>