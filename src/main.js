import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n.js'
import Navigation from './components/base/Navigation.vue';
import SideBarNav from './components/base/SideBarNav.vue';
import PublicNavigation from './components/base/PublicNavigation.vue';
import Default from "./layouts/Default.vue";
import Auth from "./layouts/Auth.vue";
import Dialog from "./layouts/Dialog.vue";
import Public from "./layouts/Public.vue";
import JwPagination from 'jw-vue-pagination';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueSidebarMenu from 'vue-sidebar-menu';
Vue.use(VueSidebarMenu);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component('side-bar-nav', SideBarNav);
Vue.component('nav-buttom', Navigation);
Vue.component('public-nav', PublicNavigation);
Vue.component('default-layout', Default);
Vue.component('auth-layout', Auth);
Vue.component('dialog-layout', Dialog);
Vue.component('public-layout', Public);
Vue.component('jw-pagination', JwPagination);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
