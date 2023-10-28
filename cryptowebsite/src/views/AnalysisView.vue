<template>
  <div>
    <h1>Analysis and trends</h1>
    <div class="about">
      <div class="content">
        <Chart :symbol="selectedSymbol" :key="selectedSymbol" class="left-content" />
        <AnalysisNotes class="right-content" />
      </div>
    </div>
    <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />  
  </div>

</template>


<script>
import Chart from '@/components/TradingViewWidget.vue';
import AnalysisNotes from '@/components/AnalysisNotes.vue';

export default {
  components: {
    Chart,
    AnalysisNotes,
  },
};
</script>
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh; 
}

.content {
  display: flex;
  align-items: center;
}

.left-content {
  flex: 1; 
  margin-right: 50px;
  width: 70%;
  height: 100%; 
}

.right-content {
  flex: 1;
}

</style>