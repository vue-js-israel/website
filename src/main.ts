import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faTwitterSquare,
  faGithubSquare, faInstagram, faMeetup, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

library.add(faFacebookSquare, faTwitterSquare,
  faGithubSquare, faInstagram, faMeetup, faYoutubeSquare, faLinkedin, faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
