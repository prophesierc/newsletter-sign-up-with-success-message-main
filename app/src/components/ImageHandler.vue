<template>
  <header class="header__container">
    <picture class="header__picture">
      <source media="(max-width: 699px)" srcset="@/assets/images/illustration-sign-up-mobile.svg">
      <source media="(min-width: 700px)" srcset="@/assets/images/illustration-sign-up-desktop.svg">
      <img src="@/assets/images/illustration-sign-up-mobile.svg" alt="Header Picture">
    </picture>
  </header>
</template>

<script>
export default {
  name: 'ImageSelector'
}
</script>

<style>
.header__container {
  width: 100vw;
  height: auto;
  overflow: hidden;
}

.header__picture img{
  width: 100vw;
  height: auto;
  max-height: 32vh;
  object-fit: cover;
  border-radius: 0 0 14px 14px;
}
</style>
