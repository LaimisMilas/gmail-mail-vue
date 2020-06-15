import Vue from 'vue';
import Vuex from 'vuex';
import loginStore from './login.js';
import companyInfoStore from './companyInfo.js';
import compRecipientListStore from './compRecipientList.js';
import sendRegStore from './sendReg.js';
import gmailSettingStore from './gmailSetting.js';
import campaignStore from './campaign.js';
import emailHTML from './mailHTML.js';
import userStore from './user.js';
import userRole from "./userRole.js";
import devSettings from "./devSettings.js"

Vue.use(Vuex)

let state = {
    //baseUrl: 'https://gmail-mail-sb.herokuapp.com',
    //baseUrl: 'http://127.0.0.1:8080'
    baseUrl: 'http://192.168.1.5:8080'
}

const store = new Vuex.Store({
    state,
    modules: {
        login: loginStore,
        companyInfo: companyInfoStore,
        compRecipientList: compRecipientListStore,
        sendReg: sendRegStore,
        gmailSetting: gmailSettingStore,
        campaign: campaignStore,
        emailHTML: emailHTML,
        user: userStore,
        userRole: userRole,
        devSettings: devSettings
    }
});

export default store;
