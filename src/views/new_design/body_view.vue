<template>
  <div class="min-h-screen bg-[#F8FBFF] p-4 md:p-6 font-inter relative overflow-x-hidden flex flex-col items-center">

    <!-- Top Orange/Yellow Glow subtle effect -->
    <div class="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-orange-100/30 to-transparent pointer-events-none"></div>

    <!-- Header Container (Risk Details state) -->
    <div v-if="viewState === 'risk_details'" class="w-full max-w-5xl relative z-40 mb-4">
      <div class="flex items-center justify-between">




        <div class="w-10 h-10"></div>
      </div>
    </div>
        <!-- Dynamic Badge (Screenshot Style) -->
        <div class="bg-[#FDF2ED]/90 backdrop-blur-md px-10 py-3 rounded-full border border-[#FBECE4]/50 shadow-[0_4px_15px_rgba(230,81,0,0.05)]">
          <span class="text-[#E65100] font-bold text-[15px] tracking-tight">Elevated cardiovascular risk</span>
        </div>
    <!-- Top Badge (Loading/Dashboard) -->
    <div v-if="viewState === 'loading' || viewState === 'dashboard'" class="relative z-40 mb-8 w-full flex justify-center">
        <div class="bg-white/80 backdrop-blur-md px-8 py-3 rounded-full shadow-sm border border-white/40">
           <span v-if="viewState === 'loading'" class="text-[#007AFF] font-bold text-sm">Re-modeling your Digital Twin</span>
           <span v-else-if="viewState === 'dashboard'" class="text-[#007AFF] font-bold text-sm">Home</span>
        </div>
    </div>

    <!-- Main Content Wrapper -->
    <div class="flex-1 w-full relative z-10 flex flex-col">

      <!-- 1. LOADING VIEW -->
      <div v-if="viewState === 'loading'" class="absolute inset-0 flex flex-col items-center justify-center text-center animate-fade-in py-4 w-full h-full">
          <div class="relative w-full h-full flex flex-col items-center justify-center flex-1">
               <img src="/imgs/human_heart.png" alt="Human" class="max-w-[85%] max-h-[60vh] object-contain blur-xl opacity-50 scale-110" />

               <!-- Orbit Ring SVG -->
               <div class="absolute bottom-[10%] w-[350px] md:w-[450px] opacity-60">
                  <svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="200" cy="50" rx="180" ry="40" stroke="#007AFF" stroke-width="1.5" stroke-dasharray="4 4"/>
                      <circle cx="20" cy="50" r="4" fill="#D1D5DB"/>
                      <circle cx="200" cy="90" r="6" fill="#007AFF" class="animate-pulse"/>
                      <circle cx="380" cy="50" r="4" fill="#D1D5DB"/>
                      <circle cx="320" cy="15" r="4" fill="#D1D5DB"/>
                  </svg>
               </div>
          </div>
      </div>

      <!-- 2. DASHBOARD VIEW -->
      <div v-else-if="viewState === 'dashboard'" class="absolute inset-0 flex flex-col items-center justify-between animate-fade-in h-full w-full">
           <!-- Human Model -->
           <div class="flex-1 w-full flex items-center justify-center relative min-h-0 py-8">
              <div class="relative max-w-[80%] md:max-w-[45%] h-full flex items-center justify-center">
                  <img src="/imgs/human_heart.png" alt="Digital Twin" class="h-full object-contain" />
                  <!-- Highlight overlays -->
                  <div class="absolute top-[25%] left-[45%] w-24 h-24 bg-red-400/20 blur-xl rounded-full"></div>
                  <div class="absolute top-[45%] left-[35%] w-20 h-32 bg-red-400/20 blur-xl rounded-full"></div>
              </div>

              <!-- Orbit Ring -->
              <div class="absolute bottom-4 w-[350px] md:w-[450px] opacity-40">
                  <svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="200" cy="50" rx="180" ry="40" stroke="#007AFF" stroke-width="1.5" stroke-dasharray="4 4"/>
                      <circle cx="200" cy="90" r="6" fill="#007AFF"/>
                  </svg>
               </div>
           </div>

           <!-- Alert Card (Refined for Mobile) -->
           <div class="w-full mt-4 flex-none z-20 pb-10 flex justify-center px-4">
              <div class="bg-white/80 backdrop-blur-xl rounded-[32px] md:rounded-[40px] p-4 md:p-6 flex items-center gap-4 md:gap-6 shadow-2xl border border-white/60 w-full max-w-lg md:max-w-2xl cursor-pointer hover:scale-[1.02] transition-transform active:scale-95">
                 <div class="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <div class="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#E65100] flex items-center justify-center text-white text-2xl md:text-3xl font-black italic">!</div>
                 </div>
                 <div class="flex flex-col">
                    <span class="text-[9px] md:text-[10px] font-bold text-gray-400 tracking-[0.15em] md:tracking-[0.2em] uppercase">3 BIOLOGICAL INSIGHT FOUND</span>
                    <p class="text-xl md:text-2xl font-black text-gray-800 leading-tight mt-0.5 md:mt-1">
                       Elevated cardiovascular risk
                    </p>
                 </div>
              </div>
           </div>
      </div>

      <!-- 3. RISK DETAILS VIEW -->
      <div v-else-if="viewState === 'risk_details'" class="absolute inset-0 flex flex-col animate-fade-in h-full w-full overflow-hidden">
          <!-- Zoomed Human Model (Clickable Heart Area) -->
          <div class="absolute top-0 left-0 right-0 h-[65%] flex items-center justify-center z-0">
               <div class="relative w-full h-full flex items-center justify-center">
                  <img src="/imgs/human_heart.png" alt="Zoomed Human" class="h-full object-contain origin-top scale-[2.2] opacity-95 transition-all duration-1000" />
                  <!-- Red Highlight Heart Area -->
                  <div
                    @click="handleRiskClick"
                    class="absolute top-[35%] right-[30%] w-32 h-32 bg-red-500/20 blur-2xl rounded-full cursor-pointer hover:bg-red-500/30 transition-colors pointer-events-auto"
                  ></div>
                  <!-- Blue Dot pulse -->
                  <div class="absolute top-[45%] right-[32%] w-10 h-10 flex items-center justify-center">
                      <div class="absolute w-full h-full bg-[#007AFF]/30 rounded-full animate-ping"></div>
                      <div class="w-4 h-4 bg-[#007AFF] rounded-full border-2 border-white shadow-lg"></div>
                  </div>
               </div>
          </div>

          <!-- Bottom Sheet -->
          <div class="mt-auto relative z-20 space-y-3 pb-8 pt-24 bg-linear-to-t from-[#F8FBFF] via-[#F8FBFF]/80 to-transparent flex flex-col items-center px-4 w-full">

             <!-- Appointment Card (Conditional) -->
             <div v-if="showAppointment" @click="goToVisit" class="bg-white/40 backdrop-blur-xl rounded-[32px] p-4 flex items-center gap-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white/60 w-full max-w-lg transition-all hover:scale-[1.01] cursor-pointer active:scale-[0.98]">
                <div class="shrink-0 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm border border-white/50">
                    <img src="/imgs/SSMC.png" alt="SSMC" class="h-3 w-auto grayscale opacity-90" />
                </div>
                <div class="flex flex-col">
                    <span class="text-[9px] font-bold text-gray-400 tracking-widest uppercase mb-0.5">CARDIOLOGIST APPOINTMENT IN SSMC</span>
                    <p class="text-[17px] font-bold text-gray-800 leading-tight">
                        2 days before appointment
                    </p>
                </div>
             </div>

             <!-- Risk Cards refined to match Figma 'glass' look -->
             <div
               v-for="(risk, idx) in risks"
               :key="idx"
               @click="handleRiskClick"
               class="bg-white/40 backdrop-blur-xl rounded-[32px] p-4 flex items-center gap-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white/60 w-full max-w-lg transition-all hover:scale-[1.01] cursor-pointer active:scale-[0.98]"
             >
                <div class="shrink-0 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm border border-white/50">
                    <div class="w-10 h-10 rounded-full bg-[#E65100] flex items-center justify-center text-white text-lg font-black italic">!</div>
                </div>
                <div class="flex flex-col">
                    <span class="text-[9px] font-bold text-gray-500 tracking-widest uppercase mb-0.5">{{ risk.source }}</span>
                    <p class="text-[17px] font-bold text-gray-800 leading-tight">
                        {{ risk.title }}
                    </p>
                </div>
             </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const viewState = ref('loading')
const showAppointment = ref(route.query.booked === 'true')

const handleRiskClick = () => {
    router.push('/new_design/cardio_risk')
}

const goToVisit = () => {
    router.push('/new_design/cardio_risk?fromAppointment=true')
}

const risks = [
    { source: 'FROM BLOOD TEST', title: 'Mild signs of inflammation' },
    { source: 'FROM GENETIC TEST', title: 'Higher inherited heart risk' },
    { source: 'FROM MICROBIOME', title: 'Less efficient fat and cholesterol processing' }
]

const goBack = () => {
    if (viewState.value === 'risk_details') {
        viewState.value = 'dashboard'
    } else if (viewState.value === 'dashboard') {
        router.push('/new_design/spark_details')
    } else {
        router.back()
    }
}

onMounted(() => {
    // Start animation sequence
    setTimeout(() => {
      viewState.value = 'dashboard'
    }, 3500)
})

watch(viewState, (newValue) => {
  if (newValue === 'dashboard') {
    setTimeout(() => {
      viewState.value = 'risk_details'
    }, 4500)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

.font-inter { font-family: 'Inter', sans-serif; }
.font-hanken { font-family: 'Hanken Grotesk', sans-serif; }

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
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
