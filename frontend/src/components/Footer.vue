<template>
  <footer class="bg-ink text-white">
    <div class="max-w-7xl mx-auto px-8 lg:px-12 py-24">
      <div class="grid md:grid-cols-4 gap-16 mb-16">
        <div>
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-xl font-semibold">LandingPage</span>
          </div>
          <p class="text-base text-white/40 leading-relaxed mb-8">
            专注企业数字化服务<br/>用技术推动商业增长
          </p>
          <div class="flex gap-3">
            <a href="#" class="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" class="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold text-lg mb-6">服务项目</h4>
          <ul class="space-y-4 text-base text-white/40">
            <li><a href="#services" class="hover:text-white transition-colors">网站开发</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">移动应用</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">系统集成</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">云服务</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold text-lg mb-6">关于我们</h4>
          <ul class="space-y-4 text-base text-white/40">
            <li><a href="#about" class="hover:text-white transition-colors">公司介绍</a></li>
            <li><a href="#cases" class="hover:text-white transition-colors">成功案例</a></li>
            <li><a href="#" class="hover:text-white transition-colors">新闻动态</a></li>
            <li><a href="#" class="hover:text-white transition-colors">招贤纳士</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold text-lg mb-6">联系我们</h4>
          <ul class="space-y-4 text-base text-white/40">
            <li>400-000-0000</li>
            <li>contact@example.com</li>
            <li>北京市朝阳区科技园区88号</li>
          </ul>
        </div>
      </div>
      
      <div class="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-base text-white/30">© 2024 LandingPage. 保留所有权利.</p>
        <div class="flex gap-8 text-base text-white/30">
          <a href="#" class="hover:text-white/60 transition-colors">隐私政策</a>
          <a href="#" class="hover:text-white/60 transition-colors">服务条款</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'Footer' }
</script>