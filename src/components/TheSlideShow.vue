<template>
  <div id="slider" >
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(image, index) in images" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
          <img :src="image.img" class="d-block w-100" alt="...">

          <div class="carousel-caption"  data-aos="fade-up" data-aos-duration="3000">
            <h1>Welcome to Cambodia</h1>
            <p>Cambodia, located in Southeast Asia, is a country rich in history and culture, offering a diverse range of attractions for tourists. 
              Cambodia's rich cultural heritage is complemented by its warm and welcoming people, making it a captivating destination for travelers seeking both adventure and a deep connection to history and tradition.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
 
      images: [
        {
          img: '../src/assets/image/Group24.png',
        },
        {
          img: '../src/assets/image/Group25.png',
        },

      ]


    }

  }

}
</script>

<style>
@import "../assets/style/components/slideshow.css";
</style>