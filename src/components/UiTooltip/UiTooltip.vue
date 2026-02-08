<script setup lang="ts">
import UiIcon from '@/components/UiIcon/UiIcon.vue';
import Popover from 'primevue/popover';
import { ref, onMounted } from 'vue';

const popoverRef = ref();
const isMobile = ref(false);
const isHovering = ref(false);
let closeTimeout: number | null = null;

const checkDevice = () => {
  isMobile.value = window.matchMedia('(hover: none)').matches;
};

onMounted(checkDevice);

const openPopover = (event: Event) => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }

  isHovering.value = true;
  popoverRef.value.show(event);
};

const scheduleClose = () => {
  isHovering.value = false;

  closeTimeout = window.setTimeout(() => {
    if (!isHovering.value) {
      popoverRef.value.hide();
    }
  }, 150);
};
</script>

<template>
  <span class="ui-tooltip">
    <span
      class="ui-tooltip__trigger"
      @mouseenter="!isMobile && openPopover($event)"
      @mouseleave="!isMobile && scheduleClose()"
      @click="isMobile && openPopover($event)"
    >
      <UiIcon name="clue" width="24" height="24" />
    </span>

    <Popover ref="popoverRef" class="ui-tooltip__popover" :dismissable="isMobile" appendTo="body">
      <div
        @mouseenter="!isMobile && openPopover($event)"
        @mouseleave="!isMobile && scheduleClose()"
      >
        <slot />
      </div>
    </Popover>
  </span>
</template>

<style scoped lang="scss">
.ui-tooltip {
  position: relative;

  &__trigger {
    position: absolute;
    top: 50%;
    right: -32px;
    transform: translateY(-50%);
    height: 24px;
    color: var(--color-gray-40);

    &-inner {
      overflow: visible;

      @include flex-center;
    }
  }
}
</style>
