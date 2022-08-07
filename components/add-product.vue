<template>
  <div class="add-product" @submit.prevent="submitProduct()">
    <form class="add-product__form">
      <field-form
        id="name"
        v-model="name"
        type="input"
        label="Наименование товара"
        placeholder="Введите наименование товара"
        :invalid="$v.name.$dirty && $v.name.$invalid"
        :required="true"
        @blurInput="blurInput('name')"
      />
      <field-form
        id="text"
        v-model="text"
        type="textarea"
        label="Описание товара"
        placeholder="Введите описание товара"
      />
      <field-form
        id="image"
        v-model="image"
        type="input"
        label="Ссылка на изображение товара"
        placeholder="Введите ссылку"
        :invalid="$v.image.$dirty && $v.image.$invalid"
        :required="true"
        @blurInput="blurInput('image')"
      />
      <field-form
        id="price"
        v-model="price"
        type="input"
        label="Цена товара"
        format="price"
        :invalid="$v.price.$dirty && $v.price.$invalid"
        placeholder="Введите цену"
        :required="true"
        @blurInput="blurInput('price')"
      />
      <button-form
        text="Добавить товар"
        :disabled="disabled"
        type="submit"
      />
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import FieldForm from './field-form'
import ButtonForm from './button-form'

export default {
  name: 'AddProduct',
  components: { ButtonForm, FieldForm },
  validations: {
    name: { required },
    image: { required },
    price: { required }
  },
  data () {
    return {
      name: '',
      text: '',
      image: '',
      price: ''
    }
  },
  computed: {
    disabled () {
      return this.$v.$invalid
    }
  },
  methods: {
    blurInput (field) {
      if (this.$v.$invalid) {
        this.$v[field].$touch()
      }
    },
    submitProduct () {
      const cookies = this.$cookies.get('products')
      const product = {
        id: Date.now(),
        name: this.name,
        text: this.text,
        image: this.image,
        price: Number(this.price.replace(/[^+\d]/g, ''))
      }
      if (cookies) {
        cookies.push(product)
        this.$cookies.set('products', JSON.stringify(cookies))
      } else {
        this.$cookies.set('products', JSON.stringify([product]))
      }
      this.name = ''
      this.text = ''
      this.image = ''
      this.price = ''
      this.$v.$reset()
      this.$store.dispatch('updateProduct')
    }
  }
}
</script>

<style lang="scss" scoped>
  .add-product {
    padding: 24px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }
</style>
