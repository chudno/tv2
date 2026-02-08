<script setup lang="ts">
import UiCustomCheckbox from '@/components/UiCustomCheckbox/UiCustomCheckbox.vue';
import UiIcon from '@/components/UiIcon/UiIcon.vue';
import UiTooltip from '@/components/UiTooltip/UiTooltip.vue';

interface PaymentOption {
  description: string;
  tooltipInfo?: string;
}

const props = defineProps<PaymentOption>();
</script>

<template>
  <div class="ui-payment-option">
    <div class="ui-payment-option__inner">
      <p class="ui-payment-option__description">
        {{ props.description }}
      </p>
      <ui-custom-checkbox mode="toggle" />
    </div>
    <slot name="tooltip" />
  </div>
</template>

<style scoped lang="scss">
.ui-payment-option {
  display: flex;
  position: relative;
  align-items: center;

  &__inner {
    display: flex;
    column-gap: 8px;
    align-items: center;
    border: 1px solid var(--color-gray-20);
    border-radius: var(--rounded-xxl);
    background-color: transparent;
    padding: 20px;
    width: 100%;
    font-size: 14px;
    line-height: 1.5;

    @include tablet {
      max-width: calc(100% - 32px);
    }
  }

  &__description {
    flex-grow: 1;
  }

  &__clue {
    position: absolute;
    top: 50%;
    right: -32px;
    transform: translateY(-50%);
    color: var(--color-gray-40);

    @include tablet {
      right: 0;
    }

    &-inner {
      overflow: visible;

      @include flex-center;
    }
  }

  &__tooltip {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
