import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/persons",
        personas: [],
        persona: {
            id:1
        },
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.personas.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitPersona', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.personas.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitPersonas', resp.data);
                });
        },
        create({state, commit, rootGetters, dispatch, rootState}) {
            console.log(JSON.stringify(state.persona));
            axios
                .post(rootState.baseUrl + state.apiUrl, state.persona, rootGetters['login/header'])
                .then(resp => {
                    commit('commitPersonas', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.persona, rootGetters['login/header'])
                .then(resp => {
                    commit('commitPersonas', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.persona.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commitPersonas', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitPersonas(state, personas) {
            state.personas = personas;
        },
        commitPersona(state, persona) {
            state.persona = persona;
        },
        commitSelectedPersona(state, id) {
            state.selectedId = id;
        },
        commitResetPersona(state) {
            state.persona = {};
        },
        commitReset(state) {
            state.persona = {};
            state.personas = [];
        }
    }
}
