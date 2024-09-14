<template>
    <transition name="slide-from-top">
        <div v-if="show" class="subscribe__modal">
            <div class="modal__content">
                <img class="modal__image" src="@/assets/images/icon-success.svg">
                <h4 class="modal__title">Thanks for subscribing!</h4>
                <p class="modal__text">
                    A confirmation email has been sent to <b>ash@loremcompany.com</b>. 
                    Please open it and click the button inside to confirm your subscription.
                </p>
                <SubscribeButton class="modal__button__close" :buttonText="buttonText" @click="close" />
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
        bottom: 0;
        background-color: var(--neutral-clr-White);
        display: flex;
        justify-content: center;
        z-index: 9999;
    }
      
    .modal__content {
        display: flex;
        flex-direction: column;
        text-align: left;
        font-family: var(--ff);
        background-color: var(--neutral-clr-White);
        padding: 1em;
        max-width: 500px;
        width: 100%; 
        max-height: 100%; 
        overflow: hidden; 
    }
      
    .modal__image {
        height: 50px;
        width: 50px;
        margin: 40% auto 3em 0;
    }
      
    .modal__title {
        font-size: 34px;
        line-height: 1em;
        font-weight: var(--fw-700);
        margin: 0 0 1em 0;
    }
      
    .modal__text {
        margin-right: -2.2em;
        font-size: var(--fs-paragraph);
    }

    .modal__button__close{
        margin-top: auto;       
        margin-bottom: 1.5em; 
    }

    @media (min-width: 375px) {
        .subscribe__modal{
            max-width: 100vw;
            max-height: 100vh; 
            align-items: center;
            background-color: var(--neutral-clr-Charcoal-Grey);
        }

        .modal__content {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 425px;
            max-height: 400px; 
            background-color: var(--neutral-clr-White);
            padding: 0 2em 6em 2em;
            border-radius: 12px;
        }

        .modal__image {
            margin: 20% auto 2em 0;
        }
          
        .modal__title {
            font-size: 44px;
            margin: 0 0 .5em 0;
        }
          
        .modal__text {
            margin-right: -1em;
        }
    
        .modal__button__close{
            margin-bottom: -1em;
            margin-top: 2em; 
        }
    }

</style>  