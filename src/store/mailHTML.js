import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/email/html",
        emailHTMLs: [],
        emailHTML: {
            id:1
        },
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.emailHTMLs.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitEmailHTML', item);
                }
            });
        },
        fetchAllData({state, rootGetters, commit, rootState}) {
            if(state.emailHTMLs.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmailHTMLs', resp.data);
                });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.emailHTMLs.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + "/api/email/user/"+ rootState.login.user.id +"/html", rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmailHTMLs', resp.data);
                });
        },
        create({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.emailHTML, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmailHTMLs', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.emailHTML, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmailHTMLs', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.emailHTML.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmailHTMLs', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitEmailHTMLs(state, emailHTMLs) {
            state.emailHTMLs = emailHTMLs;
        },
        commitEmailHTML(state, emailHTML) {
            state.emailHTML = emailHTML;
        },
        commitSelectedEmailHTML(state, id) {
            state.selectedId = id;
        },
        commitResetEmailHTML(state) {
            state.emailHTML = {};
        }
    }
}
