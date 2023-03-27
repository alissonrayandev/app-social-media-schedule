<template>
  <Modal class="success-dialog" :has-close="false" v-bind="$attrs">
    <img src="@/assets/images/success.png" alt="Sucesso" />
    <p>Agendado com sucesso!</p>
    <Button @click="$emit('redirect')">OK</Button>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Modal from "@/components/DesignSystem/Modal.vue";
import Button from "@/components/DesignSystem/Button.vue";

export default defineComponent({
  name: "LoseProgressDialog",
  emits: ["redirect"],
  components: {
    Modal,
    Button,
  },
});
</script>

<style lang="scss">
.success-dialog {
  padding: 16px;
  & > .content {
    padding: 20px;
    max-width: 560px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    & > img {
      width: 190px;
    }

    & > p {
      @extend #title-2;
      color: $base-color-placeholder;
      margin-bottom: 20px;
    }

    & > .base-button {
      font-size: 12px;
      line-height: 18px;
      background: $color-blue;
      border: 1px solid $color-blue;
      color: $color-white;
      margin-left: 8px;
      min-width: 184px;
      height: 45px;
    }
  }
}
</style>
