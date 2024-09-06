<template>
  <v-btn 
  class="subscribe__button" 
  type="submit"
  density="default"
  size="large"
  @click="modalHandler"
  >
  {{ buttonText }}</v-btn> 
</template>

<script>
export default 
{
  props: ['buttonText'],
  methods: 
  {
    handleClick() 
    {
      this.$emit('open-modal');
    }
  }
}
</script>

<style scoped>
  .subscribe__button{
    width: 100%;
    background-color: var(--neutral-clr-Dark-Slate-Grey);
    color: var(--neutral-clr-White);
    border-radius: 8px;
    border: none;
    font-size: 12px;
    font-weight: var(--fw-700);
    font-family: inherit;
    margin: .5em 0 0 0;
  }
  .subscribe__button :deep(.v-btn__content) {
    color: var(--neutral-clr-White) !important;
    text-transform: none !important;
  }
</style>