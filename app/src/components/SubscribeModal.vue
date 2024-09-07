<template>
    <transition name="slide-from-top">
        <div v-if="show" class="subscribe__modal">
          <div class="modal__content">
            <h4>Thanks for subscribing!</h4>
            <p>
              A confirmation email has been sent to <b>ash@loremcompany.com</b>. 
              Please open it and click the button inside to confirm your subscription.
            </p>
            <SubscribeButton :buttonText="buttonText" @click="close" />
          </div>
        </div>
      </transition>
</template>
  
<script>
import SubscribeButton from '@/components/props/SubscribeButton.vue';
  
export default 
{
    components: 
    {
        SubscribeButton
    },
    props: ['show'],
    methods: 
    {
        close() 
        {
            this.$emit('close-subscribe-modal');
        }
    },
    data() 
    {
        return {
            buttonText: 'Dismiss message'
        }
    }
}
</script>

<style scoped>
.slide-from-top-enter-active, .slide-from-top-leave-active {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.slide-from-top-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}

.slide-from-top-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.slide-from-top-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-from-top-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.subscribe__modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--neutral-clr-White);
    width: 100%;
    height: 100%;
}
</style>  