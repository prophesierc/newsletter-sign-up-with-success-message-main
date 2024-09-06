<template>
  <h3 class="email__title">
    Email address
  </h3>

  <v-text-field
    :rules="[rules.required]"
    label="email@company.com"
    class="email__input"
    bg-color="white"
    clearable
    variant="outlined"
  ></v-text-field>

</template>

<script>
export default 
{
  name: 'EmailField',
  data: () => 
  (
    {
      rules: 
      {
        required: value => !!value || 'Field is required',
      },
    }
  )
}
</script>

<style scoped>
  .email__title {
    font-size: 12px;
    color: var(--neutral-clr-Charcoal-Grey);
    margin: 3em 0 .5em 0;
  }

  .email__input :deep(.v-input__control) {
    width: 100%;
    background-color: var(--neutral-clr-White);
  }

  .email__input :deep(.v-field__input) {
    color: var(--neutral-clr-Grey);
  }
</style>
