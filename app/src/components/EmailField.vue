<template>
  <h3 class="email__title">
    Email address
  </h3>
  <input type="text" placeholder="email@company.com" class="email__input"/>
</template>

<script>
export default {
  name: 'EmailField'
}
</script>

<style>
  .email__title{
    font-size: 12px;
    color: var(--neutral-clr-Charcoal-Grey);
    margin: 3em 0 .5em 0;
  }

  .email__input{
    width: 100%;
    height: 3em;
    border: 1px solid var(--neutral-clr-Grey);
    color: var(--neutral-clr-Grey);
    border-radius: 8px;
    padding-left: 1.5em;
    font-size: 16px;  
  }
</style>