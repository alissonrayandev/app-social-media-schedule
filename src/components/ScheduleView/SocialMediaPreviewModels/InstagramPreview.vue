<template>
  <div class="instagram-preview">
    <div class="socialmedia-header">
      <div class="logo">
        <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
      </div>
      <span class="name">Alisson Rayan</span>
    </div>

    <slot />

    <div class="info">
      <div class="actions">
        <div class="interactions">
          <font-awesome-icon :icon="['far', 'heart']" />
          <font-awesome-icon :icon="['far', 'comment']" />
        </div>

        <font-awesome-icon :icon="['far', 'bookmark']" />
      </div>

      <p class="description">
        <slot name="description" />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InstagramPreview",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
});
</script>

<style lang="scss" scoped>
.instagram-preview {
  width: fit-content;
  max-width: 368px;
  & > .socialmedia-header {
    display: flex;
    align-items: center;
    padding: 14px 14px 28px;
    border: 1px solid $base-color-border-3;
    border-bottom: none;
    border-radius: 4px 4px 0 0;

    & > .logo {
      background: linear-gradient(187.5deg, #ef2ea2 5.81%, #e0a22b 109.34%);
      border: 1px solid #ef2ea2;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 12px;

      & > .icon {
        font-size: 24px;
        color: $color-white;
      }
    }

    & > .name {
      @extend #description;
      color: $color-black;
    }
  }

  & > .info {
    border: 1px solid $base-color-border-3;
    border-top: none;
    border-radius: 0 0 4px 4px;
    padding: 8px 16px 16px;

    & > .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      * {
        font-size: 22px;
        color: $base-color-placeholder;
      }

      & > .interactions {
        > *:first-child {
          margin-right: 12px;
        }
      }
    }

    & > .description {
      @extend #description;
      color: $base-color-placeholder;
      text-align: left;
      margin: 0;
      max-width: 300px;
      word-wrap: break-word;
    }
  }
}
</style>
