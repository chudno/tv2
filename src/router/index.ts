import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layouts/AppLayout/AppLayout.vue';
import LoginView from '@/view/LoginView.vue';
import PayView from '@/view/PayView.vue';
import FullPaymentView from '@/view/FullPaymentView.vue';
import ChoosePaymentView from '@/view/ChoosePaymentView.vue';
import InstallmentPaymentView from '@/view/InstallmentPaymentView.vue';
import InstallmentOptionsView from '@/view/InstallmentOptionsView.vue';
import InstallmentPlanView from '@/view/InstallmentPlanView.vue';

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        component: LoginView,
      },
      {
        path: '/pay',
        component: PayView,
      },
      {
        path: '/installment-payment',
        component: InstallmentPaymentView,
      },
      {
        path: '/full-payment',
        component: FullPaymentView,
      },
      {
        path: '/choose-payment',
        component: ChoosePaymentView,
      },
      {
        path: '/installment-option',
        component: InstallmentOptionsView,
      },
      {
        path: '/installment-plan',
        component: InstallmentPlanView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
