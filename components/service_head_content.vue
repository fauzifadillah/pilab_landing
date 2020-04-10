<template>
  <div class="pt-24">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="w-full md:w-3/5 py-6 text-center">
        <img class="w-full md:w-4/5 z-50" :src="require(`@/assets/img/${foto}`)">
      </div>
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <!-- <p class="uppercase tracking-loose w-full">What's your ideas?</p> -->
        <h1 class=" mb-8 text-6xl font-thin leading-tight italic ">{{ judul }}</h1>
        <!-- <p
          class="leading-normal text-2xl mb-8 italic"
        >Services</p> -->

        <!-- <button
          href="#whatwedo"
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        ><nuxt-link to=#whatwedo>What we do</nuxt-link></button> -->
      </div>
      <!--Right Col-->
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-head-content',
  props: {
    judul: {
      type: String,
      required: false
    },
    foto: {
      type: String,
      required: false
    }
  }
}
</script>
