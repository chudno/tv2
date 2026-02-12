<script setup lang="ts">
import UiSection from '@/components/UiSection/UiSection.vue';

import UiPayList from '@/components/UiPayList/UiPayList.vue';
import UiPaymentOption from '@/components/UiPaymentOption/UiPaymentOption.vue';

import UiButtonBack from '@/components/UiButtonBack/UiButtonBack.vue';

import terPay from '@/assets/icons/ter-pay.svg';
import sberPay from '@/assets/icons/sber-pay.svg';
import uMoneyPay from '@/assets/icons/u-money-pay.svg';

import type { PayLinkProps } from '@/components/UiPayLink/UiPayLink.vue';
import UiTooltipContent from '@/components/UiTooltipContent/UiTooltipContent.vue';
import UiTooltip from '@/components/UiTooltip/UiTooltip.vue';

const paymentsData: PayLinkProps[] = [
  {
    svgUrl: terPay,
    description: 'Совершите единоразовый платеж с помощью банковской карты QR-кода или СБП',
    mode: 'bank',
    url: '#',
  },
  {
    svgUrl: sberPay,
    description: 'Быстрый и безопасный способ приёма платежей с помощью приложения Сбербанка',
    mode: 'bank',
    url: '#',
  },
  {
    svgUrl: uMoneyPay,
    description: 'Быстрый и безопасный способ приёма платежей с помощью приложения Сбербанка',
    mode: 'bank',
    url: '#',
  },
];

const paymentOptions = [
  {
    description:
      'Хочу оформить страховку на случай, если не смогу найти работу после окончания обучения (2500 руб)',
    tooltipContent: `
      <p>Стоимость страховки составляет 2 500 рублей и будет добавлена к общей стоимости.</p>
      <p>
        <strong>Внимание!</strong>
        Сейчас страховку можно оформить
        <a href="#">со скидкой 50%</a>.
        После завершения оплаты приобрести страховку будет нельзя.
      </p>
    `,
    tooltipFooter: `<a href="#">Подробнее про страховку</a>`,
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
    >
      <template #tooltip>
        <ui-tooltip>
          <ui-tooltip-content :content="option.tooltipContent" :footer="option.tooltipFooter" />
        </ui-tooltip>
      </template>
    </ui-payment-option>
    <ui-button-back />
  </ui-section>
</template>

<style scoped lang="scss"></style>
