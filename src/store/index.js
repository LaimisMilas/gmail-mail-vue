import Vue from 'vue';
import Vuex from 'vuex';
import loginStore from './login.js';
import reservationStore from './profile.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   //baseUrl: 'https://sb-mini-crm.herokuapp.com'
   baseUrl: 'http://192.168.1.89:8080'
  },
  modules: {login: loginStore, reservation: reservationStore},
});
