<template>
    <div>
      <h1>Fear and Greed Index</h1>
      <p v-if="loading">Fetching data...</p>
      <p v-else>
        Fear and Greed Index: {{ fearAndGreedIndex }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fearAndGreedIndex: null,
        loading: true,
      };
    },
    created() {
      this.fetchFearAndGreedIndex();
    },
    methods: {
      async fetchFearAndGreedIndex() {
        try {
          const response = await fetch('https://api.alternative.me/fng/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          this.fearAndGreedIndex = data.data[0].value;
          this.loading = false;
        } catch (error) {
          console.error('Error fetching Fear and Greed Index:', error);
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styling here */
  </style>
  