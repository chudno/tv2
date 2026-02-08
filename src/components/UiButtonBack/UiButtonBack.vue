<script setup lang="ts">
import { useRouter } from 'vue-router';
import UiIcon from '@/components/UiIcon/UiIcon.vue';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <button class="ui-button-back" type="button" @click="goBack">
    <ui-icon name="arrow-left" width="16" height="16" />
    Назад
  </button>
</template>

<style scoped lang="scss">
.ui-button-back {
  column-gap: 7px;
  align-self: start;
  border: 2px solid transparent;
  border-radius: var(--rounded-xxl);
  background-color: var(--color-gray-10);
  padding: 20px;
  height: 64px;
  color: var(--color-gray-90);
  font-size: 16px;

  @include flex-center(true);

  @include hover {
    transition-duration: var(--transition-duration);
    border-color: var(--color-link-hover);
    background-color: var(--color-gray-30);
  }
}
</style>
