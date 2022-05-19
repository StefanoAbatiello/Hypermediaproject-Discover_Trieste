<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="tab"
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
          class="nav-link"
          id="tab"
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
          class="nav-link"
          id="tab"
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
          class="nav-link"
          id="tab"
          data-bs-toggle="tab"
          data-bs-target="#prices"
          type="button"
          role="tab"
        >
          prices
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="accessibility" role="tabpanel">
        {{ accessInfo }}
      </div>
      <div class="tab-pane fade" id="time" role="tabpanel">{{ timeInfo }}</div>
      <div class="tab-pane fade" id="howToReach" role="tabpanel">
        {{ directions }}
      </div>
      <div class="tab-pane fade" id="prices" role="tabpanel">{{ prices }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabComponent',
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
  color: #FFF;
}

.nav-tabs .nav-item .nav-link.active {
  color: #FFF;
  border: rgb(195, 75, 75);
  opacity: 1;
}

.tab-content {
  border: 1px solid rgb(195, 75, 75);
  padding: 15px;
}

.tab-content .tab-pane {
  background-color: #FFF;
  color: black;
  min-height: 200px;
  height: auto;
}
</style>