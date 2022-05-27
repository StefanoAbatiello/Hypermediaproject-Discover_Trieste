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
          Accessibility
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
          time
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
          how to reach
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
          prices
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

<style>
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
  height: 100px;
}

.tab-content .tab-pane {
  background-color: #fff;
  color: black;
}
</style>