<template>
  <footer class="bg-primary text-white">
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
            <span class="text-xl font-semibold">企业名称</span>
          </div>
          <p class="text-white/70 text-sm leading-relaxed">
            专注企业数字化服务<br>
            助力企业技术创新与增长
          </p>
          <div class="flex gap-4 mt-6">
            <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">微</a>
            <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">博</a>
            <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">知</a>
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">服务项目</h4>
          <ul class="space-y-3 text-white/70 text-sm">
            <li><a href="#services" class="hover:text-white transition-colors">网站开发</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">移动应用</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">系统集成</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">云服务</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">关于我们</h4>
          <ul class="space-y-3 text-white/70 text-sm">
            <li><a href="#about" class="hover:text-white transition-colors">公司介绍</a></li>
            <li><a href="#cases" class="hover:text-white transition-colors">成功案例</a></li>
            <li><a href="#" class="hover:text-white transition-colors">新闻动态</a></li>
            <li><a href="#" class="hover:text-white transition-colors">招贤纳士</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">联系我们</h4>
          <ul class="space-y-3 text-white/70 text-sm">
            <li>📞 400-888-8888</li>
            <li>✉️ contact@company.com</li>
            <li>📍 北京市朝阳区科技园区88号</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-white/50 text-sm">© 2024 企业名称有限公司. 保留所有权利.</p>
        <div class="flex gap-6 text-white/50 text-sm">
          <a href="#" class="hover:text-white transition-colors">隐私政策</a>
          <a href="#" class="hover:text-white transition-colors">服务条款</a>
          <a href="#" class="hover:text-white transition-colors">网站地图</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'Footer' }
</script>