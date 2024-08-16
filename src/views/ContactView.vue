<template>
  <div class="container my-5 top">
    <div class="row top">
      <div class="col-md-6">
        <h2>Contact</h2>
        <p><i class="bi bi-telephone"></i> +92 326 1109616</p>
        <p><i class="bi bi-envelope"></i> maidarasul@gmail.com</p>
        <div class="social-icons">
          <p href="#"><i class="bi bi-facebook"></i>Koev SONG</p>
          <p href="#"><i class="bi bi-linkedin"> </i>Koev SONG</p>
          <p href="#"><i class="bi bi-github"></i>ka trit</p>
        </div>
      </div>
      <div class="col-md-6">
        <form>
          <div class="row mb-3">
            <div class="col">
              <input type="text" class="form-control" placeholder="First Name" required>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last Name" required>
            </div>
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" placeholder="Email *" required>
          </div>
          <div class="mb-3">
            <textarea class="form-control" rows="4" placeholder="Message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactSection",
};
</script>
<style scoped>
.social-icons a {
  font-size: 1.5rem;
  color: #333;
  margin-right: 10px;
}

.social-icons a:hover {
  color: #007bff;
}
.top{
  margin-top: 100px;
}
</style>
