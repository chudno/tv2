<script setup lang="ts">
defineProps<{}>();
</script>

<template>
  <header class="app-header container">
    <router-link class="app-header__logo-link" :to="'/'">
      <img
        class="app-header__logo-image"
        src="/logo.svg"
        alt=""
        width="156"
        height="28"
        loading="lazy"
      />
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

.app-header {
  margin-bottom: fluid(26, 20);
  padding-top: fluid(26, 8);

  &__logo-link {
    @include hover {
      opacity: 0.7;
      transition-duration: var(--transition-duration);
    }
  }

  &__logo-image {
    user-select: none;
  }
}
</style>
