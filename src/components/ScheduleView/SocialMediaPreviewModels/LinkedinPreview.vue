<template>
  <div class="linkedin-preview">
    <div class="socialmedia-header">
      <div class="logo">
        <font-awesome-icon class="icon" :icon="['fab', 'linkedin-in']" />
      </div>
      <div class="account">
        <span class="name">Alisson Rayan</span>
        <span class="date">7 de setembro</span>
      </div>

      <p class="description">
        <slot name="description" />
      </p>
    </div>

    <slot />

    <div class="info">
      <div class="comments">
        <p>5 comentários</p>
      </div>
      <div class="actions">
        <font-awesome-icon :icon="['far', 'thumbs-up']" />
        <font-awesome-icon :icon="['far', 'message']" />
        <font-awesome-icon :icon="['fas', 'share']" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "linkedinPreview",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
});
</script>

<style lang="scss" scoped>
.linkedin-preview {
  width: fit-content;
  max-width: 368px;
  & > .socialmedia-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 14px 14px 8px;
    border: 1px solid $base-color-border-3;
    border-bottom: none;
    border-radius: 4px 4px 0 0;

    & > .logo {
      background: #2e92ef;
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

    & > .account {
      display: flex;
      flex-direction: column;

      & > .name {
        @extend #description;
        color: $color-black;
      }

      & > .date {
        @extend #label-2;
        color: $base-color-font-2;
      }
    }

    & > .description {
      flex: 100%;
      @extend #description;
      color: $base-color-placeholder;
      text-align: left;
      margin: 16px 0 0;
      max-width: 300px;
      word-wrap: break-word;
    }
  }

  & > .info {
    border: 1px solid $base-color-border-3;
    border-top: none;
    border-radius: 0 0 4px 4px;
    padding: 0;

    & > .comments {
      border-bottom: 1px solid $base-color-border-3;
      padding: 8px 14px;

      > p {
        margin: 0;
        text-align: left;
      }
    }

    & > .actions {
      padding: 5px 14px;
      display: flex;
      align-items: center;

      > *:not(:first-child) {
        margin-left: 12px;
      }
    }
  }
}
</style>
