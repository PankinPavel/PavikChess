<script setup>

</script>

<template>
  <VLocaleProvider>
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp>
      <RouterView />
<!--      <ScrollToTop/>-->
    </VApp>
  </VLocaleProvider>
</template>

<style scoped>

</style>
