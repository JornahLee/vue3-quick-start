<template>
  <div>
    <textarea class="input" placeholder="Basic usage" :rows="4"/>

    <div class="output">
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue'

import {onMounted} from 'vue'
import api from '@/common/api.js'

let output = ref('123123')
let input = ref('input')
onMounted(() => {
  console.log(`the component is now mounted.`)
  api.doGetSomething().then(rep => {
    console.log(rep);
    output.value = rep.name
  })
})

</script>

<style scoped>
.input, .output {
  width: 70vw;
  height: 30vh;
  padding: 5px;
  /*border: 2px #00ff7b solid;*/
}

</style>
