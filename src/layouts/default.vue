<script setup>
</script>

<template>
  <VApp>
    <RouterView v-slot="{ Component, route }">
      <Transition
          mode="out-in"
      >
        
        <div :key="route.name" class="pt-64">
          <Component
              :is="Component"
          />
        </div>
      </Transition>
    </RouterView>
  </VApp>
  
</template>