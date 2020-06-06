import Vue from 'vue';
import {sync} from 'vuex-router-sync';
import Router from 'vue-router';
import store from './store';
import login from './components/login/Login.vue';
import register from './components/login/Registration.vue';
import forgetPassword from './components/login/ForGetPassword.vue';
import Dashboard from './pages/Dashboard.vue';
import RecipientList from './pages/RecipientList';
import companyInfoList from './pages/companyInfo/List';
import companyInfoView from './pages/companyInfo/View';
import companyInfoEdit from './pages/companyInfo/Edit';
import companyInfoDelete from './pages/companyInfo/Delete';
import companyInfoAdd from './pages/companyInfo/Add';


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
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {

      path: '/recipient/list',
      name: 'RecipientList',
      component: RecipientList,
    },
   // CompanyInfo router
    {
      path: '/company/info/list',
      name: 'CompanyInfoList',
      component: companyInfoList
    },
    {
      path: '/company/info/view/:id',
      name: 'CompanyInfoView',
      component: companyInfoView,
      props: true
    },
    {
      path: '/company/info/edit/:id',
      name: 'CompanyInfoEdit',
      component: companyInfoEdit,
      props: true
    },
    {
      path: '/company/info/delete/:id',
      name: 'CompanyInfoDelete',
      component: companyInfoDelete,
      props: true
    },
    {
      path: '/company/info/add',
      name: 'CompanyInfoAdd',
      component: companyInfoAdd,
    }
    // CompanyInfo router end
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
