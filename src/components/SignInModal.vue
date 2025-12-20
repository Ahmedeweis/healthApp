<script setup>
import { ref, watch } from 'vue';
import { X, RefreshCw, Upload, Fingerprint, ChevronLeft } from 'lucide-vue-next';

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close']);

const step = ref('LOADING'); // 'LOADING' | 'CONFIRM' | 'ONBOARDING_LOADING' | 'ONBOARDING_CONTENT'

const resetState = () => {
  step.value = 'LOADING';
  emit('close');
};

// Start animation when modal opens
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    step.value = 'LOADING';
    // 1. Loading -> Confirm (2s)
    setTimeout(() => {
        if(step.value === 'LOADING') {
             step.value = 'CONFIRM';
             
             // 2. Confirm -> Onboarding Loading (10s)
             setTimeout(() => {
                 if (step.value === 'CONFIRM') {
                     step.value = 'ONBOARDING_LOADING';
                     
                     // 3. Onboarding Loading -> Content (2s)
                     setTimeout(() => {
                         if (step.value === 'ONBOARDING_LOADING') {
                             step.value = 'ONBOARDING_CONTENT';
                         }
                     }, 2000);
                 }
             }, 10000);
        }
    }, 2000);
  }
});

const handleBack = () => {
    // Reset or close depending on desired behavior, for now close
    resetState();
}

