<template>
  <div :class="['v-my-pro', class]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-my-pro',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="styles/components/my-pro"></style>