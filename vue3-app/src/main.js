import { createApp } from 'vue'
import App from './App.vue'
import magic from '@magic-microservices/magic';
import * as ReactHello from 'react-hello/dist/index.esm';

magic('react-hello', ReactHello, {
  propTypes: {
    name: String
  },
});

createApp(App).mount('#app')
