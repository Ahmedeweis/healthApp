<template>
  <div class="min-h-screen bg-[#F8FBFF] p-4 md:p-6 font-inter relative overflow-x-hidden flex flex-col items-center">

    <!-- Top Orange/Yellow Glow subtle effect -->
    <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-100/30 to-transparent pointer-events-none"></div>

    <!-- Header Container -->
    <div v-if="viewState === 'details' || viewState === 'confirmation' || viewState === 'risk_details'" class="w-full max-w-5xl relative z-30">
      <div class="flex items-center justify-between mb-8">
        <button
          @click="goBack"
          class="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center active:scale-95 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>


        <div class="w-10 h-10"></div> <!-- Spacer -->
      </div>
    </div>

    <!-- Top Badge for Loading/Dashboard -->
             <!-- Dynamic Badge based on state -->
        <div class="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-white/40">
          <span v-if="viewState === 'risk_details'" class="text-[#E65100] font-bold text-sm tracking-wide">Elevated cardiovascular risk</span>
          <span v-else class="text-[#007AFF] font-bold text-sm tracking-wide">Spark tests</span>
        </div>

    <div v-if="viewState === 'loading' || viewState === 'dashboard'" class="relative z-30 mb-8 w-full flex justify-center">
        <div class="bg-white/80 backdrop-blur-md px-8 py-3 rounded-full shadow-sm border border-white/40">
           <span v-if="viewState === 'loading'" class="text-[#007AFF] font-bold text-sm">Re-modeling your Digital Twin</span>
           <span v-else-if="viewState === 'dashboard'" class="text-[#007AFF] font-bold text-sm">Home</span>
        </div>
    </div>

    <!-- Main Content Wrapper -->
    <div class="flex-1 flex items-center justify-center w-full py-4 relative z-10">

      <!-- Shared Container -->
      <div class="max-w-lg md:max-w-5xl mx-auto w-full animate-fade-in-up bg-linear-to-b from-[#CDD5D9]/50 to-[#F0F1F2]/50 backdrop-blur-[60px] rounded-[32px] md:rounded-[60px] p-5 md:p-10 shadow-xl border border-white/50 relative overflow-hidden transition-all duration-500 min-h-[700px] flex flex-col">

        <!-- Background Glow -->
        <div
          class="absolute
                 right-[-4rem] top-[-6rem]
                 w-[220px] h-[360px]
                 md:right-[-6rem] md:top-[-8rem]
                 md:w-[300px] md:h-[500px]
                 z-0 pointer-events-none
                 blur-[50px] opacity-90"
        >
          <img
            src="/imgs/blue.svg"
            alt=""
            class="w-full h-full object-contain transform rotate-12"
          />
        </div>

        <!-- 1. DETAILS VIEW -->
        <div v-if="viewState === 'details'" class="relative z-10 h-full flex flex-col">
            <div class="text-center mb-6">
                <div class="w-16 h-1 bg-gray-800 rounded-full mx-auto mb-6 opacity-30"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center flex-1">
              <div class="space-y-6">
                <div class="flex items-start gap-4 mb-4 pl-2">
                    <div class="shrink-0 w-16 h-16 rounded-3xl bg-[#e8e4d3] flex items-center justify-center shadow-inner">
                       <img src="/imgs/star_black.svg" alt="Spark Icon" class="w-10 h-10 object-contain" />
                    </div>
                    <div class="flex flex-col pt-1">
                      <span class="text-xs font-bold text-gray-400 tracking-wider">ABOUT THE</span>
                      <h2 class="text-2xl font-bold text-gray-800 font-hanken leading-tight">Spark Packaging</h2>
                    </div>
                </div>
                <p class="text-[14px] md:text-[15px] text-gray-600 leading-relaxed px-2 font-medium">
                    A complete picture of your biology <span class="text-blue-500 font-bold">genes, gut, and protein activity</span> working together to power your Digital Twin.
                </p>
                <div class="rounded-xl overflow-hidden shadow-xl relative bg-black">
                    <video class="w-full h-[220px] md:h-[280px] object-cover" autoplay muted loop playsinline>
                        <source src="/imgs/test.mp4" type="video/mp4">
                    </video>
                </div>
                <p class="text-[14px] md:text-[15px] text-gray-600 leading-relaxed px-2 font-medium">
                    You'll collect a <span class="text-blue-500 font-bold">saliva sample, a stool sample, and a small blood sample using an at-home kit</span> with simple, step-by-step instructions.
                </p>
              </div>

              <div class="flex flex-col justify-center">
                <div class="md:bg-white/10 md:backdrop-blur-sm md:rounded-[40px] md:p-8 md:border md:border-white/20">
                  <div class="bg-white/40 backdrop-blur-sm rounded-3xl p-5 md:p-8 space-y-4 md:space-y-5 border border-white/60 shadow-sm">
                      <div class="flex justify-between items-center text-gray-600 text-[14px] md:text-lg font-medium">
                          <span>Subtotal</span>
                          <span class="text-gray-800 font-bold">$ 475.00</span>
                      </div>
                      <div class="flex justify-between items-center text-gray-600 text-[14px] md:text-lg font-medium">
                          <span>Vat (5%)</span>
                          <span class="text-gray-800 font-bold">$ 25.00</span>
                      </div>
                      <div class="flex justify-between items-center text-gray-600 text-[14px] md:text-lg font-medium">
                          <span>Collection reach</span>
                          <span class="text-green-600 font-bold">Free</span>
                      </div>
                       <div class="my-4 md:my-6 border-t border-4 border-gray-200/50"></div>
                       <div class="flex justify-between items-center text-[#007AFF] font-black text-xl md:text-3xl">
                          <span>Total</span>
                          <span>$ 500.00</span>
                       </div>
                  </div>
                  <button
                      @click="handlePurchase"
                       class="w-full bg-linear-to-br from-[#DEE8ED] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-4 rounded-full font-bold flex items-center justify-between px-10 gap-3 transition-all duration-300 mt-6 md:mt-8 active:scale-95 border border-white shadow-inner group"
                  >
                      <span class="text-[16px] md:text-xl">Purchase now</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                  </button>
                </div>
              </div>
            </div>
        </div>

        <!-- 2. CONFIRMATION VIEW -->
        <div v-else-if="viewState === 'confirmation'" class="relative z-10 h-full flex flex-col items-center text-center animate-fade-in-up py-4 w-full">
            <div class="w-full mb-8">
                <div class="w-16 h-1 bg-gray-800 rounded-full mx-auto opacity-30"></div>
            </div>
            <div class="flex-1 flex flex-col w-full max-w-2xl px-4 md:px-0 items-center">
                <div class="w-full flex items-start text-left mb-10 gap-6">
                     <div class="shrink-0 w-20 h-20 rounded-[28px] bg-[#e8e4d3] flex items-center justify-center shadow-sm">
                       <img src="/imgs/star_black.svg" alt="Spark Icon" class="w-12 h-12 object-contain" />
                    </div>
                    <div class="flex flex-col justify-center">
                        <span class="text-xs font-bold text-gray-400 tracking-wider">CONFIRMATION</span>
                        <h2 class="text-xl font-bold text-gray-700 font-hanken">Spark Packaging</h2>
                    </div>
                </div>

                <div class="space-y-4 mb-12">
                    <span class="text-xs font-bold text-[#007AFF] tracking-wider block uppercase">Spark tests confirmation</span>
                    <h1 class="text-5xl md:text-6xl font-black text-gray-800 mt-2 font-hanken">Thanks</h1>
                    <p class="text-[15px] md:text-lg text-gray-600 leading-relaxed max-w-[360px] mx-auto font-medium">
                        Your test kit is being prepared. Sample collection is simple and done at home.
                    </p>
                </div>

                <div class="relative w-40 h-40 mb-12 flex items-center justify-center mx-auto">
<img src="/imgs/Right.svg" alt="Spark Icon" class="w-20 h-20 object-contain" />
                </div>

                 <div class="mt-auto w-full max-w-sm mx-auto pb-6">
                    <button
                        @click="handleContinue"
                                              class="w-full bg-linear-to-br from-[#DEE8ED] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-4 rounded-full font-bold flex items-center justify-between px-10 gap-3 transition-all duration-300 mt-6 md:mt-8 active:scale-95 border border-white shadow-inner group"
                    >
                        <span class="text-lg">Continue</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                 </div>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const viewState = ref('details') // 'details', 'confirmation'

const goBack = () => {
  if (viewState.value === 'details') {
    router.back()
  } else if (viewState.value === 'confirmation') {
    viewState.value = 'details'
  }
}

const handlePurchase = () => {
  viewState.value = 'confirmation'
}

const handleContinue = () => {
  router.push('/new_design/body_view')
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

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

.animate-pulse {
  animation: pulse 3s infinite ease-in-out;
}
</style>
