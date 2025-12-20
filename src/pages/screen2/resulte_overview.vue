<script setup>
import {
  Stethoscope,
  Pill,
  TestTube2,
  ScanLine,
  ClipboardList,
  Info,
  Waves
} from 'lucide-vue-next';

const healthData = [
  {
    id: 'diagnoses',
    title: 'Diagnoses',
    subtitle1: 'Essential hypertension',
    subtitle2: 'Dyslipidemia',
    icon: Stethoscope,
    color: 'bg-slate-500'
  },
  {
    id: 'medications',
    title: 'Medications',
    subtitle1: 'Atorvastatin 20 mg — Once daily',
    subtitle2: 'Lisinopril 20 mg — Once daily',
    icon: Pill,
    color: 'bg-slate-500'
  },
  {
    id: 'labs',
    title: 'Labs Over Time',
    subtitle1: 'LDL-C (borderline) (Mar 2025)',
    subtitle2: 'HbA1c 5.8-6.2% (Dec 2024)',
    icon: TestTube2,
    color: 'bg-blue-200'
  },
  {
    id: 'imaging',
    title: 'Imaging',
    subtitle1: 'Chest X-ray — Normal (Feb 2025)',
    subtitle2: 'MRI Knee — Meniscal tear (Nov 2024)',
    icon: ScanLine,
    color: 'bg-slate-400'
  },
  {
    id: 'encounters',
    title: 'Encounter History',
    subtitle1: 'Primary Care Visit — Mar 12, 2025',
    subtitle2: 'Emergency Visit — Feb 3, 2025',
    icon: ClipboardList,
    color: 'bg-slate-500'
  }
];
</script>

<template>
  <div class="min-h-screen bg-slate-50/50 relative overflow-hidden font-sans select-none">
    <!-- Abstract Background Blurs -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[20%] -left-[10%] w-[80%] h-[40%] bg-blue-200/30 blur-[100px] rounded-full"></div>
      <div class="absolute bottom-[20%] -right-[10%] w-[80%] h-[40%] bg-indigo-100/30 blur-[100px] rounded-full"></div>
    </div>

    <div class="relative z-10 max-w-md mx-auto p-6 space-y-6">
      <!-- Header -->
      <header class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 flex items-center justify-center">
            <svg class="w-full h-full text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </div>
          <span class="text-2xl font-semibold tracking-tight text-slate-800">genetiQ</span>
        </div>
        <div class="flex items-center gap-2 bg-white/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/80 shadow-sm">
          <div class="w-5 h-5 bg-slate-800 rounded-full flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span class="font-bold text-slate-700">0</span>
        </div>
      </header>

      <!-- Main Sections -->
      <main class="space-y-4">
        <section v-for="item in healthData" :key="item.id"
                 class="group relative bg-white/70 backdrop-blur-xl border border-white/60 p-5 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 active:scale-[0.98]">
          <!-- Icon Circle -->
          <div :class="['w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-inner', item.color]">
            <component :is="item.icon" class="w-8 h-8 text-white" />
          </div>
          <!-- Content -->
          <div class="flex flex-col">
            <h2 class="text-xl font-bold text-slate-800 tracking-tight">{{ item.title }}</h2>
            <p class="text-[0.95rem] text-slate-500 font-medium leading-tight mt-0.5">{{ item.subtitle1 }}</p>
            <p class="text-[0.95rem] text-slate-400 font-medium leading-tight">{{ item.subtitle2 }}</p>
          </div>
          <!-- Arrow (Optional, subtle in screenshot) -->
          <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
              <span class="text-slate-400">→</span>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer Info Card -->
      <footer class="mt-8 bg-blue-50/50 backdrop-blur-md border border-blue-100/50 p-6 rounded-[2.5rem] relative overflow-hidden">
        <div class="flex items-center gap-4 relative z-10">
          <div class="shrink-0 text-blue-400">
            <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <p class="text-xs text-slate-500 leading-normal font-medium flex-1">
            This view is based on individual medical events from your records. It doesn't yet analyze cause-and-effect or compare your data with larger population trends.
          </p>
          <div class="shrink-0 text-blue-400 opacity-50">
            <Waves class="w-8 h-8" />
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
}
</style>
