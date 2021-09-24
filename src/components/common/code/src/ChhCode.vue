<template>
  <div class="chh-code">
    <pre class="bg">
      <code :class="'language'+ language" v-html="highlightedCode" />
    </pre>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
export default {
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: "html"
    }
  },
  data() {
    return {
      highlightedCode: ""
    };
  },
  mounted() {},
  created() {
    this.highlightedCode = hljs.highlight(this.code, {
      language: this.language
    }).value;
  }
};
</script>

<style lang="scss" scoped>
.chh-code {
  .bg {
    padding: 10px;
    text-align: left;
    background: #f0f0f0;
  }
}
</style>
