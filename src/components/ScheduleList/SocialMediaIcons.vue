<template>
  <div class="social-media-icons">
    <div class="icons">
      <div
        :class="['icon', getSocialMediaIcon(id)]"
        v-for="id in socialMediaList"
        :key="id"
      >
        <font-awesome-icon :icon="['fab', getSocialMediaIcon(id)]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialMediaIcons",
  components: {},
  props: {
    socialMediaList: {
      type: Array as any,
      required: true,
    },
    availableSocialMedia: {
      type: Array as any,
      required: true,
    },
  },
  methods: {
    getSocialMediaIcon(id: string) {
      const socialMedia = this.availableSocialMedia.find(
        (social: any) => String(social.id) === String(id)
      );
      // I added a magnifying glass as a placeholder
      return socialMedia ? socialMedia.icon : "fa-sistrix";
    },
  },
});
</script>

<style lang="scss">
.social-media-icons {
  & > .icons {
    display: flex;
    justify-content: center;

    & > .icon {
      padding: 8px;
      width: 33px;
      height: 33px;
      display: flex;
      justify-content: center;
      align-content: center;
      border-radius: 50%;
      color: $color-white;

      &:not(:first-child) {
        margin-left: 16px;
      }

      &.linkedin {
        background: $color-blue;
      }

      &.instagram {
        background: $color-pink;
      }
    }
  }
}
</style>
