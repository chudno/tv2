<script setup lang="ts">
import UiIcon from '@/components/UiIcon/UiIcon.vue';
import UiTooltip from '@/components/UiTooltip/UiTooltip.vue';
import UiTooltipContent from '@/components/UiTooltipContent/UiTooltipContent.vue';

export interface PayLinkProps {
  url: string;
  svgUrl?: string;
  title?: string;
  description: string;
  approvalMarker?: boolean;
  approvalTop?: number;
  clue?: boolean;
  tooltipContent?: string;
  tooltipFooter?: string;
  mode?: 'base' | 'currency' | 'bank' | 'approval' | 'installment';
}

const props = withDefaults(defineProps<PayLinkProps>(), {
  mode: 'base',
});
</script>

<template>
  <router-link
    class="ui-pay-link"
    :class="{ [`ui-pay-link--${props.mode}`]: props.mode !== 'base' }"
    :to="props.url"
  >
    <span class="ui-pay-link__approval-marker" v-if="props.approvalMarker">
      {{ `ТОП-${props.approvalTop} по одобрениям` }}
    </span>
    <img class="ui-pay-link__icon" v-if="props.svgUrl" :src="props.svgUrl" alt="" loading="lazy" />
    <h3 class="ui-pay-link__title" v-if="props.title">
      {{ props.title }}
    </h3>
    <p class="ui-pay-link__description" v-html="props.description"></p>
    <ui-tooltip class="ui-pay-link__clue" v-if="props.clue">
      <ui-tooltip-content :content="props.tooltipContent" :footer="props.tooltipFooter" />
    </ui-tooltip>
  </router-link>
</template>

<style scoped lang="scss">
.ui-pay-link {
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 8px;
  border: 2px solid transparent;
  border-radius: var(--rounded-xxl);
  background-color: var(--color-gray-10);
  padding: 20px;
  width: 100%;
  min-height: 103px;
  text-decoration: none;

  @include tablet {
    min-height: 135px;
  }

  @include mobile {
    grid-template-columns: repeat(1, 1fr);
  }

  @include hover {
    transition-duration: var(--transition-duration);
    border-color: var(--color-link-hover);
    background-color: var(--color-gray-30);

    .ui-pay-link__description {
      opacity: 1;
      transition-duration: var(--transition-duration);
    }
  }

  &--currency {
    grid-template-columns: auto 1fr;
    column-gap: 20px;
    min-height: 80px;

    .ui-pay-link__description {
      color: var(--color-black);
      font-size: 16px;
    }

    @include mobile {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &--bank {
    grid-template-columns: 110px 1fr;
    column-gap: 30px;
    min-height: auto;

    @include mobile {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 8px;
    }

    .ui-pay-link__description {
      color: var(--color-black);
      line-height: 1.5;
    }
  }

  &--approval {
    grid-template-columns: 149px 200px 1fr;
    column-gap: 20px;
    justify-items: center;

    .ui-pay-link__description {
      opacity: 0.7;
    }

    @include mobile {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 16px;
      justify-items: start;
    }
  }

  &--installment {
    grid-template-columns: 40px 1fr;
    column-gap: 20px;
    min-height: 80px;

    @include mobile {
      grid-template-columns: repeat(1, 1fr);
      max-width: calc(100% - 32px);
    }

    .ui-pay-link__description {
      color: var(--color-black);
    }
  }

  &__approval-marker {
    border-radius: var(--rounded-full);
    background-color: var(--color-white);
    padding: 6px 8px;
    color: var(--color-accent-alt);
    font-weight: 600;
    font-size: 12px;
  }

  &__icon {
    object-fit: contain;
  }

  &__clue {
    position: absolute;
    right: 0;
  }

  &__description {
    color: var(--color-gray-80);
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
