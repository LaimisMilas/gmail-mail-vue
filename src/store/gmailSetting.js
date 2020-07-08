import axios from "axios";
import router from "../router";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/gmail/api/setting",
        gmailSettings: [],
        gmailSetting: {},
        selectedId: 0,
        code:""
    },
    actions: {
        getSelected({state, commit}) {
            state.gmailSettings.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitGmailSetting', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.gmailSettings.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitGmailSettings', resp.data);
                });
        },
        create({state, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.gmailSetting, rootGetters['login/header'])
                .then(resp => {
                    commit('commitGmailSettings', []);
                    dispatch('fetchData');
                });
        },
        update({state, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.gmailSetting, rootGetters['login/header'])
                .then(resp => {
                    commit('commitGmailSettings', []);
                    dispatch('fetchData');
                });
        },
        delete({state, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + state.gmailSetting.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commitGmailSettings', []);
                    dispatch('fetchData');
                });
        },
        loginCallBack(state){
            axios
                .delete(rootState.baseUrl + "/auth/login/gmailCallback?code=" + state.code)
                .then(resp => {
                    router.push({path: '/'})
                });
        }
    },
    mutations: {
        commitGmailSettings(state, gmailSettings) {
            state.gmailSettings = gmailSettings;
        },
        commitGmailSetting(state, gmailSetting) {
            state.gmailSetting = gmailSetting;
        },
        commitSelectedGmailSetting(state, id) {
            state.selectedId = id;
        },
        commitResetGmailSetting(state) {
            state.gmailSetting = {};
        },
        commitGmailSettingCode(state , code) {
            state.code = code;
        },
        commitReset(state) {
            state.gmailSetting = {};
            state.gmailSettings = [];
        }

    }
}
