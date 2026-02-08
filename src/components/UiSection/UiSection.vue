<script setup lang="ts">
interface SectionProps {
  className: string;
  titleId: string;
  title: string;
  subtitle?: string;
}

const props = defineProps<SectionProps>();
</script>

<template>
  <section class="ui-section container" :class="props.className" :aria-labelledby="props.titleId">
    <div class="ui-section__header">
      <h2 class="ui-section__title" :id="titleId">
        {{ props.title }}
      </h2>
      <p class="ui-section__subtitle" v-if="props.subtitle">
        {{ props.subtitle }}
      </p>
    </div>
    <slot />
  </section>
</template>

<style scoped lang="scss">
.ui-section {
  display: flex;
  row-gap: fluid(32, 24);
  flex-direction: column;

  &__header {
    display: flex;
    row-gap: 12px;
    flex-direction: column;
  }

  &__subtitle {
    font-size: 16px;

    @include mobile {
      font-size: 15px;
    }
  }
}
</style>
