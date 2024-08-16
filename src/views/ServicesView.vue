<template >
  <div class="container text-center my-5 ">
    <h2 class="mb-4 ">Services</h2>
    <p class="lead">Provide a general description of the items below and introduce the services you offer. Click on the text box to edit the content.</p>
    <div class="row ">
      <div class="col-md-6" v-for="service in services" :key="service.title">
        <div class="card h-100">
          <img :src="service.image" class="card-img-top" alt="service image">
          <div class="card-body">
            <h5 class="card-title">{{ service.title }}</h5>
            <p class="card-text">{{ service.description }}</p>
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
      services: [
        {
          title: "Web Developer",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          image: "../src/assets/image/software-developer.jpg", // Replace with the actual image path
        },
        {
          title: "Quality Assurance",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          image: "../src/assets/image/qa.png", // Replace with the actual image path
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  max-width: 900px;
}
.card {
  border: none;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}
.card:hover {
  transform: translateY(-10px);
}
.card-img-top {
  max-height: 200px;
  object-fit: cover;
}
</style>
