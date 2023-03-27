<template>
  <div class="image-input" @dragover.prevent @drop="onDrop">
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      accept="image/png, image/jpeg"
      @change="onFileSelected"
    />
    <div class="placeholder" @click="selectImage">
      <font-awesome-icon
        class="icon"
        :icon="['fas', 'cloud-arrow-up']"
        size="2x"
      />
      <span>Arraste e solte uma imagem aqui ou clique no botão abaixo</span>

      <BaseButton>{{ buttonLabel }}</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/DesignSystem/Button.vue";

export default {
  components: {
    BaseButton,
  },
  emits: ["selectedImage"],
  data() {
    return {
      hasImage: false,
    };
  },
  computed: {
    buttonLabel() {
      return this.hasImage ? "Trocar imagem" : "Pesquisar imagem";
    },
  },
  methods: {
    async onFileSelected(event) {
      this.hasImage = true;
      const file = event.target.files[0];
      const resizedImage = await this.resizeImage(file, 368, 368);
      this.$emit("selectedImage", resizedImage);
    },
    async onDrop(event) {
      this.hasImage = true;
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      const resizedImage = await this.resizeImage(file, 368, 368);
      this.$emit("selectedImage", resizedImage);
    },
    selectImage() {
      this.$refs.fileInput.click();
    },

    async resizeImage(file, maxWidth, maxHeight) {
      return new Promise(async (resolve) => {
        const image = new Image();
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        image.src = URL.createObjectURL(file);

        image.onload = () => {
          const aspectRatio = image.width / image.height;
          let newWidth = maxWidth;
          let newHeight = maxHeight;

          if (maxWidth / maxHeight > aspectRatio) {
            newWidth = maxHeight * aspectRatio;
          } else {
            newHeight = maxWidth / aspectRatio;
          }

          canvas.width = newWidth;
          canvas.height = newHeight;
          context.drawImage(image, 0, 0, newWidth, newHeight);

          canvas.toBlob((blob) => {
            resolve(blob);
          }, file.type);
        };
      });
    },

    blobToBase64(blob) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.image-input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px dashed $base-color-border-3;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  & > .hidden {
    display: none;
  }
  & > .placeholder {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;

    & > .icon {
      color: $base-color-font-2;
      margin-bottom: 20px;
      display: none;

      @include media(md) {
        display: block;
      }
    }

    & > span {
      @extend #label;
      color: $base-color-font-2;
      display: none;

      @include media(md) {
        display: block;
      }
    }

    & > .base-button {
      background: transparent;
      color: $color-blue;
      border-color: $color-blue;
      height: 36px;

      @include media(md) {
        margin-top: 20px;
      }
    }
  }
}
</style>
