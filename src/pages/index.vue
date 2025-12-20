

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="flex justify-center mb-8">
        <div class="relative w-16 h-16">
          <div class="absolute inset-0 flex items-center justify-center">
            <div
              v-for="i in 12"
              :key="i"
              class="absolute w-1 h-3 rounded-full"
              :style="{
                background: `linear-gradient(${(i - 1) * 30}deg, #3b82f6, #10b981)`,
                transform: `rotate(${(i - 1) * 30}deg) translateY(-20px)`,
                opacity: 0.8
              }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-2">
        Sign in
      </h1>
      <p class="text-center text-gray-500 mb-8">
        Sing in to your Digital twin account.
      </p>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Name Field -->
        <div>
          <label class="block text-sm text-gray-600 mb-2">Name</label>
          <div class="relative">
            <User class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              v-model="formData.name"
              placeholder="Name"
              class="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </div>

        <!-- Email Field -->
        <div>
          <label class="block text-sm text-gray-600 mb-2">Email</label>
          <div class="relative">
            <Mail class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              v-model="formData.email"
              placeholder="mail@example.com"
              class="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </div>

        <!-- Mobile Number Field -->
        <div>
          <label class="block text-sm text-gray-600 mb-2">Mobile number</label>
          <div class="relative">
            <Phone class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              v-model="formData.mobile"
              placeholder="+971"
              class="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </div>

        <!-- Sign In Button -->
        <button
          type=""
          class="w-full py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-lg font-medium hover:from-blue-500 hover:to-cyan-500 transition shadow-md mt-6"
        >
          Sign in
        </button>
        <!-- Sign In Button -->
        <button
          type="submit"
          class="w-full py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-lg font-medium hover:from-blue-500 hover:to-cyan-500 transition shadow-md mt-6"
        >
          go to body analysis
        </button>
        <!-- UAE PASS Button -->
        <button
          type="button"
          @click="handleUAEPass"
          class="w-full py-3 bg-white border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2 shadow-sm"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="#4CAF50"/>
          </svg>
          Sign in with UAE PASS
        </button>

      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { User, Mail, Phone } from 'lucide-vue-next';

const formData = ref({
  name: '',
  email: 'mail@example.com',
  mobile: '+971'
});

const handleSubmit = () => {
  console.log('Sign in submitted:', formData.value);
  navigateTo('/screen2/resulte_overview');
};

const handleUAEPass = () => {
  console.log('Sign in with UAE PASS');
};
</script>
