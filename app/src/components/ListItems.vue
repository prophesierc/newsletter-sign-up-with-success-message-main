<template>
  <ul class="list__container">
    <li class="list__item">Product discovery and building what matters</li>
    <li class="list__item">Measuring to ensure updates are a success</li>
    <li class="list__item">And much more!</li>
  </ul>
</template>

<script>
export default {
  name: 'ListItems'
}
</script>

<style>
  .list__container {
    text-align: left;
    margin: 1em 0 0 0;
    list-style-type: none;
    width: 100%;
  }

  .list__item {
    background: url('@/assets/images/icon-list.svg') no-repeat left top;
    line-height: 1.5em;
    padding-left: 2.6em;
    margin-top: 1em;
    font-size: var(--fs-paragraph);
    font-weight: var(--fw-400);
    color: var(--neutral-clr-Dark-Slate-Grey);
  }
</style>
