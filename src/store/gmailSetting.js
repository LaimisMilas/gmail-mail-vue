import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/gmail/api/setting",
        gmailSettings: [],
        gmailSetting: {},
        selectedId: 0
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
            console.log(rootGetters['login/header']);
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitGmailSettings', resp.data);
                });
        },
        create({state, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.gmailSetting, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        },
        update({state, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.gmailSetting, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        },
        delete({state, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + state.gmailSetting.id, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
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
        }
    }
}
