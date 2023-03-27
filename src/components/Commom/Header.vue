<template>
  <header class="header">
    <font-awesome-icon
      class="hamburger"
      :icon="['fas', 'bars']"
      @click="isSideMenuOpen = !isSideMenuOpen"
    />

    <img
      class="logo"
      src="@/assets/images/Logo.png"
      alt="mlabs-logo"
      width="115"
      height="48"
    />

    <div class="user">
      <img src="@/assets/images/avatar.png" alt="avatar" />
      <p>Alisson Rayan</p>
    </div>

    <SideMenu
      v-if="isSideMenuOpen"
      :isOpen="isSideMenuOpen"
      @close="isSideMenuOpen = false"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SideMenu from "@/components//Commom/SideMenu.vue";

export default defineComponent({
  name: "HeaderMenu",
  components: {
    SideMenu,
  },
  data() {
    return {
      isSideMenuOpen: false,
    };
  },
});
</script>

<style lang="scss">
.header {
  /* TODO: update after */
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 16px 20px;

  @include media(md) {
    padding: 16px 40px;
  }

  & > .hamburger {
    display: block;
    font-size: 22px;

    @include media(md) {
      display: none;
    }
  }

  & > .logo {
    display: none;

    @include media(md) {
      display: block;
    }
  }

  & > .user {
    display: flex;
    align-items: center;

    & > p {
      @extend #description;
      color: $color-black;
      margin-left: 16px;
      display: none;

      @include media(md) {
        display: block;
      }
    }
  }
}
</style>
