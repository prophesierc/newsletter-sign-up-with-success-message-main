<template>
  <header class="header__container">
    <picture class="header__picture">
      <source media="(max-width: 799px)" srcset="@/assets/images/illustration-sign-up-mobile.svg">
      <source media="(min-width: 800px)" srcset="@/assets/images/illustration-sign-up-desktop.svg">
      <img src="@/assets/images/illustration-sign-up-mobile.svg" alt="Header Picture">
    </picture>
  </header>
</template>

<script>
export default {
  name: 'ImageHandler'
}
</script>

<style scoped>
.header__container {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.header__picture img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0 0 14px 14px;
}

@media (min-width: 800px) {
  body {
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
  }

  main {
    width: 50%;
  }

  .header__container {
    display: flex;
    justify-content: flex-end; /* Align the image to the right */
  }

  .header__picture img {
    max-width: 100%; /* Prevent the image from exceeding the container */
    height: auto;
    object-fit: contain; /* Maintain aspect ratio */
  }
}
</style>
