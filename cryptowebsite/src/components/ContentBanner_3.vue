<template>
    <div class="content_banner_3" >
            <h1>{{title}}</h1>
            <h3>{{textContent}}</h3>
            <Button :title="buttonTitle" />
    </div>
  </template>
  
  <script>
  import Button from '../components/BaseButton.vue';

  export default {
    name: "content_banner_3",
    props: {
      title: String,
      textContent: String,
      buttonTitle: String,
      style: Object,
    },
    components: {
    Button, 
  },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  .content_banner_3{
    background-image: url('../assets/bannerPic2.jpg');
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    background-size: cover; /* Ensure the background image covers the entire container */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
  </style>
  