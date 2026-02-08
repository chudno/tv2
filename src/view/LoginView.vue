<script setup lang="ts">
import UiForm from '@/components/UiForm/UiForm.vue';
import UiSection from '@/components/UiSection/UiSection.vue';

const sectionTitle = 'Введите свои данные для совершения оплаты';
const titleId = 'login-view-title';
</script>

<template>
  <ui-section :title="sectionTitle" class-name="login-view" :title-id="titleId">
    <ui-form offer-url="#" privacy-url="#" personal-data-url="#" />
  </ui-section>
</template>

<style lang="scss" scoped>
.login-view {
  display: flex;
  row-gap: 32px;
  flex-direction: column;
}
</style>
