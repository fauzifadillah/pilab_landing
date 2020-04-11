<template>
  <div>
<div class="parallax">
    <videos
    vid="type.mp4"
    />
</div>
<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">APPROACH</h6>
      <h3 class="w-full my-2 text-5xl font-medium leading-tight text-center text-gray-800">We're The One-Stop Solution
</h3>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient_orange w-64 opacity-55 my-0 py-0 rounded-t"></div>
      </div>
    <h5 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">
    Software needs vary significantly. Cover the full spectrum with us, we're using modern technologies to cover it up. Ballerina-level of flexibility, these are some technologies we used
    </h5>
<nuxt-link to="/project" class="uppercase mx-auto my-5 text-lg text-center border-gray-800 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  learn more
</nuxt-link>
    </div>

  <div>
    <VueSlickCarousel v-bind="settings">
      <div>
          <img class="my-auto" src="~/assets/img/carousel/nuxt.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/vue.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/laravel.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/react.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/mongodb.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/gatsby.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/cordova.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/node.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/spark.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/hadoop.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/kafka.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/tableau.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/docker.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/tensor.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/algolia.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/postman.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/graphql.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/swift.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/golang.svg" alt />
      </div>
      <div>
          <img class="my-auto" src="~/assets/img/carousel/elastic.svg" alt />
      </div>
    </VueSlickCarousel>
  </div>

  </section>
<div class="parallax_quote">
    
</div>

<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <!-- <h6 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">APPROACH</h6> -->
      <h3 class="w-full my-2 text-5xl font-medium leading-tight text-center text-gray-800"> Our Partners
</h3>
    <h5 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">

    </h5>
    </div>
    <!-- <div>
    <VueSlickCarousel v-bind="settings">
      <div>
        <a href="http://unpad.ac.id">
          <img class="my-auto" src="~/assets/img/partners/unpad.png" alt />
        </a>
      </div>
      <div>
        <a href="http://kstpadjadjaran.or.id">
          <img class="my-auto" src="~/assets/img/partners/kst.jpeg" alt />
        </a>
      </div>
      <div>
        <a href="http://print-g.ac.id">
          <img class="my-auto" src="~/assets/img/partners/printg.png" alt />
        </a>
      </div>
      <div>
        <a href="http://sagalagroup.com">
          <img class="my-auto" src="~/assets/img/partners/sagala.png" alt />
        </a>
      </div>
      <div>
        <a href="http://instagram.com/buka.peta">
          <img class="my-auto" src="~/assets/img/partners/bukapeta.jpeg" alt />
        </a>
      </div>
      <div>
        <a href="https://aws.amazon.com/">
          <img class="my-auto" src="~/assets/img/partners/aws.svg" alt />
        </a>
      </div>
      <div>
        <a href="https://netlify.com/">
          <img class="my-auto" src="~/assets/img/partners/netlify.svg" alt />
        </a>
      </div>
      <div>
          <a href="https://niagahoster.com/">
          <img class="my-auto" src="~/assets/img/partners/niagahoster.png" alt />
          </a>
      </div>      
</VueSlickCarousel>
  </div> -->
</section>    


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

.parallax_quote {
  /* The image used */  
  background-image: url('~assets/img/quote.png');

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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
 // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

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
    data () {
        return {
           settings: {
            "arrows": false,
            "dots": false,
            "infinite": true,
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "autoplay": true,
            "speed": 3000,
            "autoplaySpeed": 0,
            "cssEase": "linear",
            "responsive": [
                {
                "breakpoint": 1024,
                "settings": {
                    "slidesToShow": 3,
                    "slidesToScroll": 3,
                    "infinite": true,
                    "dots": true
                }
                },
                {
                "breakpoint": 600,
                "settings": {
                    "slidesToShow": 2,
                    "slidesToScroll": 2,
                    "initialSlide": 2
                }
                },
                {
                "breakpoint": 480,
                "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                }
                }
            ]
            }      
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
    VueSlickCarousel
  }
}
</script>
