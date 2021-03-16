import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    itemsOnPage: [],
    cart: [],
  },
  mutations: {
    setData(state, payload) {
      state.data = payload.newData;
      state.itemsOnPage = Object.keys(payload.newData);
    },
    setCart: (state, product) => {
      state.cart.push(product);
    },
  },
  getters: {
    getData: (state) => state.data,
    getItemsOnPage: (state) => state.itemsOnPage,
    getFullPrice: (state) => {
      const keys = state.itemsOnPage;
      return keys.reduce((res, cur) => res + state.data[cur].price, 0);
    },
    getItemsInCart(state) {
      return state.cart;
    },
  },
  actions: {
    requestData({ commit, state }, page) {
      // console.log(state);
      fetch(`/database/items${page}.json`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          commit("setData", { newData: res });
        });
    },
    requestToCart({ commit }, product) {
      commit("setCart", product);
    },
  },
});
