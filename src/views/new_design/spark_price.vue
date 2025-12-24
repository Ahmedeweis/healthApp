<template>
  <div class="min-h-screen bg-[#F8FBFF] p-4 md:p-6 font-['Inter'] relative overflow-x-hidden flex flex-col">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">




      <div class="w-10 h-10"></div> <!-- Spacer -->

    </div>
<div class="flex items-center justify-center">
        <div class="bg-white/60 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-white/40">
        <span class="text-[#007AFF] font-bold text-sm tracking-wide">Spark tests</span>
      </div>
</div>
    <!-- Selection View -->
    <div class="flex-1 flex flex-col md:flex-row gap-6 items-center justify-center transition-all duration-500 ease-in-out pb-6 max-w-lg md:max-w-6xl mx-auto w-full">
      <!-- Spark Packaging Card -->

<div
  @click="handleCardClick"
  class="relative flex-1
         bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200
         rounded-[20px] p-4 md:p-6
         border border-white/60
         shadow-[0_20px_50px_rgba(59,130,246,0.25)]
         hover:shadow-[0_30px_70px_rgba(59,130,246,0.35)]
         cursor-pointer active:scale-95 hover:scale-[0.98] transition-all duration-300
         min-h-[340px] flex flex-col w-full overflow-hidden"
>

        <!-- Header Section -->
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-100/50 flex items-center justify-center backdrop-blur-sm shadow-sm">
             <img src="/imgs/star_black.svg" alt="Spark Icon" class="w-8 h-8 object-contain" />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800 font-['Hanken_Grotesk']">Spark Packaging</h2>
          </div>
        </div>
        <p class="text-[14px] text-gray-600 mb-6 leading-relaxed max-w-[75%] font-medium">
          Unlock the full spectrum of biological insights with our integrated WGS, Microbiome, and Proteomics package.
        </p>
        <!-- Features -->
        <div class="space-y-4 mb-8 relative z-20">
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#007AFF] flex items-center justify-center shadow-md shadow-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="text-[12px] font-bold text-gray-700 tracking-wide">WHOLE GENOME SEQUENCING</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#007AFF] flex items-center justify-center shadow-md shadow-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="text-[12px] font-bold text-gray-700 tracking-wide">MICROBIOME SEQUENCING</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#007AFF] flex items-center justify-center shadow-md shadow-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="text-[12px] font-bold text-gray-700 tracking-wide">MASS SPECTROMETRY</span>
          </div>
        </div>
        <!-- Price and Badge -->
        <div class="flex items-end justify-between relative z-20 mt-auto pt-6">
          <div class="flex items-start">
            <span class="text-2xl font-bold text-gray-800 mt-1">$</span>
            <span class="text-6xl font-bold text-gray-800 tracking-tight">500</span>
          </div>
          <div class="bg-white px-3 py-1 rounded-2xl shadow-sm border border-white">
            <span class="text-[#007AFF] font-bold text-[15px]">72h turnaround</span>
          </div>
        </div>
        <!-- Decorative Image -->
        <div class="absolute right-[0px] bottom-[30px]  z-10 pointer-events-none">
          <img src="/imgs/blue.svg" alt="Blue Cube" class="w-full h-full object-contain transform " />
        </div>
      </div>

      <!-- Standard Package Card -->
<div
  @click="handleCardClick"
  class="relative flex-1
         bg-[#F3F3F3] backdrop-blur-xl
         rounded-[20px] p-4 md:p-6
         border border-gray-200/70
         shadow-[0_20px_50px_rgba(0,0,0,0.12)]
         hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
         cursor-pointer active:scale-95 hover:scale-[0.98] transition-all duration-300
         min-h-[340px] flex flex-col w-full overflow-hidden"
>

        <!-- Header Section -->
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
             <img src="/imgs/star_blue.svg" alt="Standard Icon" class="w-8 h-8 object-contain" />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800 font-['Hanken_Grotesk']">Standard Package</h2>
          </div>
        </div>
        <p class="text-[14px] text-gray-600 mb-6 leading-relaxed max-w-[75%] font-medium">
          Get essential health insights with our standard test with limited biological depth.
        </p>
        <!-- Features -->
        <div class="space-y-4 mb-8 relative z-20">
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center shadow-md shadow-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="text-[12px] font-bold text-gray-700 tracking-wide uppercase">Blood work</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center shadow-md shadow-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="text-[12px] font-bold text-gray-700 tracking-wide uppercase">Hormone panels</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center shadow-md shadow-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="text-[12px] font-bold text-gray-700 tracking-wide uppercase">Hormone panels</span>
          </div>
        </div>
        <!-- Price and Badge -->
        <div class="flex items-end justify-between relative z-20 mt-auto pt-6">
          <div class="flex items-start">
            <span class="text-2xl font-bold text-gray-800 mt-1">$</span>
            <span class="text-6xl font-bold text-gray-800 tracking-tight">150</span>
          </div>
          <div class="bg-white backdrop-blur px-3 py-1 rounded-2xl border border-blue-100">
            <span class="text-[#007AFF] font-bold text-[15px]">72h turnaround</span>
          </div>
        </div>
        <!-- Decorative Image -->
        <div class="absolute right-[-40px] bottom-[20px] w-64 h-64 z-10 opacity-90 pointer-events-none">
           <img src="/imgs/retangel_white.png" alt="White Cube" class="w-full h-full object-contain " />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleCardClick = () => {
  router.push('/new_design/spark_details')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

.font-hanken {
  font-family: 'Hanken Grotesk', sans-serif;
}
</style>
