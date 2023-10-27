<template>
  <div class="home">
    <Banner title="Follow the latest crypto-related data" textContent="Discover the latest prices and variations of your favorite assets" buttonTitle="See assets" to="/monetization" imgURL="bannerPic.png"/>
    <div class="ThreeCards">
      <CardComponent title="Analysis & Trends" text="To know more about the latest trends and analysis about crypto market" backgroundColor="rgba(18,153,247,0.2)" route="/analysis" />
      <div class="ThreeCardsChild">
        <CardComponent title="Monetization" text="Up to 10 crypto charts and analytic tools" backgroundColor="rgba(225, 31, 234, 0.2)" route="/monetization" />
        <CardComponent title="Latest news" text="Stay aware of the latest trending news" backgroundColor="rgba(18,153,247,0.2)" route="/latestNews" />
      </div>
    </div>
    <Banner2 title="Learn about the latest news on-trend" textContent="Dive through crypto-related articles written by experts" buttonTitle="See news" to="/latestNews" imgURL="bannerPic.png"/>
    <div class="ThreeCards">
      <CardComponent title="Beginner's guide" text="To learn more about crypto-related topics" backgroundColor="rgba(225, 31, 234, 0.2)" route="/guide" />
      <div class="ThreeCardsChild">
        <CardComponent title="Resources" text="Additional links and resources that could be helpful" backgroundColor="rgba(18,153,247,0.2)" route="/resources" />
        <CardComponent title="Contact" text="Meet our team of dedicated students!" backgroundColor="rgba(225, 31, 234, 0.2)" route="/contact" />
      </div>
    </div>
    <Banner3 title="Real time market analysis" textContent="Keep yourself updating with our general market features" to="/analysis" buttonTitle="Market analysis" />
    <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />    

  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/ContentBanner_1.vue';
import Banner2 from '../components/ContentBanner_2.vue';
import Banner3 from '../components/ContentBanner_3.vue';
import CardComponent from '../components/CardComponent.vue';

export default {
  name: 'HomeView',
  components: {
    Banner,
    Banner2,
    Banner3,
    CardComponent,
  },
};
</script>

<style>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}
.ThreeCards {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 1.5rem;
  width: max-content;
}

.ThreeCardsChild {
  display: flex;
  gap: 1.5rem;
  flex-direction: row;
}

</style>
