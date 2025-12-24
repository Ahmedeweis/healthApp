<template>
  <footer class="bg-[#FAFAFA] pt-16 pb-8 border-t border-gray-200 font-['Inter'] relative overflow-hidden">
    <!-- Background element -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50/50 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        <!-- Brand Column -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <router-link to="/" class="flex items-center gap-2">
            <img src="/imgs/logoB.svg" alt="GenetiQ" class="h-8 w-auto grayscale opacity-80 hover:opacity-100 transition-opacity" />
          </router-link>
          <p class="text-gray-500 text-sm leading-relaxed max-w-sm">
            Pioneering the future of personalized medicine through advanced genetic analysis and digital twin technology. Your health, decoded.
          </p>
          <div class="flex items-center gap-4 mt-2">
            <!-- Social Placeholders -->
             <a href="#" class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#007AFF] hover:border-blue-200 transition-all hover:scale-110 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             </a>
             <a href="#" class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#007AFF] hover:border-blue-200 transition-all hover:scale-110 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
             <a href="#" class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#007AFF] hover:border-blue-200 transition-all hover:scale-110 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
          </div>
        </div>

        <!-- Links Columns -->
        <div class="lg:col-span-2">
          <h4 class="font-bold text-gray-900 mb-6 font-hanken">Product</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-500 hover:text-[#007AFF] transition-colors text-sm font-medium">Spark Test</a></li>
            <li><a href="#" class="text-gray-500 hover:text-[#007AFF] transition-colors text-sm font-medium">Digital Twin</a></li>
            <li><a href="#" class="text-gray-500 hover:text-[#007AFF] transition-colors text-sm font-medium">Pricing</a></li>
            <li><a href="#" class="text-gray-500 hover:text-[#007AFF] transition-colors text-sm font-medium">For Clinics</a></li>
          </ul>
        </div>
        <div class="lg:col-span-2">
          <h4 class="font-bold text-gray-900 mb-6 font-hanken">Company</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-500 hover:text-[#007AFF] transition-colors text-sm font-medium">About Us</a></li>
            <li><a href="#" class="text-gray-500 hover:text-[#007AFF] transition-colors text-sm font-medium">Careers</a></li>
            <li><a href="#" class="text-gray-500 hover:text-[#007AFF] transition-colors text-sm font-medium">Blog</a></li>
            <li><a href="#" class="text-gray-500 hover:text-[#007AFF] transition-colors text-sm font-medium">Contact</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="lg:col-span-4">
          <h4 class="font-bold text-gray-900 mb-6 font-hanken">Stay Updated</h4>
          <p class="text-gray-500 text-sm mb-4">Subscribe to our newsletter for the latest updates on longevity and personalized health.</p>
          <div class="flex gap-2">
             <input type="email" placeholder="Enter your email" class="flex-1 bg-white border border-gray-200 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] transition-all" />
             <button class="bg-[#333] cursor-pointer hover:bg-[#007AFF] text-white px-6 py-3 rounded-full text-sm font-bold transition-colors">
               Subscribe
             </button>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-gray-400 text-xs">© 2025 GenetiQ Health. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="text-gray-400 hover:text-gray-600 text-xs">Privacy Policy</a>
          <a href="#" class="text-gray-400 hover:text-gray-600 text-xs">Terms of Service</a>
          <a href="#" class="text-gray-400 hover:text-gray-600 text-xs">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

.font-hanken {
  font-family: 'Hanken Grotesk', sans-serif;
}
</style>
