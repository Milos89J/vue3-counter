<script setup>
  import { useRoute } from 'vue-router';
  import country from "../data/country.json";
  
  const route = useRoute()

  const count = country.find(c => c.id === parseInt(route.params.id))

</script>


<template>
  <div>Country</div>
</template>

<style scoped>
</style>