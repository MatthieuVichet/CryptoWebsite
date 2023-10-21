<template>
  <div class="monetization">
    <h1>Top token data</h1>
    <p>Capitalisation totale est de : *** sois une variation de *** %</p>
    <Chart :symbol="selectedSymbol.toString()" :key="selectedSymbol" /> <!-- Use a dynamic key binding -->

    <div class="monetizationContent">
      <div class="monetizationTitle">
        <h2>Symbol</h2>
        <h2>Volume 24h</h2>
        <h2>Price</h2>
        <h2>% 24h</h2>
      </div>
      <TokenData class="token-data" v-for="symbol in tokenSymbols" :key="symbol" :tokenSymbol="symbol" @click="handleTokenDataClick(symbol)" />
    </div>
    <p>{{ typeof selectedSymbol }}</p>
  </div>
</template>

<script>
import TokenData from '@/components/MonetizationToken.vue';
import Chart from '@/components/TradingViewWidget.vue';

export default {
  name: "content_banner_1",
  components: {
    TokenData, 
    Chart
  },
  data() {
    return {
      tokenSymbols: ["BTCUSDT", "ETHUSDT", "LTCUSDT", "XRPUSDT", "SOLUSDT", "ADAUSDT", "BNBUSDT", "AVAXUSDT", "DOGEUSDT", "MATICUSDT", "DOTUSDT"],
      selectedSymbol: "BINANCE:ETHUSDT", // Initialize with a default symbol
    };
  },
  methods: {
    handleTokenDataClick(tokenSymbol) {
      this.selectedSymbol = "BINANCE:" + tokenSymbol; // Update the selected symbol
      console.log("Clicked Token Symbol:", this.selectedSymbol);
    },
  },
};
</script>

<style>
.monetizationContent{
  margin-left: 5rem;
  margin-right: 5rem;
}

.monetizationTitle{
  display: flex;
  justify-content: space-between;
}

.token-data {
  /* Default styles for your TokenData component */
  transition: background-color 0.3s;
}

/* Define the styles for the hover effect */
.token-data:hover {
  background-color: grey; /* Change this to the desired color */
}
</style>
