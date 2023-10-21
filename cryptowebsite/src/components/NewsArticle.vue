<template>
  <div class="news-carousel">
    <h1>Dernières Nouvelles sur les Cryptomonnaies</h1>
    <div class="carousel-container">
      <news-article
        v-for="article in articles.slice(0, 3)"
        :key="article.title"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NewsArticle from "@/components/NewsArticle.vue";

export default {
  components: {
    NewsArticle,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.fetchCryptoNews();
  },
  methods: {
    async fetchCryptoNews() {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=crypto&apiKey=a665c9ec2c0c410a8fe53ae103b7cb6f"
        );
        this.articles = response.data.articles;
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error);
      }
    },
  },
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  overflow-x: auto;
}
</style>
