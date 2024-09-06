<template>
  <v-btn 
  class="subscribe__button" 
  type="submit"
  density="default"
  size="large"
  >
  {{ buttonText }}</v-btn> 
</template>

<script>
  export default {
    props: ['buttonText']
  }
// needs logic to open modal on click event
</script>

<style>
  .subscribe__button{
    width: 100%;
    background-color: var(--neutral-clr-Dark-Slate-Grey);
    color: var(--neutral-clr-White);
    border-radius: 8px;
    border: none;
    font-size: 11px;
    font-weight: var(--fw-700);
    font-family: inherit;
    margin: .5em 0 0 0;
  }
</style>