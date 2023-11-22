<template>
  <div>
    <button @click="sendNotification">点我发通知</button>
  </div>

</template>

<script setup>
import {message} from 'ant-design-vue'

function sendNotification() {
  message.info('看得出来我是通知吧看得出来我是通知吧看得出来我是通知吧看得出',1)
}
</script>

<style scoped>
</style>
