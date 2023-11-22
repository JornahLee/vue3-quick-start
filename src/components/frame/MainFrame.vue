<script setup>

</script>

<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <div class="sidebar">
    <slot name="sideBar"></slot>
  </div>
  <div class="content-body">
    <slot name="contentBody"></slot>
  </div>
</template>

<style scoped>
.content-body, .sidebar {
  border: lightgrey solid 1px;
  border-radius: 5px;

  float: left;
  margin: 10px;
}

.header {
  border: 1px solid lightgrey;
  border-radius: 5px;
}
</style>
