<script setup lang="ts">
import UiSection from '@/components/UiSection/UiSection.vue';
import UiButtonBack from '@/components/UiButtonBack/UiButtonBack.vue';
import UiInstallmentPlan from '@/components/UiInstallmentPlan/UiInstallmentPlan.vue';

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
