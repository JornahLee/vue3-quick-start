<template>
  <div>
    this is test route view 222222
    <div>
      {{ testParam }}
    </div>
  </div>

</template>

<script setup>
import {defineProps} from 'vue'

defineProps(['testParam'])

</script>

<style scoped>

</style>
