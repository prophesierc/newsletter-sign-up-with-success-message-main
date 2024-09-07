<template>
  <v-form ref="form">
    <h3 class="email__title">Email address</h3>

    <v-text-field
      v-model="email"
      :rules="[rules.required, rules.email]"
      label="email@company.com"
      class="email__input"
      bg-color="white"
      clearable
      variant="outlined"
      @input="checkValidation"
    ></v-text-field>
  </v-form>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'EmailField',
  emits: ['update:isValid'],
  setup(_, { emit }) {
    const email = ref('');
    const form = ref(null);

    const rules = 
    {
      required: value => !!value || 'Email is required',
      email: value => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) || 'Enter a valid Email Address'
    };

    const checkValidation = () => 
    {
      const emailValid = rules.email(email.value) === true;
      emit('update:isValid', emailValid);
    };

    watch(email, checkValidation, 
    { immediate: true });

    return {
      email,
      form,
      rules,
      checkValidation
    };
  }
};
</script>

<style scoped>
.email__title {
  font-size: 12px;
  color: var(--neutral-clr-Charcoal-Grey);
  margin: 2.5em 0 .5em 0;
}
.email__input :deep(.v-input__control) {
  width: 100%;
  background-color: var(--neutral-clr-White);
}
.email__input :deep(.v-field__input) {
  color: var(--neutral-clr-Grey);
}
</style>