import { createStore } from "vuex";

export default createStore({
  state: {
    drawer: false,
  },
  getters: {},
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    setDrawer(state, value) {
      state.drawer = value;
    },
  },
  actions: {},
  modules: {},
});
