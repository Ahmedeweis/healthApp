<template>
  <div class="hero-container">
    <div class="glass-card">
      <h1 class="title">Health<span class="highlight">App</span></h1>
      <p class="subtitle">Your journey to a healthier life starts here.</p>

      <div class="features-grid">
        <div class="feature-item">
          <i class="icon">🥗</i>
          <h3>Nutrition</h3>
          <p>Track your daily meals and macros.</p>
        </div>
        <div class="feature-item">
          <i class="icon">💪</i>
          <h3>Workout</h3>
          <p>Guided routines for all levels.</p>
        </div>
        <div class="feature-item">
          <i class="icon">😴</i>
          <h3>Sleep</h3>
          <p>Analyze your sleep patterns.</p>
        </div>
      </div>

      <button class="cta-button" @click="startJourney">Get Started</button>
    </div>
  </div>
</template>

<script setup>
const startJourney = () => {
  console.log('Journey started!');
};
</script>

<style scoped>
.hero-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  color: #f8fafc;
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 4rem;
  max-width: 800px;
  width: 100%;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.highlight {
  background: linear-gradient(to right, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-item {
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
  border-radius: 16px;
  transition: transform 0.3s ease, background 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.06);
}

.icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #f8fafc;
}

.feature-item p {
  font-size: 0.9rem;
  color: #94a3b8;
}

.cta-button {
  background: linear-gradient(to right, #38bdf8, #818cf8);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 15px -3px rgba(56, 189, 248, 0.4);
}
</style>
