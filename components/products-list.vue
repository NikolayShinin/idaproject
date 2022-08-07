<template>
  <div class="products-list">
    <div
      v-if="products.length"
      class="products-list__body"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="products-list__item"
      >
        <product-item
          :product="product"
        />
      </div>
    </div>
    <div
      v-else
      class="products-list__empty"
    >
      товаров нет, добавте формой справа
    </div>
  </div>
</template>

<script>
import ProductItem from './product-item'
export default {
  name: 'ProductsList',
  components: { ProductItem },
  props: ['sortValue'],
  computed: {
    products () {
      const products = Array.from(this.$store.getters.getProducts)
      if (this.sortValue?.value === 'min') {
        products.sort((a, b) => a.price - b.price)
      }
      if (this.sortValue?.value === 'max') {
        products.sort((a, b) => b.price - a.price)
      }
      if (this.sortValue?.value === 'name') {
        products.sort((a, b) => {
          const nameA = a.name.toUpperCase()
          const nameB = b.name.toUpperCase()
          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }
          return 0
        })
      }
      return products
    }
  },
  mounted () {
    this.$store.dispatch('updateProduct')
  }
}
</script>

<style lang="scss" scoped>

.products-list {
  // .products-list__body
  &__body {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
  }

  // .products-list__item
  &__item {
    padding: 8px;
    flex: 0 0 33.3333%;
  }

  // .products-list__empty
  &__empty {
    margin: 30px 0px 0px 0px;
    font-weight: 600;
    font-size: 24px;
    line-height: 25px;
    color: #3F3F3F;
    text-align: center;
  }
}

</style>
