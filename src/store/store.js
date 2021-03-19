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
      state.data = { ...state.data , ...payload.newData};
      state.itemsOnPage.push(...Object.keys(payload.newData));
    },
    setCart: (state, product) => {
      state.cart.push(...Object.keys(product.newData));
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
      fetch(`/itemslist/${page}`, {
        method: 'GET',
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          commit("setData", { newData: res });
        });
    },
    requestToCart({ commit }, product) {
      fetch('/cartlist', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          commit("setCart", { newData: res });
        });
    },
    addItem ({}, data) {
      fetch('/itemslist', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    },
  },
});
