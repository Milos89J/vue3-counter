<script setup>
import { useRoute } from "vue-router";
import country from "../data/country.json";

const route = useRoute()
const count = country.find(c => c.id === parseInt(route.params.id))


</script>
<template>
    <div v-if="count">
        <h1>information info</h1>
        <p>{{count.information.capitalCity}}</p>
        <p>{{count.information.zipCode}}</p>
    </div>
    <div v-else>
    <h1>Information not found</h1>
    </div>

</template>

<style scoped>

</style>
