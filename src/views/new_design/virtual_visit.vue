<template>
  <div class="h-screen w-full bg-black relative overflow-hidden flex flex-col font-['Hanken_Grotesk']">

    <!-- State 1: Connecting -->
    <div v-if="callState === 'connecting'" class="absolute inset-0 flex flex-col items-center justify-center animate-fade-in z-20">
        <!-- Top Badge -->
        <div class="absolute top-12 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span class="text-white text-sm font-medium">Dr. Alexander</span>
        </div>

        <!-- Connecting Text -->
        <div class="flex flex-col items-center gap-4">
             <div class="text-white text-lg font-medium animate-pulse">Connecting...</div>
        </div>
    </div>

    <!-- State 2: Connected -->
    <div v-else-if="callState === 'connected'" class="absolute inset-0 z-10 animate-fade-in">

<div
  class="absolute inset-0 bg-center bg-cover"
  style="background-image: url('/imgs/doctor.png')">
</div>



        <!-- Powered By Top Left -->
        <div class="absolute top-12 left-6 flex flex-col gap-1">
             <span class="text-[16px] text-white/80 font-medium">Powered by</span>
             <img src="/imgs/powredwith.png" alt="PureHealth" class="w-28 object-contain brightness-0 invert" />
        </div>

        <!-- PIP (User Video) -->
        <div class="absolute top-12 right-6 w-28  rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-black">
             <img src="/imgs/man.png" class="w-full h-full object-cover" alt="Me" />
        </div>

        <!-- Doctor Name & Badge overlay -->
        <div class="absolute bottom-32 left-0 right-0 flex flex-col items-center gap-4">
             <div
               @click="showConsultModal = true"
               class="bg-white/5 backdrop-blur-2xl px-6 py-2.5 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] cursor-pointer hover:bg-white/15 transition-all active:scale-95 flex items-center justify-center"
             >
                 <span class="text-[#AAFFB6] text-[15px] font-bold tracking-tight">Dr. Alexander</span>
             </div>
             <div class="bg-white/5 backdrop-blur-2xl px-8 py-2.5 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                 <span class="text-white/70 text-sm font-medium">Cardiologist</span>
             </div>
        </div>
    </div>

    <!-- Consult Modal Overlay -->
    <Transition name="fade">
        <div v-if="showConsultModal" class="absolute inset-0 z-50 flex items-center justify-center p-6">
            <!-- Backdrop Layer -->
            <div class="absolute inset-0 bg-black/50 backdrop-blur-[2px]" @click="showConsultModal = false"></div>

            <!-- Modal Card (High Fidelity) -->
            <div class="bg-black/40 backdrop-blur-[40px] w-full max-w-[345px] rounded-[44px] p-9 border border-white/10 shadow-[0_22px_70px_8px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.1)] relative animate-slide-up">

                <!-- Consultation View -->
                <div v-if="!showConfirmation">
                    <!-- Header -->
                    <div class="flex flex-col gap-2.5 mb-8">
                        <span class="text-[10px] font-black text-white/60 tracking-[0.25em] uppercase">CONSULT WITH</span>
                        <h2 class="text-[26px] font-bold text-white leading-tight">Dr. Alexander Moreau, MD</h2>
                    </div>

                    <!-- Content -->
                    <p class="text-[15.5px] leading-[1.6] text-white/80 font-medium mb-12">
                        Following your video consultation, an in-person visit is advised to complete your cardiovascular evaluation and next steps.
                    </p>

                    <!-- Actions -->
                    <div class="flex flex-col items-center gap-8">
                        <button @click="showConsultModal = false" class="text-[#4396E6] cursor-pointer text-[17px] font-semibold hover:opacity-80 transition-opacity">
                            Find another timeslot
                        </button>

                        <button @click="bookAppointment" class="w-full h-16 bg-linear-to-b from-[#3A3A3C] to-[#2C2C2E] border border-white/10 rounded-full flex items-center justify-between px-8 group active:scale-[0.98] transition-all shadow-[inset_0_1px_8px_rgba(0,0,0,0.4)] cursor-pointer">
                            <span class="text-white font-bold text-lg">Book Now</span>
                            <div class=" p-2">
                               <img src="/imgs/clencall.png" class="w-5 h-5" alt="Calendar" />
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Confirmation View -->
                <div v-else class="animate-slide-up">
                    <!-- Header -->
                    <div class="flex flex-col gap-3 mb-8">
                        <span class="text-[11px] font-black text-white/60 tracking-[0.2em] uppercase">SEE YOU SOON!</span>
                        <h2 class="text-[28px] font-bold text-white leading-tight">Appointment confirmed!</h2>
                    </div>

                    <!-- Content -->
                    <div class="mb-10">
                        <p class="text-[15px] leading-[1.6] text-white/80 font-medium mb-2">
                            Your in-person cardiology visit has been successfully scheduled at:
                        </p>
                        <p class="text-[15px] text-[#4396E6] font-semibold mb-6">
                            Sheikh Shakhbout Medical City (SSMC).
                        </p>
                        <p class="text-[15px] leading-[1.6] text-white/80 font-medium">
                            We look forward to welcoming you for your follow-up care.
                        </p>
                    </div>

                    <!-- Appointment Details -->
                    <div class="mb-8">
                        <div class="space-y-1.5 text-[13px]">
                            <div class="flex items-center gap-2">
                                <span class="text-white/60 font-medium">DATE:</span>
                                <span class="text-white font-semibold">DECEMBER 12, 2025</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-white/60 font-medium">TIME:</span>
                                <span class="text-white font-semibold">10:30 AM</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-white/60 font-medium">DURATION:</span>
                                <span class="text-white font-semibold">30 MINUTES</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-white/60 font-medium">DEPARTMENT:</span>
                                <span class="text-white font-semibold">CARDIOLOGY</span>
                            </div>
                        </div>
                    </div>

                    <!-- Continue Button -->
                    <button @click="continueCall" class="w-full h-14 bg-linear-to-b from-[#3A3A3C] to-[#2C2C2E] border border-white/10 rounded-full flex items-center justify-center gap-3 group active:scale-[0.98] transition-all shadow-[inset_0_1px_8px_rgba(0,0,0,0.4)] cursor-pointer">
                        <span class="text-white font-bold text-lg">Continue with the call</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-white">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </Transition>

    <!-- Call Controls (Common) -->
    <div class="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-6 z-30">
         <!-- Mute Video -->
         <button class="size-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all shadow-inner cursor-pointer">
             <img src="/imgs/end.png" class="w-6 h-6" alt="Mute Video" />
         </button>

         <!-- End Call -->
         <button @click="endCall" class="size-16 rounded-full bg-[#1F171A] backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-red-500/40 active:scale-95 transition-all shadow-inner cursor-pointer">
             <img src="/imgs/cancel.png" class="w-7 h-7" alt="End Call" />
         </button>

         <!-- Mute Mic -->
         <button class="size-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all shadow-inner cursor-pointer">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white">
                 <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M12 19v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M8 23h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2"/>
             </svg>
         </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const callState = ref('connecting') // 'connecting' | 'connected'
const showConsultModal = ref(false)
const showConfirmation = ref(false)

const bookAppointment = () => {
    showConfirmation.value = true
}

const continueCall = () => {
    showConsultModal.value = false
    showConfirmation.value = false
}

const endCall = () => {
    router.push('/new_design/body_view?booked=true')
}

onMounted(() => {
    // Simulate connection delay
    setTimeout(() => {
        callState.value = 'connected'
    }, 3000)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap');

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-slide-up {
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
