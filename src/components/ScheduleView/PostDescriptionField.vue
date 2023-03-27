<template>
  <Card class="post-description-field">
    <template #title>
      <label>Texto do post</label>
    </template>

    <template #content>
      <TextArea
        v-model="localModelValue"
        maxlength="120"
        :has-emojis="true"
        placeholder="Aqui vai o texto descritivo desse post"
      />
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/DesignSystem/Card.vue";
import TextArea from "@/components/DesignSystem/TextArea.vue";

export default defineComponent({
  name: "PostDescriptionField",
  components: {
    Card,
    TextArea,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      localModelValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newVal) {
      this.localModelValue = newVal;
    },
    localModelValue(newVal) {
      this.$emit("update:modelValue", newVal);
    },
  },
});
</script>
