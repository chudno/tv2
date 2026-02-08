<script setup lang="ts">
import UiPayLink from '@/components/UiPayLink/UiPayLink.vue';
import type { PayLinkProps } from '@/components/UiPayLink/UiPayLink.vue';

interface PayListProps {
  arrName: PayLinkProps[];
}

const props = defineProps<PayListProps>();
</script>

<template>
  <ul class="ui-pay-list">
    <li class="ui-pay-list__list-item" v-for="(link, index) in props.arrName" :key="link.url">
      <ui-pay-link v-bind="link" :approval-top="index+1" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.ui-pay-list {
  display: flex;
  row-gap: 12px;
  flex-direction: column;
}
</style>
