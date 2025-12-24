<template>
  <div class=" bg-[#F8FBFF] font-['Inter'] relative overflow-x-hidden flex flex-col items-center">

    <!-- Top Background Image (Heart) -->
    <div class="absolute top-0 left-0 right-0 w-full h-[60vh] z-0 pointer-events-none">
        <img src="/imgs/heart.png" alt="Heart Visualization" class="w-full h-full object-cover object-center" />
        <!-- Soft Gradient Overlay -->
        <div class="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#F8FBFF] to-transparent"></div>
    </div>

    <!-- Header / Nav -->
    <div class="w-full mt-11 max-w-[390px] mx-auto px-5 pt-8 relative z-40 flex justify-between items-start">
         <!-- Back Button -->
        <button @click="$router.back()" style="visibility: hidden;" class="size-9 relative bg-white/30 backdrop-blur-md border border-white/20 rounded-full shadow-sm flex items-center justify-center active:scale-95 transition-all hover:bg-white/40">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="#E65100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
        </button>

         <!-- Top Pill -->
        <div class="w-64 h-9 p-2 bg-[#FFF5F5]/60 backdrop-blur-md border border-red-100 rounded-[33px] shadow-[inset_0px_2px_6px_rgba(220,50,50,0.15)] inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
            <div class="text-center justify-center text-[#E65100] text-sm font-medium font-['Hanken_Grotesk'] leading-5">Elevated cardiovascular risk</div>
        </div>

        <div class="w-9"></div> <!-- Spacer -->
    </div>

    <!-- Main Content Area -->
    <div
        class="relative z-10 w-full max-w-[390px] mx-auto mt-4 px-3 pb-8 transition-transform duration-1000 ease-out"
        :class="isExpanded ? 'translate-y-0' : 'translate-y-[30vh]'"
        @click="isExpanded = true"
    >

        <!-- Large Glass Card -->
        <div class="w-full min-h-[60vh]  relative bg-white/10 backdrop-blur-md rounded-[33px] overflow-hidden border border-white/20 shadow-xl">

            <!-- Handle -->
            <div class="w-16 h-1 bg-gray-800 rounded-full mx-auto mt-3"></div>

             <!-- Overview Content -->
             <div v-if="viewState === 'overview'" class="animate-fade-in">
                 <!-- Title Header in Card -->
                 <div class="flex items-center gap-4 p-5 mt-2">
                     <div class="size-16 relative shrink-0">
                         <div class="absolute inset-0 bg-linear-to-b from-white/80 to-white/0 rounded-3xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]"></div>
                         <!-- Icon (Simplified representation of the blood drop/icon from Figma) -->
                         <div class="absolute inset-0 flex items-center justify-center">
                       <img src="/imgs/icon.svg" alt="Icon" class="w-8  object-cover object-center" />
                         </div>
                     </div>
                     <div class="flex flex-col">
                        <span class="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-1">BASE ON SPARK TEST</span>
                        <h1 class="text-gray-900 text-lg font-bold font-['Hanken_Grotesk'] leading-tight">Early atherosclerotic cardiovascular risk</h1>
                     </div>
                 </div>

                <!-- Gauge / Visual Section (Recreating Figma Layers) -->
                <div class="relative w-full h-[320px] flex justify-center items-center mt-[-20px]">
                     <!-- Outer Ring -->
                     <div class="absolute size-80 rounded-full border-24 border-white/10 backdrop-blur-sm shadow-[inset_0px_1px_8px_0px_rgba(255,255,255,0.10)]"></div>
                     <!-- Inner Progress Ring (Image Replacement) -->
                     <img src="/imgs/curive.png" alt="Risk Gauge" class="absolute size-80 object-contain" />

                     <!-- Center Text -->
                     <div class="flex flex-col items-center justify-center relative z-10">
                            <img src="/imgs/iconB.svg" alt="Icon" class="w-8  object-cover object-center" />
                          <span class="text-gray-900 text-sm font-bold font-['Hanken_Grotesk']">Evidence</span>

                          <!-- Evidence Data Points -->
                          <div class="flex flex-col gap-2 mt-4 text-[9px] text-gray-500 uppercase tracking-widest font-medium justify-center items-center text-center">
                              <div class="flex items-center gap-2">
                                  <span>APOB</span>
                                  <div class="h-3 w-px bg-gray-300"></div>
                                  <span class="text-gray-900 font-bold">Blood Cholesterol Risk</span>
                              </div>
                              <div class="flex items-center gap-2">
                                  <span>Polygenic Risk</span>
                                  <div class="h-3 w-px bg-gray-300"></div>
                                  <span class="text-gray-900 font-bold">Genetic Heart Risk</span>
                              </div>
                              <div class="flex items-center gap-2">
                                  <span>TMAO</span>
                                  <div class="h-3 w-px bg-gray-300"></div>
                                  <span class="text-gray-900 font-bold">Gut Heart Risk</span>
                              </div>
                          </div>
                     </div>
                </div>

                 <!-- Description Text -->
                <div class="px-6 relative top-[-40px]">
                   <h2 class="text-gray-900 text-2xl font-bold font-['Hanken_Grotesk'] mb-4 leading-8 text-center">
                    Early atherosclerotic cardiovascular risk
                   </h2>
                   <p class="text-gray-600 text-sm font-medium font-['Hanken_Grotesk'] leading-relaxed mb-4">
                      Your results show early signs of cardiovascular risk that don’t always appear on standard cholesterol tests. While your basic cholesterol looks normal, deeper markers reveal more LDL particles and ApoB, which are linked to plaque buildup, along with mild inflammation.
                   </p>
                   <p class="text-gray-600 text-sm font-medium font-['Hanken_Grotesk'] leading-relaxed">
                       <span class="text-[#E65100]">Your genetics</span> indicate a higher inherited risk and may affect how your body processes cholesterol and responds to statins. Your gut microbiome also shows fewer protective bacteria and more activity linked to plaque formation.
                   </p>
                </div>

                <!-- Action Section -->
                <div class="mx-5 mb-8 mt-2">
                    <!-- Label + Logo (Outside button) -->
                     <div class="flex items-center justify-between gap-2 mb-3 px-1">
                         <span class="text-[#E65100] text-sm font-bold uppercase tracking-wide">Take action</span>
                         <img src="/imgs/company.svg" alt="Company" class="w-32 grayscale opacity-80" />
                     </div>

                     <!-- Action Card (Button) -->
                    <div @click="viewState = 'ssmc_check'" class="w-full bg-linear-to-br from-[#DEE8ED] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-3 rounded-full font-bold flex items-center justify-around gap-3 transition-all duration-300 active:scale-95 border border-white shadow-inner group">
                         <div class="flex flex-col gap-1">
                             <span class="text-gray-900 text-base font-bold font-['Hanken_Grotesk']">Cardiology check with SSMC</span>
                         </div>
                         <div class="size-9  flex items-center justify-center  group-hover:translate-x-1 transition-transform">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                         </div>
                    </div>
                </div>
             </div>

             <!-- SSMC Check View -->
             <div v-else-if="viewState === 'ssmc_check'" class="p-6 flex flex-col h-full animate-fade-in">
                <!-- Inner Back Button -->
                <button @click="viewState = 'overview'" class="size-10 mb-6 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/60 transition-colors shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="opacity-70">
                        <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

                <!-- Doctor + Badges Row -->
                <div class="flex justify-between items-start mb-6">
                    <div class="relative">
                         <img src="/imgs/doctoro.png" alt="Dr. Alexander Moreau" class="w-32 h-40 object-cover rounded-2xl shadow-md" />
                         <!-- Online status dot -->
                         <div class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 size-6 bg-[#A3E635] rounded-full border-[3px] border-[#E8DCDD] shadow-sm"></div>
                    </div>

                    <div class="flex flex-col items-end gap-14">
                         <!-- Best Match Badge -->
                         <div class="px-5 py-2.5 backdrop-blur-md border border-white/30 rounded-2xl text-[#4A4A4A] text-xs font-semibold shadow-inner">
                             Best match
                         </div>

                         <!-- Powered By -->
                         <div class="flex flex-col items-end">
                             <span class="text-[16px] text-gray-600 mb-1 font-medium">Powered by</span>
                             <img src="/imgs/powredwith.png" alt="PureHealth" class="h-8 object-contain" />
                         </div>
                    </div>
                </div>

                <!-- Cardiologist SSMC Line -->
                <div class="flex items-center gap-3 mb-2 mt-2">
                    <span class="text-[16px] font-bold text-gray-500 uppercase tracking-widest">CARDIOLOGIST</span>
                     <img src="/imgs/company.svg" alt="SSMC" class="h-3 grayscale opacity-80" />
                </div>

                <!-- Doctor Name -->
                <h2 class="text-[22px] font-bold text-gray-900 font-['Hanken_Grotesk'] mb-4 leading-tight">
                    Dr. Alexander Moreau, MD, PhD
                </h2>

                <!-- Bio -->
                <p class="text-gray-600 text-[13px] leading-relaxed mb-auto font-medium">
                    Board-certified cardiologist specializing in preventive cardiology and complex cardiovascular risk management. Dr. Moreau has over 15 years of clinical experience integrating advanced blood bio...
                </p>

                <!-- Spacer -->
                <div class="h-8"></div>

                <!-- Book Appointment Button -->
                <button @click="viewState = 'booking'" class="w-full bg-linear-to-br from-[#DCE7EC] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-3 rounded-full font-bold flex items-center justify-around gap-3 transition-all duration-300 active:scale-95 border border-white shadow-inner group mb-6">
                    <span class="text-gray-900 text-base font-bold font-['Hanken_Grotesk']">Book an appointment</span>
                    <img src="/imgs/calender.svg" class="size-6 opacity-70 group-hover:scale-110 transition-transform" />
                </button>

                <!-- Video Call Link -->
                <button @click="goToVideoCall" class="w-full cursor-po text-center text-[#4A90E2] text-sm underline decoration-[#4A90E2]/50 hover:decoration-[#4A90E2] font-medium mb-4">
                    Do you want to video call instead?
                </button>
             </div>

             <!-- Booking View -->
             <div v-else-if="viewState === 'booking'" class="p-6 flex flex-col h-full animate-fade-in relative">
                 <!-- Header with Logos -->
                 <div class="flex justify-between items-start mb-6 w-full">
                     <!-- Back Button -->
                     <button @click="viewState = 'ssmc_check'" class="size-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/60 transition-colors shadow-sm">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="opacity-70">
                             <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>
                     </button>

                     <!-- Powered By -->
                     <div class="flex flex-col items-end">
                         <span class="text-[10px] text-gray-600 mb-0.5 font-medium">Powered by</span>
                         <img src="/imgs/powredwith.png" alt="PureHealth" class="h-6 object-contain" />
                     </div>
                 </div>

                 <!-- Consult With Title -->
                 <div class="flex items-center gap-3 mb-1">
                     <span class="text-[12px] font-medium text-gray-500 uppercase tracking-widest">CONSULT WITH</span>
                     <img src="/imgs/company.svg" alt="SSMC" class="h-3 grayscale opacity-80" />
                 </div>

                 <!-- Doctor Name -->
                 <h2 class="text-[20px] font-bold text-gray-900 font-['Hanken_Grotesk'] mb-6 leading-tight">
                     Dr. Alexander Moreau, MD
                 </h2>

                 <!-- Intro Text -->
                 <p class="text-gray-700 text-[14px] leading-6 font-medium mb-8">
                     Following your resent high-resolution test’s and risk assestment , an in-person visit is advised to complete your cardiovascular evaluation and next steps.
                 </p>

                 <!-- Time Slot Section -->
                 <h3 class="text-gray-800 text-[18px] font-bold font-['Hanken_Grotesk'] mb-4">
                     Choose a time-slot
                 </h3>

                 <div class="flex flex-col gap-3 mb-8">
                     <!-- Slot 1 -->
                     <!-- Slot 1 -->
                     <button @click="viewState = 'confirmation'" class="w-full bg-linear-to-br from-[#DCE7EC] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-3 rounded-full font-bold flex items-center justify-between px-6 transition-all duration-300 active:scale-95 border border-white shadow-inner group">
                         <span class="text-gray-900 font-bold text-[15px] font-['Hanken_Grotesk']">Friday 26th - 11:00 AM</span>
                         <div class="text-gray-700 opacity-60 group-hover:opacity-100 transition-opacity">
                              <img src="/imgs/calender.svg" class="size-6 opacity-70 group-hover:scale-110 transition-transform" />
                         </div>
                     </button>

                     <!-- Slot 2 -->
                     <!-- Slot 2 -->
                     <button @click="viewState = 'confirmation'" class="w-full bg-linear-to-br from-[#DCE7EC] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-3 rounded-full font-bold flex items-center justify-between px-6 transition-all duration-300 active:scale-95 border border-white shadow-inner group">
                         <span class="text-gray-900 font-bold text-[15px] font-['Hanken_Grotesk']">Monday 39th 3:00 pm</span>
                          <div class="text-gray-700 opacity-60 group-hover:opacity-100 transition-opacity">
                              <img src="/imgs/calender.svg" class="size-6 opacity-70 group-hover:scale-110 transition-transform" />
                         </div>
                     </button>

                     <!-- Slot 3 -->
                     <!-- Slot 3 -->
                     <button @click="viewState = 'confirmation'" class="w-full bg-linear-to-br from-[#DCE7EC] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-3 rounded-full font-bold flex items-center justify-between px-6 transition-all duration-300 active:scale-95 border border-white shadow-inner group">
                         <span class="text-gray-900 font-bold text-[15px] font-['Hanken_Grotesk']">Tuesday 30th 3:00 pm</span>
                          <div class="text-gray-700 opacity-60 group-hover:opacity-100 transition-opacity">
                              <img src="/imgs/calender.svg" class="size-6 opacity-70 group-hover:scale-110 transition-transform" />
                         </div>
                     </button>
                 </div>

                 <!-- Request Another Slot -->
                 <button class="w-full text-center text-[#4A90E2] text-sm underline decoration-[#4A90E2]/50 hover:decoration-[#4A90E2] font-medium mt-auto mb-4">
                     Request another time-slot
                 </button>
             </div>

             <!-- Confirmation View -->
             <div v-else-if="viewState === 'confirmation'" class="p-6 flex flex-col h-full animate-fade-in text-gray-900 font-['Hanken_Grotesk']">
                 <!-- Header with Logos -->
                 <div class="flex justify-between items-start mb-6 w-full">
                     <!-- Back Button -->
                     <button @click="viewState = 'booking'" class="size-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/60 transition-colors shadow-sm">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="opacity-70">
                             <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>
                     </button>

                     <!-- Powered By -->
                     <div class="flex flex-col items-end">
                         <span class="text-[10px] text-gray-600 mb-0.5 font-medium">Powered by</span>
                         <img src="/imgs/powredwith.png" alt="PureHealth" class="h-6 object-contain" />
                     </div>
                 </div>

                 <!-- Consult With Title -->
                 <div class="flex items-center gap-3 mb-4">
                     <span class="text-[12px] font-medium text-gray-500 uppercase tracking-widest">CONSULT WITH</span>
                     <img src="/imgs/company.svg" alt="SSMC" class="h-3 grayscale opacity-80" />
                 </div>

                 <!-- Confirmation Title -->
                 <h2 class="text-[22px] font-bold text-gray-900 mb-6 leading-tight">
                     Appointment confirmed!
                 </h2>

                 <!-- Intro Text -->
                 <p class="text-gray-700 text-[14px] leading-6 font-medium mb-4">
                     Your in-person cardiology visit has been successfully scheduled at:
                     <br/>
                     <a href="#" class="underline font-bold text-gray-800">Sheikh Shakhbout Medical City (SSMC).</a>
                     <br/>
                     We look forward to welcoming you for your follow-up care.
                 </p>

                 <!-- What to do next link -->
                 <button class="text-[#4A90E2] text-sm underline decoration-[#4A90E2]/50 hover:decoration-[#4A90E2] font-medium mb-10 self-start">
                     What to do next?
                 </button>

                 <!-- Appointment Details -->
                 <div class="flex flex-col gap-1.5 text-gray-800 text-[14px] font-medium leading-relaxed mb-8">
                     <p><span class="">Date:</span> December 12, 2025</p>
                     <p><span class="">Time:</span> 10:30 AM</p>
                     <p><span class="">Duration:</span> 30 minutes</p>
                     <p><span class="">Department:</span> Cardiology</p>
                 </div>

                 <!-- Spacer to push button to bottom -->
                 <div class="grow"></div>

                 <!-- Continue Exploring Button -->
                 <button @click="router.push('/new_design/body_view?booked=true')" class="w-full bg-linear-to-br from-[#DCE7EC] to-[#F7FBFD] cursor-pointer hover:scale-[1.02] text-gray-800 py-3 rounded-full font-bold flex items-center justify-between px-6 transition-all duration-300 active:scale-95 border border-white shadow-inner group mb-2">
                      <span class="text-gray-900 font-bold text-base font-['Hanken_Grotesk']">Continue exploring</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-gray-800 opacity-70 group-hover:translate-x-1 transition-transform">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                 </button>
             </div>

        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isExpanded = ref(false)
const viewState = ref('overview') // 'overview' | 'ssmc_check' | 'booking' | 'confirmation'

const goToVideoCall = () => {
    router.push('/new_design/virtual_visit')
}

onMounted(() => {
    // Optional: Small delay if we want it to 'settle' or just stay 'down' initially.
    // User requested: "middle of screen go up slowly when i click it"
    // So distinct state change on click is key.
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

.font-inter { font-family: 'Inter', sans-serif; }

/* Custom mask for sheet top fade */
.sheet-fade-mask {
    mask-image: linear-gradient(to top, black 85%, transparent 100%);
}
</style>
