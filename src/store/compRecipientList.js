import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl: "/api/company/info/recipients",
        compRecipientLists: [],
        compRecipientList: {},
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}){
            state.compRecipientLists.forEach(item => {
               if(item.id === state.selectedId){
                   commit('commitCompRecipientList', item);
               }
            });
        },
        fetchAllData({state, commit, rootGetters, rootState}) {

            if (state.compRecipientLists.length > 0) {
                return;
            }

            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitCompRecipientLists', resp.data);
                });
        },
        fetchData({state, commit, rootGetters, rootState}) {

            if (state.compRecipientLists.length > 0) {
                return;
            }

            axios.get(rootState.baseUrl + "/api/company/info/user/" +
                rootState.login.user.id + "/recipients", rootGetters['login/header'])
                .then(resp => {
                    commit('commitCompRecipientLists', resp.data);
                });
        },
        create({state, dispatch, commit, rootState, rootGetters}) {
            commit('commitRecipients', this.state.companyInfo.companyInfos);
                axios
                .post(rootState.baseUrl + state.apiUrl, state.compRecipientList,
                    rootGetters['login/header'])
                .then(resp => {
                    commit('commitCompRecipientLists',[]);
                    dispatch('fetchData');
                });
        },
        update({state, dispatch, rootState, rootGetters}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.compRecipientList, rootGetters['login/header'])
                .then(resp => {
                    commit('commitCompRecipientLists',[]);
                    dispatch('fetchData');
                });
        },
        delete({rootGetters, state, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.compRecipientList.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commitCompRecipientLists',[]);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitCompRecipientLists(state, compRecipientLists) {
            state.compRecipientLists = compRecipientLists;
        },
        commitCompRecipientList(state, compRecipientList) {
            state.compRecipientList = compRecipientList;
        },
        commitSelectedRecipientList(state, id) {
            state.selectedId = id;
        },
        commitReset(state) {
            state.compRecipientList = {};
            state.compRecipientLists = [];
        },
        commitRecipients(state, recipients) {
            state.compRecipientList.recipients = recipients;
        }
    }
}
