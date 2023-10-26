<template>
  <button title="Sign In" class="signIn-design"  @click="redirectToLogin">
    {{ nomUser || 'Sign In' }}
  </button>
</template>

<script>

import { provide } from 'vue';
import { signInAndGetUser } from '../lib/microsoftGraph.js';

export default {
  name: "SigninButton",
  methods: {
    async redirectToLogin() {
      const user = await signInAndGetUser();
      console.log('User signed in:', user);
      this.nomUser = user; 
      provide('user-signed-in', user.name);
      this.$router.push({ name: 'login' });
    },
  },
  data() {
    return {
      nomUser: null,
    };
  },
};


</script>



<style scoped>
/* Vos styles existants pour le bouton */
.signIn-design {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    white-space: nowrap; /* Évite que le texte se divise sur plusieurs lignes */
    text-align: left; /* Aligne le texte à gauche */
}

.signIn-design:hover {
    background-color: #2980b9;
}
</style>