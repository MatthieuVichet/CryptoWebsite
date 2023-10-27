<template>
  <div class="monetization">
    <div>
      <h1>Top token data</h1>
      <p>Capitalisation totale est de : *** sois une variation de *** %</p>
    </div>
    <div class="tokenContentDisplay">
      <div class="tokenDetailDisplay">
        <div>
          <h1>{{ selectedTokenName }}</h1>
          <h2>Price : {{ parseFloat(selectedTokenPrice).toFixed(2) }}$</h2>
          <h2>Volume : {{ parseFloat(selectedTokenVolume * selectedTokenPrice).toFixed(2) }}$ exchanged</h2>
          <h2>Change : {{ parseFloat(selectedTokenChange).toFixed(2) }}%</h2>
        </div>
        
        <a href="/analysis">🔗See more about general market analysis</a>

      </div>
      <Chart :symbol="selectedSymbol" :key="selectedSymbol" /> <!-- Use a dynamic key binding -->
    </div>
    <div class="monetizationContent">
      <div class="monetizationTitle">
        <h2>Symbol</h2>
        <h2>Volume 24h</h2>
        <h2>Price</h2>
        <h2>% 24h</h2>
      </div>
      <TokenData class="token-data" v-for="symbol in tokenSymbols" :key="symbol" :tokenSymbol="symbol" @click="handleTokenDataClick(symbol)" />
    </div>
    <Banner title="Learn more about crypto" textContent="Dive into beginner-to-expert courses to increase your knowledge" to="/guide" buttonTitle="See courses" imgURL="bannerPic.png"/>
  </div>
</template>

<script>
import TokenData from '@/components/MonetizationToken.vue';
import Chart from '@/components/TradingViewWidget.vue'; 
import Banner from '@/components/ContentBanner_1.vue';
import axios from 'axios';

export default {
  name: "content_banner_1",
  components: {
    TokenData, 
    Chart,
    Banner,
  },
  data() {
    return {
      tokenSymbols: ["BTCUSDT", "ETHUSDT", "LTCUSDT", "XRPUSDT", "SOLUSDT", "ADAUSDT", "BNBUSDT", "AVAXUSDT", "DOGEUSDT", "MATICUSDT", "DOTUSDT"],
      selectedSymbol: "BINANCE:BTCUSDT", // Initialize with a default symbol
      selectedTokenPrice: null, // Initialize with null
      selectedTokenVolume: null, // Initialize with null
      selectedTokenChange: null, // Initialize with null
      selectedTokenName: 'BTCUSDT', // Initialize with null
    };
  },
  created() {
    // Fetch and set the initial price for ETH/USDT
    this.fetchTokenData("BTCUSDT");
  },
  methods: {
    async handleTokenDataClick(tokenSymbol) {
      this.selectedSymbol = "BINANCE:" + tokenSymbol; // Update the selected symbol
      this.selectedTokenName = tokenSymbol; // Update the selected symbol
      console.log("Clicked Token Symbol:", this.selectedSymbol);

      // Call the fetchTokenData method to fetch the token's price
      this.fetchTokenData(tokenSymbol);
      window.scrollTo({ top: 0, behavior: "smooth" });

    },
    fetchTokenData(symbol) {
      // Binance API endpoint for token data
      const url = `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`;

      // Make the GET request to Binance API
      axios
        .get(url)
        .then((response) => {
          this.selectedTokenPrice = response.data.lastPrice;
          this.selectedTokenVolume = response.data.volume;
          this.selectedTokenChange = response.data.priceChangePercent;
        })
        .catch((error) => {
          console.error("Error fetching token data:", error);
          this.selectedTokenPrice = null;
          this.selectedTokenVolume = null;
          this.selectedTokenChange = null;
        });
    },
  },
};
</script>

<style>
.monetization {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.monetizationContent {
  margin-left: 5rem;
  margin-right: 5rem;
}

.monetizationTitle {
  display: flex;
  justify-content: space-between;
}

.token-data {
  /* Default styles for your TokenData component */
  transition: background-color 0.3s;
}

/* Define the styles for the hover effect */
.token-data:hover {
  background-color: rgba(18,153,247,0.2); /* Change this to the desired color */
}
.tokenContentDisplay {
  display: flex;
  justify-content: space-between;
  text-align: left;
  background-color:  rgba(18,153,247,0.2);
  margin-right: 10rem;
  margin-left: 10rem;
  padding-left: 5rem;
  border-radius: 5rem;
}

.tokenDetailDisplay {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

a{
  color: #E11FEA
}
</style>
