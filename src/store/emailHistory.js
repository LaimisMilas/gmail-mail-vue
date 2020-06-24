import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api//email/historys",
        emailHistorys: [],
        emailHistory: {
            id:1
        },
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.emailHistorys.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitEmailHistory', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.emailHistorys.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmailHistorys', resp.data);
                });
        },
        create({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.emailHistory, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmailHistorys', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.emailHistory, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmailHistorys', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.emailHistory.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmailHistorys', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitEmailHistorys(state, emailHistorys) {
            state.emailHistorys = emailHistorys;
        },
        commitEmailHistory(state, emailHistory) {
            state.emailHistory = emailHistory;
        },
        commitSelectedEmailHistory(state, id) {
            state.selectedId = id;
        },
        commitResetEmailHistory(state) {
            state.emailHistory = {};
        }
    }
}
