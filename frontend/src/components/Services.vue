<template>
  <section id="services" class="py-24 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-sm font-medium text-blue-500 tracking-wide uppercase">Our Services</span>
        <h2 class="text-3xl md:text-4xl font-semibold text-primary mt-3 mb-4">我们的核心服务</h2>
        <p class="text-secondary max-w-2xl mx-auto">涵盖企业数字化的全链路服务，从咨询到落地，一站式解决您的技术需求</p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(service, index) in services" :key="service.title" 
             class="group bg-white rounded-2xl p-6 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform group-hover:scale-110"
               :class="service.bgClass">
            {{ service.icon }}
          </div>
          <h3 class="text-lg font-semibold text-primary mb-2">{{ service.title }}</h3>
          <p class="text-secondary text-sm leading-relaxed mb-4">{{ service.desc }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in service.tags" :key="tag" 
                  class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="mt-16 bg-gradient-to-r from-primary to-gray-800 rounded-2xl p-8 md:p-12 text-white">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl md:text-3xl font-semibold mb-4">不确定需要什么服务？</h3>
            <p class="text-white/80 mb-6">我们的专业顾问可以为您提供免费咨询服务，根据您的业务需求定制专属解决方案。</p>
            <router-link to="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors">
              预约咨询 <span>→</span>
            </router-link>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-cols-2 gap-4">
              <div v-for="stat in stats" :key="stat.label" class="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div class="text-2xl font-bold">{{ stat.value }}</div>
                <div class="text-sm text-white/70">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        { 
          icon: '🌐', 
          title: '网站开发', 
          desc: '企业官网、电商平台、响应式网站开发，采用最新技术栈，确保高性能和高可用性。',
          tags: ['Vue', 'React', 'Node.js'],
          bgClass: 'bg-blue-50'
        },
        { 
          icon: '📱', 
          title: '移动应用', 
          desc: 'iOS、Android原生开发，跨平台小程序定制，覆盖主流移动端场景。',
          tags: ['Flutter', 'React Native'],
          bgClass: 'bg-purple-50'
        },
        { 
          icon: '⚙️', 
          title: '系统集成', 
          desc: '企业系统集成、数据迁移、API开发，支持与现有业务流程无缝对接。',
          tags: ['微服务', 'API'],
          bgClass: 'bg-green-50'
        },
        { 
          icon: '☁️', 
          title: '云服务', 
          desc: '云架构设计、DevOps实施、云原生应用开发，助力企业上云转型。',
          tags: ['AWS', '阿里云', 'Docker'],
          bgClass: 'bg-orange-50'
        }
      ],
      stats: [
        { value: '200+', label: '服务企业' },
        { value: '500+', label: '完成项目' },
        { value: '99%', label: '可用率保障' },
        { value: '7×24', label: '技术支持' }
      ]
    }
  }
}
</script>