<template>
  <div class="schedule-table">
    <div class="filter-container">
      <label for="status-filter">Filtrar por status: </label>
      <select id="status-filter" v-model="selectedStatus">
        <option value="">Todos</option>
        <option
          v-for="(status, index) in statusList"
          :key="index"
          :value="status.id"
        >
          {{ status.name }}
        </option>
      </select>
    </div>

    <div class="table-container">
      <table class="responsive-table">
        <thead>
          <tr>
            <th><p>Redes Sociais</p></th>
            <th><p>Mídia</p></th>
            <th><p>Texto</p></th>
            <th>
              <p class="-sort" @click="toggleSort()">
                Data <font-awesome-icon :icon="['fas', arrowIcon]" />
              </p>
            </th>
            <th><p>Ações</p></th>
            <th><p>Status</p></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredItems" :key="index">
            <td>
              <SocialMediaIcons
                :social-media-list="item.social_network_key"
                :available-social-media="socialMedias"
              />
            </td>
            <td>
              <ThumbImage :image="item.media" />
            </td>
            <td>
              <p>{{ item.text }}</p>
            </td>
            <td>
              <p>{{ formatDateTime(item.publication_date) }}</p>
            </td>
            <td>
              <a @click="selectImagePreview(item)">preview</a>
            </td>
            <td>
              <p>
                <span
                  class="status-dot"
                  :style="{ backgroundColor: getStatusColor(item.status_key) }"
                ></span>
                {{ getStatusName(item.status_key) }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SocialMediaIcons from "./SocialMediaIcons.vue";
import ThumbImage from "../DesignSystem/ThumbImage.vue";

export default defineComponent({
  name: "ResponsiveTable",
  emits: ["update-current-schedule"],
  components: {
    SocialMediaIcons,
    ThumbImage,
  },
  data() {
    return {
      remapedItems: [] as any,
      sortOrder: 1,
      selectedStatus: "",
      arrowIcon: "arrow-down",
    };
  },
  props: {
    items: {
      type: Array as () => any[],
      required: true,
    },
    socialMedias: {
      type: Object,
      required: true,
    },
    statusList: {
      type: Array as () => any[],
      required: true,
    },
  },
  mounted() {
    this.remapedItems = this.items;
  },
  computed: {
    filteredItems() {
      if (!this.selectedStatus) return this.remapedItems;

      return this.remapedItems.filter(
        (item: any) => item.status_key === parseInt(this.selectedStatus)
      );
    },
  },
  methods: {
    formatDateTime(datetime: string): string {
      const date = new Date(datetime);
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}h`;

      return formattedDate;
    },

    selectImagePreview(data: any) {
      this.$emit("update-current-schedule", data);
    },

    getStatusName(statusKey: number): string {
      const status = this.statusList.find((s: any) => s.id === statusKey);

      return status ? status.name : "";
    },

    getStatusColor(statusKey: number): string {
      const status = this.statusList.find((s: any) => s.id === statusKey);

      return status ? status.color : "";
    },

    toggleSort() {
      if (this.arrowIcon === "arrow-up") {
        this.arrowIcon = "arrow-down";
      } else {
        this.arrowIcon = "arrow-up";
      }
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
      this.remapedItems.sort((a: any, b: any) => {
        const dateA = new Date(a.publication_date).getTime();
        const dateB = new Date(b.publication_date).getTime();
        return (dateA - dateB) * this.sortOrder;
      });
    },
  },
});
</script>

<style lang="scss">
.schedule-table {
  max-width: 1355;
  margin: 0 auto;
  overflow-x: auto;

  & > .filter-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;

    & > label {
      margin-right: 0.5rem;
    }

    & > select {
      padding: 0.5rem;
      font-size: 1rem;
      border-radius: 4px;
      border: 1px solid $base-color-border-3;
    }
  }
  & > .table-container {
    overflow: auto;
    & > .responsive-table {
      width: 100%;
      border-collapse: collapse;
      overflow: auto;
      margin: 0;
      padding: 0;
      border: 1px solid $base-color-border-3;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      th,
      td {
        text-align: center;
        padding: 8px;
        border: 1px solid $base-color-border-3;
        min-width: 120px;
        max-width: 240px;
        height: 70px;
        box-sizing: border-box;
        overflow-wrap: break-word;
        vertical-align: middle;

        & > a {
          @extend #description;
          color: $color-blue;
          text-decoration: underline;

          &:hover {
            cursor: pointer;
          }
        }

        & > p {
          @extend #description;
          color: $base-color-placeholder;
          display: flex;
          align-items: center;
          justify-content: center;
          & > .status-dot {
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 6px;
          }

          &.-sort {
            & > svg {
              margin-left: 4px;
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
      }

      th {
        background-color: #f2f2f2;
        font-weight: bold;
        white-space: nowrap;
      }

      tbody tr:nth-child(even) {
        background-color: #f2f2f2;
      }
    }
  }
}
</style>
