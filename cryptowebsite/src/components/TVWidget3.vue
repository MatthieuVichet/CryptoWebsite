<template>
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://fr.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TradingViewScreenerWidget',
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: 1000,
        height: 490,
        defaultColumn: 'overview',
        screener_type: 'crypto_mkt',
        displayCurrency: 'USD',
        colorTheme: 'dark',
        locale: 'fr',
      });
  
      // Ajoutez le script au conteneur du widget plutôt qu'à la fin du composant
      const widgetContainer = this.$el.querySelector('.tradingview-widget-container__widget');
      widgetContainer.appendChild(script);
    },
  };
  </script>
  