import Vue from 'vue';
import {sync} from 'vuex-router-sync';
import Router from 'vue-router';
import store from './store';

import gmailCallBack from "./utils/GmailCallBack.vue";

import Dashboard from './pages/Dashboard.vue';
import home from './pages/public/Home.vue';
import login from './pages/public/Login.vue';
import register from './pages/public/Registration.vue';
import forgetPassword from './pages/public/ForGetPassword.vue';

import companyInfoList from './pages/companyInfo/List.vue';
import companyInfoView from './pages/companyInfo/View.vue';
import companyInfoEdit from './pages/companyInfo/Edit.vue';
import companyInfoDelete from './pages/companyInfo/Delete.vue';
import companyInfoAdd from './pages/companyInfo/Add.vue';

import compRecipientList from './pages/compRecipientList/List.vue';
import compRecipientListView from './pages/compRecipientList/View.vue';
import compRecipientListEdit from './pages/compRecipientList/Edit.vue';
import compRecipientListDelete from './pages/compRecipientList/Delete.vue';
import compRecipientListAdd from './pages/compRecipientList/Add.vue';

import sendRegList from './pages/sendReg/List.vue';
import sendRegView from './pages/sendReg/View.vue';
import sendRegEdit from './pages/sendReg/Edit.vue';
import sendRegDelete from './pages/sendReg/Delete.vue';
import sendRegAdd from './pages/sendReg/Add.vue';

import campaignList from './pages/campaign/List.vue';
import campaignView from './pages/campaign/View.vue';
import campaignRegListView from './pages/campaign/sendReg/List.vue';
import campaignMailHTMLView from './pages/campaign/mailHTML/View.vue';
import campaignRecipientListView from './pages/campaign/compRecipientList/View.vue'
import campaignEdit from './pages/campaign/Edit.vue';
import campaignDelete from './pages/campaign/Delete.vue';
import campaignAdd from './pages/campaign/Add.vue';

import userList from './pages/user/List.vue';
import userView from './pages/user/View.vue';
import userEdit from './pages/user/Edit.vue';
import userDelete from './pages/user/Delete.vue';
import userAdd from './pages/user/Add.vue';

import userRoleList from './pages/userRole/List.vue';
import userRoleView from './pages/userRole/View.vue';
import userRoleEdit from './pages/userRole/Edit.vue';
import userRoleDelete from './pages/userRole/Delete.vue';
import userRoleAdd from './pages/userRole/Add.vue';

import mailHTMLList from './pages/mailHTML/List.vue';
import mailHTMLView from './pages/mailHTML/View.vue';
import mailHTMLEdit from './pages/mailHTML/Edit.vue';
import mailHTMLDelete from './pages/mailHTML/Delete.vue';
import mailHTMLAdd from './pages/mailHTML/Add.vue';

import gmailSettingList from './pages/gmailSetting/List.vue';
import gmailSettingView from './pages/gmailSetting/View.vue';
import gmailSettingEdit from './pages/gmailSetting/Edit.vue';
import gmailSettingDelete from './pages/gmailSetting/Delete.vue';
import gmailSettingAdd from './pages/gmailSetting/Add.vue';
import gmailLoginCallBack from './pages/gmailSetting/GmailLoginCallBack.vue'

import personaList from './pages/persona/List.vue';
import personaView from './pages/persona/View.vue';
import personaEdit from './pages/persona/Edit.vue';
import personaDelete from './pages/persona/Delete.vue';
import personaAdd from './pages/persona/Add.vue';

import phoneNumberList from './pages/phoneNumber/List.vue';
import phoneNumberView from './pages/phoneNumber/View.vue';
import phoneNumberEdit from './pages/phoneNumber/Edit.vue';
import phoneNumberDelete from './pages/phoneNumber/Delete.vue';
import phoneNumberAdd from './pages/phoneNumber/Add.vue';

import phoneNumberHistoryList from './pages/phoneNumberHistory/List.vue';
import phoneNumberHistoryView from './pages/phoneNumberHistory/View.vue';
import phoneNumberHistoryEdit from './pages/phoneNumberHistory/Edit.vue';
import phoneNumberHistoryDelete from './pages/phoneNumberHistory/Delete.vue';
import phoneNumberHistoryAdd from './pages/phoneNumberHistory/Add.vue';

