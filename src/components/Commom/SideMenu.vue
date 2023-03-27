<template>
  <div class="side-menu" :class="{ open: isOpen }">
    <button class="close-button" @click="$emit('close')">
      <font-awesome-icon :icon="['fas', 'xmark']" />
    </button>
    <nav class="nav">
      <img
        class="logo"
        src="@/assets/images/Logo.png"
        alt="mlabs-logo"
        width="115"
        height="48"
      />
      <ul>
        <li>
          <router-link to="/" @click="$emit('close')">Home</router-link>
        </li>
        <li>
          <router-link to="/agendamento" @click="$emit('close')"
            >Agendamento</router-link
          >
        </li>
        <li>
          <router-link to="/agenda" @click="$emit('close')">Agenda</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideMenu",
  emits: ["close"],
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.side-menu {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1000;
  transition: all 0.3s ease;

  &.open {
    left: 0;
  }

  & > .close-button {
    background: transparent;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  & > .nav {
    padding: 20px;

    & > .logo {
      margin-bottom: 32px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 10px;

        a {
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
}
</style>
