<template>
  <div>
    <button @click="show=!show">点我过渡</button>
<!--    过渡动画的名字， 需要和 css中的class 前缀匹配 否则无效-->
    <Transition name="test">
      <div v-if="show">
        this is content
      </div>
    </Transition>

  </div>

</template>

<script setup>
import {ref} from 'vue'

let show = ref(true)

</script>

<style scoped>
.test-enter-active,
.test-leave-active {
  transition: opacity 0.5s ease;
}

.test-enter-from,
.test-leave-to {
  opacity: 0;
}
</style>
