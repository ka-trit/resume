<template>
  <div class="footer mt-5">
    <div class="foot ">
      <div class="menu-footer row "  >
        <!-- <div class="logs col-md-4 col-sm-4 col-12 m-auto">
          <img src="../assets/image/Group29.png" alt="" class="imag">
        </div>
        <div class="col-md-4 col-sm-4 col-12 mt-3">
          <h3>categories</h3>
          <ul >
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/history">History</RouterLink>
            <RouterLink to="/temple">Temple</RouterLink>
            <RouterLink to="/">Natural</RouterLink>
            <RouterLink to="/traditional">Traditional</RouterLink>
            <RouterLink to="/">Inheritance</RouterLink>
          </ul>

        </div>
        <div class="col-md-4 col-sm-4 col-12 m-auto">
          <div class="socail">
            <i class="bi bi-facebook p-2"></i>
            <i class="bi bi-telegram p-2"></i>
            <i class="bi bi-instagram p-2"></i>
          </div>

        </div> -->


      </div>
      <div class="content p-4 ">
        
        <div class="socail">
            <i class="bi bi-facebook p-3"></i>
            <i class="bi bi-telegram p-3"></i>
            <i class="bi bi-instagram p-3"></i>
          </div>
        <div class="container" style="color: white;">
          <!-- <hr> -->
        </div>
        <p class="m-0 p-1">copyright ©️ 2024 | Travel for Happiness</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
i{
  font-size: 25px;
}
ul{
  text-transform: uppercase;
}
.menu-footer{
  display: flex;
  justify-content: space-between;
  color: black;
}

a{
  margin-top: 10px;
  color:black !important;
  text-decoration: none !important;
  display:block !important;
}

.content {
  color: black !important;
}
.imag{
  width: 30%;
}

.logs {
  width: 10%;
  margin: auto;
}

/* img {
  width: 50%;
} */

.footer {
  overflow-x: hidden;
  background:#f1f3f6;
}

.foot {
  text-align: center;
}
</style>