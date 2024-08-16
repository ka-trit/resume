<template>
  <div class="container py-5 top">
    <!-- About Me Section -->
    <section class="text-center mb-5 top">
      <h2 class="display-4 fw-bold">About Me.</h2>
      <p class="lead mt-4">
        Human Resources Manager with over 3 plus years of experience in talent management, employee relations, and benefits administration. Proven track record of successfully implementing HR initiatives and programs that improve employee engagement and satisfaction. Adept at handling complex employee relations issues and negotiating resolutions that meet the needs of both the company and employees. Strong communication and interpersonal skills, with the ability to effectively communicate with employees at all levels of the organization. Committed to maintaining compliance with all labor and employment laws and regulations.
      </p>
      <a href="#" class="btn btn-primary mt-4">Download CV</a>
    </section>

    <!-- Education Section -->
    <section class="bg-light p-4 mb-5">
      <h3 class="fw-bold">Education</h3>
      <ul class="list-unstyled mt-3">
        <li class="mb-2">
          <strong>2022-2023</strong><br />
          SZABIST Islamabad, Pakistan<br />
          Masters in HRM
        </li>
        <li class="mb-2">
          <strong>2017-2021</strong><br />
          Fatima Jinnah Women University Rawalpindi, Pakistan<br />
          Bachelor's in Public Administration
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
