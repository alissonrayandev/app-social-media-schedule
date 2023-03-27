<template>
  <div class="post-vizualization">
    <BaseButton class="preview-btn" @click="modalIsOpened = true">
      Vizualizar post
    </BaseButton>

    <PostPreview class="posts" v-bind="$attrs" />

    <!-- modal -->
    <Modal
      v-if="modalIsOpened"
      :is-open="modalIsOpened"
      @update:isOpen="modalIsOpened = false"
    >
      <PostPreview v-bind="$attrs" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseButton from "@/components/DesignSystem/Button.vue";
import PostPreview from "@/components/ScheduleView/PostPreview.vue";
import Modal from "@/components/DesignSystem/Modal.vue";

export default defineComponent({
  name: "PostVizualization",
  components: {
    BaseButton,
    PostPreview,
    Modal,
  },
  data() {
    return {
      modalIsOpened: false,
    };
  },
});
</script>

<style lang="scss">
.post-vizualization {
  & > .preview-btn {
    display: block;
    width: 100%;

    @include media(md) {
      display: none;
    }
  }

  & > .posts {
    display: none;
    height: 100%;

    @include media(md) {
      display: block;
    }
  }
}
</style>
