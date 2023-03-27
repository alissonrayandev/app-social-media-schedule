<template>
  <div class="schedule-view-container">
    <FullScreenLoading v-if="!isLoaded" />
    <div v-else class="content">
      <SocialMediaSelect
        class="grid-item item1"
        :social-media-list="gtSocialMedias"
        v-model:selected="post.social_network_key"
      />
      <PublishDate
        class="grid-item item2"
        :saved-publish-date="post.publication_date"
        @update-date="post.publication_date = $event"
      />
      <PostDescriptionField
        class="grid-item item3"
        v-model:modelValue="post.text"
      />
      <UploadPostImage
        class="grid-item item4"
        @selectedImage="post.media = $event"
      />
      <PostVizualization
        class="grid-item item5"
        :image="post.media"
        :medias="post.social_network_key"
        :description="post.text"
      />
    </div>

    <ScheduleActions
      v-if="isLoaded"
      class="actions"
      :schedule-is-disabled="
        !post.social_network_key.length || !post.media || !post.publication_date
      "
      @cancel="cancelProgress"
      @savePubli="savePub"
      @saveSketch="eventSaveSketch()"
    />

    <!-- DIALOGS/MODAL -->
    <LoseProgressDialog
      v-if="displayLoseProgressDialog"
      :is-open="displayLoseProgressDialog"
      @close="displayLoseProgressDialog = false"
      @redirect="$router.push('/')"
    />

    <SuccessDialog
      v-if="displaySuccessDialog"
      :is-open="displaySuccessDialog"
      @redirect="$router.push('/agenda')"
    />

    <SavedSketchDialogVue
      v-if="displaySavedDialog"
      :is-open="displaySavedDialog"
      @redirect="$router.push('/')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

import PublishDate from "@/components/ScheduleView/PublishDate.vue";
import PostDescriptionField from "@/components/ScheduleView/PostDescriptionField.vue";
import SocialMediaSelect from "@/components/ScheduleView/SocialMediaSelect.vue";
import UploadPostImage from "@/components/ScheduleView/UploadPostImage.vue";
import ScheduleActions from "@/components/ScheduleView/ScheduleActions.vue";
import PostVizualization from "@/components/ScheduleView/PostVizualization.vue";

import FullScreenLoading from "@/components/DesignSystem/FullScreenLoading.vue";
import LoseProgressDialog from "@/components/Commom/Dialogs/LoseProgressDialog.vue";
import SuccessDialog from "@/components/Commom/Dialogs/SuccessDialog.vue";
import SavedSketchDialogVue from "@/components/Commom/Dialogs/SavedSketchDialog.vue";

export default defineComponent({
  name: "ScheduleViewContainer",
  components: {
    PublishDate,
    PostDescriptionField,
    SocialMediaSelect,
    UploadPostImage,
    ScheduleActions,
    PostVizualization,
    FullScreenLoading,
    LoseProgressDialog,
    SuccessDialog,
    SavedSketchDialogVue,
  },
  data() {
    return {
      post: {
        social_network_key: [],
        media: null,
        text: "",
        publication_date: "",
        status_key: 1,
      },
      socialMedias: [],
      isLoaded: false,
      displayLoseProgressDialog: false,
      displaySuccessDialog: false,
      displaySavedDialog: false,
    };
  },
  computed: {
    ...mapGetters(["gtSocialMedias", "gtSketch"]),
  },
  methods: {
    ...mapActions([
      "fetchSocialMedias",
      "updateSketchData",
      "saveSketch",
      "recoverySketch",
      "saveToSchedule",
    ]),
    eventSaveSketch() {
      this.saveSketch(this.post);
      this.displaySavedDialog = true;
    },

    savePub() {
      this.saveToSchedule(this.post).then(
        () => (this.displaySuccessDialog = true)
      );
    },
    cancelProgress() {
      if (
        this.post.social_network_key.length ||
        this.post.media ||
        this.post.text ||
        this.post.publication_date
      ) {
        this.displayLoseProgressDialog = true;
      } else {
        this.$router.push("/");
      }
    },
  },
  async mounted() {
    await this.fetchSocialMedias();
    await this.recoverySketch();
    this.post = {
      ...this.post,
      ...this.gtSketch,
    };

    // I use a timeout here just to create a loading feeling since I'm not using an API
    this.$nextTick(() => {
      setTimeout(() => {
        this.isLoaded = true;
      }, 1000);
    });
  },
});
</script>

<style lang="scss" scoped>
.schedule-view-container {
  & > .content {
    padding: 17px 30px 0;
    display: flex;
    flex-direction: column;

    @include media(md) {
      padding: 50px 40px 0;
      gap: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @include media(lg) {
      gap: 40px;
    }
    & > .grid-item {
      margin-bottom: 20px;
      @include media(md) {
        margin-bottom: 0;
      }

      &.item1 {
        grid-column: 1;
        grid-row: 1;

        @include media(md) {
          grid-column: 1 / span 2;
        }

        @include media(lg) {
          grid-column: 1;
        }
      }

      &.item2 {
        grid-column: 2;
        grid-row: 2;

        @include media(md) {
          grid-column: 3 / span 2;
          grid-row: 1;
        }

        @include media(lg) {
          grid-column: 2;
        }
      }

      &.item3 {
        grid-column: 1 / span 2;
        grid-row: 3;

        @include media(md) {
          grid-column: 1 / span 2;
          grid-row: 2;
        }
      }

      &.item4 {
        grid-column: 1 / span 2;
        grid-row: 4;

        @include media(md) {
          grid-column: 3 / span 2;
          grid-row: 2;
        }

        @include media(lg) {
          grid-column: 1 / span 2;
          grid-row: 3;
        }
      }

      &.item5 {
        grid-column: 1 / span 4;
        grid-row: 5;

        @include media(lg) {
          grid-column: 3 / span 4;
          grid-row: 1 / span 3;
        }
      }
    }
  }
  & > .actions {
    margin-top: 20px;
  }
}
</style>
