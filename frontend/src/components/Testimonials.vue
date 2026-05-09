<template>
  <section class="py-24 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-sm font-medium text-blue-500 tracking-wide uppercase">Testimonials</span>
        <h2 class="text-3xl md:text-4xl font-semibold text-primary mt-3 mb-4">客户评价</h2>
        <p class="text-secondary max-w-2xl mx-auto">听听我们的客户怎么说</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="item in testimonials" :key="item.name" 
             class="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center gap-1 mb-4">
            <span v-for="n in 5" :key="n" class="text-yellow-400">★</span>
          </div>
          <p class="text-secondary leading-relaxed mb-6">"{{ item.content }}"</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              {{ item.name.charAt(0) }}
            </div>
            <div>
              <div class="font-semibold text-primary">{{ item.name }}</div>
              <div class="text-sm text-secondary">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="partner in partners" :key="partner" 
             class="h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-semibold text-lg hover:bg-gray-200 transition-colors">
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
          content: '团队非常专业，从需求沟通到项目交付都非常顺畅。最终产品远超预期，帮助我们实现了业务增长。'
        },
        {
          name: '李总监',
          title: '连锁零售集团 IT总监',
          content: '电商平台上线后，线上营收增长了200%。系统稳定可靠，售后服务也非常及时。'
        },
        {
          name: '王经理',
          title: '三甲医院信息科',
          content: '定制的信息管理系统大大提高了医院的工作效率，患者的就医体验也得到了明显改善。'
        }
      ],
      partners: ['阿里巴巴', '腾讯云', '华为', '字节跳动']
    }
  }
}
</script>