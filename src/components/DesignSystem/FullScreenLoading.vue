<template>
  <div class="fullscreen-loading">
    <div class="loading-spinner"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FullScreenLoading",
});
</script>

<style lang="scss" scoped>
.fullscreen-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > .loading-spinner {
    border: 4px solid #ccc;
    border-top-color: #666;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
