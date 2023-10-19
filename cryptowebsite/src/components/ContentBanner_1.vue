<template>
    <div class="content_banner_1" >
        <div class="test">
            <h1>{{title}}</h1>
            <h3>{{textContent}}</h3>
            <Button :title="buttonTitle" />
        </div>
    </div>
  </template>
  
  <script>
  import Button from '../components/BaseButton.vue';

  export default {
    name: "content_banner_1",
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
  .content_banner_1{
    height: 500px;
    background: url('../assets/bannerPic.png');
    margin-right: 10rem;
    margin-left: 10rem;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y:top;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; /* Align content to the left */
}
.test{
    text-align: left;
}
  </style>
  