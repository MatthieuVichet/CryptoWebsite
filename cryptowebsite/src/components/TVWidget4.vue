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
    name: 'TradingViewTechnicalAnalysisWidget',
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        interval: '1m',
        width: 425,
        isTransparent: false,
        height: 490,
        symbol: 'NASDAQ:AAPL',
        showIntervalTabs: true,
        displayMode: 'single',
        locale: 'fr',
        colorTheme: 'dark',
      });
  
      // Ajoutez le script au conteneur du widget plutôt qu'à la fin du composant
      const widgetContainer = this.$el.querySelector('.tradingview-widget-container__widget');
      widgetContainer.appendChild(script);
    },
  };
  </script>
  