<template>
  <div class="connexion-view">
    <h1>Connexion View</h1>
    <h2>{{ nomUser ? 'Hello ' + nomUser : '' }}</h2>
  </div>
</template>



<script>
import { inject } from 'vue';

export default {
  setup() {
    const nomUser = inject('user-signed-in'); 

    return {
      nomUser,
    };
  },
};
</script>
