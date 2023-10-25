import { createRouter, createWebHistory } from "vue-router";
// createWebHashHistory
// --- Início rotas
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Site from "./views/Site.vue";
import Vendas from "./components/vendas/Vendas.vue";
import Leads from "./components/vendas/Leads.vue";
import Lead from "./components/vendas/Lead.vue";
import Contratos from "./components/vendas/Contratos.vue";
import Servicos from "./components/servicos/Servicos.vue";
import Dashboard from "./components/dashboard/Dashboard.vue"

const routes = [
  {
    path: "/",
    component: Site,
  },
  {
    path: "/home", //localhost:8080/home
    component: Home,
    children: [
      {
        path: "vendas",
        component: Vendas,
        children: [
          { path: "leads", component: Leads }, //localhost:8080/home/vendas/leads
          { path: "leads/:id", component: Lead }, //localhost:8080/home/vendas/leads/id
          { path: "contratos", component: Contratos }, //localhost:8080/home/vendas/contratos
        ],
      }, //localhost:8080/home/vendas
      { path: "Servicos", component: Servicos },
      { path: "Dashboard", component: Dashboard },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
// --- Fim rotas

export default router;
