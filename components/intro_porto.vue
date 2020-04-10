<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">PASSION-DRIVEN</h6>
      <h3 class="w-full my-2 text-5xl font-medium leading-tight text-center text-gray-800">Building Bigger Ideas Together</h3>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient_orange w-64 opacity-55 my-0 py-0 rounded-t"></div>
      </div>
    <h5 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">
        Working on your project is fully invested in its success. We care just as much about how your ideas, with agile development method we build the software that matters. We work, learn, colaborate, and grow together.
    </h5>
<nuxt-link to="/project" class="uppercase mx-auto my-5 text-lg text-center border-gray-800 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  learn more
</nuxt-link>
    </div>
  </section>
</template>

<script>
import TeaserColumn from '@/components/TeaserColumn'

export default {
  name: 'Teasers',
  components: {
    'teaser-column': TeaserColumn
  }
}
</script>
