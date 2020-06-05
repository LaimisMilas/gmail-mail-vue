import Vue from 'vue';
import Vuex from 'vuex';
import loginStore from './login.js';
import reservationStore from './profile.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   //baseUrl: 'https://ppm.herokuapp.com'
   baseUrl: 'https://gmail-mail-sb.herokuapp.com',
   //baseUrl: 'http://localhost:8080'
  },
  modules: {login: loginStore, reservation: reservationStore},
});
