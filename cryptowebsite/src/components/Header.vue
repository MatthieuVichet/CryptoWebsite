<template>
    <header>
      <a href="/"><img alt='Logo' src='../assets/logo.png'/></a>
      <nav>
        <ul>
          <router-link to="/">Home</router-link> |
          <router-link to="/monetization">Monetization</router-link> |
          <router-link to="/latestNews">Latest News</router-link> |
          <router-link to="/guide">Beginner's guide</router-link> |
          <router-link to="/analysis">Analysis and trends</router-link> |
          <router-link to="/resources">Resources</router-link> |
          <router-link to="/contact">Contact</router-link>
        </ul>
      </nav>  
      <a>Se connecter</a> 
    </header>
</template>

<script>
export default {
  name: "base-header",
  data() {
    return {
      pageTitle: "My Simple Header",
    };
  },
};
</script>

<style scoped>
  /* Add your component-specific styles here */
  header {
    background-color: #ffffff;
    color: #000000;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

    nav a {
    font-weight: bold;
    color: #000000;
    }

    nav a.router-link-exact-active {
    color: #E11FEA;
    }

  h2 {
    font-size: 24px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  li {
    margin-right: 1rem;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: #E11FEA;
  }
</style>