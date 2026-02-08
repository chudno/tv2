<script setup lang="ts">
interface CustomCheckboxProps {
  label?: boolean;
  mode?: 'base' | 'toggle';
}

const props = defineProps<CustomCheckboxProps>();
</script>

<template>
  <label
    class="ui-custom-checkbox"
    :class="{ [`ui-custom-checkbox--${props.mode}`]: props.mode !== 'base' }"
  >
    <input class="ui-custom-checkbox__hidden visually-hidden" type="checkbox" />
    <span class="ui-custom-checkbox__field"></span>
    <span class="ui-custom-checkbox__label" v-if="props.label">
      <slot />
    </span>
  </label>
</template>

<style scoped lang="scss">
.ui-custom-checkbox {
  display: flex;
  column-gap: 7px;
  align-items: center;

  &--toggle {
    .ui-custom-checkbox__field {
      border-radius: var(--rounded-full);
      background-color: transparent;
      padding: 3px;
      width: 42px;
      height: 24px;

      &::after {
        left: 12px;
        opacity: 1;
        border-radius: 50%;
        background: var(--color-accent);

        @include square(18px);
      }
    }

    .ui-custom-checkbox__hidden:checked ~ .ui-custom-checkbox__field {
      transition-duration: var(--transition-duration);
      border-color: var(--color-accent);
      background-color: var(--color-accent);

      &::after {
        left: 28px;
        background-color: var(--color-white);
        transition-duration: var(--transition-duration);
      }
    }
  }

  @include mobile {
    align-items: start;
  }

  &__hidden:checked ~ .ui-custom-checkbox__field {
    transition-duration: var(--transition-duration);
    border-color: var(--color-accent);
    background-color: var(--color-accent);

    &::after {
      opacity: 1;
      transition-duration: var(--transition-duration);
    }
  }

  &__field {
    position: relative;
    flex: none;
    border: 1px solid var(--color-black-90);
    border-radius: var(--rounded-sm);

    @include flex-center(true);
    @include square(17px);

    &::after {
      opacity: 0;
      background: url('@/assets/icons/check.svg') center / contain no-repeat;
      width: 11px;
      height: 9px;
      content: '';

      @include abs-center;
    }
  }

  &__label {
    opacity: 0.85;
    color: var(--color-black);
    font-size: 15px;
    line-height: 1.33;
    font-family: var(--font-family-alt);

    &:deep(a) {
      color: var(--color-black);

      @include hover {
        text-decoration: none;
      }
    }
  }
}
</style>
