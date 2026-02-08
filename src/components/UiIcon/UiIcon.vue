<script setup lang="ts">
interface IconProps {
  name: string;
  ariaLabel?: string;
  width?: number | string;
  height?: number | string;
}

const props = defineProps<IconProps>();
</script>

<template>
  <span class="icon" :class="[`icon--${props.name}`]" :aria-label="ariaLabel">
    <svg aria-hidden="true" :width="props.width" :height="props.height">
      <use :href="`#icon-${props.name}`"></use>
    </svg>
  </span>
</template>

<style scoped lang="scss">
.icon {
  display: inline-flex;
  max-height: 100%;
}
</style>
