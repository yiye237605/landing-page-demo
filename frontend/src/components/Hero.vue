<template>
  <section id="home" class="pt-32 pb-24 px-6 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-6">
            <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            专业企业服务解决方案
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight tracking-tight mb-6">
            数字化转型<br>
            <span class="text-blue-500">赋能企业增长</span>
          </h1>
          <p class="text-lg text-secondary leading-relaxed mb-8 max-w-lg">
            我们专注于为企业提供全方位的技术解决方案，帮助您在数字化时代取得竞争优势，实现业务的持续增长和突破。
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/contact" class="px-8 py-3.5 bg-primary text-white font-medium rounded-md hover:bg-gray-800 transition-all text-center shadow-lg shadow-primary/20">
              立即咨询
            </router-link>
            <a href="#services" class="px-8 py-3.5 border border-gray-200 text-primary font-medium rounded-md hover:bg-gray-50 transition-all text-center">
              了解更多 →
            </a>
          </div>
          <div class="flex items-center gap-8 mt-10 pt-8 border-t border-gray-100">
            <div>
              <div class="text-3xl font-semibold text-primary">200+</div>
              <div class="text-sm text-secondary">服务企业</div>
            </div>
            <div>
              <div class="text-3xl font-semibold text-primary">98%</div>
              <div class="text-sm text-secondary">客户满意度</div>
            </div>
            <div>
              <div class="text-3xl font-semibold text-primary">8年+</div>
              <div class="text-sm text-secondary">行业经验</div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12">
            <div class="bg-white rounded-2xl shadow-xl p-6 shadow-gray-200/50">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div class="space-y-3">
                <div class="h-4 bg-gray-100 rounded w-3/4"></div>
                <div class="h-4 bg-gray-100 rounded w-1/2"></div>
                <div class="h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <span class="text-4xl">🚀</span>
                </div>
                <div class="h-4 bg-gray-100 rounded w-5/6"></div>
                <div class="h-4 bg-gray-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-2xl -z-10 opacity-20"></div>
          <div class="absolute -top-4 -left-4 w-16 h-16 bg-purple-500 rounded-2xl -z-10 opacity-20"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'Hero' }
</script>