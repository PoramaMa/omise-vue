import { createRouter, createWebHistory } from "vue-router";
import CreditCard from "../views/CreditCard.vue";
import MobileBanking from "../views/MobileBanking.vue";
import kbank from "../views/MobileBankingk/Kbank.vue";
import rabbit_linepay from "../views/rabbit_linepay.vue";
import TruemoneyWallet from "../views/TruemoneyWallet.vue";

const routes = [
  {
    path: "/",
    name: "CreditCard",
    component: CreditCard,
  },
  {
    path: "/rabbit_linepay",
    name: "rabbit_linepay",
    component: rabbit_linepay,
  },
  {
    path: "/truemoneywallet",
    name: "TruemoneyWallet",
    component: TruemoneyWallet,
  },
  {
    path: "/MobileBanking",
    name: "MobileBanking",
    component: MobileBanking,
  },
  {
    path: "/MobileBanking/kbank",
    name: "kbank",
    component: kbank,
  },
  {
    path: "/promptpay",
    name: "PromptPay",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PromptPay.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
