<template>
  <button
    class="base-button"
    :class="{ 'base-button--disabled': isDisabled }"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "GenericButton",
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
      default: null,
    },
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (this.onClick) {
        this.onClick(event);
      }

      this.$emit("click", event);
    },
  },
});
</script>

<style lang="scss">
.base-button {
  background-color: #f2994a;
  border: 1px solid #e0812c;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &--disabled {
    background-color: #ccc;
    border-color: #999;
    cursor: not-allowed;
  }

  &:hover {
    position: relative;
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.16);
      position: absolute;
      top: 0;
      left: 0;
      animation: fade-in 0.15s ease forwards;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      width: 0;
      height: 0;
      transform: translate(-10px);
    }

    to {
      opacity: 1;
      width: 100%;
      height: 100%;
      transform: translate(0);
    }
  }
}
</style>
