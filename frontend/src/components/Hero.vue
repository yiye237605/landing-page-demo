<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"></div>
    <div class="absolute top-1/4 right-0 w-[900px] h-[900px] bg-gradient-to-br from-primary/5 via-purple-50/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
    <div class="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50/40 to-transparent rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>
    
    <div class="relative max-w-7xl mx-auto px-8 lg:px-12 py-32 lg:py-0">
      <div class="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-160px)] py-20">
        <div class="space-y-10" style="opacity: 0; transform: translateY(30px);" :class="{ 'animate-in': mounted }">
          <div class="inline-flex items-center gap-2.5 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-hairline/50 shadow-sm">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            <span class="text-sm text-ink/60 font-medium tracking-wide">企业级解决方案</span>
          </div>
          
          <h1 class="text-6xl lg:text-7xl xl:text-8xl font-bold text-ink leading-[1.02] tracking-tight">
            让技术<br/>
            <span class="text-gradient">创造价值</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-ink/50 max-w-lg leading-relaxed">
            八年深耕企业数字化领域，用技术推动商业增长，用专业赢得客户信赖。
          </p>
          
          <div class="flex flex-col sm:flex-row gap-5">
            <router-link to="/contact" class="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-ink text-white text-base font-medium rounded-full hover:bg-ink/90 transition-all hover:-translate-y-1">
              预约咨询
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
            <a href="#cases" class="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-white text-ink text-base font-medium rounded-full border border-hairline hover:border-ink/30 transition-all hover:-translate-y-1">
              查看案例
            </a>
          </div>
          
          <div class="flex items-center gap-14 pt-10">
            <div>
              <div class="text-4xl lg:text-5xl font-bold text-ink">200+</div>
              <div class="text-base text-ink/40 mt-2">合作企业</div>
            </div>
            <div class="w-px h-12 bg-hairline/50"></div>
            <div>
              <div class="text-4xl lg:text-5xl font-bold text-ink">98%</div>
              <div class="text-base text-ink/40 mt-2">客户满意度</div>
            </div>
          </div>
        </div>
        
        <div class="relative hidden lg:block" style="opacity: 0; transform: translateY(40px);" :class="{ 'animate-in-delay': mounted }">
          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-br from-primary/20 to-purple-100/50 rounded-3xl blur-2xl opacity-60"></div>
            <div class="relative bg-white rounded-2xl shadow-2xl shadow-ink/5 border border-hairline/50 overflow-hidden">
              <div class="flex items-center gap-3 px-6 py-5 bg-surface-soft border-b border-hairline/50">
                <div class="w-3 h-3 rounded-full bg-red-400/70"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400/70"></div>
                <div class="w-3 h-3 rounded-full bg-green-400/70"></div>
              </div>
              <div class="p-10 space-y-5">
                <div class="h-5 bg-gradient-to-r from-hairline/30 via-hairline/20 to-transparent rounded w-3/4"></div>
                <div class="h-5 bg-gradient-to-r from-hairline/20 via-hairline/15 to-transparent rounded w-1/2"></div>
                <div class="h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-block-lavender/20 rounded-xl border border-hairline/30 flex items-center justify-center">
                  <div class="flex flex-col items-center gap-4">
                    <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span class="text-sm text-ink/30 font-medium">数字化平台</span>
                  </div>
                </div>
                <div class="h-5 bg-gradient-to-r from-hairline/25 via-hairline/15 to-transparent rounded w-5/6"></div>
                <div class="h-5 bg-gradient-to-r from-hairline/20 via-hairline/10 to-transparent rounded w-2/3"></div>
              </div>
            </div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-block-lime/60 to-transparent rounded-2xl -z-10"></div>
            <div class="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-block-lilac/40 to-transparent rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs text-ink/30 tracking-widest uppercase">Scroll</span>
      <svg class="w-5 h-5 text-ink/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return { mounted: false }
  },
  mounted() {
    setTimeout(() => { this.mounted = true }, 100)
  }
}
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #5645d4 0%, #7b3ff2 50%, #c5b0f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-in-delay {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}
</style>