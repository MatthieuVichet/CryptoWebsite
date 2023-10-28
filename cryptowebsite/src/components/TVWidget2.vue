<template>
  <div>
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://fr.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradingViewWidget',
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
      {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          },
          {
            "description": "Solana",
            "proName": "BINANCE:SOLUSDT"
          },
          {
            "description": "Chainlink",
            "proName": "BINANCE:LINKUSDT"
          },
          {
            "description": "Matic Network",
            "proName": "BINANCE:MATICUSDT"
          },
          {
            "description": "Ripple",
            "proName": "BINANCE:XRPUSDT"
          },
          {
            "description": "Injective",
            "proName": "BINANCE:INJUSDT"
          },
          {
            "description": "Dogecoin",
            "proName": "BINANCE:DOGEUSDT"
          },
          {
            "description": "Cosmos",
            "proName": "BINANCE:ATOMUSDT"
          },
          {
            "description": "Avalanche",
            "proName": "BINANCE:AVAXUSDT"
          }
      ],
      showSymbolLogo: true,
      colorTheme: 'light',
      isTransparent: false,
      displayMode: 'adaptive',
      locale: 'fr',
    });

    // Ajoutez le script au conteneur du widget plutôt qu'à la fin du composant
    const widgetContainer = this.$el.querySelector('.tradingview-widget-container__widget');
    widgetContainer.appendChild(script);
  },
};
</script>
