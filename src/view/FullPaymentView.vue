<script setup lang="ts">
import UiSection from '@/components/UiSection/UiSection.vue';
import UiButtonBack from '@/components/UiButtonBack/UiButtonBack.vue';
import UiPayList from '@/components/UiPayList/UiPayList.vue';
import rublesIcon from '@/assets/icons/rubles.svg';
import foreignCurrency from '@/assets/icons/foreign-currency.svg';

import type { PayLinkProps } from '@/components/UiPayLink/UiPayLink.vue';

const paymentsData: PayLinkProps[] = [
  {
    svgUrl: rublesIcon,
    description: 'Оплата картой российского банка в Рублях, ЮMoney, SberPay, СБП',
    mode: 'currency',
    url: '/choose-payment',
  },
  {
    svgUrl: foreignCurrency,
    description: 'Оплата картой зарубежного банка в USD, EUR и других иностранных валютах',
    mode: 'currency',
    url: '#',
  },
];

const sectionTitle = 'Оплатить всю сумму сразу';
const sectionSubtitle =
  'Все платежи осуществляются через защищённые платёжные системы и надежные банковские организации';
const titleId = 'full-payment-view-title';
</script>

<template>
  <ui-section
    :title="sectionTitle"
    class-name="full-payment-view"
    :title-id="titleId"
    :subtitle="sectionSubtitle"
  >
    <ui-pay-list :arr-name="paymentsData" />
    <ui-button-back />
  </ui-section>
</template>

<style scoped lang="scss"></style>
