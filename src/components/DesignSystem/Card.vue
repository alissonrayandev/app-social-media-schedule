<!-- Card.vue -->
<template>
  <div class="card-component">
    <div class="card-title">
      <slot name="title"></slot>
    </div>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
};
</script>

<style lang="scss">
.card-component {
  border: 1px solid $base-color-label;
  border-radius: 4px;
  background: $color-white;

  & > .card-title {
    padding: 8px 10px;
    width: 100%;
    border-bottom: 1px solid $base-color-label;
    display: flex;
    justify-content: left;

    @extend #label;
  }

  & > .card-content {
    padding: 16px 20px;
  }
}
</style>
