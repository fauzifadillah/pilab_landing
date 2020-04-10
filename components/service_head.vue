<template>
  <div>
    <service-head-content />
    <div class="relative -mt-12 lg:-mt-24">
      <!-- <img src="~assets/img/hero-wave.svg" alt /> -->
      
    </div>
  </div>
</template>

<script>
import service_head_content from '@/components/service_head_content'

export default {
  name: 'service-head',
  components: {
    'service-head-content': service_head_content
  }
}
</script>
