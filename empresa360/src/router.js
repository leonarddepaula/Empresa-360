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
    alias: "/app",
    component: Home,
    children: [
      {
        path: "vendas",
        component: Vendas,
        children: [
          { path: "leads", component: Leads, name: "leads" }, //localhost:8080/home/vendas/leads
          { path: "leads/:id", component: Lead, name: "lead", alias: [ '/l/:id', '/pessoa/:id', '/:id'] }, //localhost:8080/home/vendas/leads/id
          { path: "contratos", component: Contratos, name: "contratos" }, //localhost:8080/home/vendas/contratos
          { path: "", component: VendasPadrao, name: 'vendas' }, //localhost:8080/home/vendas/
        ],
      }, //localhost:8080/home/vendas
      {
        path: "Servicos",
        component: Servicos,
        name: "servicos",
        children: [
          {
            path: ":id",
            alias: "/s/:id",
            name: "servico",
            components: {
              default: Servico,
              opcoes: Opcoes,
              indicadores: Indicadores,
            },
          }, //localhost:8080/home/servicos/5
        ],
      },
      {
        path: "Dashboard",
        components: { default: Dashboard, rodape: DashboardRodape },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  { path: '/redirecionamento-1', redirect:'/home/servicos' },
  { path: '/redirecionamento-2', redirect:{ name: 'leads'} },
  { path: '/redirecionamento-3', redirect: '/home/vendas' },
  { path: '/redirecionamento-4', redirect: { name: 'vendas' } },
  { path: '/redirecionamento-5', redirect: to =>{
    //podemos programar algo antes do rerirecionamento ser efetivado 
    console.log(to);

    //return '/home/vendas'
    return { name: 'vendas' }
  } },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
// --- Fim rotas

export default router;
