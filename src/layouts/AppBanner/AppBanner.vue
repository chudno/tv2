<script setup lang="ts">
export interface BannerProps {
  title: string;
  subtitle?: string;
  price: number;
}

const props = defineProps<BannerProps>();

const formattedPrice = new Intl.NumberFormat('ru-RU').format(props.price);
</script>

<template>
  <div class="app-banner container">
    <div class="app-banner__meta">
      <h1 class="app-banner__title">
        {{ props.title }}
      </h1>
      <p class="app-banner__subtitle">
        {{ props.subtitle }}
      </p>
    </div>
    <p class="app-banner__price">{{ formattedPrice }} руб</p>
  </div>
</template>

<style lang="scss" scoped>
.app-banner {
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: fluid(40, 32);
  border-radius: var(--rounded-xxl);
  background: var(--color-bg-banner);
  padding-block: 40px;

  @include mobile {
    flex-direction: column;
    align-items: start;
    row-gap: 12px;
    padding: 20px 14px;
    max-width: calc(100% - 4px);
  }

  &__meta {
    display: flex;
    row-gap: fluid(16, 8);
    flex-direction: column;
  }

  &__subtitle {
    opacity: 0.6;
    font-weight: 600;
    font-size: fluid(20, 16);
    line-height: 1.35;
  }

  &__price {
    color: var(--color-accent-alt);
    font-weight: 700;
    font-size: fluid(28, 22);
  }
}
</style>
