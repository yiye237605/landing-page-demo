<template>
  <nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
        <span class="text-xl font-semibold text-primary tracking-tight">企业名称</span>
      </div>
      <div class="hidden md:flex items-center gap-8">
        <router-link to="/" class="text-sm text-secondary hover:text-primary transition-colors">首页</router-link>
        <a href="/#about" class="text-sm text-secondary hover:text-primary transition-colors">关于我们</a>
        <a href="/#services" class="text-sm text-secondary hover:text-primary transition-colors">服务</a>
        <a href="/#cases" class="text-sm text-secondary hover:text-primary transition-colors">案例</a>
        <router-link to="/contact" class="px-5 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors">
          联系我们
        </router-link>
      </div>
      <button class="md:hidden text-primary" @click="menuOpen = !menuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div v-if="menuOpen" class="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
      <router-link to="/" class="block text-secondary py-2">首页</router-link>
      <a href="/#about" class="block text-secondary py-2">关于我们</a>
      <a href="/#services" class="block text-secondary py-2">服务</a>
      <a href="/#cases" class="block text-secondary py-2">案例</a>
      <router-link to="/contact" class="block text-primary py-2 font-medium">联系我们</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return { menuOpen: false }
  },
  watch: {
    $route() {
      this.menuOpen = false
    }
  }
}
</script>