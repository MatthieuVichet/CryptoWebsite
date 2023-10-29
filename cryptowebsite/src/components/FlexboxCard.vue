<template>
  <div class="flexbox-card">
    <a :href="url">
      <img :src="imageSrc" alt="Card Image" class="card-image" />
    </a>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    imageSrc: String,
    url: String,
  },
};
</script>


<style scoped>
.flexbox-card {
  width: calc(33.33% - 20px); 
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  background-color: #fff; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flexbox-card:hover{
  background-color: #ebe9e9;
}

.card-image {
  max-width: 100%; 
  height: auto;
  margin-bottom: 10px;
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
}

.card-text {
  font-size: 1em;
  color: #666;
}
</style>
