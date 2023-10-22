<template>
  <footer>
    <img alt='Logo' src='../assets/logo.png' />
    <div class="footerCredentials">
      <p>&copy;2023, LastBlock Inc</p>
      <p>All rights reserved</p>
    </div>
    <nav>
      <ul>
        <router-link to="/">Home</router-link>
        <router-link to="/monetization">Monetization</router-link>
        <router-link to="/latestNews">Latest News</router-link>
        <router-link to="/guide">Beginner's guide</router-link>
        <router-link to="/analysis">Analysis and trends</router-link>
        <router-link to="/resources">Resources</router-link>
        <router-link to="/contact">Contact</router-link>
      </ul>
    </nav>  
  </footer>
</template>

<script>
export default {
  name: "base-footer",
};
</script>

<style scoped>
/* Add your component-specific styles here */
footer {
  background-color: #ffffff;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;
}
ul {
  display:flex;
  flex-direction: column;
  gap: 1rem;
}

nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;

  }

  nav a.router-link-exact-active {
  color: #E11FEA;
  }

  p {
    font-weight: bold;
    color: #000000;
  }
</style>
