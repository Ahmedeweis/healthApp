<template>
  <div class="relative min-h-screen w-full bg-white flex flex-col font-['Inter'] overflow-hidden">

    <!-- Phase 1-4: Normal Flow -->
    <template v-if="currentState !== 'final'">
      <!-- Top Logo -->
      <div class="p-6 md:p-12 mt-5 flex justify-start">
        <img src="/imgs/logoB.svg" alt="GenetiQ" class="h-8 w-auto"  style="display: none;"/>
      </div>

      <!-- Content Container -->
      <div
        class="sheet-container relative w-full max-w-md md:max-w-lg lg:max-w-xl
               min-h-[85vh] md:min-h-[90vh] mt-auto
               bg-gradient-to-b from-[#E0E0E0] to-[#FFFFFF] rounded-[40px]
               shadow-[0_-20px_50px_rgba(0,0,0,0.05)] md:shadow-[-10px_0_50px_rgba(0,0,0,0.05)]
               flex flex-col items-center p-4 md:p-10
               mx-auto md:ml-auto
               transition-all duration-500 ease-out"
      >
        <!-- Handle -->
        <div class="w-16 h-1 bg-[#333333] rounded-full mb-8 opacity-80"></div>

        <!-- Content State Switcher -->
        <div class="w-full flex flex-col gap-8 flex-1">

          <!-- Top Info Header (Icon + Titles) -->
          <div class="flex items-center gap-4 md:gap-6">
            <div class="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-white/70 backdrop-blur-md flex items-center justify-center p-3 shadow-sm border border-white/50 overflow-hidden">
              <img v-if="currentState === 'malaffi'" src="/imgs/powredBy.svg" alt="Malaffi" class="w-full h-full object-contain" />
              <img v-else src="/imgs/finger.svg" alt="UAE Pass" class="w-full h-full object-contain" />
            </div>
            <div>
              <span class="text-[#999999] text-[11px] md:text-[12px] font-bold tracking-widest uppercase block mb-1">
                {{ currentState === 'malaffi' ? 'TWIN TUNING' : 'LEARN MORE' }}
              </span>
              <h2 class="text-[#333333] text-[20px] md:text-[24px] font-bold font-['Hanken_Grotesk']">
                {{ currentState === 'malaffi' ? 'Malaffi database' : 'UAE Pass' }}
              </h2>
            </div>
          </div>

          <!-- Initial Info State -->
          <template v-if="currentState === 'info'">
            <p class="text-[#333333] text-[14px] md:text-[16px] leading-relaxed">
              <span class="text-[#007AFF] font-bold">UAE Pass</span> is the official national digital identity platform of the United Arab Emirates
            </p>

            <div class="flex flex-col items-center justify-center py-4 md:py-6">
              <div class="flex flex-col items-center gap-2">
                <img src="/imgs/finger.svg" alt="UAE Pass" class="w-20 h-20 md:w-24 md:h-24 object-contain" />
                <div class="text-center">
                  <div class="text-[#333333] text-[18px] md:text-[20px] font-bold leading-tight">الهوية الرقمية</div>
                  <div class="text-[#333333] text-[24px] md:text-[28px] font-black tracking-tighter mt-[-2px] md:mt-[-4px]">UAE PASS</div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 md:gap-4">
              <h3 class="text-[#007AFF] text-[16px] md:text-[18px] font-bold">How we use it?</h3>
              <p class="text-[#333333] text-[14px] md:text-[16px] leading-relaxed opacity-80">
                UAE PASS becomes the trust anchor for GenetiQ in the UAE, handling identity, consent, and legal authorization.
              </p>
            </div>

            <div class="mt-auto pt-4 w-full">
              <button
                @click="startConnection"
class="w-full bg-linear-to-br from-[#D0E5F0] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-4 rounded-full font-bold flex items-center justify-around gap-3 transition-all duration-300 active:scale-95 border border-white shadow-inner group"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-[#E3F2FF]/60 via-transparent to-white/20 opacity-40"></div>
                <span class="relative z-10 text-[#333333] text-[16px] md:text-[20px] font-bold tracking-tight">Continue with UAE Pass</span>
                <div class="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-inner flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D2D2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1.5 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </template>

          <!-- Connecting State -->
          <template v-else-if="currentState === 'connecting'">
            <div class="flex flex-col items-center gap-2 mt-8 text-center">
              <span class="text-[#999999] text-[12px] font-bold uppercase tracking-widest">CONNECTING</span>
              <h2 class="text-[#333333] text-[40px] md:text-[48px] font-bold font-['Hanken_Grotesk'] tracking-tight">UAE Pass</h2>
              <p class="text-[#333333] text-[16px] md:text-[18px] mt-2 opacity-80">Creating connection with UAE Pass servers</p>
            </div>

            <div class="flex-1 flex items-center justify-center my-12">
              <div class="relative w-32 h-32 flex items-center justify-center">
                <svg class="animate-spin" width="120" height="120" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#A8C8F0" stroke-width="3" stroke-dasharray="10 10" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#007AFF" stroke-width="4" stroke-dasharray="1 15" stroke-linecap="round" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 rounded-full bg-[#E5F1FB]/30 blur-xl"></div>
                </div>
              </div>
            </div>
          </template>

          <!-- Confirmation Code State -->
          <template v-else-if="currentState === 'confirm'">
            <div class="flex flex-col items-center gap-2 mt-8 text-center">
              <span class="text-[#999999] text-[12px] font-bold uppercase tracking-widest">CONNECTING</span>
              <h2 class="text-[#333333] text-[40px] md:text-[48px] font-bold font-['Hanken_Grotesk'] tracking-tight">UAE Pass</h2>
              <p class="text-[#333333] text-[16px] md:text-[18px] text-center max-w-[280px] mt-2 opacity-80 leading-relaxed">
                Confirm the number you see in the screen using your UAE Pass app
              </p>
            </div>

            <div class="flex-1 flex flex-col items-center justify-center my-8">
              <span class="text-[#333333] text-[120px] md:text-[160px] font-black tracking-tighter tabular-nums drop-shadow-sm">48</span>
              <button @click="currentState = 'info'" class="text-[#007AFF] text-[18px] font-semibold underline mt-20 hover:opacity-70 transition-opacity">Try again</button>
            </div>
          </template>

          <!-- Connected State -->
          <template v-else-if="currentState === 'connected'">
            <div class="flex flex-col items-center gap-2 mt-8 text-center">
              <span class="text-[#999999] text-[12px] font-bold uppercase tracking-widest">CONNECTING</span>
              <h2 class="text-[#333333] text-[40px] md:text-[48px] font-bold font-['Hanken_Grotesk'] tracking-tight">Connected</h2>
              <p class="text-[#333333] text-[16px] md:text-[18px] mt-2 opacity-80">Thanks for login</p>
            </div>

            <div class="flex-1 flex items-center justify-center my-12">
              <div class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#007AFF] flex items-center justify-center shadow-[0_15px_40px_rgba(0,122,255,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
          </template>

          <!-- Malaffi Data Found State -->
          <template v-else-if="currentState === 'malaffi'">
            <div class="flex flex-col items-center gap-2 mt-4 text-center">
              <span class="text-[#999999] text-[12px] font-bold uppercase tracking-widest">DATA FOUND</span>
              <h2 class="text-[#333333] text-[36px] md:text-[48px] font-bold font-['Hanken_Grotesk'] tracking-tight leading-tight">
                Malaffi data found
              </h2>
            </div>

            <div class="flex flex-col gap-6 mt-4">
              <p class="text-[#333333] text-[15px] md:text-[17px] leading-relaxed">
                We’ve identified relevant medical information from the <span class="text-[#007AFF] font-bold cursor-pointer underline">Malaffi</span> data exchange that can enhance your Digital Twin.
              </p>

              <div class="flex flex-col gap-5 px-4">
                <div v-for="(item, index) in dataItems" :key="item"
                     @click="toggleItem(index)"
                     class="flex items-center gap-4 cursor-pointer group/item">
                  <div class="w-7 h-7 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-300"
                       :class="selectedItems.includes(index) ? 'border-[#007AFF] bg-[#007AFF] shadow-[0_0_15px_rgba(0,122,255,0.3)]' : 'border-[#333333]/20 bg-transparent'">
                     <Transition name="check">
                       <svg v-if="selectedItems.includes(index)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                         <polyline points="20 6 9 17 4 12"></polyline>
                       </svg>
                     </Transition>
                  </div>
                  <span class="text-[#333333] text-lg font-medium transition-colors"
                        :class="selectedItems.includes(index) ? 'text-[#007AFF]' : 'text-[#333333]'">
                    {{ item }}
                  </span>
                </div>
              </div>

              <button class="text-[#007AFF] font-bold text-lg underline text-center mt-2">Learn about Malaffi</button>
            </div>

            <div class="mt-auto pt-8 w-full">
              <button
                @click="startFinalAnimation"
                class="w-full bg-linear-to-br from-[#DEE8ED] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-4 rounded-full font-bold flex items-center justify-between px-8 md:px-12 gap-3 transition-all duration-300 active:scale-95 border border-white shadow-inner group"
              >
                <div class="absolute inset-0 bg-linear-to-br from-[#E3F2FF]/60 via-transparent to-white/20 opacity-40 group-hover:opacity-80 transition-opacity"></div>
                <span class="relative z-10 text-[#333333] text-[18px] md:text-[22px] font-bold tracking-tight">
                  {{ shareButtonText }}
                </span>
                <div class="relative z-10 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-inner flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D2D2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1.5 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </template>

        </div>
      </div>
    </template>

    <!-- Final Animation State -->
    <template v-else>
      <div class="relative flex-1 mt-5 w-full bg-[#f8fbff] flex flex-col items-center justify-center transition-all duration-1000"
           :class="finalPhase === 'blurred' ? 'blur-2xl scale-110' : 'blur-0 scale-100'">

        <!-- Top Pill "Home" -->
        <div class="absolute top-10 left-1/2 -translate-x-1/2 z-50">
          <div class="px-12 py-2.5 rounded-full bg-white/30 backdrop-blur-3xl border border-white/40 shadow-[inset_0_4px_12px_rgba(255,255,255,0.4),inset_0_-2px_6px_rgba(0,0,0,0.02),0_15px_35px_rgba(0,0,0,0.05)] flex items-center justify-center">
            <span class="text-[#007AFF] font-bold text-lg tracking-wide">Home</span>
          </div>
        </div>

        <!-- Human Image -->
        <div class="relative flex-1 w-full max-w-2xl h-full flex items-center justify-center px-4">
          <!-- Light Glow Background -->
          <div class="absolute inset-0 bg-radial from-blue-100/40 via-transparent to-transparent opacity-60"></div>

          <img src="/imgs/humanhirt.png" alt="Digital Twin Human"
               class="h-[85vh] w-auto object-contain transition-all duration-1000 select-none"
               :class="finalPhase === 'blurred' ? 'opacity-30' : 'opacity-100'" />

          <!-- Bottom Navigation Circle Image -->
          <div class="absolute bottom-[10vh] left-1/2 -translate-x-1/2 w-full max-w-[400px]">
             <img src="/imgs/bottom navigation.png" alt="Navigation" class="w-full opacity-60" />
          </div>
        </div>
      </div>

      <!-- Spark Test Card (Shows in sharp phase) -->
      <Transition name="card">
        <div v-if="finalPhase === 'sharp' || finalPhase === 'done'"
             @click="router.push('/new_design/spark_price')"
             class="absolute bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-lg z-[100] cursor-pointer hover:scale-[1.02] active:scale-95 transition-all duration-300">
          <div class="bg-white/80 backdrop-blur-2xl rounded-[32px] md:rounded-[40px] p-4 md:p-6 shadow-2xl border border-white flex items-center gap-4 md:gap-6">
            <div class="w-20 h-20 rounded-3xl bg-[#A8C8F0]/30 flex items-center justify-center shrink-0">
               <div class="w-12 h-12 rounded-full bg-[#007AFF] flex items-center justify-center text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                   <polyline points="20 6 9 17 4 12"></polyline>
                 </svg>
               </div>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-[#999999] text-[12px] font-bold uppercase tracking-widest">SPARK TEST AVAILABLE</span>
              <h3 class="text-[#333333] text-[22px] md:text-[24px] font-bold font-['Hanken_Grotesk'] leading-tight">
                Lets finish your Digital Twin!
              </h3>
            </div>
          </div>
        </div>
      </Transition>
    </template>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentState = ref<'info' | 'connecting' | 'confirm' | 'connected' | 'malaffi' | 'final'>('info')
const finalPhase = ref<'blurred' | 'sharp' | 'done'>('blurred')
const selectedItems = ref<number[]>([])

const dataItems = [
  'Recent lab results',
  'Medication history',
  'Diagnoses or clinical notes',
  'Visit to hospitals or clinics'
]

const toggleItem = (index: number) => {
  if (selectedItems.value.includes(index)) {
    selectedItems.value = selectedItems.value.filter(i => i !== index)
  } else {
    selectedItems.value.push(index)
  }
}

const shareButtonText = computed(() => {
  return selectedItems.value.length > 0 ? 'Continue to GenetiQ' : 'Share data';
});

const startConnection = () => {
  currentState.value = 'connecting'
  setTimeout(() => currentState.value = 'confirm', 3000)
  setTimeout(() => currentState.value = 'connected', 6000)
  setTimeout(() => currentState.value = 'malaffi', 9000)
}

const startFinalAnimation = () => {
  currentState.value = 'final'
  finalPhase.value = 'blurred'

  // Animation Sequence
  setTimeout(() => {
    finalPhase.value = 'sharp'
  }, 2000)

  setTimeout(() => {
    finalPhase.value = 'done'
  }, 4000)
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

h2, h3 {
  font-family: 'Hanken Grotesk', sans-serif;
}

p, span {
  font-family: 'Inter', sans-serif;
}

/* Item Selection Animations */
.check-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.check-enter-from {
  transform: scale(0) rotate(-45deg);
  opacity: 0;
}

/* Card Entry Animation */
.card-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-enter-from {
  transform: translate(-50%, 100%);
  opacity: 0;
}

/* Base slide-up animation for initial content container */
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

.sheet-container {
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
