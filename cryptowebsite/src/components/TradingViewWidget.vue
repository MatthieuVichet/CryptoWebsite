<template>
  <div class="widget-class">
    <div class="chartWidget">
      <VueTradingView :options="chartOptions" />
    </div>
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
          upColor: 'black', // Set the color for bullish candlesticks (green)
          downColor: '1299F7',
        };
      }, 
    },
  }; 
  </script>

  <style scoped>
  .widget-class{
    border: 1px solid #e0e0e0; 
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.321);

  }

</style>