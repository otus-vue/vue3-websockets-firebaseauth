import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Post from "../views/Post.vue";
import Contact from "@/views/Contact";
import SignIn from "@/views/SignIn";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/posts/:postId",
    name: "post",
    component: Post,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contact,
  },
  {
    path: "/sign_in",
    name: "sign_in",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to, from, fromScroll) {
    return { top: 0, left: 0 };
  },
});

export default router;
