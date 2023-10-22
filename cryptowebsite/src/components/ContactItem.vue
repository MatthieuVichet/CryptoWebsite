<template>
    <div class="contactItem">
      <img :src="require(`@/assets/${imgURL}`)" />
      <h2>{{ name }}</h2>
      <p>{{ role }}</p>
      <a :href="linkedinLink" target="_blank">Linkedin</a>
      <a :href="'mailto:' + email" target="_blank">{{ email }}</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      role: String,
      imgURL: String, // Rename the prop to imgURL
      linkedinLink: String,
      email: String,
    }
  }
  </script>
  
  <style>
    .contactItem {
        display: flex;
        flex-direction: column;
    }
  </style>
  