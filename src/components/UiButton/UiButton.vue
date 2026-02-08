<script setup lang="ts">
interface ButtonProps {
  type?: 'button' | 'submit';
  value: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
});
</script>

<template>
  <button class="ui-button" :type="props.type">
    {{ props.value }}
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  border: 1px solid transparent;
  border-radius: var(--rounded-lg);
  background-color: var(--color-accent);
  padding-block: 11px;
  color: var(--color-black-99);
  font-size: 15px;
  line-height: 1.33;

  @include flex-center;

  @include hover {
    opacity: 0.7;
    transition-duration: var(--transition-duration);
  }
}
</style>
