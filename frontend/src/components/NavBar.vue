<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="scrolled ? 'bg-white/90 backdrop-blur-md border-b border-hairline/50 shadow-sm' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-8 lg:px-12 h-20 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-3">
        <div class="w-10 h-10 bg-ink rounded-xl flex items-center justify-center">
          <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span class="text-xl font-semibold text-ink tracking-tight">TechFlow</span>
      </router-link>
      
      <div class="hidden lg:flex items-center gap-12">
        <a href="#services" class="text-base text-ink/60 hover:text-ink transition-colors tracking-wide">服务</a>
        <a href="#cases" class="text-base text-ink/60 hover:text-ink transition-colors tracking-wide">案例</a>
        <a href="#about" class="text-base text-ink/60 hover:text-ink transition-colors tracking-wide">关于</a>
        <router-link to="/contact" class="px-8 py-3 bg-ink text-white text-base font-medium rounded-full hover:bg-ink/90 transition-all">
          开始咨询
        </router-link>
      </div>
      
      <button class="lg:hidden p-2 -mr-2" @click="menuOpen = !menuOpen">
        <svg class="w-6 h-6 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
    <div v-if="menuOpen" class="lg:hidden bg-white border-t border-hairline">
      <div class="px-6 py-5 space-y-4">
        <a href="#services" class="block text-lg text-ink/60 py-2" @click="menuOpen = false">服务</a>
        <a href="#cases" class="block text-lg text-ink/60 py-2" @click="menuOpen = false">案例</a>
        <a href="#about" class="block text-lg text-ink/60 py-2" @click="menuOpen = false">关于</a>
        <router-link to="/contact" class="block text-primary font-medium py-2 text-lg" @click="menuOpen = false">开始咨询</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return { 
      menuOpen: false,
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50
    }
  },
  watch: {
    $route() { this.menuOpen = false }
  }
}
</script>