<template>
    <div class="chartWidget">
      <VueTradingView :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import VueTradingView from 'vue-trading-view/src/vue-trading-view';
  
  export default {
    name: 'ChartWidget',
    props: {
      msg: String,
      symbol: String, // Define a symbol prop
    },
    components: {
      VueTradingView,
    },
    computed: {
      chartOptions() {
        // Create and return the chart options object with the provided symbol
        return {
          symbol: this.symbol,
          theme: 'dark',
        };
      },
    },
  };
  </script>
  