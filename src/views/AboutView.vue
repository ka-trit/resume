<template>
  <div class="container py-5 top">
    <!-- About Me Section -->
    <section class="text-center mb-5 top">
      <h2 class="display-4 fw-bold">About Me.</h2>
      <p class="lead mt-4">
        I am koev! I am a Quality Assurance. I have experience 2 year experience  I met 7 project I can undertand many businesess.
      </p>
      <a href="#" class="btn btn-primary mt-4">Download CV</a>
    </section>

    <!-- Education Section -->
    <section class="bg-light p-4 mb-5">
      <h3 class="fw-bold">Education</h3>
      <ul class="list-unstyled mt-3">
        <li class="mb-2">
          <strong>2020-2022</strong><br />
          Passerellesnumeriques Cambodia<br />
          associate degree
        </li>
        <li class="mb-2">
          <strong>21 May 2024 - 21 August 2024</strong><br />
          ADITI Acadamy <br />
          Short Course
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.top{
  margin-top: 100px;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  font-size: 2.5rem;
}

.lead {
  font-size: 1.25rem;
  color: #666;
}

.bg-light {
  background-color: #f8f9fa !important;
}

h3 {
  font-size: 1.75rem;
}

ul {
  padding-left: 0;
}

li {
  font-size: 1.125rem;
}
</style>
