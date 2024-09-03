<template>
    <h4>
        Thanks for subscribing!
    </h4>
    <p>
        A confirmation email has been sent to <b>ash@loremcompany.com</b>. 
        Please open it and click the button inside to confirm your subscription.
        <SubscribeButton />
    </p>

</template>
  
<script>
export default {
name: 'SubscribeModal'
}
import SubscribeButton from '@/components/SubscribeButton.vue';

</script>
  
<style>
</style>