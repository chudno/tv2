<script setup lang="ts">
import UiSection from '@/components/UiSection/UiSection.vue';
import UiButtonBack from '@/components/UiButtonBack/UiButtonBack.vue';
import UiInstallmentPlan from '@/components/UiInstallmentPlan/UiInstallmentPlan.vue';
import UiTooltipContent from '@/components/UiTooltipContent/UiTooltipContent.vue';
import UiTooltip from '@/components/UiTooltip/UiTooltip.vue';
import UiPaymentOption from '@/components/UiPaymentOption/UiPaymentOption.vue';

const installmentData = [
  {
    month: 6,
    monthPayment: '8 799 руб',
    monthDescription: 'Быстро закроете рассрочку',
    url: '#',
  },
  {
    month: 12,
    monthPayment: '6 799 руб',
    monthDescription: 'Самый популярный вариант',
    url: '#',
  },
  {
    month: 18,
    monthPayment: '4 799 руб',
    monthDescription: 'Баланс срока и размера платежа',
    url: '#',
  },
  {
    month: 24,
    monthPayment: '2 799 руб',
    monthDescription: 'Минимальная нагрузка на бюджет',
    url: '#',
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

const sectionTitle = 'Выберите комфортный срок и платеж для вашей рассрочки';
const sectionSubtitle =
  'После выбора срока вы перейдете к заполнению основной анкеты. Обычно это занимает не более 3-5 минут.';
const titleId = 'installment-plan-view-title';
</script>

<template>
  <ui-section
    :title="sectionTitle"
    class-name="installment-plan-view"
    :title-id="titleId"
    :subtitle="sectionSubtitle"
  >
    <ul class="installment-plan-view__list">
      <li class="installment-plan-view__list-item" v-for="plan in installmentData" :key="plan.url">
        <ui-installment-plan v-bind="plan" />
      </li>
    </ul>
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
.installment-plan-view {
  &__list {
    display: flex;
    row-gap: 12px;
    flex-direction: column;
  }
}
</style>
