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
import Servico from "./components/servicos/Servico.vue";
import Opcoes from "./components/servicos/Opcoes.vue";
import Indicadores from "./components/servicos/Indicadores.vue";
import Dashboard from "./components/dashboard/Dashboard.vue";
import VendasPadrao from "./components/vendas/VendasPadrao.vue";
import DashboardRodape from "./components/dashboard/DashboardRodape.vue";

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
          { path: "leads", component: Leads, name: "leads" }, //localhost:8080/home/vendas/leads
          { path: "leads/:id", component: Lead, name: "lead" }, //localhost:8080/home/vendas/leads/id
          { path: "contratos", component: Contratos, name: "contratos" }, //localhost:8080/home/vendas/contratos
          { path: "", component: VendasPadrao }, //localhost:8080/home/vendas/
        ],
      }, //localhost:8080/home/vendas
      {
        path: "Servicos",
        component: Servicos,
        name: "servicos",
        children: [
          {
            path: ":id",
            name: "servico",
            components: {
              default: Servico,
              opcoes: Opcoes,
              indicadores: Indicadores,
            },
          }, //localhost:8080/home/servicos/5
        ],
      },
      { path: "Dashboard", components:{ default: Dashboard, rodape: DashboardRodape} },
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
