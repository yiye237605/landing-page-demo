<template>
  <section class="py-32 bg-surface-soft">
    <div class="max-w-7xl mx-auto px-8 lg:px-12">
      <div class="text-center mb-20">
        <span class="text-sm font-medium tracking-widest text-ink/40 uppercase mb-4 block">Testimonials</span>
        <h2 class="text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight">
          客户声音
        </h2>
      </div>
      
      <div class="grid md:grid-cols-3 gap-10 mb-20">
        <div v-for="item in testimonials" :key="item.name" class="bg-white rounded-2xl p-10 border border-transparent hover:border-hairline/50 transition-all">
          <div class="flex gap-1.5 mb-8">
            <svg v-for="n in 5" :key="n" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-lg text-ink/60 leading-relaxed mb-8">"{{ item.content }}"</p>
          <div class="flex items-center gap-5 pt-8 border-t border-hairline/30">
            <div class="w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold" :class="item.avatarClass">
              {{ item.name.charAt(0) }}
            </div>
            <div>
              <div class="font-medium text-ink text-lg">{{ item.name }}</div>
              <div class="text-base text-ink/40">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex flex-wrap justify-center gap-10 lg:gap-20">
        <div v-for="partner in partners" :key="partner" 
             class="text-xl font-semibold text-ink/20 hover:text-ink/40 transition-colors cursor-pointer">
          {{ partner }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          name: '张总',
          title: '某科技有限公司 CEO',
          content: '团队非常专业，从需求沟通到项目交付都非常顺畅。最终产品远超预期，帮助我们实现了业务增长。',
          avatarClass: 'bg-block-lavender text-primary'
        },
        {
          name: '李总监',
          title: '连锁零售集团 IT总监',
          content: '电商平台上线后，线上营收增长了200%。系统稳定可靠，售后服务也非常及时。',
          avatarClass: 'bg-block-mint text-emerald-600'
        },
        {
          name: '王经理',
          title: '三甲医院信息科',
          content: '定制的信息管理系统大大提高了医院的工作效率，患者的就医体验也得到了明显改善。',
          avatarClass: 'bg-block-cream text-orange-500'
        }
      ],
      partners: ['阿里巴巴', '腾讯云', '华为', '字节跳动', '京东', '美团']
    }
  }
}
</script>