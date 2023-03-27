<template>
  <HomeContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HomeContainer from "@/containers/HomeContainer.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HomeContainer,
  },
});
</script>
