<template>
  <div>
    <div class="title-container">
      <h1>Analysis and trends</h1>
      <TVWidget2 />
    </div>

    <div class="about">
      <div class="content">
        <Chart :symbol="selectedSymbol" :key="selectedSymbol" class="left-content" />
        <AnalysisNotes class="right-content" />
      </div>
    </div>

    <div class="widget-container">
      <TVWidget4 class="tv-widget" />
      <TVWidget3 class="tv-widget" />
    </div>
    
    <div class="widget-container">
      <div class="side-by-side-container">
        <TVWidget5 class="tv-widget" /> 
        <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" class="centered-image" />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '@/components/TradingViewWidget.vue';
import AnalysisNotes from '@/components/AnalysisNotes.vue';
import TVWidget2 from '@/components/TVWidget2.vue';
import TVWidget3 from '@/components/TVWidget3.vue';
import TVWidget4 from '@/components/TVWidget4.vue';
import TVWidget5 from '@/components/TVWidget5.vue';

export default {
  components: {
    Chart,
    AnalysisNotes,
    TVWidget2,
    TVWidget3,
    TVWidget4,
    TVWidget5,
  },
};
</script>

<style scoped>
.title-container {
  text-align: center;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.title-container{
  margin-bottom: 50px 0;
}
.widget-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}

.tv-widget {
  margin: 10px;
}

.tv-widget {
  margin-right: 40px; 
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

.side-by-side-container {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin: 20px 0; 
}

.centered-image {
  vertical-align: middle; 
}
</style>
