<template>
  <div>
    <h1>product list</h1>
    <div v-for="(product, index) in allProducts.products" :key="index">
      {{ product.title }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
    ...mapActions(['getProducts'])
  },
  computed: {
    ...mapGetters(['allProducts'])
  }
}
</script>

<style></style>
