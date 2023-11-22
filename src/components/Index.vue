<script setup>
import MainFrame from '@/components/frame/MainFrame.vue'
import LeftMenu from "@/components/content/LeftMenu.vue"

</script>

<template>
  <div>
    <MainFrame>
      <template #sideBar>
        <LeftMenu/>
      </template>
      <template #header>
        this is header
      </template>
      <template #contentBody>
        <router-view></router-view>
      </template>
    </MainFrame>
  </div>
</template>

<style scoped>
</style>