import emailList from './pages/email/List.vue';
import emailView from './pages/email/View.vue';
import emailEdit from './pages/email/Edit.vue';
import emailDelete from './pages/email/Delete.vue';
import emailAdd from './pages/email/Add.vue';

import emailHistoryList from './pages/emailHistory/List.vue';
import emailHistoryView from './pages/emailHistory/View.vue';
import emailHistoryEdit from './pages/emailHistory/Edit.vue';
import emailHistoryDelete from './pages/emailHistory/Delete.vue';
import emailHistoryAdd from './pages/emailHistory/Add.vue';

import relationLinkList from './pages/relationLink/List.vue';
import relationLinkView from './pages/relationLink/View.vue';
import relationLinkEdit from './pages/relationLink/Edit.vue';
import relationLinkDelete from './pages/relationLink/Delete.vue';
import relationLinkAdd from './pages/relationLink/Add.vue';

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
            path: '/logout',
            name: 'logOut',
            component: home,
            meta: {layout: 'public'}
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/',
            name: 'Home',
            component: home,
            meta: {layout: 'public'}
        },
        // GmailSetting router begin
        {
            path: '/auth/login/gmailCallback/:code',
            name: 'GmailLoginCallBack',
            component: gmailLoginCallBack
        },
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
        // Persona router begin
        {
            path: '/persona/list',
            name: 'PersonaList',
            component: personaList
        },
        {
            path: '/persona/view/:id',
            name: 'PersonaView',
            component: personaView,
            props: true
        },
        {
            path: '/persona/edit/:id',
            name: 'PersonaEdit',
            component: personaEdit,
            props: true
        },
        {
            path: '/persona/delete/:id',
            name: 'PersonaDelete',
            component: personaDelete,
            props: true
        },
        {
            path: '/persona/add',
            name: 'PersonaAdd',
            component: personaAdd,
        },
        // Persona router end
        // RelationLink router begin
        {
            path: '/relation/link/list',
            name: 'RelationLinkList',
            component: relationLinkList,
        },
        {
            path: '/relation/link/view/:id',
            name: 'RelationLinkView',
            component: relationLinkView,
            props: true
        },
        {
            path: '/relation/link/edit/:id',
            name: 'RelationLinkEdit',
            component: relationLinkEdit,
            props: true
        },
        {
            path: '/relation/link/delete/:id',
            name: 'RelationLinkDelete',
            component: relationLinkDelete,
            props: true
        },
        {
            path: '/relation/link/add',
            name: 'RelationLinkAdd',
            component: relationLinkAdd,
        },
        // RelationLink router end
        // Email router begin
        {
            path: '/email/list',
            name: 'EmailList',
            component: emailList,
        },
        {
            path: '/email/view/:id',
            name: 'EmailView',
            component: emailView,
            props: true
        },
        {
            path: '/email/edit/:id',
            name: 'EmailEdit',
            component: emailEdit,
            props: true
        },
        {
            path: '/email/delete/:id',
            name: 'EmailDelete',
            component: emailDelete,
            props: true
        },
        {
            path: '/email/add',
            name: 'EmailAdd',
            component: emailAdd,
        },
