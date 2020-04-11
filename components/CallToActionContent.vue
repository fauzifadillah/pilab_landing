<template>
  <section class="container mx-auto text-center py-6 mb-12">
    <h1 class="w-full my-2 text-6xl font-thin leading-tight text-center text-white">Let's work together</h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
    </div>

    <h3 class="my-8 text-3xl leading-tight">Get in touch to let us know what you’re looking for.</h3>

    <nuxt-link
      to="/talk" class="my-auto mx-auto lg:mx-0 hover:bg-orange-600 hover:text-white bg-white text-gray-800 font-small rounded-full py-4 px-8 shadow-lg"
    >CONTACT US</nuxt-link>
    
  </section>
</template>

<script>
export default {
  name: 'CallToActionContent'
}
</script>
