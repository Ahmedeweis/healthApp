<template>
  <div class="fixed inset-0 bg-[#000000] z-[9999] flex items-center justify-center">
    <div class="animate-fade-in">
      <img src="/imgs/logoW.svg" alt="GenetiQ Logo" class="h-20 w-auto" />
    </div>
  </div>
</template>

<script setup >
  import { onMounted  } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push('/new_design/welcome')
  }, 2000)
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.5s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

:global(body) {
  margin: 0;
  padding: 0;
  background-color: #000000 !important;
}
</style>
