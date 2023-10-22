<template>
  <div class="content_banner_2" >
    <img :src="require(`@/assets/${imgURL}`)" />

      <div class="contentText">
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
    imgURL: String,
  },
  components: {
  Button, 
},
};
</script>

<style scoped>
/* Add your component-specific styles here */
.content_banner_2{
  height: 500px;
  width: 100%;
  margin-right: 10rem;
  margin-left: 10rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.contentText{
display: flex;
flex-direction: column;
justify-content: center;
align-items: end; 
}
</style>
