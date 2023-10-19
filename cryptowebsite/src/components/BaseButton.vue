<template>
    <button 
      class="custom-button"
      :style="buttonStyle"
      @focus="applyFocusStyle"
      @blur="applyFocusStyle"
      @mouseenter="applyHoverStyle"
      @mouseleave="applyHoverStyle"
    >
      {{ title }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      style: Object
    },
    data() {
      return {
        isFocused: false,
        isHovered: false,
      };
    },
    computed: {
      buttonStyle() {
        return {
          ...this.style,
          ...(this.isFocused ? this.styleOnFocus : {}),
          ...(this.isHovered ? this.styleOnHover : {})
        };
      },
      styleOnFocus() {
        return {
          background: "#E11FEA",
          transform: 'scale(1.1)',
        };
      },
      styleOnHover() {
        return {
          background: "#E11FEA",
          transform: 'scale(1.1)',
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
  .custom-button {
    background-color: #1299F7;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;

  }
  </style>
  