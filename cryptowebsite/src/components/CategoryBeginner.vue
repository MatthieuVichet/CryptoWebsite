<template>
    <div
      class="category-beginner"
      :class="{ 'full-screen': isFullScreen }"
      @mouseenter="hoverCategory(true)"
      @mouseleave="hoverCategory(false)"
    >
      <div class="category-header">
        <img :src="imageSrc" alt="Category Image" class="category-image" />
        <div class="category-info">
          <h2 class="category-title">{{ categoryTitle }}</h2>
          <p class="category-description">{{ categoryDescription }}</p>
          <PopUpButton title="Learn more" @click="openVideo" />
        </div>
      </div>
      <div v-if="isFullScreen" class="video-overlay" @click="closeVideo">
        <div class="video-container">
          <iframe
            width="560"
            height="315"
            :src="getYouTubeEmbedUrl(videoUrl)"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PopUpButton from "@/components/PopUpButton.vue";
  
  export default {
    components: {
      PopUpButton,
    },
    props: {
      categoryTitle: String,
      categoryDescription: String,
      imageSrc: String,
      videoUrl: String,
    },
    data() {
      return {
        isFullScreen: false,
        isHovered: false,
      };
    },
    methods: {
      openVideo() {
        this.isFullScreen = true;
      },
      closeVideo() {
        this.isFullScreen = false;
      },
      hoverCategory(isHovered) {
        this.isHovered = isHovered;
      },
      getYouTubeEmbedUrl(url) {
        const videoId = this.getYouTubeVideoId(url);
        return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
      },
      getYouTubeVideoId(url) {
        const match = url.match(
          /(?:youtu\.be\/|youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
        );
  
        return match ? match[1] : null;
      },
    },
  };
  </script>
  
  <style scoped>
  .category-beginner {
    /*transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;*/
    border-radius: 15px;
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  }
  
  .category-beginner:hover {
    background-color: rgba(225, 31, 234, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
    margin-bottom: 6px;
    margin-top: 6px;
  }
  
  .category-header {
    display: flex;
    cursor: pointer;
  }
  
  .category-image {
    height: 200px;
    width: 320px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  
  .category-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .category-title {
    text-align: center;
  }
  
  .category-description {
    text-align: center;
  }
  
  .video-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .video-container {
    position: relative;
    max-width: 80%;
  }
  
  .category-beginner.full-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
    cursor: pointer;
  }
  
  .category-beginner.full-screen .category-header {
    display: none;
  }
  </style>