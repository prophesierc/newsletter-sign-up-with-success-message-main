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
    <SubscribeButton />
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/prophesierc">ProphesierC</a>.
    </div>
  </main>
</template>

<script>
import ImageHandler from '@/components/ImageHandler.vue';
import ListItems from '@/components/listItems.vue';
import EmailField from '@/components/EmailField.vue';
import SubscribeButton from '@/components/SubscribeButton.vue';

export default 
{
  components: 
  {
    ImageHandler,
    ListItems,
    EmailField,
    SubscribeButton
  }
}
</script>

