import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/phone/numbers",
        phoneNumbers: [],
        phoneNumber: {
            id:1
        },
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.phoneNumbers.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitPhoneNumber', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.phoneNumbers.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitPhoneNumbers', resp.data);
                });
        },
        create({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.phoneNumber, rootGetters['login/header'])
                .then(resp => {
                    commit('commitPhoneNumbers', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.phoneNumber, rootGetters['login/header'])
                .then(resp => {
                    commit('commitPhoneNumbers', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.phoneNumber.id, rootGetters['login/header'])
                .then(resp => {
                    commit('commitPhoneNumbers', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitPhoneNumbers(state, phoneNumbers) {
            state.phoneNumbers = phoneNumbers;
        },
        commitPhoneNumber(state, phoneNumber) {
            state.phoneNumber = phoneNumber;
        },
        commitSelectedPhoneNumber(state, id) {
            state.selectedId = id;
        },
        commitResetPhoneNumber(state) {
            state.phoneNumber = {};
        },
        commitReset(state) {
            state.phoneNumber = {};
            state.phoneNumbers = [];
        }
    }
}