</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" @click="resetState"></div>

        <!-- Modal Content -->
        <!-- Increased width and height for Onboarding states -->
        <div class="relative w-full transition-all duration-500 ease-in-out bg-white/90 backdrop-blur-md border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden"
             :class="[step.includes('ONBOARDING') ? 'max-w-md h-[80vh]' : 'max-w-sm h-auto']">
          
          <!-- Close Button (Hidden in Onboarding for design fidelity, or kept small) -->
          <button v-if="!step.includes('ONBOARDING')" @click="resetState" class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition rounded-full hover:bg-black/5 z-20">
            <X class="w-5 h-5" />
          </button>

          <!-- CONTENT WRAPPER -->
          <div class="h-full w-full relative">

              <!-- STATE 1: LOADING -->
              <div v-if="step === 'LOADING'" class="flex flex-col items-center justify-center py-16 animate-fadeIn text-center h-full">
                 <div class="mb-8 relative">
                    <div class="w-16 h-16 flex items-center justify-center">
                        <div class="w-full h-full animate-[spin_3s_linear_infinite]">
                            <span v-for="n in 12" :key="n" 
                                class="absolute w-1.5 h-4 bg-gray-600/80 rounded-full left-1/2 top-0 -ml-0.75 origin-[50%_200%]"
                                :style="{ transform: `rotate(${n * 30}deg)` }">
                            </span>
                        </div>
                    </div>
                 </div>
                 <h3 class="text-lg font-bold text-gray-700 mb-2">Sign In Request</h3>
                 <p class="text-sm text-gray-500">Requesting user information from UAE Pass</p>
              </div>

              <!-- STATE 2: CONFIRM -->
              <div v-else-if="step === 'CONFIRM'" class="flex flex-col items-center justify-center py-10 animate-fadeIn text-center h-full">
                <h3 class="text-lg font-bold text-gray-700 mb-2">Confirm number</h3>
                <p class="text-sm text-gray-500 px-4 mb-8 leading-relaxed">
                  Please tell the user to confirm the number in their Genetiq app using UAE PASS
                </p>
                <div class="text-8xl font-bold text-gray-700 mb-10 tracking-tighter">
                  48
                </div>
                <div class="flex items-center justify-between w-full px-8 text-gray-600 absolute bottom-10">
                   <div class="flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path d="M390.42,75.28a10.45,10.45,0,0,1-5.32-1.44C340.72,50.08,302.35,40,256.35,40c-45.77,0-89.23,11.28-128.76,33.84C122,77,115.11,74.8,111.87,69a12.4,12.4,0,0,1,4.63-16.32A281.81,281.81,0,0,1,256.35,16c49.23,0,92.23,11.28,139.39,36.48a12,12,0,0,1,4.85,16.08A11.3,11.3,0,0,1,390.42,75.28Zm-330.79,126a11.73,11.73,0,0,1-6.7-2.16,12.26,12.26,0,0,1-2.78-16.8c22.89-33.6,52-60,86.69-78.48C209.42,65,302.35,64.72,375.16,103.6c34.68,18.48,63.8,44.64,86.69,78a12.29,12.29,0,0,1-2.78,16.8,11.26,11.26,0,0,1-16.18-2.88c-20.8-30.24-47.15-54-78.36-70.56-66.34-35.28-151.18-35.28-217.29.24-31.44,16.8-57.79,40.8-78.59,71A10,10,0,0,1,59.63,201.28ZM204.1,491a10.66,10.66,0,0,1-8.09-3.6C175.9,466.48,165,453,149.55,424c-16-29.52-24.27-65.52-24.27-104.16,0-71.28,58.71-129.36,130.84-129.36S387,248.56,387,319.84a11.56,11.56,0,1,1-23.11,0c0-58.08-48.32-105.36-107.72-105.36S148.4,261.76,148.4,319.84c0,34.56,7.39,66.48,21.49,92.4,14.8,27.6,25,39.36,42.77,58.08a12.67,12.67,0,0,1,0,17A12.44,12.44,0,0,1,204.1,491Zm165.75-44.4c-27.51,0-51.78-7.2-71.66-21.36a129.1,129.1,0,0,1-55-105.36,11.57,11.57,0,1,1,23.12,0,104.28,104.28,0,0,0,44.84,85.44c16.41,11.52,35.6,17,58.72,17a147.41,147.41,0,0,0,24-2.4c6.24-1.2,12.25,3.12,13.4,9.84a11.92,11.92,0,0,1-9.47,13.92A152.28,152.28,0,0,1,369.85,446.56ZM323.38,496a13,13,0,0,1-3-.48c-36.76-10.56-60.8-24.72-86-50.4-32.37-33.36-50.16-77.76-50.16-125.28,0-38.88,31.9-70.56,71.19-70.56s71.2,31.68,71.2,70.56c0,25.68,21.5,46.56,48.08,46.56s48.08-20.88,48.08-46.56c0-90.48-75.13-163.92-167.59-163.92-65.65,0-125.75,37.92-152.79,96.72-9,19.44-13.64,42.24-13.64,67.2,0,18.72,1.61,48.24,15.48,86.64,2.32,6.24-.69,13.2-6.7,15.36a11.34,11.34,0,0,1-14.79-7,276.39,276.39,0,0,1-16.88-95c0-28.8,5.32-55,15.72-77.76,30.75-67,98.94-110.4,173.6-110.4,105.18,0,190.71,84.24,190.71,187.92,0,38.88-31.9,70.56-71.2,70.56s-71.2-31.68-71.2-70.56C303.5,293.92,282,273,255.42,273s-48.08,20.88-48.08,46.56c0,41,15.26,79.44,43.23,108.24,22,22.56,43,35,75.59,44.4,6.24,1.68,9.71,8.4,8.09,14.64A11.39,11.39,0,0,1,323.38,496Z"/></svg>
                     <div class="text-left leading-tight">
                       <div class="text-[10px] uppercase tracking-wider text-gray-500">Digital Identity</div>
                       <div class="font-bold text-xs text-gray-800">UAE PASS</div>
                     </div>
                   </div>
                   <div class="animate-pulse">
                     <RefreshCw class="w-6 h-6 text-gray-400" />
                   </div>
                </div>
              </div>
              
              <!-- STATE 3: ONBOARDING LOADING (The blurred silhouette state) -->
              <div v-else-if="step === 'ONBOARDING_LOADING'" class="absolute inset-0 z-30 flex items-center justify-center animate-fadeIn overflow-hidden bg-slate-100/50">
                  <!-- Blurred element to simulate silhouette -->
                  <div class="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-purple-100/30 to-blue-100/40 backdrop-blur-xl"></div>
                  <!-- Simulating the human shape blur -->
                  <div class="absolute w-64 h-96 bg-blue-500/20 rounded-full blur-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div class="relative z-10 bg-white/40 backdrop-blur-md px-12 py-6 rounded-3xl shadow-lg border border-white/40">
                      <span class="text-gray-700 font-medium text-lg">Loading ...</span>
                  </div>
                   
                   <div class="absolute bottom-8 left-8 flex items-center gap-2 text-gray-500 cursor-pointer" @click="handleBack">
                        <ChevronLeft class="w-5 h-5" />
                        <span class="text-sm">Back</span>
                    </div>

                    <div class="absolute bottom-6 right-6">
                        <div class="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm">
                             <!-- Small blue spinner -->
                             <svg class="animate-spin w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                    </div>
              </div>

               <!-- STATE 4: ONBOARDING CONTENT -->
              <div v-else-if="step === 'ONBOARDING_CONTENT'" class="flex flex-col h-full animate-fadeIn pt-16 px-6">
                 
                 <!-- Background subtle effect -->
                 <div class="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-[60px]"></div>

                 <h2 class="text-2xl font-bold text-gray-800 text-center mb-2 z-10">Provide your health data</h2>
                 <p class="text-center text-gray-500 text-sm mb-12 max-w-xs mx-auto z-10">
                     Move beyond single data points. Our Essential Health Panels give you a comprehensive snapshot of your core biology in one go.
                 </p>

                 <div class="space-y-4 w-full max-w-sm mx-auto z-10">
                     <!-- Card 1 -->
                     <button class="w-full bg-gray-100/80 hover:bg-white border border-transparent hover:border-gray-200 transition-all p-6 rounded-3xl text-left flex items-center gap-5 shadow-sm hover:shadow-md group">
                         <div class="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                              <Fingerprint class="w-7 h-7 text-gray-600" />
                         </div>
                         <div>
                             <h4 class="font-bold text-gray-800 text-lg mb-1">Let's Connect Your Records</h4>
                             <p class="text-[11px] text-gray-500 leading-snug">
                                 We'll safely bring together your health data from Malaffi, Nabidh, Riayati, and HIE in one place.
                             </p>
                         </div>
                     </button>

                     <!-- Card 2 -->
                     <button class="w-full bg-blue-50/50 hover:bg-blue-100/50 border border-transparent hover:border-blue-100 transition-all p-8 rounded-3xl text-center flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md h-32">
                         <div class="flex items-center gap-2 text-gray-700">
                             <Upload class="w-5 h-5" />
                             <span class="font-medium">Upload Files here</span>
                         </div>
                     </button>
                 </div>

                 <!-- Footer -->
                 <div class="mt-auto pb-8 flex justify-between items-center w-full max-w-sm mx-auto px-2">
                      <button @click="handleBack" class="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition">
                        <ChevronLeft class="w-5 h-5" />
                        <span class="text-sm font-medium">Back</span>
                    </button>
                    
                    <div class="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-100">
                         <!-- Static or spinning sunburst logo from initial design -->
                         <div class="relative w-8 h-8">
                             <div class="absolute inset-0 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                <span v-for="n in 12" :key="n" 
                                class="absolute w-0.5 h-2.5 bg-sky-500 rounded-full left-1/2 top-0 -ml-0.25 origin-[50%_16px]"
                                :style="{ transform: `rotate(${n * 30}deg)` }">
                                </span>
                             </div>
                         </div>
                    </div>
                 </div>

              </div>

          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
