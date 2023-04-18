// DEFINE OUR ROUTING RULES //

import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import ContactView from "../views/ContactView.vue";
import NotFountView from "../views/404view.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "home-implicit",
            path: "/",
            component: HomeView,
        }, {
            name: "home-explicit", // 不能重名
            path: "/home",
            redirect: "/",
        }, {
            name: "about",
            path: "/about",
            component: AboutView,
        }, {
            name: "cars",
            path: "/cars/:id",
            component: CarView,
            children: [
                {
                    name: "contact",
                    path: "contact",
                    component: ContactView
                }
            ]
        },
        {
            path: "/:catchall(.*)*",
            name: "not-found",
            component: NotFountView
        }
    ]
})

export default router
