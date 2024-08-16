<script setup>
import { RouterView } from 'vue-router'
import Headerview from '../src/components/TheHeader.vue'
import Footerview from '../src/components/TheFooter.vue'
</script>

<template>
  <Headerview/>
    <RouterView />
  <Footerview/>
</template>

<style  >
</style>