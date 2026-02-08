<script setup lang="ts">
interface InstallmentPlan {
  month: string | number;
  monthDescription?: string;
  monthPayment: string | number;
  url: string;
}

const props = defineProps<InstallmentPlan>();
</script>

<template>
  <a class="ui-installment-plan" :href="props.url">
    <div class="ui-installment-plan__content">
      <div class="ui-installment-plan__item">
        <p class="ui-installment-plan__item-main">{{ props.month }} месяцев</p>
        <p class="ui-installment-plan__item-additional" v-if="props.monthDescription">
          {{ props.monthDescription }}
        </p>
      </div>
      <div class="ui-installment-plan__item ui-installment-plan__item--price">
        <p class="ui-installment-plan__item-main">от {{ props.monthPayment }}</p>
        <p class="ui-installment-plan__item-additional">Платеж в месяц</p>
      </div>
    </div>
    <button class="ui-installment-plan__button">Выбрать</button>
  </a>
</template>

<style scoped lang="scss">
.ui-installment-plan {
  display: flex;
  column-gap: 8px;
  align-items: center;
  border: 2px solid transparent;
  border-radius: var(--rounded-xxl);
  background-color: var(--color-gray-10);
  padding: 20px;
  width: 100%;
  min-height: 84px;
  text-decoration: none;

  @include mobile {
    row-gap: 16px;
    flex-direction: column;
  }

  @include hover {
    transition-duration: var(--transition-duration);
    border-color: var(--color-link-hover);
    background-color: var(--color-gray-30);
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    width: 100%;
  }

  &__item {
    display: flex;
    row-gap: 4px;
    flex-direction: column;

    &--price {
      @include mobile {
        align-items: end;
      }
    }

    &-main {
      color: var(--color-black);
      font-weight: 600;
      font-size: 18px;
      line-height: 1.35;
    }

    &-additional {
      color: var(--color-gray-80);
      font-size: 12px;
      line-height: 1.3;
    }
  }

  &__button {
    border: none;
    border-radius: var(--rounded-lg);
    background-color: var(--color-white);
    padding: 12px 24px;
    color: var(--color-black-99);
    font-size: 15px;
    line-height: 1.33;
    text-decoration: none;

    @include mobile {
      width: 100%;
    }
  }
}
</style>
