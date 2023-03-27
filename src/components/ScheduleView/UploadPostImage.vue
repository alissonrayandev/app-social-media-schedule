<template>
  <Card class="upload-post-image">
    <template #title>
      <label>Upload de imagem</label>
    </template>

    <template #content>
      <ImageInput @selectedImage="$emit('selectedImage', $event)" />
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/DesignSystem/Card.vue";
import ImageInput from "@/components/DesignSystem/ImageInput.vue";

export default defineComponent({
  name: "UploadPostImage",
  components: {
    Card,
    ImageInput,
  },
  emits: ["selectedImage"],
  data() {
    return {};
  },
});
</script>

<style lang="scss">
.upload-post-image {
  & > .card-content {
    display: flex;
    justify-content: space-between;

    & > .field {
      max-width: calc(50% - 12px);
    }
  }
}
</style>
