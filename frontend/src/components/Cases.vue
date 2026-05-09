<template>
  <section id="cases" class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-8 lg:px-12">
      <div class="max-w-2xl mb-20">
        <span class="text-sm font-medium tracking-widest text-ink/40 uppercase mb-4 block">Success cases</span>
        <h2 class="text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-6">
          真实案例<br/>见证实力
        </h2>
        <p class="text-xl text-ink/50 leading-relaxed">
          我们已帮助各行业客户实现数字化转型，取得显著业务增长
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-10">
        <div v-for="caseItem in cases" :key="caseItem.title" 
             class="group relative cursor-pointer">
          <div class="relative h-64 rounded-2xl overflow-hidden mb-8">
            <div class="absolute inset-0" :class="caseItem.gradientClass"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-24 h-24 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" :d="caseItem.iconPath" />
              </svg>
            </div>
            <div class="absolute bottom-5 left-5 flex gap-2">
              <span v-for="tag in caseItem.tags" :key="tag" class="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white/90 font-medium">{{ tag }}</span>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-ink mb-3 group-hover:text-primary transition-colors">
            {{ caseItem.title }}
          </h3>
          <p class="text-lg text-ink/50 leading-relaxed mb-5">{{ caseItem.desc }}</p>
          <div class="flex items-center justify-between pt-5 border-t border-hairline/30">
            <span class="text-base text-ink/40">{{ caseItem.industry }}</span>
            <span class="text-lg font-semibold text-emerald-600">{{ caseItem.result }}</span>
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
          title: '制造业ERP系统升级',
          desc: '为大型制造企业打造智能化ERP系统，打通生产、销售、库存全链路数据流。',
          tags: ['系统开发', '数据集成'],
          industry: '制造业',
          result: '+40% 效率提升',
          gradientClass: 'bg-gradient-to-br from-primary to-purple-600',
          iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        },
        {
          title: '连锁零售电商平台',
          desc: '构建全渠道零售电商系统，支持线上线下融合，会员体系统一管理。',
          tags: ['电商', '小程序'],
          industry: '零售业',
          result: '+200% 线上营收',
          gradientClass: 'bg-gradient-to-br from-emerald-500 to-teal-600',
          iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        },
        {
          title: '医疗机构信息管理平台',
          desc: '为三甲医院定制患者管理、预约挂号、电子病历一体化解决方案。',
          tags: ['定制开发', '系统集成'],
          industry: '医疗健康',
          result: '+60% 就诊效率',
          gradientClass: 'bg-gradient-to-br from-orange-500 to-rose-600',
          iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        }
      ]
    }
  }
}
</script>