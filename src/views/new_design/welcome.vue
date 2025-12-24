<template>
  <div class="relative min-h-screen w-full bg-[#FFFFFF] overflow-hidden flex flex-col p-6 md:p-12 font-['Inter']">
    <!-- Outer Glow/Border Effect -->
    <div class="fixed inset-0 border-[16px] border-white z-50 pointer-events-none rounded-[40px] shadow-[inset_0_0_100px_rgba(168,200,240,0.3)]"></div>
    <div class="fixed inset-0 border-[1px] border-[#A8C8F0]/30 z-50 pointer-events-none rounded-[40px]"></div>

    <!-- Background Gradients -->
    <div class="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_top_right,#E3F2FF_0%,transparent_70%)] pointer-events-none opacity-80"></div>
    <div class="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_bottom_left,#E3F2FF_0%,transparent_60%)] pointer-events-none opacity-60"></div>

    <!-- Top Logo -->
    <div class="relative z-10 mb-12 md:mb-20" style="display: none;">
      <img src="/imgs/logoB.svg" alt="GenetiQ Logo" class="h-[32px] w-auto" />
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col gap-10 max-w-lg mt-10 md:mt-16">
      <h1 class="text-[#333333] text-[56px] md:text-[80px] font-bold leading-[1.05] tracking-[-0.04em] font-['Hanken_Grotesk']">
        Let’s get<br />started
      </h1>
      <p class="text-[#999999] text-[18px] md:text-[22px] leading-relaxed font-medium max-w-[320px]">
        Welcome to GenetiQ, a new standard in personalized and preventive medicine.
      </p>
    </div>

    <!-- Body Image - Positioned to show torso and head on the right -->
    <div class="fixed right-[-20%] md:right-[-5%] bottom-[-5%] md:bottom-[-10%] w-[140%] md:w-[80%] h-auto md:h-full pointer-events-none z-0 flex justify-end items-end md:items-center">
        <img src="/imgs/body.png" alt="Body Side" class="w-full h-auto md:h-full object-contain md:object-right opacity-100" />
    </div>

    <!-- Bottom Arrow Button -->
    <div class="mt-auto relative z-20 flex justify-end mb-4 mr-4 ">
      <button
        @click="handleStart"
        class="w-24 h-24 rounded-full bg-white/40 backdrop-blur-xl border cursor-pointer border-white/80 flex items-center justify-center shadow-[0_20px_60px_rgba(168,200,240,0.4)] hover:scale-105 transition-all duration-500 active:scale-95 group overflow-hidden"
      >
        <!-- Button Inner Glow -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#A8C8F0]/30 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        <div class="w-[82px] h-[82px] rounded-full bg-gradient-to-br from-[#A8C8F0]/50 to-[#C8E0FF]/30 flex items-center justify-center relative z-10 shadow-inner border border-white/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#2D2D2D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-2 transition-transform duration-500 ease-out">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
const router = useRouter();
const handleStart = () => {
  console.log('Attempting navigation to /new_design/sign-in');
  return router.push('/new_design/sign-in');
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

body {
  margin: 0;
  padding: 0;
}

h1 {
  font-family: 'Hanken Grotesk', sans-serif;
}

p {
  font-family: 'Inter', sans-serif;
  color: #8E9AAE; /* Matching the muted grey in the design */
}

/* Custom shadow for the button to give it that soft depth */
button {
  box-shadow: 0 10px 40px rgba(168,200,240,0.3), inset 0 0 20px rgba(255,255,255,0.5);
}
</style>
