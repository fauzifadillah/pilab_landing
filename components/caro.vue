<template>
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
</template>
<script>
import Vue from 'vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'
export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 1,
          slidesPerGroup: 5,
           speed: 10000,
          loop: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: false
          },
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
    }
}
</script>