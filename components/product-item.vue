<template>
  <div class="product-item">
    <div
      class="product-item__delete"
      @click="deleteProduct(product.id)"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4_349)">
          <path d="M10.207 5.79688C9.99998 5.79688 9.83224 5.96462 9.83224 6.17158V13.2535C9.83224 13.4604 9.99998 13.6283 10.207 13.6283C10.4139 13.6283 10.5817 13.4604 10.5817 13.2535V6.17158C10.5817 5.96462 10.4139 5.79688 10.207 5.79688Z" fill="white" />
          <path d="M5.78544 5.79688C5.57848 5.79688 5.41074 5.96462 5.41074 6.17158V13.2535C5.41074 13.4604 5.57848 13.6283 5.78544 13.6283C5.99241 13.6283 6.16015 13.4604 6.16015 13.2535V6.17158C6.16015 5.96462 5.99241 5.79688 5.78544 5.79688Z" fill="white" />
          <path d="M2.56294 4.76335V13.9953C2.56294 14.541 2.76303 15.0534 3.11256 15.4211C3.46048 15.7898 3.94467 15.9991 4.4514 16H11.541C12.0478 15.9991 12.532 15.7898 12.8798 15.4211C13.2293 15.0534 13.4294 14.541 13.4294 13.9953V4.76335C14.1242 4.57893 14.5745 3.90768 14.4815 3.19471C14.3884 2.48189 13.7811 1.94867 13.0622 1.94852H11.1437V1.48014C11.1459 1.08626 10.9902 0.708039 10.7113 0.42979C10.4325 0.151688 10.0537 -0.0031709 9.65982 4.92333e-05H6.33255C5.93867 -0.0031709 5.55986 0.151688 5.28103 0.42979C5.00219 0.708039 4.84646 1.08626 4.84865 1.48014V1.94852H2.93019C2.21122 1.94867 1.60393 2.48189 1.51084 3.19471C1.4179 3.90768 1.86813 4.57893 2.56294 4.76335ZM11.541 15.2506H4.4514C3.81075 15.2506 3.31236 14.7002 3.31236 13.9953V4.79629H12.68V13.9953C12.68 14.7002 12.1816 15.2506 11.541 15.2506ZM5.59806 1.48014C5.59558 1.28503 5.67227 1.09724 5.81074 0.959502C5.94906 0.821768 6.13729 0.746095 6.33255 0.749461H9.65982C9.85508 0.746095 10.0433 0.821768 10.1816 0.959502C10.3201 1.09709 10.3968 1.28503 10.3943 1.48014V1.94852H5.59806V1.48014ZM2.93019 2.69793H13.0622C13.4347 2.69793 13.7367 2.99989 13.7367 3.3724C13.7367 3.74491 13.4347 4.04688 13.0622 4.04688H2.93019C2.55768 4.04688 2.25571 3.74491 2.25571 3.3724C2.25571 2.99989 2.55768 2.69793 2.93019 2.69793Z" fill="white" />
          <path d="M7.9962 5.79688C7.78923 5.79688 7.62149 5.96462 7.62149 6.17158V13.2535C7.62149 13.4604 7.78923 13.6283 7.9962 13.6283C8.20317 13.6283 8.37091 13.4604 8.37091 13.2535V6.17158C8.37091 5.96462 8.20317 5.79688 7.9962 5.79688Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_4_349">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="product-item__img">
      <img
        :src="product.image"
      >
    </div>
    <div class="product-item__info">
      <div class="product-item__title">
        {{ product.name }}
      </div>
      <div class="product-item__text">
        {{ product.text }}
      </div>
      <div class="product-item__price">
        {{ formatPrice(product.price) }} ??????.
      </div>
    </div>
  </div>
</template>

<script>
import { formatPrice } from '~/utils/number-format'

export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    formatPrice,
    deleteProduct (id) {
      const cookies = this.$cookies.get('products')
      cookies.splice(cookies.findIndex(cookie => cookie.id === id), 1)
      this.$cookies.set('products', JSON.stringify(cookies))
      this.$store.dispatch('updateProduct')
    }
  }
}
</script>

<style lang="scss" scoped>
.product-item {
  position: relative;
  height: 100%;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  // .product-item__delete
  &__delete {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #FF8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    svg {
      visibility: visible;
    }
  }

  // .product-item__img
  &__img {
    position: relative;
    padding: 0px 0px 200px 0px;
    border-radius: 4px 4px 0px 0px;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // .product-item__info
  &__info {
    padding: 16px 16px 24px;
  }

  // .product-item__title
  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0px 0px 16px 0px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #3F3F3F;
  }

  // .product-item__text
  &__text {
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 80px;
    margin: 0px 0px 32px 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #3F3F3F;
  }

  // .product-item__price
  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3F3F3F;
  }

  &:hover {
    .product-item__delete {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
