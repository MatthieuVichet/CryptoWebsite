<template>
  <div class="analysis-component">
    <div
      class="analysis-text"
      contenteditable="true"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      ref="analysisText"
    >
      {{ analysisContent }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      analysisContent: "Write your analysis...",
    };
  },
  methods: {
    handleInput() {
      this.analysisContent = this.$refs.analysisText.textContent;
      localStorage.setItem("analysisContent", this.analysisContent);
    },
    handleFocus() {
      if (this.analysisContent === "Write your analysis...") {
        this.analysisContent = "";
      }
    },
    handleBlur() {
      if (this.analysisContent === "") {
        this.analysisContent = "Write your analysis...";
      }
    },
  },
  created() {
    const storedAnalysisContent = localStorage.getItem("analysisContent");
    if (storedAnalysisContent) {
      this.analysisContent = storedAnalysisContent;
    }
  },
};
</script>

<style scoped>
.analysis-component {
  background-color: #161a25; 
  padding: 1rem;
  border: 1px solid #e0e0e0; 
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.321);
  transition: all 0.3s ease-in-out;
  width: 400px; 
  height: 465px; 
  display: flex;
  align-items: center;
}

.analysis-text {
  color: #ffffff;
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  overflow-y: auto; 
  outline: none; 
}
</style>
