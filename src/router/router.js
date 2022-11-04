

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CountryView from "../views/CountryView.vue";


const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),

     routes: [
        {
            path:"/",
            component: HomeView,
            name: "HomeView"

        },
        {
            path: "/about",
            component: AboutView,
            name: "AboutView"
        
        },
        {
            path: "/country/:id",
            component: CountryView,
            name: "Country"
        }
     ]
});
export default router
