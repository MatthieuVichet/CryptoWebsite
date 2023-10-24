<template>
  <div class="news-item">
    <img
      :src="article.urlToImage"
      alt="Image illustrative"
      class="news-image"
    />
    <div class="news-details">
      <h2>
        <a :href="article.url" target="_blank" class="article-link">{{
          article.title
        }}</a>
      </h2>
      <p>{{ article.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.news-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 1rem;
  overflow: hidden;
  margin-right: 10px;
  max-height: 400px;
  width: 400px;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.news-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}

.news-details {
  flex: 1;
  padding: 10px;
}

.article-link {
  color: rgba(225, 31, 234, 0.7);
  text-decoration: none;
}

.news-item:hover {
  box-shadow: 0 0 15px #1299f7;
  transform: translateY(-5px);
}
</style>
