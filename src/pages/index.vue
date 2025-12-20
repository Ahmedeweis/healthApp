<template>
  <h1 class="bg-red-500 text-white">Health App</h1>
  <div class="min-h-screen flex items-center justify-center bg-slate-950 p-6 font-sans text-slate-50 selection:bg-sky-500/30">
    <!-- Background Decoration -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full"></div>
      <div class="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
    </div>

    <div class="glass-card relative z-10 p-8 md:p-16 max-w-4xl w-full text-center">
      <h1 class="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
        Health<span class="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">App</span>
      </h1>
      <p class="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
        Your journey to a healthier life starts here. Track, analyze, and improve your daily habits.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div v-for="feature in features" :key="feature.title"
             class="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
          <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {{ feature.icon }}
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-slate-400">{{ feature.description }}</p>
        </div>
      </div>

      <button @click="startJourney"
              class="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40">
        Get Started
        <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const features = [
  { icon: '🥗', title: 'Nutrition', description: 'Track your daily meals and macros effortlessly.' },
  { icon: '💪', title: 'Workout', description: 'Personalized routines for your fitness level.' },
  { icon: '😴', title: 'Sleep', description: 'Deep insights into your recovery and rest.' }
];

const startJourney = () => {
  console.log('Journey started!');
};
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2rem;
}
</style>
