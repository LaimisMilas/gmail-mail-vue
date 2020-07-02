import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/users",
        users: [],
        user: {
            id:1
        },
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.users.forEach(item => {
                console.log("item.id: " + item.id)
                if (item.id === state.selectedId) {
                    commit('commitUser', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.users.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    resp.data.forEach(item=> {
                        if(item.roles.length === 0){
                            item.roles[0] = {
                                id:0,
                                role:"NONE"
                            }
                        }
                        if(!item.userName){
                            item.userName = "";
                        }
                    });
                    commit('commitUsers', resp.data);
                });
        },
        create({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.user, rootGetters['login/header'])
                .then(resp => {
                    commit('commitUsers', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.user, rootGetters['login/header'])
                .then(resp => {
                    commit('commitUsers', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.user.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commitUsers', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitUsers(state, users) {
            state.users = users;
        },
        commitUser(state, user) {
            state.user = user;
        },
        commitSelectedUser(state, id) {
            state.selectedId = id;
        },
        commitResetUser(state) {
            state.user = {};
        }
    }
}
