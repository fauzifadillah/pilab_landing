<template>
  <a
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
    href="#"
  >
    <!--Icon from: http://www.potlabicons.com/ -->
    <img id="color" src="~assets/img/fix.png"/>
    <img id="mono" src="~assets/img/fix.png"/>
  </a>
</template>
<style scoped>
#color {
  display: block;
  max-width:230px;
  max-height:95px;
  width: auto;
  height: auto;
}
#mono {
  display: none;
}
</style>
<script>
export default {
  name: 'Logo',
  props: {
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = this.isSticky ? 'text-gray-800' : 'text-white'
      } else {
        classList = 'text-orange-600'
      }
      return classList
    }
  }
}
</script>