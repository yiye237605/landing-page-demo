<template>
  <section id="services" class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-8 lg:px-12">
      <div class="max-w-2xl mb-20">
        <span class="text-sm font-medium tracking-widest text-ink/40 uppercase mb-4 block">What we do</span>
        <h2 class="text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-6">
          专注企业数字化<br/>全链路服务
        </h2>
        <p class="text-xl text-ink/50 leading-relaxed">
          从咨询到落地，我们提供一站式技术解决方案
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-32">
        <div v-for="(service, index) in services" :key="service.title" 
             class="relative group cursor-pointer">
          <div class="flex gap-10">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110" :class="service.iconBg">
              <svg class="w-7 h-7" :class="service.iconColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" :d="service.iconPath" />
              </svg>
            </div>
            <div class="flex-1 pt-3">
              <h3 class="text-2xl font-semibold text-ink mb-4 group-hover:text-primary transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-lg text-ink/50 leading-relaxed mb-5">{{ service.desc }}</p>
              <div class="flex flex-wrap gap-3">
                <span v-for="tag in service.tags" :key="tag" class="text-sm text-ink/40 font-medium">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div class="absolute left-[4rem] top-18 w-px h-24 bg-gradient-to-b from-hairline/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="py-28 bg-gradient-to-br from-block-lime/40 via-block-lime/20 to-transparent">
    <div class="max-w-7xl mx-auto px-8 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 class="text-4xl lg:text-5xl font-bold text-ink mb-5 leading-tight">
            需要专属方案？
          </h3>
          <p class="text-xl text-ink/50 mb-10 leading-relaxed">
            我们的专业顾问将根据您的业务需求，定制最适合的数字化转型路径。
          </p>
          <router-link to="/contact" class="inline-flex items-center gap-3 px-10 py-5 bg-ink text-white text-lg font-medium rounded-full hover:bg-ink/90 transition-all hover:-translate-y-1">
            预约咨询
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
        <div class="grid grid-cols-2 gap-5">
          <div v-for="stat in stats" :key="stat.label" class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/50">
            <div class="text-4xl font-bold text-ink mb-2">{{ stat.value }}</div>
            <div class="text-base text-ink/40">{{ stat.label }}</div>
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
          title: '网站与平台开发', 
          desc: '企业官网、电商平台、响应式网站。采用最新技术栈，确保高性能、高可用性、可扩展性。',
          tags: ['Vue.js', 'React', 'Node.js', 'TypeScript'],
          iconPath: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
          iconBg: 'bg-block-lilac/40',
          iconColor: 'text-primary'
        },
        { 
          title: '移动应用开发', 
          desc: 'iOS、Android原生开发，跨平台小程序。覆盖主流移动端场景，提供流畅的用户体验。',
          tags: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
          iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
          iconBg: 'bg-block-mint/40',
          iconColor: 'text-emerald-600'
        },
        { 
          title: '系统集成与数据', 
          desc: '企业系统集成、数据迁移、API开发。支持与现有业务流程无缝对接，打通数据孤岛。',
          tags: ['微服务', 'GraphQL', 'REST API', '数据工程'],
          iconPath: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
          iconBg: 'bg-block-coral/40',
          iconColor: 'text-orange-500'
        },
        { 
          title: '云服务与 DevOps', 
          desc: '云架构设计、CI/CD 流水线、容器化部署。助力企业安全、高效上云。',
          tags: ['AWS', '阿里云', 'Docker', 'Kubernetes'],
          iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
          iconBg: 'bg-block-sky/40',
          iconColor: 'text-blue-500'
        }
      ],
      stats: [
        { value: '200+', label: '服务企业' },
        { value: '500+', label: '完成项目' },
        { value: '99.9%', label: '可用率保障' },
        { value: '7×24', label: '技术支持' }
      ]
    }
  }
}
</script>