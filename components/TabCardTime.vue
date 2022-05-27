<template>
  <div class="tabTime">
    <ul id="myTab2" class="nav nav-tabs nav-justified" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          id="tab2"
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#accessibility2"
          type="button"
          role="tab"
        >
          Accessibility
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="tab2"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#time2"
          type="button"
          role="tab"
        >
          time
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="tab2"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#howToReach2"
          type="button"
          role="tab"
        >
          how to reach
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="tab2"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#prices2"
          type="button"
          role="tab"
        >
          prices
        </button>
      </li>
    </ul>
    <div id="myTabContent2" class="tab-content">
      <div id="accessibility2" class="tab-pane fade show active" style="height: 50px" role="tabpanel">
        {{ accessInfo }}
      </div>
      <div id="time2" class="tab-pane fade" style="height: 50px" role="tabpanel">{{ timeInfo }}</div>
      <div id="howToReach2" class="tab-pane fade" style="height: 50px" role="tabpanel">
        {{ directions }}
      </div>
      <div id="prices2" class="tab-pane fade" style="height: 50px" role="tabpanel">{{ prices }}</div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabCardTimeComponent',
  props: {
    accessInfo: {
      type: String,
      required: true,
    },
    timeInfo: {
      type: String,
      required: true,
    },
    directions: {
      type: String,
      required: true,
    },
    prices: {
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