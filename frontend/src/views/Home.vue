<template>
  <div class="pt-16">
    <Hero />
    <About />
    <Services />
    <Cases />
    <Testimonials />
    <ContactForm />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Cases from '../components/Cases.vue'
import Testimonials from '../components/Testimonials.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'Home',
  components: { Hero, About, Services, Cases, Testimonials, ContactForm }
}
</script>