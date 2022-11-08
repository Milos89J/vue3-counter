

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CountryView from "../views/CountryView.vue";
import InformationView from "../views/InformationView.vue";
import PageNotFound from "../views/404View.vue";


const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),

     routes: [
        {
            path:"/",
            component: HomeView,
            name: "HomeView"

        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/about",
            component: AboutView,
            name: "AboutView"
        
        },
        {
            path: "/country/:id",
            component: CountryView,
            name: "Country",
            children: [
                {
                    path: "information",
                    component: InformationView,
                }
            ]
        },
        {
            path: "/:catchall(.*)*",
            component: PageNotFound,
            pane: "PageNotFound"
        }
     ]
});
export default router
