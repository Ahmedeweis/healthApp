<template>
  <header
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
    :class="[
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm h-16 md:h-20' : 'bg-transparent h-20 md:h-24'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 group">
        <img
          src="/imgs/logoB.svg"
          alt="GenetiQ"
          class="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
        />
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="text-sm font-medium text-black hover:text-[#007AFF] transition-colors relative group"
        >
          {{ item.name }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007AFF] transition-all duration-300 group-hover:w-full"></span>
        </router-link>
      </nav>

      <!-- Actions -->
      <div class="hidden md:flex items-center gap-4">
        <router-link
          to="/new_design/sign-in"
          class="text-sm font-bold text-gray-700 hover:text-[#007AFF] transition-colors"
        >
          Log in
        </router-link>
        <router-link
          to="/new_design/spark_price"
          class="bg-[#333] hover:bg-[#007AFF] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25 active:scale-95"
        >
          Get Started
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2 text-gray-700" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-slide-down"
    >
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="text-base font-medium text-gray-800 py-2 border-b border-gray-50 bg-gray-50/50 px-4 rounded-lg"
        @click="isMobileMenuOpen = false"
      >
        {{ item.name }}
      </router-link>
       <div class="flex flex-col gap-3 mt-2">
        <router-link
          to="/new_design/sign-in"
          class="text-center text-sm font-bold text-gray-700 py-2"
           @click="isMobileMenuOpen = false"
        >
          Log in
        </router-link>
        <router-link
          to="/new_design/spark_price"
          class="bg-[#333] text-white text-center text-sm font-bold px-5 py-3 rounded-full"
           @click="isMobileMenuOpen = false"
        >
          Get Started
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/new_design/welcome' },
  { name: 'Spark Test', path: '/new_design/spark_price' },
  { name: 'Digital Twin', path: '/new_design/body_view' },
  { name: 'Technology', path: '#' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

header {
  font-family: 'Inter', sans-serif;
}

.animate-slide-down {
  animation: slideDown 0.3s ease-out forwards;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
