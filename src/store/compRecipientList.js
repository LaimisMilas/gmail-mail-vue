import axios from "axios";

export default {
    namespaced: true,
    state: {
        compRecipientLists: [],
        compRecipientList: {},
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}){
            state.compRecipientLists.forEach(item => {
               if(item.id === state.selectedId){
                   commit('compRecipientList/commitCompRecipientList', item);
               }
            });
        },
        fetchData({state, commit, rootGetters, rootState}) {

            if (state.compRecipientLists.length > 0) {
                return;
            }

            axios.get(rootState.baseUrl + "/api/company/info/recipients", rootGetters['login/header'])
                .then(resp => {
                    commit('commitCompRecipientLists', resp.data);
                });
        },
        create({state,dispatch, commit, rootState, rootGetters}) {
            commit('commitRecipients', this.state.companyInfo.companyInfos);
                axios
                .post(rootState.baseUrl + "/api/company/info/recipients", state.compRecipientList,
                    rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        },
        update({state, dispatch, rootState, rootGetters}) {
            axios
                .put(rootState.baseUrl + "/api/company/info/recipients", state.compRecipientList, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        },
        delete({rootGetters, state, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + "/api/company/info/recipients" + "/" + state.compRecipientList.id, rootGetters['login/header'])
                .then(resp => {
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
        commitResetCompRecipientList(state) {
            state.compRecipientList = {};
        },
        commitRecipients(state, recipients) {
            state.compRecipientList.recipients = recipients;
        }
    }
}
