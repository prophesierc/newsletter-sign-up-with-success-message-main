<template>
  <button class="subscribe__button" type="submit">Subscribe to monthly newsletter</button> 
</template>

<script>
  export default {
    name: 'SubscribeButton'
  }

// needs logic to open modal on click event
</script>

<style>
  .subscribe__button{
    margin: 1.5em 0 0 0;
    height: 3.7em;
    background-color: var(--neutral-clr-Dark-Slate-Grey);
    color: var(--neutral-clr-White);
    border-radius: 8px;
    border: none;
    font-size: 14px;
    font-weight: var(--fw-700);
    font-family: inherit;
  }
</style>