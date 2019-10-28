<template>
  <div>
    <h1>product list</h1>
    <div v-for="product in products" :key="product">
      {{ product.title }}
    </div>
  </div>
</template>

<script>
import EcommerceServices from '@/services/EcommerceServices.js'
export default {
  name: 'products',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      const response = await EcommerceServices.fetchProducts()
      this.products = response.data
    }
  }
}
</script>

<style></style>
