<template>
    <header>
        <nav>
        <h2>{{ pageTitle }}</h2>
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
    background-color: #333;
    color: white;
    padding: 1rem;
  }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    }

    nav a.router-link-exact-active {
    color: #42b983;
    }

  h2 {
    font-size: 24px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>