<template>
  <section id="about" class="py-24 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-sm font-medium text-blue-500 tracking-wide uppercase">About Us</span>
        <h2 class="text-3xl md:text-4xl font-semibold text-primary mt-3 mb-4">关于我们的公司</h2>
        <p class="text-secondary max-w-2xl mx-auto">我们是一家专注于企业数字化服务的专业团队，致力于帮助企业实现技术创新和业务增长</p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <div class="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-1">
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <div class="text-6xl mb-4">🏢</div>
              <div class="text-2xl font-semibold mb-2">专注企业服务</div>
              <p class="opacity-90">自2016年成立以来，我们已为超过200家企业提供了优质的技术服务</p>
            </div>
          </div>
          <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 shadow-gray-200/50">
            <div class="flex items-center gap-4">
              <div class="text-3xl font-bold text-primary">8+</div>
              <div class="text-sm text-secondary leading-tight">年行业<br>深耕</div>
            </div>
          </div>
        </div>
        
        <div class="space-y-6">
          <div v-for="item in highlights" :key="item.title" 
               class="flex gap-4 p-5 rounded-xl hover:bg-gray-50 transition-colors">
            <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
              {{ item.icon }}
            </div>
            <div>
              <h3 class="font-semibold text-primary mb-1">{{ item.title }}</h3>
              <p class="text-secondary text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      highlights: [
        { icon: '💡', title: '创新技术方案', desc: '采用最新的技术框架，为企业量身定制最适合的数字化解决方案。' },
        { icon: '🤝', title: '专业服务团队', desc: '拥有经验丰富的技术团队，核心成员均来自知名互联网企业。' },
        { icon: '🛡️', title: '可靠的质量保障', desc: '严格的质量管理体系，确保每一个项目都能高质量交付。' },
        { icon: '🔄', title: '持续迭代优化', desc: '提供长期的技术支持和产品迭代服务，助力企业持续发展。' }
      ]
    }
  }
}
</script>