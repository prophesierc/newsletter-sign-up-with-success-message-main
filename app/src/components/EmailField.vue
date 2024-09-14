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
      @keydown.enter="handleEnter"
    ></v-text-field>
  </v-form>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'EmailField',
  emits: ['update:isValid', 'enter-pressed', 'clear'],
  setup(_, { emit }) 
  {
    const email = ref('');
    const form = ref(null);

    const rules = 
    {
      required: value => !!value || 'Email is required',
      email: value => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) || 'Enter a valid Email Address'
    };

    const checkValidation = () => 
    {
      const formValid = form.value ? form.value.validate() 
      : false;
      const emailValid = rules.email(email.value) === true;
      const isValid = formValid && emailValid;
      emit('update:isValid', isValid);
    };

    const handleEnter = (event) => 
    {
      event.preventDefault(); 
      if (rules.email(email.value) === true) 
      {
        emit('enter-pressed');
      }
    };

    const clearEmail = () => 
    {
      email.value = '';
      checkValidation();
    };

    return {
      email,
      form,
      rules,
      checkValidation,
      handleEnter,
      clearEmail
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

  .email__input {
    width: 100%;
  }

  .email__input :deep(.v-input__control) {
    width: 100%;
    background-color: var(--neutral-clr-White);    
  }

  .email__input :deep(.v-field__input) {
    color: var(--neutral-clr-Grey);
    background-color: hsl(5, 100%, 95%);
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-right: -.8em;
    cursor: pointer;
  }
</style>
