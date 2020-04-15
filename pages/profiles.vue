<template>
  <div>
<div class="parallax_pilab">
    
</div>
<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">//</h6>
      <h3 class="w-full my-2 text-6xl font-light leading-tight text-center text-gray-800">We thrive on integrity.
    </h3>
    <h5 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">
        Ready to turn your idea to reality, solve the unsolvable. With passion, we think, we build.
    </h5>
    </div>


  </section>

<div class="parallax">
    <videos
    vid="pilab_vid.mp4"
    />
</div>

<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-4xl font-small leading-tight text-center text-gray-800">WHO WE ARE</h6>
        <div class="w-full mb-4">
            <div class="h-1 mx-auto orange w-64 opacity-55 my-0 py-0 rounded-t"></div>
        </div>
    <h5 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">
    Padjadjaran Lab is an technology company based on Indonesia since 2019, we're on a mission to simplify software engineering so businesses can spend more time building something that changes the world.
    </h5>
    </div>
</section>    

<div class="kst"></div>

<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-4xl font-small leading-tight text-center text-gray-800">WHERE WE ARE</h6>
        <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-55 my-0 py-0 rounded-t"></div>
        </div>
    <h5 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">
        Located at KST Padjadjaran, Jalan Raya Bandung-Sumedang KM. 21 West Java, Indonesia 45363
    </h5>
    <h5 class="w-full my-2 text-2xl font-medium leading-tight text-center text-gray-800">
        Don't hesitate to visit us, let's start something amazing together.
    </h5>
    </div>
</section>

<div class="kst"></div>
    <!-- <hero /> -->
    <!-- <about-pilab /> -->
    <!-- <features /> -->
    <!-- <intro-porto /> -->
    <!-- <teasers/> -->
    <!-- <div id="backvid"> -->
  </div>
</template>
<style scoped>
img {
    width: 120px;
  height: 120px;
}
.parallax {
  /* The image used */  
  background-image: url('~assets/img/back2.png');

  /* Full height */
  min-height: 500px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax2 {
  /* The image used */  
  background-image: url('~assets/img/back.png');

  /* Full height */
  min-height: 500px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax_pilab {
  /* The image used */  
  background-image: url('~assets/img/pilab_orange.png');

  /* Full height */
  min-height: 500px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.kst {
  /* The image used */  
  background-image: url('~assets/img/kst.jpg');

  /* Full height */
  min-height: 500px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
<script>

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'

import about_pilab from '@/components/about_pilab'
import about_pilab_right from '@/components/about_pilab_right'
import about_pilab_left from '@/components/about_pilab_left'
import servicecard from '@/components/service_card'
import service_head_content from '@/components/service_head_content'
import services_head_content_mirror from '@/components/services_head_content_mirror'
import videos from '@/components/video'
import TeaserColumn from '@/components/TeaserColumn'


export default {
    head () {
        return {
        title: 'Profiles | Padjadjaran Lab',
        meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: 'Profiles' }
        ]
        }
    },
  name: 'servicespage',
  components: {
    hero: Hero,
    features: Features,
    teasers: Teasers,
    prices: Prices,
    'call-to-action': CallToAction,
    'about-pilab': about_pilab,
    about_pilab_right: about_pilab_right,
    about_pilab_left: about_pilab_left,
    'service-card': servicecard,
    'service-head-content':service_head_content,
    'services-head-content-mirror':services_head_content_mirror,
    videos: videos,
    'teaser-column': TeaserColumn,
  }
}
</script>
