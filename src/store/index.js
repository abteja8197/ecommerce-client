import Vue from 'vue'
import Vuex from 'vuex'
import EcommerceServices from '@/services/EcommerceServices.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts: (state, products) => (state.products = products)
  },
  getters: {
    allProducts: state => state.products
  },
  actions: {
    async getProducts() {
      const response = await EcommerceServices.fetchProducts()

      this.commit('setProducts', response.data)
    }
  },
  modules: {}
})
