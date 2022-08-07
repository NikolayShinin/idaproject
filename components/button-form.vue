<template>
  <button
    :type="type"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonForm',
  props: ['type', 'disabled', 'text']
}
</script>

<style lang="scss" scoped>

button {
  width: 100%;
  height: 36px;
  margin: 24px 0px 0px 0px;
  background: #7BAE73;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: 'Inter';
  font-weight: 600;
  text-align: center;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  transition: all 0.3s ease;
  &:disabled {
    background: #EEEEEE;
    color: #B4B4B4;
  }
}

</style>
