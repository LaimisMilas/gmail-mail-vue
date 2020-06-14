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
                console.log("item.id: " + item.id)
                if (item.id === state.selectedId) {
                    commit('commitEmailHTML', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.emailHTMLs.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitEmailHTMLs', resp.data);
                });
        },
        create({state, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.emailHTML, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        },
        update({state, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.emailHTML, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        },
        delete({state, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.emailHTML.id, rootGetters['login/header'])
                .then(resp => {
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
            console.log("id: " + id)
            state.selectedId = id;
        },
        commitResetEmailHTML(state) {
            state.emailHTML = {};
        }
    }
}
