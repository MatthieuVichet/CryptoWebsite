<template>
    <div class="CardComponent"       :style="buttonStyle"
    @mouseenter="applyHoverStyle" @mouseleave="applyHoverStyle"  >
        <a class="link" :href="route"><h2 class="title">{{title}}</h2></a>
        <p>{{text}}</p>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "content_banner_1",
    props: {
      title: String,
      text: String,
        backgroundColor: String, // Prop for background color
        route: String, // Prop for background color
    },
    data() {
      return {
        isHovered: false,
      };
    },
    computed: {
      buttonStyle() {
        return {
          ...this.style,
          ...this.styleOnLoad,
          ...(this.isHovered ? this.styleOnHover : {})
        };
      },
      styleOnHover() {
        return {
          transform: 'scale(1.1)',
        };
      },
      styleOnLoad() {
        return {
          background: this.backgroundColor 
        };
      },
    },
    methods: {
      applyFocusStyle() {
        this.isFocused = !this.isFocused;
      },
      applyHoverStyle() {
        this.isHovered =  !this.isHovered;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  .CardComponent {
    cursor: pointer;
    padding: 3rem;
    width: 100%;
    height: fit-content; /* Set the height as needed */
    border-radius: 1rem;
    text-align: left;
    transition: all 0.3s ease-in-out;

  }

  .link{
    color: rgba(0,0,0, 0.7);
    text-decoration: none;
  }
  </style>
  