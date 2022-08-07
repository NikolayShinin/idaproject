<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <h1>
            Добавление товара
          </h1>
        </div>
        <div class="col-8 select-wrapper">
          <v-select
            v-model="sortValue"
            :options="sortOption"
            placeholder="По умолчанию"
          >
            <template #open-indicator>
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4"/>
              </svg>
            </template>
          </v-select>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <add-product />
        </div>
        <div class="col-8">
          <products-list
            :sortValue="sortValue"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AddProduct from '../components/add-product'
import ProductsList from '../components/products-list'

export default {
  name: 'IndexPage',
  components: { ProductsList, AddProduct },
  data () {
    return {
      sortValue: '',
      sortOption: [
        {
          value: 'min',
          label: 'По цене min (от меньшего к большему).'
        },
        {
          value: 'max',
          label: 'По цене max (от большего к меньшему).'
        },
        {
          value: 'name',
          label: 'По наименованию.'
        }
      ]
    }
  }
}
</script>
<style lang="scss">

.select-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
