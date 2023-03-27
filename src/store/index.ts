import { createStore } from "vuex";
import { blobToBase64, base64ToBlob } from "@/helpers/functions";

export default createStore({
  state: {
    socialMedias: [],
    sketch: {
      social_network_key: [],
      media: null,
      text: null,
    },
    schedule: [],
    statusList: [],
  },
  getters: {
    gtSocialMedias: (state) => {
      return state.socialMedias;
    },

    gtSketch: (state) => {
      return state.sketch;
    },

    gtSchedule: (state) => {
      // I take the data that is in the localstorage and add it together
      // with the mock to simulate data from a database
      const storedSchedule = localStorage.getItem("schedule");
      const currentSchedule = storedSchedule ? JSON.parse(storedSchedule) : [];

      return [...state.schedule, ...currentSchedule];
    },

    gtStatusList: (state) => {
      return state.statusList;
    },
  },
  mutations: {
    // SOCIALMEDIA
    SET_SOCIAL_MEDIAS(state, payload) {
      state.socialMedias = payload.sort((a: any, b: any) =>
        a.status === b.status ? 0 : a.status === "enabled" ? -1 : 1
      );
    },

    // SKETCH
    UPDATE_SKETCH(state, payload) {
      state.sketch = {
        ...payload,
      };
    },

    // SCHEDULE
    SET_SCHEDULE(state: any, payload: any) {
      state.schedule = [...payload];
    },

    // STATUS
    SET_STATUS(state, payload) {
      state.statusList = payload;
    },
  },
  actions: {
    // SOCIALMEDIA
    async fetchSocialMedias({ commit }) {
      try {
        const response = await fetch("/data/socialmedias.json");
        const data = await response.json();

        commit("SET_SOCIAL_MEDIAS", data.data);
      } catch (error) {
        return error;
      }
    },

    // SKETCH
    async saveSketch(_, data) {
      const value = JSON.stringify({
        ...data,
        media: await blobToBase64(data.media),
      });
      localStorage.setItem("sketch", value);
    },

    async recoverySketch({ commit }) {
      const value = localStorage.getItem("sketch");
      if (value) {
        const parsedSketch = JSON.parse(value);
        if (parsedSketch.media) {
          parsedSketch.media = await base64ToBlob(parsedSketch.media);
        }

        commit("UPDATE_SKETCH", parsedSketch);
      }
    },

    // SCHEDULE
    async saveToSchedule(_, data) {
      try {
        const storedSchedule = localStorage.getItem("schedule");
        const currentSchedule = storedSchedule
          ? JSON.parse(storedSchedule)
          : [];
        const value = {
          ...data,
          media: await blobToBase64(data.media),
        };

        // add a new publication to schedule on localstorage
        currentSchedule.push(value);
        localStorage.setItem("schedule", JSON.stringify(currentSchedule));

        // clean last sketch
        localStorage.removeItem("sketch");
      } catch (error) {
        return error;
      }
    },

    async fetchSchedule({ commit }) {
      try {
        const response = await fetch("/data/schedule.json");
        const data = await response.json();

        commit("SET_SCHEDULE", data.data);
      } catch (error) {
        return error;
      }
    },

    // STATUS

    async fetchStatusList({ commit }) {
      try {
        const response = await fetch("/data/status.json");
        const data = await response.json();

        commit("SET_STATUS", data.data);
      } catch (error) {
        return error;
      }
    },
  },
  modules: {},
});
