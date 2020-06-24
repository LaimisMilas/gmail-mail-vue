import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/${path}",
        ${lowerCase}s: [],
        ${lowerCase}: {
            id:1
        },
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.${lowerCase}s.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commit${objectName}', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.${lowerCase}s.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commit${objectName}s', resp.data);
                });
        },
        create({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.${lowerCase}, rootGetters['login/header'])
                .then(resp => {
                    commit('commit${objectName}s', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.${lowerCase}, rootGetters['login/header'])
                .then(resp => {
                    commit('commit${objectName}s', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.${lowerCase}.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commit${objectName}s', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commit${objectName}s(state, ${lowerCase}s) {
            state.${lowerCase}s = ${lowerCase}s;
        },
        commit${objectName}(state, ${lowerCase}) {
            state.${lowerCase} = ${lowerCase};
        },
        commitSelected${objectName}(state, id) {
            state.selectedId = id;
        },
        commitReset${objectName}(state) {
            state.${lowerCase} = {};
        }
    }
}
