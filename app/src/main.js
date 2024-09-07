import { createApp } from 'vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { VBtn, VTextField } from 'vuetify/components';
import '@mdi/font/css/materialdesignicons.css';

import App from '@/App.vue';

const vuetify = createVuetify(
  {
    components: 
    {
      VBtn,
      VTextField,
    },
    icons: 
    {
      defaultSet: 'mdi',
    },
  });

createApp(App).use(vuetify).mount('#app');
