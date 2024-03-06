<script setup>
const props = defineProps({
  figure: {
    required: true,
    type: Object,
  }
})

const emit = defineEmits(['update:figure'])

const figure = computed({
  get(){
    return props.figure
  },
  set(value){
    emit('update:figure', value)
  },
})

</script>

<template>
  <div>
    <img :src="figureImage" alt="">
  </div>
</template>