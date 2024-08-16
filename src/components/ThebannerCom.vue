<template>
<div class="banner">
  <div class="img">
    <img :src="image" alt="">
    <div class="titles" data-aos="fade-left" data-aos-duration="3000">
      <center>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </center>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'ThebannerCom',
  props: {
    image: {
      type: String,
      required: true
    },
    title:{
      type: String,
      required: true
    },
    description:{
      type: String,
      required: true
    }

  },
  data(){
    return{

      
      img: '../src/assets/image/Group24.png',
      // image: '../assets/image/Rectangle1.png',
    }
  }
}
</script>

<style scoped>
.banner {
  position: relative;
}

.img {
  position: relative;
}

.img img {
  display: block;
  width: 100%;
  height: auto;
}

.titles {
  position: absolute;
  top: 41%;
  left: 45%;
  /* transform: translate(-50%, -50%); */
  text-align: center;
   /* padding: 20px; */
  color: #fff; 
  /* width: 80%;   */
  /* max-width: 400px;   */
  /* border-radius: 8px;  */
}

.titles h1 {
  margin: 0;
  font-size: 2.5rem; /* Title font size */
}

.titles p {
  margin: 10px 0 0; /* Adjust spacing */
  font-size: 1.25rem; /* Paragraph font size */
}

</style>
