<template>
  <main>
    <div class="container">
      <ImageHandler />
      <div class="content">
        <h1 class="content__title">Stay updated!</h1>
        <h2 class="content__subtitle">
          Join 60,000+ product managers receiving monthly updates on:
        </h2>
        <ListItems :listedItems="listedItem1" />
        <ListItems :listedItems="listedItem2" />
        <ListItems :listedItems="listedItem3" />
        <EmailField 
          ref="emailField"
          @update:isValid="handleEmailValidation" 
          @enter-pressed="handleEnterPressed"
        />
        <SubscribeButton 
          ref="subscribeButton"
          :buttonText="buttonText" 
          :disabled="!isEmailValid"
          @open-subscribe-modal="openModal" 
        />
        <SubscribeModal :show="showModal" @close-subscribe-modal="handleModalClose" />
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/prophesierc">ProphesierC</a>.
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ImageHandler from '@/components/ImageHandler.vue';
import EmailField from '@/components/EmailField.vue';
import ListItems from '@/components/props/ListItems.vue';
import SubscribeButton from '@/components/props/SubscribeButton.vue';
import SubscribeModal from '@/components/SubscribeModal.vue';

export default {
  components: {
    ImageHandler,
    ListItems,
    EmailField,
    SubscribeButton,
    SubscribeModal
  },
  data() {
    return {
      buttonText: 'Subscribe to monthly newsletter',
      listedItem1: 'Product discovery and building what matters',
      listedItem2: 'Measuring to ensure updates are a success',
      listedItem3: 'And much more!',
      showModal: false,
      isEmailValid: false
    }
  },
  methods: {
    handleEmailValidation(isValid) {
      this.isEmailValid = isValid;
    },
    handleEnterPressed() {
      if (this.isEmailValid) {
        this.$refs.subscribeButton.$el.click();
      }
    },
    openModal() {
      this.showModal = true;
      this.$refs.emailField.clearEmail();
    },
    handleModalClose() {
      this.showModal = false;
    }
  }
}
</script>