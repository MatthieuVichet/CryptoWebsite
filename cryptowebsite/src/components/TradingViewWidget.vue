<template>
    <div class="chartWidget">
      <VueTradingView :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import VueTradingView from 'vue-trading-view/src/vue-trading-view';
  
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
      symbol: String, // Define a 'symbol' prop
    },
    components: {
      VueTradingView,
    },
    computed: {
      chartOptions() {
        // Create the chart options object with the symbol and theme
        return {
          symbol: this.symbol || 'BINANCE:BTCUSDT', // Use the prop or a default value
          theme: 'dark',
        };
      }, 
    },
  }; 
  </script>
  