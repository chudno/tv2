<script setup lang="ts">
interface TooltipContentProps {
  content: string | undefined;
  footer?: string;
}

const props = defineProps<TooltipContentProps>();
</script>

<template>
  <div class="ui-tooltip-content">
    <div class="ui-tooltip-content__main" v-html="props.content"></div>

    <div class="ui-tooltip-content__footer" v-if="props.footer" v-html="props.footer"></div>
  </div>
</template>

<style lang="scss">
.ui-tooltip-content {
  display: flex;
  row-gap: 10px;
  flex-direction: column;

  &__main {
    display: flex;
    row-gap: 20px;
    flex-direction: column;
    color: var(--color-black-99);
    font-size: 14px;
    line-height: 1.5;

    strong {
      font-weight: 600;
    }

    p {
      --paragraphMarginBottom: 0;
    }

    a {
      color: var(--color-accent-alt);

      @include hover {
        opacity: 0.7;
        transition-duration: var(--transition-duration);
      }
    }
  }

  &__footer {
    display: flex;
    justify-content: end;

    a {
      align-self: end;
      color: var(--color-violet);
      font-size: 14px;
      line-height: 1.5;

      @include hover {
        opacity: 0.7;
        transition-duration: var(--transition-duration);
      }
    }
  }
}
</style>
