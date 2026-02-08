<script setup lang="ts">
export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterProps {
  links: FooterLink[];
}

const props = defineProps<FooterProps>();
</script>

<template>
  <footer class="app-footer container">
    <div class="app-footer__inner">
      <p class="app-footer__copyright">
        Все права защищены 2025. ООО "Территория Продаж", ИНН 2308288674
      </p>
      <div class="app-footer__documents">
        <a
          class="app-footer__documents-link"
          v-for="link in props.links"
          :key="link.url"
          :href="link.url"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  padding-block: 32px;
  color: var(--color-gray-60);
  font-size: 12px;

  @include mobile {
    padding-block: 24px 32px;
  }

  &__inner {
    display: flex;
    row-gap: 16px;
    flex-direction: column;
    margin-inline: auto;
    max-width: 520px;
    text-align: center;
  }

  &__documents {
    display: flex;
    justify-content: space-between;
    gap: 16px;

    @include mobile {
      flex-direction: column;
      align-items: center;
    }

    &-link {
      color: var(--color-gray-60);

      @include hover {
        text-decoration: none;
      }
    }
  }
}
</style>
