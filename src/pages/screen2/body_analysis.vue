<script setup>
import {
  Heart,
  Activity,
  ShieldCheck,
  Pill,
  Waves
} from 'lucide-vue-next';

const systems = [
  {
    id: 'medications',
    title: 'MEDICATIONS',
    icon: Pill,
    status: 'locked',
    position: 'top-left'
  },
  {
    id: 'metabolism',
    title: 'ENERGY & METABOLISM',
    icon: Activity,
    status: 'active',
    position: 'top-right'
  },
  {
    id: 'heart',
    title: 'HEART',
    icon: Heart,
    status: 'locked',
    position: 'bottom-left'
  },
  {
    id: 'immune',
    title: 'IMMUNE',
    icon: ShieldCheck,
    status: 'locked',
    position: 'bottom-right'
  }
];
</script>

<template>
  <div class="min-h-screen bg-white relative overflow-hidden font-sans select-none flex flex-col">
    <!-- Header -->
    <header class="relative z-20 flex items-center justify-between p-6">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 flex items-center justify-center">
            <svg class="w-full h-full text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
        </div>
        <span class="text-2xl font-semibold tracking-tight text-slate-800">genetiQ</span>
      </div>
      <div class="bg-slate-50 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-slate-100">
        <div class="w-5 h-5 bg-slate-800 rounded-full flex items-center justify-center">
          <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
        <span class="font-bold text-slate-700">0</span>
      </div>
    </header>

    <!-- Main Content with Body Background -->
    <main class="flex-1 relative flex items-center justify-center overflow-hidden">
      <!-- Central Body Image -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="~/assets/imgs/body.png"
          alt="Human Body Model"
          class="h-[85%] object-contain opacity-90 transition-transform duration-700 hover:scale-105"
        />
      </div>

      <!-- Floating Interaction Element -->
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-20 bg-slate-100 rounded-l-full flex flex-col items-center justify-center gap-1 py-4">
        <div class="w-1 h-1 bg-slate-300 rounded-full"></div>
        <div class="w-1 h-3 bg-slate-400 rounded-full"></div>
        <div class="w-1 h-1 bg-slate-300 rounded-full"></div>
      </div>

      <!-- Layout Grid for Cards -->
      <div class="relative w-full max-w-lg h-full grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-32 px-6 py-12">
        <!-- Individual Cards -->
        <div v-for="system in systems" :key="system.id" class="relative group">
          <div
            :class="[
              'p-5 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center gap-2 border shadow-sm backdrop-blur-md h-32',
              system.status === 'active'
                ? 'bg-white/80 border-blue-100 scale-105 shadow-blue-100/50'
                : 'bg-white/40 border-white/60 grayscale-[0.8] opacity-80 hover:grayscale-0 hover:opacity-100'
            ]"
          >
            <!-- Lock/Status Icon -->
            <div class="absolute top-3 right-3">
              <div v-if="system.status === 'locked'" class="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              <div v-else class="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            </div>

            <!-- Main Icon -->
            <div :class="['w-12 h-12 flex items-center justify-center', system.status === 'active' ? 'text-blue-600' : 'text-slate-400']">
              <component :is="system.icon" class="w-8 h-8" stroke-width="1.5" />
            </div>

            <!-- Title -->
            <span :class="['text-[10px] font-black tracking-widest', system.status === 'active' ? 'text-blue-700' : 'text-slate-400']">
              {{ system.title }}
            </span>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer Banner -->
    <footer class="p-6 relative z-20">
      <div class="bg-white/90 backdrop-blur-md border border-slate-100 p-5 rounded-[2.5rem] flex items-center gap-4 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
        <div class="shrink-0 text-slate-300">
          <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        </div>
        <p class="text-[13px] text-slate-500 font-medium leading-snug flex-1">
          Your Twin is alive. But parts of your biology remains unknown.
        </p>
        <div class="shrink-0 text-blue-400 opacity-60">
          <Waves class="w-10 h-10" />
        </div>
      </div>
    </footer>

    <!-- Background Abstract Elements -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute top-1/4 -right-20 w-80 h-80 bg-blue-50/50 blur-[100px] rounded-full"></div>
      <div class="absolute bottom-1/4 -left-20 w-80 h-80 bg-slate-50/50 blur-[100px] rounded-full"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse-subtle {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.02); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}

img {
  filter: drop-shadow(0 0 20px rgba(0,0,0,0.03));
}
</style>
