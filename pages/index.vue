<template>
  <div>
    <hero />
    <about-pilab />
    <!-- <features /> -->
    <intro-porto />
    <teasers/>
    <!-- <videos/> -->
    <!-- <prices /> -->
    <call-to-action />
    <client-only>
        <cookie />
      </client-only>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'

import about_pilab from '@/components/about_pilab'
import about_pilab_right from '@/components/about_pilab_right'
import about_pilab_left from '@/components/about_pilab_left'
import intro_porto from '@/components/intro_porto'
import videos from '@/components/video'

import cookie from "@/components/cookie.vue";

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    teasers: Teasers,
    prices: Prices,
    'call-to-action': CallToAction,
    'about-pilab': about_pilab,
    about_pilab_right: about_pilab_right,
    about_pilab_left: about_pilab_left,
    'intro-porto': intro_porto,
    videos:videos,
    cookie
  }
}
</script>
