<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h6 class="w-full my-2 text-2xl font-small leading-tight text-center text-gray-800">AT A GLANCE</h6>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient_1 w-40 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <teaser-column :rows="4" >
        <template v-slot:overline>PROJECTS DONE</template>
        <template v-slot:headline><animated-number
          :value="23"
          :formatValue="fix"
          :duration="4000"
        /></template>
        <template
          v-slot:content
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</template>
      </teaser-column>
      <teaser-column :rows="4" >
        <template v-slot:overline>GB OF DATASETS</template>
        <template v-slot:headline><animated-number
          :value="1225"
          :formatValue="fix"
          :duration="4000"
        /></template>
        <template
          v-slot:content
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <template v-slot:overline>LINES OF CODE</template>
        <template v-slot:headline><animated-number
          :value="98290"
          :formatValue="fix"
          :duration="4000"
        /></template>
        <template
          v-slot:content
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</template>
      </teaser-column>
      <teaser-column :rows="4" action="Action">
        <template v-slot:overline>PASSION</template>
        <template v-slot:headline><span>∞</span></template>
        <template
          v-slot:content
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</template>
      </teaser-column>
    </div>
  </section>
</template>
<style scoped>
span {
  background: linear-gradient(90deg, rgb(250, 112, 0), #0077ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
<script>
import TeaserColumn from '@/components/TeaserColumn'
import AnimatedNumber from "animated-number-vue";

export default {
  name: 'Teasers',
  components: {
    'teaser-column': TeaserColumn,
     AnimatedNumber
  },
    data() {
    return {
      value: 1000
    };
  },
  methods: {
    decimal1(value) {
      return `${value.toFixed(1)}`;
    },
    fix(value) {
      return `${value.toFixed()}`;
    }
  }
}
</script>
