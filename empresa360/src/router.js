import { createRouter, createWebHistory } from "vue-router";
// createWebHashHistory
//--- Início rotas
/*
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
import PaginaNaoEncontrada from "./views/PaginaNaoEncontrada.vue";
*/

// lazy loading
const Home = () => import("./views/Home.vue");
const Login = () => import("./views/Login.vue");
const Site = () => import("./views/Site.vue");
const Vendas = () =>
  import(/* webpackChunkName: "vendas" */ "./components/vendas/Vendas.vue");
const Leads = () =>
  import(/* webpackChunkName: "vendas" */ "./components/vendas/Leads.vue");
const Lead = () =>
  import(/* webpackChunkName: "vendas" */ "./components/vendas/Lead.vue");
const Contratos = () =>
  import(/* webpackChunkName: "vendas" */ "./components/vendas/Contratos.vue");
const Servicos = () =>
  import(
    /* webpackChunkName: "servicos" */ "./components/servicos/Servicos.vue"
  );
const Servico = () =>
  import(
    /* webpackChunkName: "servicos" */ "./components/servicos/Servico.vue"
  );
const Opcoes = () =>
  import(/* webpackChunkName: "servicos" */ "./components/servicos/Opcoes.vue");
const Indicadores = () =>
  import(
    /* webpackChunkName: "servicos" */ "./components/servicos/Indicadores.vue"
  );
const Dashboard = () => import("./components/dashboard/Dashboard.vue");
const VendasPadrao = () =>
  import(
    /* webpackChunkName: "vendas" */ "./components/vendas/VendasPadrao.vue"
  );
const DashboardRodape = () =>
  import("./components/dashboard/DashboardRodape.vue");
const PaginaNaoEncontrada = () => import("./views/PaginaNaoEncontrada.vue");

const routes = [
  {
    path: "/",
    component: Site,
    meta: { requerAutorizacao: false },
  },
  {
    path: "/home", //localhost:8080/home
    meta: { requerAutorizacao: true },
    alias: "/app",
    component: Home,
    children: [
      {
        path: "vendas",
        component: Vendas,
        children: [
          {
            path: "leads",
            component: Leads,
            name: "leads",
            beforeEnter() {
              // ...
              console.log("guarda de rota beforeEnter");
            },
          }, //localhost:8080/home/vendas/leads
          {
            path: "leads/:id/:outroParametro",
            props: true,
            /*  props: {
              id: 4,
              outroParametro: 'pt-br'
            },
          */
            /* props: route => {

          console.log('Rota ativa: ',route);

          let teste =  route.query.idioma ? route.query.idioma :  route.params.outroParametro

            return {
              id: 3,
              outroParametro: teste
             }
         },  */
            component: Lead,
            name: "lead",
            alias: [
              "/l/:id/:outroParametro",
              "/pessoa/:id/:outroParametro",
              "/:id/:outroParametro",
            ],
          }, //localhost:8080/home/vendas/leads/id
          { path: "contratos", component: Contratos, name: "contratos" }, //localhost:8080/home/vendas/contratos
          { path: "", component: VendasPadrao, name: "vendas" }, //localhost:8080/home/vendas/
        ],
      }, //localhost:8080/home/vendas
      {
        path: "Servicos",
        component: Servicos,
        name: "servicos",
        children: [
          {
            path: ":id",
            props: {
              default: true,
              indicadores: true,
              opcoes: true,
            },
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
    meta: { requerAutorizacao: false, campo2: "teste", campo3: 50 },
  },
  { path: "/redirecionamento-1", redirect: "/home/servicos" },
  { path: "/redirecionamento-2", redirect: { name: "leads" } },
  { path: "/redirecionamento-3", redirect: "/home/vendas" },
  { path: "/redirecionamento-4", redirect: { name: "vendas" } },
  {
    path: "/redirecionamento-5",
    redirect: (to) => {
      //podemos programar algo antes do rerirecionamento ser efetivado
      console.log(to);

      //return '/home/vendas'
      return { name: "vendas" };
    },
  },

  // { path: '/:catchAll(.*)*', redirect: '/' } //vue2 = *
  { path: "/:catchAll(.*)*", component: PaginaNaoEncontrada },
];
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // return {
    //   let: 0,
    //   top: 150,
    // };
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { el: to.hash }; // to.hash deve corresponder a um id de elemento HTML
    }
    return { left: 0, top: 0 };
  },
  routes: routes,
});
router.beforeEach(() => {
  // console.log("beforeEach");
  /* if (to.meta.requerAutorizacao) {
    console.log("Validar o acesso");
  } else {
    console.log("Apenas seguir a navegação");
  } */
});

router.afterEach(() => {
  // console.log(
  //   "afterEach - guarda de rota executada após a conclusão da navegação"
  // );
  // console.log("Origem: ", from);
  // console.log("Destino: ", to);
});

router.beforeResolve(() => {
  // console.log("Guarda beforeResolve");
});
export default router;
