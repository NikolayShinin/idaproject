<template>
  <div
    class="field"
    :class="{
      required: required,
      invalid: invalid
    }"
  >
    <div v-if="invalid" class="field__error-message">
      Поле является обязательным
    </div>
    <label :for="id">
      {{ label }}
    </label>
    <input
      v-if="type === 'input'"
      :id="id"
      ref="input"
      :value="textValue"
      type="text"
      :placeholder="placeholder"
      @input="changeValue()"
      @blur="$emit('blurInput')"
    >
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      ref="input"
      :value="textValue"
      :placeholder="placeholder"
      @input="changeValue()"
      @blur="$emit('blurInput')"
    />
  </div>
</template>

<script>
import { formatPrice } from '~/utils/number-format'

export default {
  name: 'FieldForm',
  model: {
    prop: 'textValue',
    event: 'changeValue'
  },
  props: ['type', 'label', 'id', 'required', 'placeholder', 'textValue', 'format', 'invalid'],
  data () {
    return {
      text: this.value
    }
  },
  methods: {
    changeValue () {
      const textValue = this.$refs.input.value
      if (this.format === 'price') {
        if (Number(textValue.replace(/[^+\d]/g, ''))) {
          this.$refs.input.value = formatPrice(Number(textValue.replace(/[^+\d]/g, '')))
        } else {
          this.$refs.input.value = ''
        }
      }
      this.$emit('changeValue', this.$refs.input.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  position: relative;
  // .field__error-message
  &__error-message {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #FF8484;
  }

  &:not(:last-child) {
    margin: 0px 0px 16px 0px;
  }

  &.invalid {
    input {
      border: 1px solid #FF8484;
    }
  }

  &:not(:last-child) {
    margin: 0px 0px 16px 0px;
  }

  &.required {
    label {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        width: 4px;
        height: 4px;
        background: #FF8484;
        border-radius: 50%;
      }
    }
  }

  label {
    position: relative;
    display: inline-block;
    margin: 0px 0px 4px 0px;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
  }

  input, textarea {
    width: 100%;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 16px;
    font-size: 12px;
    line-height: 15px;
    color: #49485E;

    &::placeholder {
      color: #B4B4B4;
    }
  }

  textarea {
    min-height: 108px;
    resize: none;
  }
}
</style>
