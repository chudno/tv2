<script setup lang="ts">
import UiInput from '@/components/UiInput/UiInput.vue';
import UiCustomCheckbox from '@/components/UiCustomCheckbox/UiCustomCheckbox.vue';
import UiButton from '@/components/UiButton/UiButton.vue';

interface FormProps {
  offerUrl: string;
  privacyUrl: string;
  personalDataUrl: string;
}

const formData = [
  {
    id: 'surname',
    label: 'Фамилия',
    verifying: true,
    placeholder: 'Иванов',
  },
  {
    id: 'name',
    label: 'Имя',
    verifying: true,
    placeholder: 'Сергей',
  },
  {
    id: 'patronymic',
    label: 'Отчество',
    verifying: true,
    placeholder: 'Петрович',
  },
  {
    id: 'phone',
    label: 'Телефон',
    placeholder: '+7 999 888 77 66',
    type: 'number',
    phoneCode: true,
  },
  {
    id: 'mail',
    label: 'Email',
    placeholder: 'ivanov.sergei@gmail.com',
    type: 'email',
  },
];

const buttonValue = 'Выбрать способ оплаты';

const props = defineProps<FormProps>();
</script>

<template>
  <form class="ui-form">
    <div class="ui-form__inputs">
      <ui-input v-for="(input, index) in formData" :key="index" v-bind="input" />
    </div>
    <div class="ui-form__agreements">
      <ui-custom-checkbox label>
        Ознакомился и соглашаюсь с
        <a :href="props.offerUrl">условиями заключения договора (оферта)</a>
      </ui-custom-checkbox>
      <ui-custom-checkbox label>
        Соглашаюсь с <a :href="props.privacyUrl">политикой конфиденциальности</a> даю
        <a :href="props.personalDataUrl">согласие на обработку персональных данных</a>
      </ui-custom-checkbox>
    </div>
    <!--    <ui-button :value="buttonValue" type="submit" />-->
    <router-link class="test" to="/pay"> Выбрать способ оплаты </router-link>
  </form>
</template>

<style scoped lang="scss">
//удалить после демонстрации
.test {
  border: 1px solid transparent;
  border-radius: var(--rounded-lg);
  background-color: var(--color-accent);
  padding-block: 11px;
  color: var(--color-black-99);
  font-size: 15px;
  line-height: 1.33;
  text-decoration: none;

  @include flex-center;

  @include hover {
    opacity: 0.7;
    transition-duration: var(--transition-duration);
  }
}

.ui-form {
  display: flex;
  row-gap: 32px;
  flex-direction: column;

  &__inputs {
    display: flex;
    row-gap: fluid(32, 16);
    flex-direction: column;
  }

  &__agreements {
    display: flex;
    row-gap: 20px;
    flex-direction: column;
  }
}
</style>
