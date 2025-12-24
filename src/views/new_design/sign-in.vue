<template>
  <div class="relative min-h-screen w-full bg-white overflow-hidden flex flex-col p-8 md:p-12 font-['Inter']">
    <!-- Outer Glow/Border Effect (consistent with welcome page) -->
    <div class="fixed inset-0 border-[16px] border-white z-50 pointer-events-none rounded-[40px] shadow-[inset_0_0_100px_rgba(168,200,240,0.2)]"></div>
    <div class="fixed inset-0 border-[1px] border-[#A8C8F0]/20 z-50 pointer-events-none rounded-[40px]"></div>

    <!-- Top Logo -->
    <div class="relative z-10 mb-16 md:mb-24" style="display: none;">
      <img src="/imgs/logoB.svg" alt="GenetiQ Logo" class="h-[32px] w-auto" />
    </div>

    <!-- Content Wrapper (Centered on PC) -->
    <div class="relative z-10 flex-1 mt-16 flex flex-col items-center md:justify-center w-full">
      <div class="w-full max-w-md flex flex-col items-center md:items-center">
        <!-- Header Section -->

        <div class="w-full mb-12 text-center md:text-center">
          <h1 class="text-[#333333] text-[56px] font-bold leading-tight tracking-tight font-['Hanken_Grotesk'] mb-4">
            Sign in
          </h1>
          <p class="text-[#999999]/80 text-[18px] font-medium font-['Inter']">
            Continue using your email or UAE pass
          </p>
        </div>

        <!-- Form Section -->
        <div class="w-full flex flex-col gap-10">
          <!-- Email Field -->
          <div class="relative group">
            <input
              type="email"
              placeholder="Email"
              class="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-6 py-4 text-[#333333] text-[18px] focus:outline-none focus:border-[#007AFF] focus:bg-white focus:shadow-[0_4px_20px_rgba(0,122,255,0.1)] transition-all duration-300 placeholder:text-gray-400"
            />
          </div>

          <!-- Password Field -->
          <div class="relative group">
            <input
              type="password"
              placeholder="Password"
              class="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-6 py-4 text-[#333333] text-[18px] focus:outline-none focus:border-[#007AFF] focus:bg-white focus:shadow-[0_4px_20px_rgba(0,122,255,0.1)] transition-all duration-300 placeholder:text-gray-400"
            />
          </div>

          <!-- Forgot Password -->
          <div class="flex justify-end -mt-4">
            <button class="text-[#007AFF] text-[16px] font-medium hover:underline">
              Forgot your password?
            </button>
          </div>

          <!-- Submit Buttons Container -->
          <div class="flex flex-col gap-12 mt-12 items-center">
            <!-- Continue with Email Button -->
            <button
              @click="router.push('/mobile/home')"
              class="text-[#333333] cursor-pointer text-[20px] font-bold hover:scale-105 transition-transform"
            >
              Continue with email
            </button>

            <!-- Continue with UAE Pass Button -->
<button
  @click="router.push('/new_design/uae-info')"
  class="w-full bg-gradient-to-br from-[#DEE8ED] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-4 rounded-full font-bold flex items-center justify-around gap-3 transition-all duration-300 active:scale-95 border border-white shadow-inner group"
>

  <!-- shine animation -->
  <div
    class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
           -translate-x-full group-hover:translate-x-full
           transition-transform duration-1000"
  ></div>


  <span class="text-[#333333] text-[16px] font-semibold">
    Continue with UAE Pass
  </span>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333333"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>

</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

h1 {
  font-family: 'Hanken Grotesk', sans-serif;
  letter-spacing: -0.05em;
}

input::placeholder {
  font-family: 'Inter', sans-serif;
}
</style>
