<script setup lang="ts">
import UiSection from '@/components/UiSection/UiSection.vue';
import UiButtonBack from '@/components/UiButtonBack/UiButtonBack.vue';
import UiPaymentOption from '@/components/UiPaymentOption/UiPaymentOption.vue';
import UiPayList from '@/components/UiPayList/UiPayList.vue';

import type { PayLinkProps } from '@/components/UiPayLink/UiPayLink.vue';
import UiTooltip from '@/components/UiTooltip/UiTooltip.vue';
import UiTooltipContent from '@/components/UiTooltipContent/UiTooltipContent.vue';

const paymentsData: PayLinkProps[] = [
  {
    svgUrl: './src/assets/icons/sber.svg',
    description: 'Заполните короткую анкету, получите одобрение и подпишите онлайн за 10 минут',
    mode: 'approval',
    url: '/installment-plan',
    approvalMarker: true,
  },
  {
    svgUrl: './src/assets/icons/otp.svg',
    description: 'Заполните короткую анкету, получите одобрение и подпишите онлайн за 10 минут',
    mode: 'approval',
    url: '/installment-plan',
    approvalMarker: true,
  },
  {
    svgUrl: './src/assets/icons/vd.svg',
    description: 'Заполните короткую анкету, получите одобрение и подпишите онлайн за 10 минут',
    mode: 'approval',
    url: '/installment-plan',
    approvalMarker: true,
  },
  {
    svgUrl: './src/assets/icons/credit-europa.svg',
    description: 'Заполните короткую анкету, получите одобрение и подпишите онлайн за 10 минут',
    mode: 'approval',
    url: '/installment-plan',
    approvalMarker: true,
  },
];

const paymentOptions = [
  {
    description:
      'Хочу получать напоминания о предстоящих платежах для спокойствия и оплаты без просрочек (200 руб/мес)',
    tooltipContent: `
      <p>Стоимость услуги СМС-информирования составляет 200 рублей в месяц. Итоговая сумма услуги будут добавлена к общей стоимости покупки.</p>
    `,
    tooltipFooter: `<a href="#">Подробнее про СМС-информирование</a>`,
  },
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
