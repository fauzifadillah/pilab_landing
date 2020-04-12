<template>
  <div>
<div class="talk">
    <service-head-content
        judul="Say hello!"
        foto="hello.svg"
    />
</div>
<section class="bg-white border-b py-8 ">
    
<form class="w-full max-w-lg mx-auto" name="contact" method="POST" data-netlify="true">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold  mb-2" for="grid-first-name">
        First Name
      </label>
      <input name="first_name" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold  mb-2" for="grid-last-name">
        Last Name
      </label>
      <input name="last_name" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold  mb-2" for="grid-email">
        E-Mail
      </label>
      <input name="email" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="code@padjadjaranlab.com">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold  mb-2" for="grid-phone-numer">
        Phone Number
      </label>
      <input name="phone" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone-number" type="text" placeholder="+62 812 1111 2222">
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold  mb-2" for="grid-email">
        Service Needed
      </label>
    <div>
      <label class="inline-flex items-center">
        <input name="data" type="checkbox" class="form-checkbox">
        <span class="my-1 text-lg font-small text-gray-700 ml-2">Data Service</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input name="web" type="checkbox" class="form-checkbox">
        <span class="my-1 text-lg font-small text-gray-700 ml-2">Web Development</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input name="mobile" type="checkbox" class="form-checkbox">
        <span class="my-1 text-lg font-small text-gray-700 ml-2">Mobile Development</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input name="iot" type="checkbox" class="form-checkbox">
        <span class="my-1 text-lg font-small text-gray-700 ml-2">Internet of Things</span>
      </label>
    </div>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold  mb-2" for="grid-phone-numer">
        //
      </label>
    <div>
      <label class="inline-flex items-center">
        <input name="cloud" type="checkbox" class="form-checkbox">
        <span class="my-1 text-lg font-small text-gray-700 ml-2">Cloud Service</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input name="ecomm" type="checkbox" class="form-checkbox">
        <span class="my-1 text-lg font-small text-gray-700 ml-2">E-Commerce Development</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input name="ar" type="checkbox" class="form-checkbox">
        <span class="my-1 text-lg font-small text-gray-700 ml-2">AR Development</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input name="other" type="checkbox" class="form-checkbox">
        <span class="my-1 text-lg font-small text-gray-700 ml-2">Other</span>
      </label>
    </div>
    </div>
  </div>

    <label class="block">
    <span class="text-gray-700 text-lg font-bold ">MESSAGE</span>
    <textarea name="message" class="bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white form-textarea mt-1 block w-full" rows="3" placeholder="Tell us about your awesome ideas!"></textarea>
    </label>

    <button type="submit" class="uppercase ml-auto my-1 text-lg text-right border-gray-800 bg-orange-500 hover:bg-blue-500 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    get started
    </button>
</form>
  </section>

<div class="parallax">

</div>

  </div>
</template>
<style scoped>
img {
    width: 120px;
  height: 120px;
}
.talk {
  /* The image used */  
    background: linear-gradient(90deg, rgb(0, 162, 255) #df960d 100%);


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
        title: 'LET\'S TALK | Padjadjaran Lab',
        meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: 'Talk' }
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
