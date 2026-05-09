<template>
  <section id="contact" class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-8 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-20">
        <div>
          <span class="text-sm font-medium tracking-widest text-ink/40 uppercase mb-4 block">Contact</span>
          <h2 class="text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-8">
            开始你的<br/>数字化之旅
          </h2>
          <p class="text-xl text-ink/50 leading-relaxed mb-14">
            无论是项目咨询还是技术交流，我们都期待与您建立联系。
          </p>
          
          <div class="space-y-8">
            <div v-for="contact in contacts" :key="contact.label" class="flex items-center gap-5">
              <div class="w-14 h-14 rounded-xl bg-surface-soft flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="contact.iconPath" />
                </svg>
              </div>
              <div>
                <div class="text-base text-ink/40 mb-1">{{ contact.label }}</div>
                <div class="text-xl font-medium text-ink">{{ contact.value }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-surface-soft rounded-3xl p-12 lg:p-14">
          <h3 class="text-3xl font-bold text-ink mb-10">发送咨询</h3>
          <form @submit.prevent="submitForm" class="space-y-7">
            <div>
              <label class="block text-base font-medium text-ink/60 mb-3">您的姓名</label>
              <input v-model="form.name" type="text" required
                     class="w-full px-6 py-4 bg-white rounded-xl border border-hairline/50 text-lg text-ink placeholder-ink/30 focus:outline-none focus:border-primary/50 transition-colors"
                     placeholder="张先生">
            </div>
            <div>
              <label class="block text-base font-medium text-ink/60 mb-3">联系电话</label>
              <input v-model="form.phone" type="tel" required
                     class="w-full px-6 py-4 bg-white rounded-xl border border-hairline/50 text-lg text-ink placeholder-ink/30 focus:outline-none focus:border-primary/50 transition-colors"
                     placeholder="138 0000 0000">
            </div>
            <div>
              <label class="block text-base font-medium text-ink/60 mb-3">公司名称 <span class="text-ink/30">(选填)</span></label>
              <input v-model="form.company" type="text"
                     class="w-full px-6 py-4 bg-white rounded-xl border border-hairline/50 text-lg text-ink placeholder-ink/30 focus:outline-none focus:border-primary/50 transition-colors"
                     placeholder="某某科技有限公司">
            </div>
            <div>
              <label class="block text-base font-medium text-ink/60 mb-3">咨询内容</label>
              <textarea v-model="form.message" rows="4" required
                        class="w-full px-6 py-4 bg-white rounded-xl border border-hairline/50 text-lg text-ink placeholder-ink/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                        placeholder="请描述您的需求..."></textarea>
            </div>
            <button type="submit" :disabled="loading"
                    class="w-full py-5 bg-ink text-white text-lg font-medium rounded-full hover:bg-ink/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              {{ loading ? '提交中...' : '提交咨询' }}
            </button>
            <p v-if="message" class="text-center py-4 px-5 rounded-xl text-base" :class="message.type === 'success' ? 'bg-block-mint/30 text-emerald-600' : 'bg-block-pink/30 text-red-500'">
              {{ message.text }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactForm',
  data() {
    return {
      form: { name: '', phone: '', company: '', message: '' },
      loading: false,
      message: '',
      contacts: [
        { label: '联系电话', value: '400-888-8888', iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
        { label: '电子邮箱', value: 'hello@techflow.com', iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { label: '公司地址', value: '北京市朝阳区科技园区88号', iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
      ]
    }
  },
  methods: {
    async submitForm() {
      this.loading = true
      this.message = ''
      try {
        await axios.post('/api/contact', {
          name: this.form.name,
          phone: this.form.phone,
          message: `${this.form.company ? '公司: ' + this.form.company + '\n' : ''}${this.form.message}`
        })
        this.message = { type: 'success', text: '提交成功！我们会尽快与您联系。' }
        this.form = { name: '', phone: '', company: '', message: '' }
      } catch (error) {
        this.message = { type: 'error', text: '提交失败，请稍后重试或电话联系我们。' }
      }
      this.loading = false
    }
  }
}
</script>