<template>
  <div>
    <ul id="myTab" class="nav nav-tabs nav-justified" role="tablist">
      <li class="nav-item" role="presentation">
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
      <li class="nav-item" role="presentation">
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
      <li class="nav-item" role="presentation">
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
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="tab"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#prices"
          type="button"
          role="tab"
        >
          <p><span class="material-icons ps-1 icon"> confirmation_number </span></p>
        </button>
      </li>
    </ul>
    <div id="myTabContent" class="tab-content d-flex">
      <div id="accessibility" class="tab-pane fade show active" role="tabpanel">
        {{ accessInfo }}
      </div>
      <div id="time" class="tab-pane fade" role="tabpanel">{{ timeInfo }}</div>
      <div id="howToReach" class="tab-pane fade" role="tabpanel">
        {{ directions }}
      </div>
      <div id="prices" class="tab-pane fade" role="tabpanel">{{ prices }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabCardComponent',
  props: {
    accessInfo: {
      type: Text,
      required: true,
    },
    timeInfo: {
      type: Text,
      required: true,
    },
    directions: {
      type: Text,
      required: true,
    },
    prices: {
      type: Text,
      required: true,
    },
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
}
.tab-content {
  /* border: 1px solid royalblue; */
  height: 100px;
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
  font-size: 40px;
  padding:5px;
}
</style>