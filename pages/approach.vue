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
      <client-only>
      <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img class="my-auto" src="~/assets/img/carousel/nuxt.svg" alt /></swiper-slide>
    <swiper-slide><img class="my-auto" src="~/assets/img/carousel/vue.svg" alt /></swiper-slide>
    <swiper-slide><img class="my-auto" src="~/assets/img/carousel/laravel.svg" alt /></swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
      </client-only>
    <!-- <VueSlickCarousel v-bind="settings">
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
    </VueSlickCarousel> -->
  </div>

  </section>
<div class="parallax_quote">
    <client-only>
      <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img class="my-auto" src="~/assets/img/carousel/nuxt.svg" alt /></swiper-slide>
    <swiper-slide><img class="my-auto" src="~/assets/img/carousel/vue.svg" alt /></swiper-slide>
    <swiper-slide><img class="my-auto" src="~/assets/img/carousel/laravel.svg" alt /></swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
      </client-only>
</div>

<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <!-- <h6 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">APPROACH</h6> -->
      <h3 class="w-full my-2 text-5xl font-medium leading-tight text-center text-gray-800"> Our Partners
</h3>
    <h5 class="w-full my-2 text-2xl font-light leading-tight text-center text-gray-800">

    </h5>
    </div>
    <div>
    <!-- <VueSlickCarousel v-bind="settings">
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
</VueSlickCarousel> -->
  </div>
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
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
//  // optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Vue from 'vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'


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
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 1,
          slidesPerGroup: 5,
           speed: 10000,
          loop: true,
        //   autoplay: {
        //     delay: 0,
        //     disableOnInteraction: false
        //   },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
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
    Swiper,
    SwiperSlide
  }
}
</script>
