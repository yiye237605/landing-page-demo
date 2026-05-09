<template>
  <section id="about" class="py-32 bg-surface-soft">
    <div class="max-w-7xl mx-auto px-8 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <span class="text-sm font-medium tracking-widest text-ink/40 uppercase mb-4 block">About us</span>
          <h2 class="text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-8">
            八年深耕<br/>专注企业服务
          </h2>
          <p class="text-xl text-ink/50 leading-relaxed mb-10">
            自2016年成立以来，我们已为超过200家企业提供了专业的数字化服务。团队核心成员来自知名互联网企业，拥有丰富的技术沉淀和行业经验。
          </p>
          
          <div class="flex items-center gap-10 pt-10 border-t border-hairline/30">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span class="text-3xl font-bold text-primary">8+</span>
              </div>
              <div class="text-base text-ink/50">年行业经验</div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-block-lilac/30 flex items-center justify-center">
                <svg class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="text-base text-ink/50">50+ 技术专家</div>
            </div>
          </div>
        </div>
        
        <div class="space-y-6">
          <div v-for="item in highlights" :key="item.title" 
               class="group p-8 bg-white rounded-2xl border border-transparent hover:border-hairline/50 transition-all cursor-pointer">
            <div class="flex gap-6">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" :class="item.iconBg">
                <svg class="w-6 h-6" :class="item.iconColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="item.iconPath" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-ink mb-2">{{ item.title }}</h3>
                <p class="text-base text-ink/50 leading-relaxed">{{ item.desc }}</p>
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
  name: 'About',
  data() {
    return {
      highlights: [
        { 
          title: '创新技术方案', 
          desc: '采用最新技术框架，为企业量身定制最适合的数字化解决方案。',
          iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
          iconBg: 'bg-block-lavender',
          iconColor: 'text-primary'
        },
        { 
          title: '专业服务团队', 
          desc: '核心成员均来自知名互联网企业，拥有丰富的技术沉淀和行业经验。',
          iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
          iconBg: 'bg-block-mint/60',
          iconColor: 'text-emerald-600'
        },
        { 
          title: '可靠质量保障', 
          desc: '严格的质量管理体系，确保每一个项目都能高质量交付。',
          iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
          iconBg: 'bg-block-coral/60',
          iconColor: 'text-orange-500'
        },
        { 
          title: '持续迭代优化', 
          desc: '提供长期的技术支持和产品迭代服务，助力企业持续发展。',
          iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
          iconBg: 'bg-block-sky/60',
          iconColor: 'text-blue-500'
        }
      ]
    }
  }
}
</script>