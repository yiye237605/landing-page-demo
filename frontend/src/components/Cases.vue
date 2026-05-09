<template>
  <section id="cases" class="py-24 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-sm font-medium text-blue-500 tracking-wide uppercase">Success Cases</span>
        <h2 class="text-3xl md:text-4xl font-semibold text-primary mt-3 mb-4">成功案例</h2>
        <p class="text-secondary max-w-2xl mx-auto">我们已帮助各行业客户实现数字化转型，取得显著业务增长</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="caseItem in cases" :key="caseItem.title" 
             class="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
          <div class="h-48 bg-gradient-to-br flex items-center justify-center"
               :class="caseItem.gradient">
            <span class="text-6xl opacity-80">{{ caseItem.emoji }}</span>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span v-for="tag in caseItem.tags" :key="tag" 
                    class="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded">
                {{ tag }}
              </span>
            </div>
            <h3 class="text-lg font-semibold text-primary mb-2">{{ caseItem.title }}</h3>
            <p class="text-secondary text-sm leading-relaxed mb-4">{{ caseItem.desc }}</p>
            <div class="flex items-center justify-between">
              <div class="text-sm text-secondary">{{ caseItem.industry }}</div>
              <div class="text-sm font-medium text-blue-500">{{ caseItem.result }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cases',
  data() {
    return {
      cases: [
        {
          emoji: '🏭',
          title: '制造业ERP系统升级',
          desc: '为大型制造企业打造智能化ERP系统，打通生产、销售、库存全链路数据流。',
          tags: ['系统开发', '数据集成'],
          industry: '制造业',
          result: '+40% 效率提升',
          gradient: 'from-blue-100 to-cyan-100'
        },
        {
          emoji: '🛒',
          title: '连锁零售电商平台',
          desc: '构建全渠道零售电商系统，支持线上线下融合，会员体系统一管理。',
          tags: ['电商', '小程序'],
          industry: '零售业',
          result: '+200% 线上营收',
          gradient: 'from-purple-100 to-pink-100'
        },
        {
          emoji: '🏥',
          title: '医疗机构信息管理平台',
          desc: '为三甲医院定制患者管理、预约挂号、电子病历一体化解决方案。',
          tags: ['定制开发', '系统集成'],
          industry: '医疗健康',
          result: '+60% 就诊效率',
          gradient: 'from-green-100 to-teal-100'
        }
      ]
    }
  }
}
</script>