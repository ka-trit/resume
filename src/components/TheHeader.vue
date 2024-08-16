<template>
   <div id="header">
        <header class="header">
            <div class="logo"><img src="../assets/image/Group29.png" alt="" class="w-50"></div>
            <input type="checkbox" id="toggle">
            <!-- <label for="toggle"> <img class="menu" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQcRCwNIHXgysCmSjnyxc4peA8hq0NI7gcQvhjIOY9WLa8wr-lshwxZcgveagSi4UoUBJ8muOPfLmpugzjVro7-5Lrpynl-Ngr_cMsKAzPU9CMwjqQLK7ee_6hf0v2FN_tPDTYAeIKYZLQpvARWwM9D-iHbyJ8OwC1Xd-u-nbDw6HiTzUScSxaVd9yEhD3/s2500/menu1.png" alt="menu"></label> -->
            <label for="toggle"> <img class="menu" src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" alt="menu"></label>
            
            <nav class="navigation">
    
                <ul>
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/about">About </RouterLink></li>
                    <li><RouterLink to="/services">services</RouterLink></li>
                    <li><RouterLink to="/project">Project</RouterLink></li>
                    <li><RouterLink to="/contact">Contact US</RouterLink></li>
                    <!-- <li><RouterLink to="/traditional">Traditional</RouterLink></li> -->
                    <!-- <li><RouterLink to="Education">Education </RouterLink></li> -->
                </ul>
            </nav>
        </header>
    </div>
</template>

<script setup>
import { RouterLink} from 'vue-router';

</script>

<style>
@import '../assets/style/components/hearder.css';
</style>