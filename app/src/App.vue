<template>
  <ImageHandler />
  <main>
    <h1 class="content__title">
      Stay updated!
    </h1>
    <h2 class="content__subtitle">
      Join 60,000+ product managers receiving monthly updates on:
    </h2>
    <ListItems />
    <EmailField />
  </main>
</template>

<script>
import ImageHandler from '@/components/ImageHandler.vue';
import ListItems from '@/components/listItems.vue';
import EmailField from '@/components/EmailField.vue';

export default 
{
  components: 
  {
    ImageHandler,
    ListItems,
    EmailField
  }
}
</script>

