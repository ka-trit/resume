<template>
  <div class="container text-center py-5">
    <div class="row justify-content-center align-items-center top">
      <div class="col-md-4">
        <div class="image-container">
          <img
            src="../assets/image/profile.jpg"
            alt="Maida Rasul"
            class="img-fluid rounded-circle"
          />
        </div>
      </div>
      <div class="col-md-6 text-start">
        <h1 class="display-4 fw-bold">Hello</h1>
        <p class="lead">
          I am koev! I am a Quality Assurance. I have experience 2 year experience  I met 7 project I can undertand many businesess.
        </p>
        <div class="d-flex justify-content-start gap-3">
          <button type="button" class="btn btn-outline-secondary">Services</button>
          <button type="button" class="btn btn-outline-secondary">Clients</button>
          <button type="button" class="btn btn-outline-secondary">Contact</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionSection",
};
</script>

<style scoped>
.top{
  margin-top: 100px;
}
.image-container {
  background-color: #f0f0f0;
  border-radius: 50%;
  padding: 20px;
  margin-bottom: 20px;
}

.btn-outline-secondary {
  border-radius: 50px;
  width: 100px;
  height: 100px;
  font-size: 1rem;
}
</style>
