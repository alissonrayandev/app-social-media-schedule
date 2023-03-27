<template>
  <Card class="social-media-select">
    <template #title>
      <label>Redes sociais</label>
    </template>

    <template #content>
      <div
        v-for="social in socialMediaList"
        :key="social.id"
        class="social-media-option"
        @click.self="toggleSelection(social.id)"
      >
        <input
          type="checkbox"
          :id="`social-${social.id}`"
          :value="String(social.id)"
          v-model="selectedSocialMedia"
          :disabled="social.status === 'disabled'"
          class="sr-only"
        />
        <label
          :for="`social-${social.id}`"
          class="icon-container"
          :class="{
            '-selected': isSelected(social.id),
            '-disabled': social.status === 'disabled',
          }"
        >
          <font-awesome-icon :icon="['fab', social.icon]" />
        </label>
      </div>
    </template>
  </Card>
</template>

<script>
import { ref, watch } from "vue";
import Card from "@/components/DesignSystem/Card.vue";

export default {
  name: "SocialMediaSelect",
  components: {
    Card,
  },
  props: {
    socialMediaList: {
      type: Array,
      required: true,
    },
    selected: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const selectedSocialMedia = ref([...props.selected]);

    watch(selectedSocialMedia, (newValue) => {
      emit("update:selected", newValue);
    });

    function toggleSelection(id) {
      const stringId = String(id);
      const index = selectedSocialMedia.value.indexOf(stringId);
      if (index >= 0) {
        selectedSocialMedia.value.splice(index, 1);
      } else {
        selectedSocialMedia.value.push(stringId);
      }
    }

    function isSelected(id) {
      return selectedSocialMedia.value.includes(String(id));
    }

    return {
      selectedSocialMedia,
      toggleSelection,
      isSelected,
    };
  },
};
</script>

<style lang="scss">
.social-media-select {
  display: flex;
  flex-wrap: wrap;

  & > .card-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    & > .social-media-option {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4px;

      & > .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      & > .icon-container {
        display: flex;
        align-items: center;
        padding: 8px;
        border: 1px solid $base-color-border-2;
        border-radius: 50%;
        transition: all 0.2s ease-in-out;

        &:hover {
          cursor: pointer;
          color: $base-color-2;
          border-color: $base-color-2;
          background: $color-orange-light;
        }

        &.-selected {
          background: $gradient-1;
          color: $color-white;
          border-color: $base-color-2;
        }

        &.-disabled {
          background: $base-color-disabled-light;
          color: $base-color-disabled-dark;

          &:hover {
            cursor: not-allowed;
            background: $base-color-disabled-light;
            border-color: $base-color-disabled-dark;
          }
        }
      }
    }
  }
}
</style>
