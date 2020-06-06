import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Header from './components/base/Header.vue';
import Navigation from './components/base/Navigation.vue';

import Default from "./layouts/Default";
import Auth from "./layouts/Auth";
import Dialog from "./layouts/Dialog";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('nav-buttom', Navigation);
Vue.component('header', Header);
Vue.component('default-layout', Default);
Vue.component('auth-layout', Auth);
Vue.component('dialog-layout', Dialog);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
