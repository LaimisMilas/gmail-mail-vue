import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/send/regs",
        sendRegs: [],
        sendReg: {},
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.sendRegs.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitSendReg', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            console.log(rootGetters['login/header']);
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitSendRegs', resp.data);
                });
        },
        create({state, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.sendReg, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        },
        update({state, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.sendReg, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        },
        delete({state, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + state.sendReg.id, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitSendRegs(state, sendRegs) {
            state.sendRegs = sendRegs;
        },
        commitSendReg(state, sendReg) {
            state.sendReg = sendReg;
        },
        commitSelectedSendReg(state, id) {
            state.selectedId = id;
        },
        commitResetSendReg(state) {
            state.sendReg = {};
        }
    }
}
