<script setup lang="ts">
import UiSection from '@/components/UiSection/UiSection.vue';
import UiPayList from '@/components/UiPayList/UiPayList.vue';
import UiButtonBack from '@/components/UiButtonBack/UiButtonBack.vue';
import UiPaymentOption from '@/components/UiPaymentOption/UiPaymentOption.vue';

import type { PayLinkProps } from '@/components/UiPayLink/UiPayLink.vue';

const paymentsData: PayLinkProps[] = [
  {
    svgUrl: './src/assets/icons/ter-pay.svg',
    description: 'Совершите единоразовый платеж с помощью банковской карты QR-кода или СБП',
    mode: 'bank',
    url: '#',
  },
  {
    svgUrl: './src/assets/icons/sber-pay.svg',
    description: 'Быстрый и безопасный способ приёма платежей с помощью приложения Сбербанка',
    mode: 'bank',
    url: '#',
  },
  {
    svgUrl: './src/assets/icons/u-money-pay.svg',
    description: 'Быстрый и безопасный способ приёма платежей с помощью приложения Сбербанка',
    mode: 'bank',
    url: '#',
  },
];

const paymentOptions = [
  {
    description:
      'Хочу оформить страховку на случай, если не смогу найти работу после окончания обучения',
  },
];

const sectionTitle = 'Оплатить всю сумму сразу';
const sectionSubtitle =
  'Все платежи осуществляются через защищённые платёжные системы и надежные банковские организации';
const titleId = 'choose-payment-view-title';
</script>

<template>
  <ui-section
    :title="sectionTitle"
    class-name="choose-payment-view"
    :title-id="titleId"
    :subtitle="sectionSubtitle"
  >
    <ui-pay-list :arr-name="paymentsData" />
    <ui-payment-option
      v-for="(option, index) in paymentOptions"
      :key="index"
      :description="option.description"
    />
    <ui-button-back />
  </ui-section>
</template>

<style scoped lang="scss"></style>
