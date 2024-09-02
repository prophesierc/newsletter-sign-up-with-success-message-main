<template>
    <header class="header">
        <picture class="header__picture">
            <source media="(max-width: 700px)" srcset="@/assets/images/illustration-sign-up-mobile.svg" >
            <source media="(min-width: 700px)" srcset="@/assets/images/illustration-sign-up-desktop.svg" >
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
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.header__picture {
  width: 100%;
  height: auto;
  max-height: 30vh;
  object-fit: cover;
  border-radius: 0 0 18px 18px;
}
</style>