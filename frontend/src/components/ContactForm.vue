<template>
  <section id="contact" class="py-24 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16">
        <div>
          <span class="text-sm font-medium text-blue-500 tracking-wide uppercase">Contact Us</span>
          <h2 class="text-3xl md:text-4xl font-semibold text-primary mt-3 mb-4">联系我们</h2>
          <p class="text-secondary mb-8">无论是项目咨询还是技术交流，我们都期待与您建立联系</p>
          
          <div class="space-y-6">
            <div v-for="contact in contacts" :key="contact.label" class="flex items-start gap-4">
              <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {{ contact.icon }}
              </div>
              <div>
                <div class="font-medium text-primary">{{ contact.label }}</div>
                <div class="text-secondary">{{ contact.value }}</div>
              </div>
            </div>
          </div>
          
          <div class="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
            <h4 class="font-semibold text-primary mb-2">工作时间</h4>
            <p class="text-secondary text-sm">周一至周五：9:00 - 18:00</p>
            <p class="text-secondary text-sm">周六周日：预约制</p>
          </div>
        </div>
        
        <div class="bg-gray-50 rounded-2xl p-8">
          <h3 class="text-xl font-semibold text-primary mb-6">发送咨询</h3>
          <form @submit.prevent="submitForm" class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-primary mb-2">您的姓名 *</label>
              <input v-model="form.name" type="text" required
                     class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                     placeholder="请输入您的姓名">
            </div>
            <div>
              <label class="block text-sm font-medium text-primary mb-2">联系电话 *</label>
              <input v-model="form.phone" type="tel" required
                     class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                     placeholder="请输入您的电话号码">
            </div>
            <div>
              <label class="block text-sm font-medium text-primary mb-2">公司名称</label>
              <input v-model="form.company" type="text"
                     class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                     placeholder="选填">
            </div>
            <div>
              <label class="block text-sm font-medium text-primary mb-2">咨询内容 *</label>
              <textarea v-model="form.message" rows="4" required
                        class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="请详细描述您的需求..."></textarea>
            </div>
            <button type="submit" :disabled="loading"
                    class="w-full py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-gray-800 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              <span v-if="loading" class="animate-spin">⏳</span>
              {{ loading ? '提交中...' : '提交咨询' }}
            </button>
            <p v-if="message" class="text-center py-2 px-4 rounded-lg"
               :class="message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'">
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
        { icon: '📞', label: '联系电话', value: '400-888-8888' },
        { icon: '✉️', label: '电子邮箱', value: 'contact@company.com' },
        { icon: '📍', label: '公司地址', value: '北京市朝阳区科技园区88号' }
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
        this.message = { type: 'success', text: '✓ 提交成功！我们会尽快与您联系。' }
        this.form = { name: '', phone: '', company: '', message: '' }
      } catch (error) {
        this.message = { type: 'error', text: '提交失败，请稍后重试或电话联系我们。' }
      }
      this.loading = false
    }
  }
}
</script>