import Vue from 'vue';
import {sync} from 'vuex-router-sync';
import Router from 'vue-router';
import store from './store';

import Dashboard from './pages/Dashboard.vue';

import login from './components/login/Login.vue';
import register from './components/login/Registration.vue';
import forgetPassword from './components/login/ForGetPassword.vue';

import companyInfoList from './pages/companyInfo/List';
import companyInfoView from './pages/companyInfo/View';
import companyInfoEdit from './pages/companyInfo/Edit';
import companyInfoDelete from './pages/companyInfo/Delete';
import companyInfoAdd from './pages/companyInfo/Add';

import compRecipientList from './pages/compRecipientList/List';
import compRecipientListView from './pages/compRecipientList/View';
import compRecipientListEdit from './pages/compRecipientList/Edit';
import compRecipientListDelete from './pages/compRecipientList/Delete';
import compRecipientListAdd from './pages/compRecipientList/Add';

import sendRegList from './pages/sendReg/List';
import sendRegView from './pages/sendReg/View';
import sendRegEdit from './pages/sendReg/Edit';
import sendRegDelete from './pages/sendReg/Delete';
import sendRegAdd from './pages/sendReg/Add';

import gmailSettingList from './pages/gmailSetting/List';
import gmailSettingView from './pages/gmailSetting/View';
import gmailSettingEdit from './pages/gmailSetting/Edit';
import gmailSettingDelete from './pages/gmailSetting/Delete';
import gmailSettingAdd from './pages/gmailSetting/Add';

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
    // GmailSetting router begin
    {
      path: '/gmail/setting/list',
      name: 'GmailSettingList',
      component: gmailSettingList
    },
    {
      path: '/gmail/setting/view/:id',
      name: 'GmailSettingView',
      component: gmailSettingView,
      props: true
    },
    {
      path: '/gmail/setting/edit/:id',
      name: 'GmailSettingEdit',
      component: gmailSettingEdit,
      props: true
    },
    {
      path: '/gmail/setting/delete/:id',
      name: 'GmailSettingDelete',
      component: gmailSettingDelete,
      props: true
    },
    {
      path: '/gmail/setting/add',
      name: 'GmailSettingAdd',
      component: gmailSettingAdd,
    },
    // GmailSetting router end
    // SendReg router begin
    {
      path: '/send/reg/list',
      name: 'SendRegList',
      component: sendRegList
    },
    {
      path: '/send/reg/view/:id',
      name: 'SendRegView',
      component: sendRegView,
      props: true
    },
    {
      path: '/send/reg/edit/:id',
      name: 'SendRegEdit',
      component: sendRegEdit,
      props: true
    },
    {
      path: '/send/reg/delete/:id',
      name: 'SendRegDelete',
      component: sendRegDelete,
      props: true
    },
    {
      path: '/send/reg/add',
      name: 'SendRegAdd',
      component: sendRegAdd,
    },
    // SendReg router end
    // CompRecipientList router begin
    {
      path: '/comp/recipient/list',
      name: 'CompRecipientList',
      component: compRecipientList
    },
    {
      path: '/comp/recipient/list/view/:id',
      name: 'CompRecipientListView',
      component: compRecipientListView,
      props: true
    },
    {
      path: '/comp/recipient/list/edit/:id',
      name: 'CompRecipientListEdit',
      component: compRecipientListEdit,
      props: true
    },
    {
      path: '/comp/recipient/list/delete/:id',
      name: 'CompRecipientListDelete',
      component: compRecipientListDelete,
      props: true
    },
    {
      path: '/comp/recipient/list/add',
      name: 'CompRecipientListAdd',
      component: compRecipientListAdd,
    },
    // CompRecipientList router end
   // CompanyInfo router begin
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
