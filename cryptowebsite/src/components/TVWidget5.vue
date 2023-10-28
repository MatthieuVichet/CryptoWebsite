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
    name: 'TradingViewFinancialsWidget',
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: 'dark',
        isTransparent: false,
        largeChartUrl: '',
        displayMode: 'regular',
        width: 480,
        height: 830,
        symbol: 'NASDAQ:AAPL',
        locale: 'fr',
      });
  
      // Ajoutez le script au conteneur du widget plutôt qu'à la fin du composant
      const widgetContainer = this.$el.querySelector('.tradingview-widget-container__widget');
      widgetContainer.appendChild(script);
    },
  };
  </script>
  