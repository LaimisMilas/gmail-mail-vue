import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/userroles",
        userRoles: [],
        userRole: {
            id:1
        },
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.userRoles.forEach(item => {
                console.log("item.id: " + item.id)
                if (item.id === state.selectedId) {
                    commit('commitUserRole', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.userRoles.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitUserRoles', resp.data);
                });
        },
        create({state, commit, rootGetters, dispatch, rootState}) {
            console.log(state.userRole);
            axios
                .post(rootState.baseUrl + state.apiUrl, state.userRole, rootGetters['login/header'])
                .then(resp => {
                    commit('commitUserRoles', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.userRole, rootGetters['login/header'])
                .then(resp => {
                    commit('commitUserRoles', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.userRole.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commitUserRoles', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitUserRoles(state, userRoles) {
            state.userRoles = userRoles;
        },
        commitUserRole(state, userRole) {
            state.userRole = userRole;
        },
        commitSelectedUserRole(state, id) {
            state.selectedId = id;
        },
        commitResetUserRole(state) {
            state.userRole = {};
        }
    }
}
