<template>
  <div class="home">
    <Banner title="Test banner" textContent="This is the first banner, let's test it" buttonTitle="Yoyo" />
    <Banner2 title="Test banner" textContent="This is the second banner, let's test it" buttonTitle="Yoyo" />
    <Banner3 title="Test banner" textContent="This is the second banner, let's test it" buttonTitle="Yoyo" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/ContentBanner_1.vue';
import Banner2 from '../components/ContentBanner_2.vue';
import Banner3 from '../components/ContentBanner_3.vue';
export default {
  name: 'HomeView',
  components: {
    Banner,
    Banner2,
    Banner3,
  },
};
</script>
