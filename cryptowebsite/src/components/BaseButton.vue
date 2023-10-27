<template>
  <button
    class="custom-button"
    :style="buttonStyle"
    @focus="applyFocusStyle"
    @blur="applyFocusStyle"
    @mouseenter="applyHoverStyle"
    @mouseleave="applyHoverStyle"
    @click="navigateToRoute"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    style: Object,
    to: String,
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
        ...(this.isHovered ? this.styleOnHover : {}),
      };
    },
    styleOnFocus() {
      return {
        background: "#E11FEA",
        transform: "scale(1.1)",
      };
    },
    styleOnHover() {
      return {
        background: "#E11FEA",
        transform: "scale(1.1)",
      };
    },
  },
  methods: {
    applyFocusStyle() {
      this.isFocused = !this.isFocused;
    },
    applyHoverStyle() {
      this.isHovered = !this.isHovered;
    },
    navigateToRoute() {
      // Use Vue Router to navigate to the specified route
      this.$router.push(this.to);
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
  width: fit-content;
  height: auto;
}

a {
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
}
</style>
