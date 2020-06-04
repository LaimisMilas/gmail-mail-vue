import Vue from 'vue';
import {sync} from 'vuex-router-sync';
import Router from 'vue-router';
import store from './store';

import profile from './components/profile/ViewUserProfile.vue';
import editProfile from './components/profile/EditUserProfile.vue';

import login from './components/login/Login.vue';
import register from './components/login/Registration.vue';
import forgetPassword from './components/login/ForGetPassword.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/forget/password',
      name: 'forgetPassword',
      component: forgetPassword,
      meta: {layout: 'auth'}
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {layout: 'auth'}
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {layout: 'auth'}
    },
    {
      path: '/profile/edit',
      name: 'editProfile',
      component: editProfile,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
    }
  ],
});

router.beforeEach((to, from, next) => {
  //console.info("router.beforeEach - ", store.state.login.token);
  if (!store.state.login.token) {
    if (to.path === '/login' || to.path === '/forget/password' || to.path === "/register") {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      });
    }
  } else {
    next();
  }
});

sync(store, router);

export default router;
