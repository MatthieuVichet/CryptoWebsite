<template>
  <div>
    <div class="tokenMonetizationContent" v-if="tokenData">
      <h3>
        {{ tokenSymbol }}
      </h3>
      <h3>{{ (parseFloat(tokenData.volume) * parseFloat(tokenData.lastPrice)).toFixed(2) }}</h3>
      <h3 :class="{'green-text': tokenData.priceChangePercent > 0, 'red-text': tokenData.priceChangePercent <= 0}">
        {{ parseFloat(tokenData.lastPrice).toFixed(2) }}$
      </h3>
      <h3 :class="{'green-text': tokenData.priceChangePercent > 0, 'red-text': tokenData.priceChangePercent <= 0}">
        {{ parseFloat(tokenData.priceChangePercent).toFixed(2) }}%
      </h3>
      <!-- Add more fields as needed -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    tokenSymbol: String, // Define the tokenSymbol prop as a string
  },
  data() {
    return {
      tokenData: null,
    };
  },
  mounted() {
    this.fetchTokenData(this.tokenSymbol); // Use the prop as the symbol
  },
  methods: {
    
    fetchTokenData(symbol) {
      // Binance API endpoint for token data
      const url = `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`;

      // Make the GET request to Binance API
      axios
        .get(url)
        .then((response) => {
          this.tokenData = response.data;
        })
        .catch((error) => {
          console.error("Error fetching token data:", error);
        });
    },
  },
};
</script>

<style>
  .green-text {
    color: #E11FEA;
  }

  .red-text {
    color: #1299F7;
  }

  .tokenMonetizationContent {
    display: flex;
    justify-content: space-between;

  }
  
</style>
