<script setup>
import { ArrowLeft, Check, ArrowRight, AlertCircle } from 'lucide-vue-next';
import { ref, watch } from 'vue';

const currentView = ref('list'); // 'list', 'detail', 'confirmation', 'loading', 'dashboard', 'risk_details'

const handleCardClick = () => {
  currentView.value = 'detail';
};

const handlePurchase = () => {
  currentView.value = 'confirmation';
};

const handleContinue = () => {
  currentView.value = 'loading';
};

const handleBack = () => {
  if (currentView.value === 'detail') {
    currentView.value = 'list';
  } else if (currentView.value === 'confirmation') {
    currentView.value = 'list';
  } else if (currentView.value === 'dashboard') {
    currentView.value = 'list'; 
  } else if (currentView.value === 'risk_details') {
    currentView.value = 'dashboard';
  }
};

// Timer logic for loading state and dashboard transition
watch(currentView, (newValue) => {
  if (newValue === 'loading') {
    setTimeout(() => {
      currentView.value = 'dashboard';
    }, 4000);
  } else if (newValue === 'dashboard') {
    setTimeout(() => {
      currentView.value = 'risk_details';
    }, 4000);
  }
});
</script>

<template>
  <div class="h-screen flex flex-col bg-slate-50 relative overflow-hidden font-sans">
    <!-- Background Gradients -->
    <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none"></div>

    <!-- Header (Conditionally rendered or modified based on view) -->
    <header class="flex-none relative z-10 flex items-center justify-between px-6 py-6" v-if="currentView !== 'loading'">
       <!-- Back Button -->
      <button 
        v-if="['list', 'detail', 'risk_details'].includes(currentView)"
        @click="handleBack"
        class="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-sm text-gray-700 hover:bg-white transition"
      >
        <ArrowLeft class="w-5 h-5" />
      </button>
      <div v-else class="w-10"></div> <!-- Spacer -->
      
      <!-- Central Pill -->
      <div class="px-6 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm">
        <span v-if="currentView === 'risk_details'" class="text-orange-600 font-medium whitespace-nowrap px-2">Elevated cardiovascular risk</span>
        <span v-else class="text-blue-500 font-medium">
            {{ currentView === 'dashboard' ? 'Home' : 'Spark tests' }}
        </span>
      </div>
      
      <!-- Spacer for centering -->
      <div class="w-10"></div>
    </header>

    <!-- Special Header for Loading State -->
    <div v-if="currentView === 'loading'" class="absolute top-6 left-0 right-0 flex justify-center z-20">
         <div class="px-6 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm">
            <span class="text-blue-500 font-medium">Re-modeling your Digital Twin</span>
         </div>
    </div>

    <main class="flex-1 w-full relative z-10 px-4 pb-6 overflow-y-auto overflow-x-hidden">
      
      <!-- Selection View -->
      <div v-if="currentView === 'list'" class="space-y-6 transition-all duration-500 ease-in-out pb-6">
        <!-- Spark Packaging Card -->
        <div 
          @click="handleCardClick"
          class="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-3xl p-6 shadow-sm overflow-hidden border border-white/50 cursor-pointer active:scale-95 transition-transform"
        >
          <!-- Header Section -->
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50/80 flex items-center justify-center backdrop-blur-sm">
               <img src="/img/Icon_black.png" alt="Spark Icon" class="w-12 h-12 object-contain opacity-80" />
            </div>
            <div>
              <h2 class="text-xl font-bold text-gray-800">Spark Packaging</h2>
            </div>
          </div>

          <p class="text-sm text-gray-600 mb-6 leading-relaxed">
            Unlock the full spectrum of biological insights with our integrated WGS, Microbiome, and Proteomics package.
          </p>

          <!-- Features -->
          <div class="space-y-3 mb-8 relative z-20">
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <Check class="w-3 h-3 text-white" />
              </div>
              <span class="text-xs font-semibold text-gray-600 tracking-wide">WHOLE GENOME SEQUENCING</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <Check class="w-3 h-3 text-white" />
              </div>
              <span class="text-xs font-semibold text-gray-600 tracking-wide">MICROBIOME SEQUENCING</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <Check class="w-3 h-3 text-white" />
              </div>
              <span class="text-xs font-semibold text-gray-600 tracking-wide">MASS SPECTROMETRY</span>
            </div>
          </div>

          <!-- Price and Badge -->
          <div class="flex items-end justify-between relative z-20 mt-8">
            <div class="flex items-start">
              <span class="text-xl font-medium text-gray-800 mt-1">$</span>
              <span class="text-5xl font-bold text-gray-800 tracking-tight">500</span>
            </div>
            
            <div class="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm">
              <span class="text-blue-500 font-medium text-sm">72h turnaround</span>
            </div>
          </div>

          <!-- Decorative Image -->
          <div class="absolute right-[-20px] bottom-[60px] w-48 h-48 sm:w-56 sm:h-56 z-10">
            <img src="/img/retangel_blue.png" alt="Blue Cube" class="w-full h-full object-contain drop-shadow-xl transform rotate-12" />
          </div>
        </div>

        <!-- Standard Package Card -->
        <div 
          @click="handleCardClick"
          class="relative bg-white/80 backdrop-blur rounded-3xl p-6 shadow-sm border border-gray-100 overflow-hidden cursor-pointer active:scale-95 transition-transform"
        >
          <!-- Header Section -->
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
               <img src="/img/Icon_blue.png" alt="Standard Icon" class="w-12 h-12 object-contain" />
            </div>
            <div>
              <h2 class="text-xl font-bold text-gray-800">Standard Package</h2>
            </div>
          </div>

          <p class="text-sm text-gray-600 mb-6 leading-relaxed">
            Get essential health insights with our standard test with limited biological depth.
          </p>

          <!-- Features -->
          <div class="space-y-3 mb-8 relative z-20">
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-400/80 flex items-center justify-center">
                <Check class="w-3 h-3 text-white" />
              </div>
              <span class="text-xs font-semibold text-gray-600 tracking-wide">BLOOD WORK</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-400/80 flex items-center justify-center">
                <Check class="w-3 h-3 text-white" />
              </div>
              <span class="text-xs font-semibold text-gray-600 tracking-wide">HORMONE PANELS</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-400/80 flex items-center justify-center">
                <Check class="w-3 h-3 text-white" />
              </div>
              <span class="text-xs font-semibold text-gray-600 tracking-wide">METABOLIC PROFILE</span>
            </div>
          </div>

          <!-- Price and Badge -->
          <div class="flex items-end justify-between relative z-20 mt-8">
            <div class="flex items-start">
              <span class="text-xl font-medium text-gray-800 mt-1">$</span>
              <span class="text-5xl font-bold text-gray-800 tracking-tight">150</span>
            </div>
            
            <div class="bg-blue-50/80 backdrop-blur px-4 py-2 rounded-xl">
              <span class="text-blue-500 font-medium text-sm">72h turnaround</span>
            </div>
          </div>

          <!-- Decorative Image -->
          <div class="absolute right-[-40px] bottom-[50px] w-64 h-64 z-10 opacity-90">
             <img src="/img/retangel_white.png" alt="White Cube" class="w-full h-full object-contain drop-shadow-lg transform rotate-[-8deg]" />
          </div>
        </div>
      </div>

      <!-- Detail View -->
      <div v-if="currentView === 'detail'" class="space-y-6 pt-4 animate-fade-in-up">
        <div class="text-center mb-6">
           <div class="w-10 h-1 bg-gray-400 rounded-full mx-auto mb-6 opacity-30"></div>
        </div>

        <!-- Title Section -->
        <div class="flex items-start gap-4 mb-4 pl-2">
            <div class="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#e8e4d3] flex items-center justify-center shadow-inner">
               <img src="/img/Icon_black.png" alt="Spark Icon" class="w-10 h-10 object-contain" />
            </div>
            <div class="flex flex-col pt-1">
              <span class="text-xs font-bold text-gray-400 tracking-wider">ABOUT THE</span>
              <h2 class="text-xl font-bold text-gray-800">Spark Packaging</h2>
            </div>
        </div>

        <p class="text-sm text-gray-600 leading-relaxed px-2">
            A complete picture of your biology <span class="text-blue-500 font-medium">genes, gut, and protein activity</span> working together to power your Digital Twin.
        </p>

        <!-- Video Section -->
        <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
            <video class="w-full h-[220px] object-cover" controls playsinline>
                <source src="/img/test.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <p class="text-sm text-gray-600 leading-relaxed px-2">
            You'll collect a <span class="text-blue-500 font-medium">saliva sample, a stool sample, and a small blood sample using an at-home kit</span> with simple, step-by-step instructions. The process is quick, safe, and designed to be done comfortably at home.
        </p>

        <!-- Pricing Breakdown -->
        <div class="bg-transparent rounded-2xl p-4 space-y-3 mt-4">
            <div class="flex justify-between items-center text-gray-700 text-sm">
                <span>Subtotal</span>
                <span class="font-medium">$ 475.00</span>
            </div>
            <div class="flex justify-between items-center text-gray-700 text-sm">
                <span>Vat (5%)</span>
                <span class="font-medium">$ 25.00</span>
            </div>
            <div class="flex justify-between items-center text-gray-700 text-sm">
                <span>Collection reach</span>
                <span class="font-medium text-gray-800">Free</span>
            </div>
             <div class="my-2 border-t border-gray-200"></div>
             <div class="flex justify-between items-center text-blue-500 font-bold text-[15px]">
                <span>Total</span>
                <span>$ 500.00</span>
            </div>
        </div>

        <!-- Purchase Button -->
        <button 
            @click="handlePurchase"
            class="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition mt-4 shadow-sm"
        >
            Purchase now
            <ArrowRight class="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <!-- Confirmation View -->
      <div v-if="currentView === 'confirmation'" class="space-y-6 pt-4 animate-fade-in-up flex flex-col items-center text-center h-full">
        <!-- Flex-grow container to center content vertically/horizontally as needed or just space them -->
        
        <div class="w-full mb-8">
            <div class="w-10 h-1 bg-gray-400 rounded-full mx-auto opacity-30"></div>
        </div>

        <div class="flex-1 flex flex-col w-full">
            <!-- Icon/Header -->
            <div class="w-full flex items-start text-left mb-8 gap-6 pl-4">
                 <div class="flex-shrink-0 w-20 h-20 rounded-[28px] bg-[#e8e4d3] flex items-center justify-center shadow-sm">
                   <img src="/img/Icon_black.png" alt="Spark Icon" class="w-12 h-12 object-contain" />
                </div>
                <div class="flex flex-col justify-center pt-2">
                    <span class="text-xs font-bold text-gray-400 tracking-wider">CONFIRMATION</span>
                    <h2 class="text-lg font-bold text-gray-700">Spark Packaging</h2>
                </div>
            </div>

            <!-- Thanks Section -->
            <div class="space-y-4 mb-12">
                <span class="text-xs font-bold text-gray-400 tracking-wider block">SPARK TESTS CONFIRMATION</span>
                <h1 class="text-4xl font-extrabold text-gray-800 mb-6">Thanks</h1>
                <p class="text-sm text-gray-600 leading-relaxed max-w-[320px] mx-auto">
                    Your test kit is being prepared. Sample collection is simple and done at home. We’ll guide you through every step and notify you as your results are ready.
                </p>
            </div>

            <!-- Done Icon -->
            <div class="relative w-24 h-24 mb-12 flex items-center justify-center mx-auto">
                 <div class="w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-blue-500/30 shadow-lg">
                    <img src="/img/Vector.png" alt="Checked" class="w-10 h-8 object-contain" />
                 </div>
            </div>
            
             <!-- Continue Button (Pushed to bottom) -->
             <div class="mt-auto pb-6">
                <button 
                    @click="handleContinue"
                    class="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-full font-medium flex items-center justify-between px-8 gap-2 transition shadow-sm"
                >
                    <span>Continue</span>
                    <ArrowRight class="w-5 h-5 text-gray-600" />
                </button>
             </div>
        </div>
      </div>

      <!-- Loading View -->
      <div v-if="currentView === 'loading'" class="h-full flex items-center justify-center animate-fade-in -mt-10">
        <div class="relative w-full h-full flex items-center justify-center">
             <img src="/img/human.png" alt="Human" class="max-w-[80%] max-h-[70vh] object-contain blur-md opacity-60" />
        </div>
      </div>

      <!-- Dashboard View -->
      <div v-if="currentView === 'dashboard'" class="h-full flex flex-col items-center justify-between pt-4 animate-fade-in relative">
         
         <!-- Human Model -->
         <div class="flex-1 w-full flex items-center justify-center relative min-h-0">
            <img src="/img/human.png" alt="Digital Twin" class="max-w-[90%] max-h-full object-contain" />
         </div>

         <!-- Alert Card (Fixed at bottom or naturally at bottom of flex) -->
         <div class="w-full mt-4 flex-none z-20">
            <div class="bg-red-50 rounded-3xl p-5 flex items-start gap-4 shadow-sm border border-red-100">
               <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shadow-sm">
                  <span class="text-white font-bold text-xl">!</span>
               </div>
               <div class="flex flex-col pt-1">
                  <span class="text-xs font-bold text-gray-400 tracking-wider">3 BIOLOGICAL INSIGHT FOUND</span>
                  <p class="text-lg font-bold text-gray-800 leading-tight mt-1">
                     Elevated cardiovascular risk
                  </p>
               </div>
            </div>
         </div>
      </div>

      <!-- Risk Details View -->
      <div v-if="currentView === 'risk_details'" class="h-full flex flex-col animate-fade-in relative">
          <!-- Zoomed Human Model Background -->
          <div class="absolute -top-[10%] left-0 right-0 h-[60%] flex items-center justify-center pointer-events-none z-0">
               <img src="/img/human.png" alt="Zoomed Human" class="w-full h-full object-cover object-top scale-[1.5] opacity-90" />
                
               <!-- Blue Dot with Ring -->
               <div class="absolute top-[40%] right-[35%] w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/30 animate-pulse z-10"></div>
          </div>

          <!-- Bottom Sheet Content -->
          <div class="mt-auto relative z-10 space-y-4 pb-0 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent pt-20">
             
             <!-- Card 1 -->
             <div class="mx-2 bg-white/70 backdrop-blur rounded-3xl p-4 flex items-center gap-4 shadow-sm border border-white/60">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shadow-sm">
                    <span class="text-white font-bold text-xl">!</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[10px] font-bold text-gray-500 tracking-wider uppercase">FROM BLOOD TEST</span>
                    <p class="text-base font-bold text-gray-800 leading-tight">
                        Mild signs of inflammation
                    </p>
                </div>
             </div>

             <!-- Card 2 -->
             <div class="mx-2 bg-white/80 backdrop-blur rounded-3xl p-4 flex items-center gap-4 shadow-sm border border-white/60">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shadow-sm">
                    <span class="text-white font-bold text-xl">!</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[10px] font-bold text-gray-500 tracking-wider uppercase">FROM GENETIC TEST</span>
                    <p class="text-base font-bold text-gray-800 leading-tight">
                        Higher inherited heart risk
                    </p>
                </div>
             </div>

             <!-- Card 3 -->
             <div class="mx-2 bg-white rounded-3xl p-4 flex items-center gap-4 shadow-md border border-gray-100">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shadow-sm">
                    <span class="text-white font-bold text-xl">!</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[10px] font-bold text-gray-500 tracking-wider uppercase">FROM MICROBIOME</span>
                    <p class="text-base font-bold text-gray-800 leading-tight">
                        Less efficient fat and cholesterol processing
                    </p>
                </div>
             </div>

          </div>
      </div>

    </main>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

