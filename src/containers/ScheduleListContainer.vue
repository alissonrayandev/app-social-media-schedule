<template>
  <div class="schedule-list">
    <FullScreenLoading v-if="!isLoaded" />
    <div class="content" v-else>
      <h1>Listagem de agendamento</h1>
      <ScheduleTable
        :items="gtSchedule"
        :social-medias="gtSocialMedias"
        :status-list="gtStatusList"
        @update-current-schedule="updateCurrentSchedule($event)"
      />
    </div>

    <Modal
      v-if="modalIsOpened"
      :is-open="modalIsOpened"
      @update:isOpen="modalIsOpened = false"
    >
      <PostPreview
        :image="currentScheduleData.media"
        :medias="currentScheduleData.social_network_key"
        :description="currentScheduleData.text"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { base64ToBlob } from "@/helpers/functions";

import ScheduleTable from "@/components/ScheduleList/ScheduleTable.vue";
import FullScreenLoading from "@/components/DesignSystem/FullScreenLoading.vue";
import PostPreview from "@/components/ScheduleView/PostPreview.vue";
import Modal from "@/components/DesignSystem/Modal.vue";

export default defineComponent({
  name: "ScheduleList",
  components: {
    ScheduleTable,
    FullScreenLoading,
    PostPreview,
    Modal,
  },
  data() {
    return {
      isLoaded: false,
      modalIsOpened: false,
      currentScheduleData: {
        media: "" as any,
        text: "",
        social_network_key: [] as any,
      },
    };
  },
  computed: {
    ...mapGetters(["gtSchedule", "gtSocialMedias", "gtStatusList"]),
  },
  async mounted() {
    await Promise.all([
      this.fetchSocialMedias(),
      this.fetchSchedule(),
      this.fetchStatusList(),
    ]);

    // I use a timeout here just to create a loading feeling since I'm not using an API
    this.$nextTick(() => {
      setTimeout(() => {
        this.isLoaded = true;
      }, 1000);
    });
  },
  methods: {
    ...mapActions(["fetchSchedule", "fetchSocialMedias", "fetchStatusList"]),
    async updateCurrentSchedule(data: any) {
      this.currentScheduleData = {
        ...data,
        media: data.media.startsWith("data:image")
          ? await base64ToBlob(data.media)
          : data.media,
      };

      this.modalIsOpened = true;
    },
  },
});
</script>

<style lang="scss">
.schedule-list {
  padding: 20px;

  @include media(md) {
    padding: 40px;
  }

  & > .content {
    & > h1 {
      margin-bottom: 32px;
      @extend #label;
      text-align: left;
      color: $base-color-placeholder;
    }
  }
}
</style>
