<!-- Modal.vue -->
<template>
  <div v-if="isOpen" class="modal" @click.self="closeModal">
    <div class="content">
      <button v-if="hasClose" class="close-button" @click="closeModal">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "ModalBase",
  props: {
    isOpen: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    hasClose: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("no-scroll");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("no-scroll");
    });

    return {};
  },
  methods: {
    closeModal() {
      this.$emit("update:isOpen", false);
    },
  },
});
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  & > .content {
    max-height: 100%;
    background-color: $color-white;
    overflow: auto;
    border-radius: 4px;
    position: relative;

    @include media(md) {
      max-height: calc(100% - 24px);
    }
    & > .close-button {
      background: transparent;
      border: none;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
}
</style>
