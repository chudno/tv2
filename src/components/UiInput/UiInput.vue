<script setup lang="ts">
import Select from 'primevue/select';
import InputMask from 'primevue/inputmask';

import { ref, computed, watch } from 'vue';

interface Country {
  name: string;
  code: string;
  phoneCode: string;
  mask: string;
}

const countries: Country[] = [
  {
    name: 'Россия',
    code: 'RU',
    phoneCode: '+7',
    mask: '+7-999-999-99-99',
  },
  {
    name: 'Молдова',
    code: 'MD',
    phoneCode: '+373',
    mask: '+373-999-99-999',
  },
  {
    name: 'Беларусь',
    code: 'BY',
    phoneCode: '+375',
    mask: '+375-99-999-99-99',
  },
];

const selectedCountry = ref<Country>(countries[0]!);
const phoneValue = ref('');

const phoneMask = computed(() => selectedCountry.value.mask);

watch(selectedCountry, () => {
  phoneValue.value = '';
});

interface InputProps {
  id?: string;
  type?: string;
  label: string;
  verifying?: boolean;
  placeholder: string;
  phoneCode?: boolean;
}

const props = defineProps<InputProps>();

const type = props.type ?? 'text';
</script>

<template>
  <div class="ui-input">
    <label class="ui-input__label" :for="props.id">
      {{ props.label }}
      <span class="ui-input__label-item" v-if="verifying">(как в паспорте)</span>
    </label>
    <div class="ui-input__field-wrapper" v-if="phoneCode">
      <Select v-model="selectedCountry" :options="countries" optionLabel="name" />
      <InputMask
        v-model="phoneValue"
        :mask="phoneMask"
        :placeholder="phoneMask.replace(/9/g, '9')"
        class="ui-input__custom-field"
      />
    </div>

    <input
      v-else
      class="ui-input__field"
      :id="props.id"
      :type="type"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<style scoped lang="scss">
.ui-input {
  display: flex;
  row-gap: 10px;
  flex-direction: column;

  &__label {
    color: var(--color-black);
    font-size: 16px;
    line-height: 1.5;
    font-family: var(--font-family-alt);

    &-item {
      color: var(--color-gray-50);
    }
  }

  &__field {
    transition-duration: var(--transition-duration);
    outline: 1px solid transparent;
    border: none;
    border-radius: var(--rounded-lg);
    background-color: var(--color-gray-10);
    padding: 4px 4px 4px 12px;
    height: 44px;
    font-size: 15px;

    &::placeholder {
      opacity: 0.3;
      color: var(--color-black);
    }

    &:focus {
      outline-color: var(--color-gray-10);
      background-color: transparent;
    }
  }

  &__field-wrapper {
    display: flex;
  }

  &__custom-field {
    border-radius: 0 var(--rounded-lg) var(--rounded-lg) 0;
    background-color: var(--color-gray-10);
    padding: 12px 12px 12px 0;
    width: 100%;
    height: 44px;
    font-size: 15px;
    line-height: 1.33;

    &::placeholder {
      color: var(--color-black-90);
    }
  }

  &:deep(.p-select) {
    --p-select-background: var(--color-gray-10);

    border-radius: var(--rounded-lg) 0 0 var(--rounded-lg);
    padding: 12px;
    height: 44px;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.33;

    @include flex-center(true);
  }

  &:deep(.p-select-dropdown) {
    svg {
      display: none;
    }
  }
}
</style>
