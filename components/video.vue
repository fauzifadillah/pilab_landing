<template>
  
      <video autoplay loop muted>
        <source src="~assets/img/data.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
        </video>
    
        
      
</template>
<style scoped>
video{
    position: relative;
    background-size: 100% 100%;
    min-width: 100%;
    min-height: 40%;
    width: auto;
    height: 500px;
    /* min-height: 300px; */
    object-fit: cover;
    object-position: center;
    z-index: 1;
    opacity: 0.9;
}
</style>
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
