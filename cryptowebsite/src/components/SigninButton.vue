<template>
  <div class="sign-in-button" @mouseleave="closeMenu" @mouseover="openMenu">
    <button title="Sign In" class="signIn-design">
      {{ nomUser || 'Sign In' }}
    </button>
    <transition name="fade" mode="out-in">
      <div class="dropdown-menu" ref="menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="menu-link" @click="redirectToLoginMicrosoft">Microsoft</router-link>
        <router-link to="/" class="menu-link" @click="handleGoogleLogin">Google</router-link>
        <router-link to="/" class="menu-link" @click="handleLogout">Log out</router-link>
      </div>
    </transition>
  </div>
</template>

<script>import { ref, provide } from 'vue';
import { signInAndGetUser, msalInstance } from '../lib/microsoftGraph.js'; 
import { googleAuthCodeLogin } from 'vue3-google-login';
import router from '@/router';

export default {
  name: "SigninButton",
  setup() {
    const nomUser = ref(null);
    const isMenuOpen = ref(false);

    const openMenu = () => {
      isMenuOpen.value = true;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    const redirectToLoginMicrosoft = async () => {
      const user = await signInAndGetUser();
      console.log('User signed in:', user);
      nomUser.value = user;
      provide('user-signed-in', user.name);
    };

    const handleGoogleLogin = () => {
      googleAuthCodeLogin().then((response) => {
        console.log('Réponse de la connexion Google :', response);

        if (response && response.profile) {
          nomUser.value = response.profile.name;
        }
      });
    };

    const handleLogout = () => {
      nomUser.value = null;
      msalInstance.logoutPopup();
      router.push({ name: 'home' });
    };

    return {
      nomUser,
      isMenuOpen,
      openMenu,
      closeMenu,
      redirectToLoginMicrosoft,
      handleGoogleLogin,
      handleLogout,
    };
  },
};

</script>


<style scoped>

.signIn-design {
    background-color: rgba(18,153,247,0.5);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    white-space: nowrap; 
    text-align: left; 
}


.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  display: none;
  border-radius: 5px;
  height: 0; 
  overflow: hidden; 
  transition: height 0.3s ease; 
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
  height: auto;
}

.menu-link:hover {
  background-color: #f0f0f0;
}
</style>
