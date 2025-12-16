<template>
  <div class="flex items-center justify-center mb-8">
    <div class="flex items-center">
      <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold', currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600']">1</div>
      <div :class="['w-16 h-1', currentStep > 1 ? 'bg-blue-500' : 'bg-gray-300']"></div>
      <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold', currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600']">2</div>
      <div :class="['w-16 h-1', currentStep > 2 ? 'bg-blue-500' : 'bg-gray-300']"></div>
      <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold', currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600']">3</div>
    </div>
  </div>
</template>

<script setup>
const { currentStep } = defineProps({
  currentStep: {
    type: Number,
    required: true
  }
});
</script>