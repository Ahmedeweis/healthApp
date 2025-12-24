<template>
  <div class="flex flex-col min-h-screen">
    <GlobalHeader v-if="!hideAppShell" />
    <main class="flex-grow">
      <router-view />
    </main>
    <GlobalFooter v-if="!hideAppShell" />
  </div>
</template>

<script setup>
import { useCounterStore } from './stores/counter.js';
import GlobalHeader from './components/GlobalHeader.vue';
import GlobalFooter from './components/GlobalFooter.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const counter = useCounterStore();
const route = useRoute();

const hideAppShell = computed(() => {
  return route.path === '/new_design/virtual_visit';
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
