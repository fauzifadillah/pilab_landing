<template>
  <div>
<div class="parallax">
    <service-head-content
        judul="Big Data Analytics"
        foto="big_data_2.svg"
    />
</div>

<service-card
    judul="tes"
    capt="tes"
    desc="test"    
/>
<div class="parallax2">

<services-head-content-mirror
    judul="IoT Platform"
    foto="drone.svg"
    />
</div>

<service-card
    judul="tes"
    capt="tes"
    desc="test"    
/>

<div class="parallax">
    <service-head-content
        judul="Progressive Web Apps"
        foto="pwa.svg"
    />
</div>

<service-card
    judul="tes"
    capt="tes"
    desc="test"    
/>
<div class="parallax2">

<services-head-content-mirror
    judul="Native Apps"
    foto="drone.svg"
    />
</div>

<service-card
    judul="tes"
    capt="tes"
    desc="test"    
/>
<div class="parallax">
    <videos/>
</div>
    <!-- <hero /> -->
    <!-- <about-pilab /> -->
    <!-- <features /> -->
    <!-- <intro-porto /> -->
    <!-- <teasers/> -->
    <!-- <div id="backvid"> -->
  </div>
</template>
<style scoped>
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



export default {
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
  }
}
</script>
