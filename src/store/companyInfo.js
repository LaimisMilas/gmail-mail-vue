import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl: "/api/company/info",
        companyInfos: [],
        companyInfo: {}
    },
    actions: {
        getSelected({state, commit}) {
            state.companyInfos.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitCompanyInfo', item);
                }
            });
        },
        fetchData({state, commit, rootState, rootGetters}) {
            if(state.companyInfos.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitCompanyInfos', resp.data);
                });
        },
        create({state, commit, dispatch, rootState, rootGetters}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.companyInfo, rootGetters['login/header'])
                .then(resp => {
                    commit('companyInfos', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, dispatch, rootState, rootGetters}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.companyInfo, rootGetters['login/header'])
                .then(resp => {
                    commit('companyInfos', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, dispatch, rootState, rootGetters}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.companyInfo.id, rootGetters['login/header'])
                .then(resp => {
                    commit('companyInfos', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitCompanyInfos(state, companyInfos) {
            state.companyInfos = companyInfos;
        },
        commitCompanyInfo(state, companyInfo) {
            state.companyInfo = companyInfo;
        },
        commitSelectedCompanyInfo(state, id) {
            state.selectedId = id;
        },
        commitResetCompanyInfo(state) {
            state.companyInfo = {};
        }
    }
}
