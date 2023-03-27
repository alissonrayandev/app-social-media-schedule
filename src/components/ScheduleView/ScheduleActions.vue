<template>
  <div class="schedule-actions">
    <BaseButton class="cancel-btn" @click="$emit('cancel')">
      Cancelar
    </BaseButton>
    <BaseButton class="sketch-btn" @click.prevent="$emit('saveSketch')">
      Salvar Rascunho
    </BaseButton>
    <BaseButton
      :isDisabled="scheduleIsDisabled"
      class="confirm-btn"
      @click.prevent="$emit('savePubli')"
    >
      Agendar
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseButton from "@/components/DesignSystem/Button.vue";

export default defineComponent({
  name: "ScheduleViewContainer",
  emits: ["cancel", "saveSketch", "savePubli"],
  props: {
    scheduleIsDisabled: {
      type: Boolean,
      default: true,
      validator: (value: boolean | null) => {
        return value === null || typeof value === "boolean";
      },
    },
  },
  components: {
    BaseButton,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss">
.schedule-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $color-white;
  padding: 12px 8px;
  width: 100%;

  @include media(xm) {
    padding: 12px 30px;
  }
  @include media(md) {
    padding: 12px 40px;
    justify-content: flex-end;
  }

  .cancel-btn {
    font-size: 12px;
    line-height: 18px;
    background: transparent;
    border: none;
    color: $color-blue;
    margin-left: 8px;

    @include media(md) {
      min-width: 184px;
    }
  }

  .sketch-btn {
    font-size: 12px;
    line-height: 18px;
    background: transparent;
    border: 1px solid $color-blue;
    color: $color-blue;
    margin-left: 8px;

    @include media(md) {
      min-width: 184px;
    }
  }

  .confirm-btn {
    font-size: 12px;
    line-height: 18px;
    background: $color-blue;
    border: 1px solid $color-blue;
    color: $color-white;
    margin-left: 8px;

    @include media(md) {
      min-width: 184px;
    }
  }
}
</style>