// Email router end
        // PhoneNumberHistory
        {
            path: '/phone/number/history/list',
            name: 'PhoneNumberHistoryList',
            component: phoneNumberHistoryList,
        },
        {
            path: '/phone/number/history/view/:id',
            name: 'PhoneNumberHistoryView',
            component: phoneNumberHistoryView,
            props: true
        },
        {
            path: '/phone/number/history/edit/:id',
            name: 'PhoneNumberHistoryEdit',
            component: phoneNumberHistoryEdit,
            props: true
        },
        {
            path: '/phone/number/history/delete/:id',
            name: 'PhoneNumberHistoryDelete',
            component: phoneNumberHistoryDelete,
            props: true
        },
        {
            path: '/phone/number/history/add',
            name: 'PhoneNumberHistoryAdd',
            component: phoneNumberHistoryAdd,
        },
        // PhoneNumberHistory router end
        // PhoneNumber router begin

        {
            path: '/phone/number/list',
            name: 'PhoneNumberList',
            component: phoneNumberList
        },
        {
            path: '/phone/number/view/:id',
            name: 'PhoneNumberView',
            component: phoneNumberView,
            props: true
        },
        {
            path: '/phone/number/edit/:id',
            name: 'PhoneNumberEdit',
            component: phoneNumberEdit,
            props: true
        },
        {
            path: '/phone/number/delete/:id',
            name: 'PhoneNumberDelete',
            component: phoneNumberDelete,
            props: true
        },
        {
            path: '/phone/number/add',
            name: 'PhoneNumberAdd',
            component: phoneNumberAdd,
        },
        // PhoneNumber router end
        // User router begin
        {
            path: '/user/list',
            name: 'UserList',
            component: userList
        },
        {
            path: '/user/view/:id',
            name: 'UserView',
            component: userView,
            props: true
        },
        {
            path: '/user/edit/:id',
            name: 'UserEdit',
            component: userEdit,
            props: true
        },
        {
            path: '/user/delete/:id',
            name: 'UserDelete',
            component: userDelete,
            props: true
        },
        {
            path: '/user/add',
            name: 'UserAdd',
            component: userAdd,
        },
        // User router end
        // EmailHistory router begin
        {
            path: '/email/history/list',
            name: 'EmailHistoryList',
            component: emailHistoryList,
        },
        {
            path: '/email/history/view/:id',
            name: 'EmailHistoryView',
            component: emailHistoryView,
            props: true
        },
        {
            path: '/email/history/edit/:id',
            name: 'EmailHistoryEdit',
            component: emailHistoryEdit,
            props: true
        },
        {
            path: '/email/history/delete/:id',
            name: 'EmailHistoryDelete',
            component: emailHistoryDelete,
            props: true
        },
        {
            path: '/email/history/add',
            name: 'EmailHistoryAdd',
            component: emailHistoryAdd,
        },
// EmailHistory router end
        // UserRole router begin
        {
            path: '/user/role/list',
            name: 'UserRoleList',
            component: userRoleList
        },
        {
            path: '/user/role/view/:id',
            name: 'UserRoleView',
            component: userRoleView,
            props: true
        },
        {
            path: '/user/role/edit/:id',
            name: 'UserRoleEdit',
            component: userRoleEdit,
            props: true
        },
        {
            path: '/user/role/delete/:id',
            name: 'UserRoleDelete',
            component: userRoleDelete,
            props: true
        },
        {
            path: '/user/role/add',
            name: 'UserRoleAdd',
            component: userRoleAdd,
        },
        // UserRole router end
        // EmailHTML router begin
        {
            path: '/email/html/list',
            name: 'EmailHTMLList',
            component: mailHTMLList
        },
        {
            path: '/email/html/view/:id',
            name: 'EmailHTMLView',
            component: mailHTMLView,
            props: true
        },
        {
            path: '/email/html/edit/:id',
            name: 'EmailHTMLEdit',
            component: mailHTMLEdit,
            props: true
        },
        {
            path: '/email/html/delete/:id',
            name: 'EmailHTMLDelete',
            component: mailHTMLDelete,
            props: true
        },
        {
            path: '/mail/html/add',
            name: 'EmailHTMLAdd',
            component: mailHTMLAdd,
        },
        // EmailHTML router end
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
        },
        // CompanyInfo router end
        // Campaign router begin
        {
            path: '/campaign/list',
            name: 'CampaignList',
            component: campaignList
        },
        {
            path: '/campaign/view/:id',
            name: 'CampaignView',
            component: campaignView,
            props: true
        },
        {
            path: '/campaign/reg/list/view',
            name: 'CampaignRegListView',
            component: campaignRegListView,
            props: true
        },
        {
            path: '/campaign/mail/html/view/:id',
            name: 'CampaignMailHTMLView',
            component: campaignMailHTMLView,
            props: true
        },
        {
            path: '/campaign/recipient/list/view/:id',
            name: 'CampaignRecipientListView',
            component: campaignRecipientListView,
            props: true
        },
        {
            path: '/campaign/edit/:id',
            name: 'CampaignEdit',
            component: campaignEdit,
            props: true
        },
        {
            path: '/campaign/delete/:id',
            name: 'CampaignDelete',
            component: campaignDelete,
            props: true
        },
        {
            path: '/campaign/add',
            name: 'CampaignAdd',
            component: campaignAdd,
        }
        // Campaign router end
        ,{
            path: '/callback',
            name: 'GmailCallBack',
            component: gmailCallBack,
            props: (route) => ({ code: route.query.code , scope: route.query.scope})
        }
    ],
});

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('token')) {
        if (to.path === '/' || to.path === '/login'|| to.path === '/logout' || to.path === '/forget/password' || to.path === "/register") {
            next();1
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
