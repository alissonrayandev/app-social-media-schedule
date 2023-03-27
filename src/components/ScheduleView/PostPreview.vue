<template>
  <Card class="post-preview">
    <template #title>
      <label>Visualização do post</label>
    </template>

    <template #content>
      <div v-if="displayPreview" class="previews">
        <component
          class="preview"
          v-for="(preview, index) in medias"
          :is="choseComponent(preview || '')"
          :key="`preview-${index}`"
        >
          <div v-if="imagePreview" class="image-container">
            <img :src="imagePreview" width="100%" height="100%" />
          </div>

          <template #description>{{ description }}</template>
        </component>
      </div>

      <div v-else class="empty-state">
        <p>
          Aguardando conteúdo. Informe os canais e as mídias desejadas para
          visualização.
        </p>

        <img
          src="@/assets/images/post-placeholder.png"
          alt="post placeholder"
        />
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/DesignSystem/Card.vue";

import InstagramPreview from "@/components/ScheduleView/SocialMediaPreviewModels/InstagramPreview.vue";
import LinkedinPreview from "@/components/ScheduleView/SocialMediaPreviewModels/LinkedinPreview.vue";

export default defineComponent({
  name: "PostPreview",
  components: {
    Card,
    InstagramPreview,
    LinkedinPreview,
  },
  props: {
    image: {
      type: [String, Blob] as unknown as () => string | Blob | null,
      default: null,
    },
    medias: {
      type: Array as () => Array<string | null>,
      default: () => [],
    },
    description: {
      type: String as () => string | null,
    },
  },
  data() {
    return {};
  },
  computed: {
    displayPreview() {
      return this.imagePreview && this.medias?.length;
    },
    imagePreview() {
      if (this.image instanceof Blob) {
        return URL.createObjectURL(this.image);
      } else {
        return this.image;
      }
    },
  },
  methods: {
    choseComponent(socialMedia: string) {
      switch (socialMedia) {
        case "2":
          return "InstagramPreview";
        case "3":
          return "LinkedinPreview";
        default:
          "div";
      }
    },
  },
});
</script>

<style lang="scss">
.post-preview {
  & > .card-content {
    & > .previews {
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: auto;
      padding-bottom: 12px;

      @include media(md) {
        flex-direction: row;
      }

      & > .preview {
        margin-bottom: 20px;

        @include media(md) {
          &:not(:first-child) {
            margin-left: 20px;
          }
        }
        & > .image-container {
          width: 332px;
          height: 332px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          @include media(sm) {
            width: 368px;
            height: 368px;
          }

          & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    & > .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > p {
        @extend #label;
        color: $base-color-font-2;
        text-align: center;
        margin-bottom: 20px;
        max-width: 380px;
      }

      & > img {
        max-width: 300px;
      }
    }
  }
}
</style>
