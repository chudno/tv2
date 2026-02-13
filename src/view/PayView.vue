<script setup lang="ts">
import UiSection from '@/components/UiSection/UiSection.vue';
import UiPayList from '@/components/UiPayList/UiPayList.vue';
import installment1Icon from '@/assets/icons/installment-1.svg';
import fullPayment from '@/assets/icons/full-payment.svg'
import installmentPayment from '@/assets/icons/installment-payment.svg'
import installmentPaymentAlt from '@/assets/icons/installment-payment-alt.svg'
import creditPayment from '@/assets/icons/credit-payment.svg'

import type { PayLinkProps } from '@/components/UiPayLink/UiPayLink.vue';

const payData: PayLinkProps[] = [
  {
    svgUrl: fullPayment,
    url: '/full-payment',
    title: 'Оплатить всю сумму сразу',
    description:
      'Совершите единоразовый платеж с помощью банковской карты, СБП или кошельков популярных сервисов',
  },
  {
    svgUrl: installmentPayment,
    url: '/installment-payment',
    title: 'Купить в рассрочку',
    description: 'Оформите банковскую рассрочку, чтобы оплатить покупку частями',
  },
  {
    svgUrl: installmentPaymentAlt,
    url: '/installment-option',
    title: 'Купить в рассрочку',
    description:
      'Оформите банковскую рассрочку, чтобы оплатить покупку частями и без переплаты процентов. Можно оформить как с первым взносом, так и без него',
  },
  {
    svgUrl: creditPayment,
    url: '#',
    title: 'Купить в кредит',
    description:
      'Оформите кредит, если сумма заказа превышает параметры предлагаемых рассрочек, либо вы просто хотите уменьшить платеж за счет большего срока погашения',
  },
];

const sectionTitle = 'Выберите способ оплаты';
const sectionSubtitle =
  'Все платежи осуществляются через защищённые платёжные системы и надежные банковские организации';
const titleId = 'pay-view-title';

const test =
  'Стоимость страховки составляет 2 500 рублей, которые будут добавлены к общей стоимости покупки. Внимание! Сейчас страховку можно оформить со скидкой 50%. После завершения процесса оплаты, приобрести страховку будет уже нельзя!';
</script>

<template>
  <ui-section
    :title="sectionTitle"
    class-name="pay-view"
    :title-id="titleId"
    :subtitle="sectionSubtitle"
  >
    <ui-pay-list :arr-name="payData" />
  </ui-section>
</template>

<style scoped lang="scss"></style>
