<script setup lang="ts">
import installment1Icon from '@/assets/icons/installment-1.svg';
import installment2Icon from '@/assets/icons/installment-2.svg';
import UiSection from '@/components/UiSection/UiSection.vue';

import type { PayLinkProps } from '@/components/UiPayLink/UiPayLink.vue';
import UiButtonBack from '@/components/UiButtonBack/UiButtonBack.vue';
import UiPayList from '@/components/UiPayList/UiPayList.vue';

const paymentsData: PayLinkProps[] = [
  {
    svgUrl: installment1Icon,
    description:
      'Рассрочка <strong>без первого взноса</strong>, переплаты и со стандартной одобряемостью',
    mode: 'installment',
    url: '/installment-payment',
    clue: true,
    tooltipContent: `
      <p>Подходит, если вы не хотите переплачивать проценты и готовы пройти стандартную проверку банка.</p>
      <p>Вы сможете выбрать банк и условия на следующих шагах.</p>
    `,
  },
  {
    svgUrl: installment2Icon,
    description:
      'Рассрочка <strong>с первым взносом</strong>, небольшой переплатой и повышенной одобряемостью (BNPL)',
    mode: 'installment',
    url: '#',
    clue: true,
    tooltipContent: `
      <p>Подходит, если вам важно быстрее получить одобрение и снизить риск отказа.</p>
      <p>Вы сможете выбрать банк и условия на следующих шагах</p>
    `,
  },
];

const sectionTitle = 'Выберите удобный вариант рассрочки';
const sectionSubtitle =
  'Все рассрочки предоставляются  банками или финансовыми организациями с наивысшим рейтингом надежности';
const titleId = 'installment-options-view-title';
</script>

<template>
  <ui-section
    :title="sectionTitle"
    class-name="installment-options-view"
    :title-id="titleId"
    :subtitle="sectionSubtitle"
  >
    <ui-pay-list :arr-name="paymentsData" />
    <ui-button-back />
  </ui-section>
</template>

<style scoped lang="scss"></style>
