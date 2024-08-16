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
          Meet Maida Rasul, an experienced Human Resource Manager with an
          unwavering passion for the Information Technology and Services
          industry. With a career marked by dedication, innovation, and a deep
          understanding of the HR landscape, Maida Rasul is here to transform
          your organization's human capital into a strategic asset.
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
