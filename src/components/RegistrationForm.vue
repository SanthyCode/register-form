<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <Timeline :current-step="currentStep" />

      <form @submit.prevent="submitForm" class="mt-8 space-y-6">
        <Step1 v-if="currentStep === 1" :user="user" :countries="countries" @file-change="handleFileChange" />
        <Step2 v-if="currentStep === 2" :user="user" />
        <Step3 v-if="currentStep === 3" :user="user" />

        <div class="flex justify-between">
          <button v-if="currentStep > 1" @click="prevStep" type="button" class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Anterior</button>
          <button v-if="currentStep < 3" @click="nextStep" type="button" :disabled="!isStepValid(currentStep)" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-300">Siguiente</button>
          <button v-if="currentStep === 3" type="submit" :disabled="!isStepValid(3)" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:bg-gray-300">Enviar</button>
        </div>
      </form>

      <Modal :show="showModal" @close="showModal = false" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { User } from '../domain/User.js';
import { CountryApi } from '../infrastructure/CountryApi.js';
import { RegistrationService } from '../application/RegistrationService.js';
import Timeline from './Timeline.vue';
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';
import Modal from './Modal.vue';

const currentStep = ref(1);
const showModal = ref(false);
const countries = ref([]);
const user = ref(new User());
const registrationService = new RegistrationService(new CountryApi());

onMounted(async () => {
  countries.value = await registrationService.getCountries();
});

const isStepValid = (step) => {
  return registrationService.validateStep(user.value, step);
};

const nextStep = () => {
  if (isStepValid(currentStep.value)) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const submitForm = () => {
  if (isStepValid(3)) {
    registrationService.submitForm(user.value);
    showModal.value = true;
  }
};

const handleFileChange = (field, file) => {
  user.value[field] = file;
};
</script>