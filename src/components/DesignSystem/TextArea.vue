<!-- src/components/EmojiTextarea.vue -->
<template>
  <div class="text-area-component" v-click-outside="handleClickOutside">
    <textarea
      ref="textarea"
      v-bind="$attrs"
      :value="modelValue"
      @input="onInput"
      class="textarea"
      @click="emojiPickerVisible = false"
    ></textarea>
    <button
      v-if="hasEmojis"
      aria-label="Emoji"
      class="emoji-button"
      @click="emojiPickerVisible = !emojiPickerVisible"
    >
      <font-awesome-icon :icon="['far', 'face-smile']" />
    </button>
    <div v-if="emojiPickerVisible" class="emoji-picker-container">
      <EmojiPicker :native="true" @select="onSelectEmoji" />
    </div>
  </div>
</template>

<script>
import EmojiPicker from "vue3-emoji-picker";
import "vue3-emoji-picker/css";

export default {
  name: "EmojiTextarea",
  components: {
    EmojiPicker,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    hasEmojis: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    externalModelValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  data() {
    return {
      text: "",
      emojiPickerVisible: false,
    };
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    onSelectEmoji(emoji) {
      this.$refs.textarea.value += emoji.i;
      this.onInput({ target: { value: this.$refs.textarea.value } });
      this.$refs.textarea.focus();
    },

    handleClickOutside() {
      this.emojiPickerVisible = false;
    },
  },
};
</script>

<style lang="scss">
.text-area-component {
  position: relative;
  width: 100%;
  display: inline-block;

  & > .textarea {
    resize: none;
    width: 100%;
    height: 100px;
    padding: 12px 33px 12px 18px;
    box-sizing: border-box;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: $base-color-placeholder;
  }

  & > .emoji-button {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 18px;
  }

  & > .emoji-picker-container {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }
}
</style>
