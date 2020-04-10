<template>
  
      <video autoplay loop muted>
        <source src="~assets/img/data.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
        </video>
    
        
      
</template>

<script>
export default {
  name: 'videos',
  props: {
    headline: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    }
  }
}
</script>
