<template>
  <v-btn 
    class="subscribe__button" 
    density="default"
    size="large"
    @click="open"
  >
  {{ buttonText }}</v-btn> 
</template>

<script>
export default 
{
  props: ['buttonText'],
  methods: 
  {
    open() 
    {
        this.$emit('open-subscribe-modal');
        document.body.classList.toggle('no-scroll');
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

  .subscribe__button:hover, .subscribe__button:active{
    background: rgb(255,105,60);
    background: linear-gradient(306deg, rgba(255,105,60,1) 0%, rgba(255,83,121,1) 100%);
  }

  .subscribe__button :deep(.v-btn__content) {
    color: var(--neutral-clr-White) !important;
    text-transform: none !important;
  }
</style>