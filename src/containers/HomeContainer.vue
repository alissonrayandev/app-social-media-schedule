<template>
  <div class="home-container">
    <img src="@/assets/images/schedulePostArtwork.svg" alt="artwork" />
    <BaseButton @click="$router.push('/agendamento')">Agendar post</BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseButton from "@/components/DesignSystem/Button.vue";

export default defineComponent({
  name: "HomeContainer",
  components: {
    BaseButton,
  },
});
</script>

<style lang="scss">
.home-container {
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);

  & > img {
    width: 375px;
    height: 423px;
    margin-bottom: 68px;
  }

  & > .generic-button {
    min-width: 184px;
  }
}
</style>
