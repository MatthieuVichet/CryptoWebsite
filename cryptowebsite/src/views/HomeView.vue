<template>
  <div class="home">
       <h1>This is a home page</h1>
       <Button title="Click me"/>

  </div>
</template>

<script>
// @ is an alias to /src
import Button from '../components/BaseButton.vue';
export default {
  name: 'HomeView',
  components: {
    Button, 
  },
};
</script>
