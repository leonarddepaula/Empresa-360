import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

// --- Início rotas
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

const routes = [
  {
    path: "/home", //localhost:8080/home
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
// --- Fim rotas

const Vue = createApp(App)
Vue.use(router) //adicionando configurações de rotas a instancia do Vue

Vue.mount("#app");
