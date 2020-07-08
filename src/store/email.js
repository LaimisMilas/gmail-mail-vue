import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/emails",
        emails: [],
        email: {
            id:1
        },
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.emails.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitEmail', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.emails.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmails', resp.data);
                });
        },
        create({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.email, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmails', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.email, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmails', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.email.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmails', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitEmails(state, emails) {
            state.emails = emails;
        },
        commitEmail(state, email) {
            state.email = email;
        },
        commitSelectedEmail(state, id) {
            state.selectedId = id;
        },
        commitResetEmail(state) {
            state.email = {};
        },
        commitReset(state) {
            state.email = {};
            state.emails = [];
        }
    }
}
