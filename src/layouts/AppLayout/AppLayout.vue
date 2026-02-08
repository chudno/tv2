<script setup lang="ts">
import { RouterView } from 'vue-router';

import AppHeader from '@/layouts/AppHeader/AppHeader.vue';
import AppBanner from '@/layouts/AppBanner/AppBanner.vue';
import AppMain from '@/layouts/AppMain/AppMain.vue';
import AppFooter from '@/layouts/AppFooter/AppFooter.vue';

import { useBanner } from '@/composables/useBanner';
import { useFooter } from '@/composables/useFooter.ts';

const { banner } = useBanner();
const { footer } = useFooter();
</script>

<template>
  <div class="app-layout">
    <app-header />
    <app-banner
      v-if="banner"
      :title="banner.title"
      :subtitle="banner.subtitle"
      :price="banner.price"
    />
    <app-main>
      <router-view />
    </app-main>
    <app-footer
      v-if="footer"
      :links="footer.links"
    />
  </div>
</template>

<style scoped lang="scss"></style>
