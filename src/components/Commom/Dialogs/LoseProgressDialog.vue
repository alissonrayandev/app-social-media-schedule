<template>
  <Modal
    class="lose-progress-dialog"
    v-bind="$attrs"
    @update:isOpen="$emit('close')"
  >
    <h2>Tem certeza que deseja sair?</h2>
    <p>
      Se você sair agora, todo o progresso que você preencheu até agora será
      perdido.
    </p>

    <div class="actions">
      <Button class="-cancel" @click="$emit('close')">Cancelar</Button>
      <Button class="-confirm" @click="$emit('redirect')">Sim</Button>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Modal from "@/components/DesignSystem/Modal.vue";
import Button from "@/components/DesignSystem/Button.vue";

export default defineComponent({
  name: "LoseProgressDialog",
  emits: ["close", "redirect"],
  components: {
    Modal,
    Button,
  },
});
</script>

<style lang="scss">
.lose-progress-dialog {
  & > .content {
    padding: 20px;
    max-width: 360px;

    & > h2 {
      @extend #title;
      color: $base-color-font-1;
    }

    & > p {
      @extend #description;
      color: $base-color-font-2;
      margin-bottom: 24px;
    }

    & > .actions {
      display: flex;
      justify-content: space-around;
      & > .base-button {
        width: 120px;

        &.-cancel {
          background: transparent;
          border: none;
          color: $color-blue;
        }

        &.-confirm {
          background: $color-blue;
          border: 1px solid $color-blue;
          color: $color-white;
        }
      }
    }
  }
}
</style>
