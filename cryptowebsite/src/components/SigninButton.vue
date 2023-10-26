<template>
  <div class="sign-in-button" @mouseleave="closeMenu" @mouseover="openMenu">
    <button title="Sign In" class="signIn-design" @click="redirectToLogin">
      {{ nomUser || 'Sign In' }}
    </button>
    <transition name="fade" mode="out-in">
      <div class="dropdown-menu" ref="menu" :class="{ active: isMenuOpen && nomUser }">
        <router-link to="/login" class="menu-link">Your Content</router-link>
        <router-link to="/" class="menu-link">Log out</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import { provide, ref } from 'vue';
import { signInAndGetUser } from '../lib/microsoftGraph.js';
import { useRouter } from 'vue-router'; // Importez useRouter depuis vue-router

export default {
  name: "SigninButton",
  setup() {
    const nomUser = ref(null);
    const isMenuOpen = ref(false);
    const router = useRouter(); // Utilisez useRouter pour accéder au routeur

    const openMenu = () => {
      isMenuOpen.value = true;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    const redirectToLogin = async () => {
      const user = await signInAndGetUser();
      console.log('User signed in:', user);
      nomUser.value = user;
      provide('user-signed-in', user.name);
      router.push({ name: 'login' }); // Utilisez le routeur pour effectuer la redirection
    };

    return {
      nomUser,
      isMenuOpen,
      openMenu,
      closeMenu,
      redirectToLogin,
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


.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  display: none;
  border-radius: 5px;
  height: 0; /* Initial height of 0 */
  overflow: hidden; /* Hide overflow content */
  transition: height 0.3s ease; /* Adjust the duration as needed */
}


.sign-in-button {
  position: relative;
}

.signIn-design:hover {
    background-color: #2980b9;
}

/* Style du menu déroulant */
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Style des liens du menu */
.menu-link {
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #3498db;
  transition: background-color 0.3s ease;
}

.active {
  display: block;
  height: auto; /* Set the height to 'auto' to expand the menu */
}

.menu-link:hover {
  background-color: #f0f0f0;
}
</style>
