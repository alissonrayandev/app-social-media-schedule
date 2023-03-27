<template>
  <ScheduleListContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScheduleListContainer from "@/containers/ScheduleListContainer.vue";

export default defineComponent({
  name: "ScheduleListView",
  components: {
    ScheduleListContainer,
  },
  props: {},
});
</script>
