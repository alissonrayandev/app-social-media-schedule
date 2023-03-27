<template>
  <ScheduleViewContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScheduleViewContainer from "@/containers/ScheduleViewContainer.vue";

export default defineComponent({
  name: "SchedulingView",
  components: {
    ScheduleViewContainer,
  },
  props: {},
});
</script>
