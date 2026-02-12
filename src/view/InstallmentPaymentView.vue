<script setup lang="ts">
import UiSection from '@/components/UiSection/UiSection.vue';
import UiPaymentOption from '@/components/UiPaymentOption/UiPaymentOption.vue';
import UiPayList from '@/components/UiPayList/UiPayList.vue';

import UiButtonBack from '@/components/UiButtonBack/UiButtonBack.vue';

import UiTooltip from '@/components/UiTooltip/UiTooltip.vue';
import UiTooltipContent from '@/components/UiTooltipContent/UiTooltipContent.vue';

import sber from '@/assets/icons/sber.svg';
import otp from '@/assets/icons/otp.svg';
import vd from '@/assets/icons/vd.svg';
import creditEuropa from '@/assets/icons/credit-europa.svg';


import type { PayLinkProps } from '@/components/UiPayLink/UiPayLink.vue';

const paymentsData: PayLinkProps[] = [
  {
    svgUrl: sber,
    description: 'Заполните короткую анкету, получите одобрение и подпишите онлайн за 10 минут',
    mode: 'approval',
    url: '/installment-plan',
    approvalMarker: true,
  },
  {
    svgUrl: otp,
    description: 'Заполните короткую анкету, получите одобрение и подпишите онлайн за 10 минут',
    mode: 'approval',
    url: '/installment-plan',
    approvalMarker: true,
  },
  {
    svgUrl: vd,
    description: 'Заполните короткую анкету, получите одобрение и подпишите онлайн за 10 минут',
    mode: 'approval',
    url: '/installment-plan',
    approvalMarker: true,
  },
  {
    svgUrl: creditEuropa,
    description: 'Заполните короткую анкету, получите одобрение и подпишите онлайн за 10 минут',
    mode: 'approval',
    url: '/installment-plan',
    approvalMarker: true,
  },
];


const sectionTitle = `Рассрочка без первого взноса от надежных банков и брокеров`;
const sectionSubtitle =
  'Мы показываем банки и кредитные организации в порядке вероятности одобрения. Начните с первого — так вы сэкономите время и повысите шанс успешного оформления.';
const titleId = 'installment-payment-view-title';
</script>

<template>
  <ui-section
    :title="sectionTitle"
    class-name="installment-payment-view"
    :title-id="titleId"
    :subtitle="sectionSubtitle"
  >
    <ui-pay-list :arr-name="paymentsData" />
    <ui-button-back />
  </ui-section>
</template>

<style scoped lang="scss">
.installment-payment-view {
  &:deep(.ui-section__title) {
    max-width: 515px;
  }

  &:deep(.ui-section__subtitle) {
    max-width: 700px;
  }
}
</style>
