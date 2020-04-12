<template>
  <div>
<div class="parallax">
    <service-head-content
        judul="Big Data Analytics"
        foto="big_data_2.svg"
    />
</div>

<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-2xl font-medium leading-tight text-center text-gray-800">Case Study</h6>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient_1 w-40 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Sentiment Analysis</template>
        <template
          v-slot:content
        >
        Analyze news and social media's data to reveal information about what matters to you in real-time
        </template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Market Review</template>
        <template
          v-slot:content
        >
        Watch the market, find opportunites, and/or evaluate competitors
        </template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline><span>Recommendations</span></template>
        <template
          v-slot:content
        >
        IaaS based on versatile datasets to recommend the upcoming
        </template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline><span>AI/ML Datasets</span></template>
        <template
          v-slot:content
        >
        High-quality datasets used to train various AI/ML models
        </template>
      </teaser-column>      
    </div>
</section>
<div class="parallax2">

<services-head-content-mirror
    judul="IoT Platform"
    foto="drone.svg"
    />
</div>

<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-2xl font-medium leading-tight text-center text-gray-800">Case Study</h6>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient_1 w-40 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Modular Things</template>
        <template
          v-slot:content
        >
        Plug-n-Play scalable REST-API connected devices for precision deployment
        </template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Self-service</template>
        <template
          v-slot:content
        >
        IoT-driven experience on point-of-sale events, serving up what customers want
        </template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline><span>Smart-home</span></template>
        <template
          v-slot:content
        >
        Ability to monitor appliances with better user experience, proactive alerts, and even safety notifications
        </template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline><span>Automation</span></template>
        <template
          v-slot:content
        >
        The essentials of IIoT, typically connectivity, secure broker, CRON-jobs, monitoring and control system 
        </template>
      </teaser-column>      
    </div>
</section>

<div class="parallax">
    <service-head-content
        judul="Progressive Web Apps"
        foto="pwa.svg"
    />
</div>

<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-2xl font-medium leading-tight text-center text-gray-800">Case Study</h6>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient_1 w-40 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      
      <teaser-column :rows="3" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Zero install</template>
        <template
          v-slot:content
        >
        Browser-based regardless of operating system, fast deployment
        </template>
      </teaser-column>
      <teaser-column :rows="3" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Improved Performance</template>
        <template
          v-slot:content
        >
        Websockets, GraphQL API, caching, headless-CMS, JAMStack, less-cost
        </template>
      </teaser-column>
      <teaser-column :rows="3" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline><span>Single-Page Apps</span></template>
        <template
          v-slot:content
        >
        Engaging user-experience with no page reloads
        </template>
      </teaser-column>
      
    </div>
</section>

<div class="parallax2">
<services-head-content-mirror
    judul="Native Apps"
    foto="native.svg"
    />
</div>
<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-2xl font-medium leading-tight text-center text-gray-800">Case Study</h6>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient_1 w-40 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <teaser-column :rows="3" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Complicated Functionality </template>
        <template
          v-slot:content
        >
        Accelerometer, Camera, NFC, access to geolocation, phone-calls, push notifications
        </template>
      </teaser-column>
      <teaser-column :rows="3" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Focused on security</template>
        <template
          v-slot:content
        >
        Everthing under control, better security & reliability
        </template>
      </teaser-column>
      <teaser-column :rows="3" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline><span>Geo-fencing</span></template>
        <template
          v-slot:content
        >
        Create virtual-perimeter for real-world geographic area based on pointed location
        </template>
      </teaser-column>
    </div>
</section>

<div class="parallax">
    <service-head-content
        judul="E-Commerce Development"
        foto="cart.svg"
    />
</div>

<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-2xl font-medium leading-tight text-center text-gray-800">Case Study</h6>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient_1 w-40 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Powerful Backlinks</template>
        <template
          v-slot:content
        >
        Dominating in Google SERP, outrank the competitors thanks to SEO-friendly ecommerce
        </template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Gigantic information</template>
        <template
          v-slot:content
        >
        Offer additional information to customers without any hassle
        </template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline><span>Scalability</span></template>
        <template
          v-slot:content
        >
        Scale easily to meet market demand as well as customer requirements
        </template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline><span>24/7/365</span></template>
        <template
          v-slot:content
        >
        Stay online. Purchase products whenever want no matter it is early morning or mid-night
        </template>
      </teaser-column>      
    </div>
</section>

<div class="parallax2">
<services-head-content-mirror
    judul="Augmented Reality"
    foto="ar.svg"
    />
</div>
<section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-2xl font-medium leading-tight text-center text-gray-800">Case Study</h6>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient_1 w-40 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <teaser-column :rows="3" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Immersive experience</template>
        <template
          v-slot:content
        >
         Physical environment in a way that allows the user to engage naturally with the blended reality
        </template>
      </teaser-column>
      <teaser-column :rows="3" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline>Versatile applications</template>
        <template
          v-slot:content
        >
        Broad application in real-world life, retail, modelling, public safety, entertaiment properties you named it
        </template>
      </teaser-column>
      <teaser-column :rows="3" action="Action">
        <!-- <template v-slot:overline>PASSION</template> -->
        <template v-slot:overline><span>Educational Purpose</span></template>
        <template
          v-slot:content
        >
        Interactive activity for education, such as virtual-laboratory, 3D science activity, and many more 
        </template>
      </teaser-column>
            
    </div>
</section>
<div class="parallax2">
    <!-- <videos/> -->
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
import TeaserColumn from '@/components/TeaserColumn'


export default {
    head () {
        return {
        title: 'Services | Padjadjaran Lab',
        meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: 'Services' }
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
