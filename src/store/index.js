import Vue from 'vue';
import Vuex from 'vuex';
import loginStore from './login.js';
import companyInfo from './companyInfo.js';
import compRecipientList from './compRecipientList';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   //baseUrl: 'https://gmail-mail-sb.herokuapp.com',
   baseUrl: 'http://127.0.0.1:8080'
  },
  modules: {login: loginStore, companyInfo: companyInfo, compRecipientList: compRecipientList},
});
