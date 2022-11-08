<script setup>
import country from "../data/country.json";
import { RouterLink } from "vue-router";

</script>



<template>
    <div>
        <h1>home vue</h1>
        <div class="country">
            <RouterLink :to="`/country/${count.id}`" v-for="count in country" :key="count.id" href="">
                {{count.name}}
            </RouterLink>
        </div>
    </div>

</template>

<style scoped>

.country {
    display: flex;
}
.country a {
    text-decoration: none;
    color:black;
    width: 100%;
    box-shadow: 1px 1px 1px rgb(133, 130, 130);
    margin: 10px;
}

</style>