<template>
  <div class="thumb-image">
    <div class="image-container">
      <img :src="image" alt="Preview" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImagePreview",
  props: {
    image: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.thumb-image {
  display: flex;
  justify-content: center;
  & > .image-container {
    width: 50px;
    height: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
}
</style>
