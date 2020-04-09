<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 id="whatwedo" class="w-full my-2 text-5xl font-medium leading-tight text-center text-gray-800">What we do?</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <about-pilab-right
        headline="Data-Driven Decision Making"
        content="Discover, analyze, and track real-world business opportunities using Big Data Analytics. 
        Business information, sentiment analysis, or just datasets in just a click, and fully-customizeable."
      >
        <img src="~assets/img/data-driven.svg" alt slot="svg" />
      </about-pilab-right>
      <about-pilab-left
        headline="IoT Platform"
        content="Build the system controlled by event-driven smart-applications to make your business or even your daily activity a lot of easier, and more connected with the dedicated cloud-system."
      >
        <img src="~assets/img/iot.svg" alt slot="svg" />
      </about-pilab-left>
      <about-pilab-right
        headline="Web Development"
        content="Development for businesses who seek to provide a eye-catching, flexible, amazing user-experience across platform. Including progressive web apps (PWAs), with the collaboration of front-end, back-end and sophisticated arthitecture ability together to maximize delivery speed."
      >
        <img src="~assets/img/web.svg" alt slot="svg" />
      </about-pilab-right>
      <about-pilab-left
        headline="Mobile Development"
        content="Wide-range of mobile development from native to cross-platform mobile applications, can help you select the best choice for your ideas and imagination."
      >
        <img src="~assets/img/mobile.svg" alt slot="svg" />
      </about-pilab-left>
      <about-pilab-right
        headline="Or anything you can imagine"
        content="Just tell us about your ideas, all you need is right where you need it. So, make it real right now!"
      >
        <img src="~assets/img/any.svg" alt slot="svg" />
      </about-pilab-right>
    </div>
  </section>
</template>

<script>
import about_pilab_right from '@/components/about_pilab_right'
import about_pilab_left from '@/components/about_pilab_left'

export default {
  name: 'About',
  components: {
    'about-pilab-right': about_pilab_right,
    'about-pilab-left': about_pilab_left
  }
}
</script>
