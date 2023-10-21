<template>
  <div class="monetization">
    <h1>Top token data</h1>
    <p>Capitalisation totale est de : *** sois une variation de *** %</p>
    <div class="monetizationContent">
      <div class="monetizationTitle">
        <h2>Symbol</h2>
        <h2>Volume 24h</h2>
        <h2>Price</h2>
        <h2>% 24h</h2>
      </div>
      <TokenData v-for="symbol in tokenSymbols" :key="symbol" :tokenSymbol="symbol" />
    </div>
    <Chart symbol="BINANCE:BTCUSDT"/>
    <Chart symbol="BINANCE:ETHUSDT"/>
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
  };
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

</style>
