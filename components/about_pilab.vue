<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 class="w-full my-2 text-5xl font-medium leading-tight text-center text-gray-800">Padjadjaran Lab</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <about-pilab-right
        headline="Lorem ipsum dolor sit amet"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
      >
        <img src="~assets/img/travel-booking.svg" alt slot="svg" />
      </about-pilab-right>
      <about-pilab-left
        headline="Lorem sss dolor sit amet"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
      >
        <img src="~assets/img/connected-world.svg" alt slot="svg" />
      </about-pilab-left>
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
