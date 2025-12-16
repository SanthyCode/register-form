<template>
  <div v-if="show" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
      <h2 class="text-lg font-bold mb-4">Formulario Enviado</h2>
      <p>El formulario ha sido enviado con éxito.</p>
      <button @click="$emit('close')" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Cerrar</button>
    </div>
  </div>
</template>

<script setup>
const { show } = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);
</script>