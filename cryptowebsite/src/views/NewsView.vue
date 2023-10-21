<template>
  <div class="news-carousel">
    <h1>Dernières Nouvelles sur les Cryptomonnaies</h1>
    <div class="carousel-container">
      <div
        class="row"
        v-for="(rowArticles, index) in articlesInRows"
        :key="index"
      >
        <news-article
          v-for="article in rowArticles"
          :key="article.title"
          :article="article"
        />
      </div>
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
  computed: {
    articlesInRows() {
      return this.articles.reduce((rows, article, index) => {
        const rowIndex = Math.floor(index / 4);
        if (!rows[rowIndex]) {
          rows[rowIndex] = [];
        }
        rows[rowIndex].push(article);
        return rows;
      }, []);
    },
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
  flex-wrap: wrap;
}

.row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}
</style>
