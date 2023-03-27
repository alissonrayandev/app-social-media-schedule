<template>
  <Card class="publish-date">
    <template #title>
      <label>Data de publicação</label>
    </template>
    <template #content>
      <VueDatePicker
        class="field"
        v-model="date"
        :enable-time-picker="false"
        format="dd/MM"
        placeholder="DD/MM"
        @update:modelValue="updateDateTime"
      >
        <template #input-icon>
          <font-awesome-icon :icon="['fas', 'calendar-days']" />
        </template>
      </VueDatePicker>
      <VueDatePicker
        class="field"
        v-model="time"
        time-picker
        placeholder="HH/MM"
        @update:modelValue="updateDateTime"
      >
        <template #input-icon>
          <font-awesome-icon :icon="['fas', 'clock']" />
        </template>
      </VueDatePicker>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/DesignSystem/Card.vue";

export default defineComponent({
  name: "PublishDateComponent",
  components: {
    Card,
  },
  props: {
    savedPublishDate: {
      type: [String, Date],
      default: null,
    },
  },
  emits: ["updateDate"],
  data() {
    return {
      date: null as Date | null,
      time: null as { hours: number; minutes: number; seconds: number } | null,
      dateTimeCombined: null as Date | null,
    };
  },
  mounted() {
    if (this.savedPublishDate) {
      const publishDate = new Date(this.savedPublishDate);
      this.date = new Date(publishDate);
      this.time = {
        hours: publishDate.getHours(),
        minutes: publishDate.getMinutes(),
        seconds: publishDate.getSeconds(),
      };
    }
  },
  methods: {
    format(date: Date) {
      const day = date.getDate();
      const month = date.getMonth() + 1;

      return `${day}/${month}`;
    },
    updateDateTime() {
      if (this.date && this.time) {
        const combined = new Date(this.date);
        combined.setHours(this.time.hours);
        combined.setMinutes(this.time.minutes);
        combined.setSeconds(this.time.seconds);

        this.dateTimeCombined = combined;
        this.$emit("updateDate", this.dateTimeCombined);
      } else {
        this.$emit("updateDate", null);
        this.dateTimeCombined = null;
      }
    },
  },
});
</script>

<style lang="scss">
.publish-date {
  & > .card-content {
    display: flex;
    justify-content: space-between;

    & > .field {
      max-width: calc(50% - 12px);
    }
  }
}

.dp__input_icon_pad {
  padding-right: 8px;
  padding-left: 22px;
  border: 1px solid $base-color-border;
}

.dp__input_icon {
  margin: 0 8px;
  font-size: 12px;
  color: $base-color-placeholder;
}

.dp__input_reg {
  &::placeholder {
    color: $base-color-font-2;
    @extend #description;
  }
}
</style>
