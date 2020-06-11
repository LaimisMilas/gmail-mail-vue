import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl: "/api/company/info",
        companyInfos: [],
        companyInfo: {}
    },
    actions: {
        fetchData({state, commit, rootState, rootGetters}) {
            if(state.companyInfos.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitCompanyInfos', resp.data);
                });
        },
        create({state, dispatch, rootState, rootGetters}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.companyInfo, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        },
        update({state, dispatch, rootState, rootGetters}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.companyInfo, rootGetters['login/header'])
                .then(resp => {
                    dispatch('fetchData');
                });
        },
        delete({state, dispatch, rootState, rootGetters}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + state.companyInfo.id, rootGetters['login/header'])
                .then(resp => {
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
        commitResetCompanyInfo(state) {
            state.companyInfo = {};
        }
    }
}
