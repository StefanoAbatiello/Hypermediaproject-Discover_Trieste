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
          <p><span class="material-icons icon"> accessibility_new </span> Accessibility</p>
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
          <p><span class="material-icons icon"> schedule </span> time</p>
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
          <p><span class="material-icons icon"> navigation </span> how to reach</p>
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
          <p><span class="material-icons icon"> sell </span> prices</p>
        </button>
      </li>
    </ul>
    <div id="myTabContent" class="tab-content">
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
  background-color: rgb(195, 75, 75);
  opacity: 0.5;
  color: #fff;
  height: 50px; 
}

.nav-tabs .nav-item .nav-link.active {
  color: #fff;
  border: rgb(195, 75, 75);
  opacity: 1;
}

.tab-content {
  border: 1px solid rgb(195, 75, 75);
  height: 100px;
  padding: 10px;
  }

.tab-content .tab-pane {
  background-color: #fff;
  color: black;
}
.icon{
  vertical-align: bottom;
  font-size: 18px ;
}
</style>