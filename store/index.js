export const state = () => ({
  products: []
})

export const getters = {
  getProducts (state) {
    return state.products
  }
}

export const mutations = {
  setProducts (state, products) {
    if (products) {
      state.products = products
    } else {
      state.products = []
    }
  }
}

export const actions = {
  updateProduct (ctx) {
    const products = this.$cookies.get('products')
    ctx.commit('setProducts', products)
  }
}
