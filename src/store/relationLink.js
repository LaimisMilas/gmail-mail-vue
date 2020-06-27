import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/relation/links",
        relationLinks: [],
        relationLink: {
            id:1
        },
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.relationLinks.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitRelationLink', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.relationLinks.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitRelationLinks', resp.data);
                });
        },
        create({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.relationLink, rootGetters['login/header'])
                .then(resp => {
                    commit('commitRelationLinks', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.relationLink, rootGetters['login/header'])
                .then(resp => {
                    commit('commitRelationLinks', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.relationLink.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commitRelationLinks', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitRelationLinks(state, relationLinks) {
            state.relationLinks = relationLinks;
        },
        commitRelationLink(state, relationLink) {
            state.relationLink = relationLink;
        },
        commitSelectedRelationLink(state, id) {
            state.selectedId = id;
        },
        commitResetRelationLink(state) {
            state.relationLink = {};
        }
    }
}
