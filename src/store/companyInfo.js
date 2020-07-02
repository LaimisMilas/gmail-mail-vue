import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl: "/api/company/info",
        companyInfos: [],
        companyInfo: {},
        pageOfItems: []
    },
    getters: {
        getUser: (state, getters, rootState, rootGetters) => {
            return rootGetters["login/getUser"]
        },
        getHeader: (state, getters, rootState, rootGetters) => {
            return rootGetters['login/header'];
        },
        getBaseUrl: (state, getters, rootState, rootGetters) => {
            return rootGetters['getBaseUrl'];
        }
    },
    actions: {
        getSelected({state, commit}) {
            state.companyInfos.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitCompanyInfo', item);
                }
            });
        },
        fetchData({state, commit, getters}) {
            if (state.companyInfos.length > 0) {
                return;
            }
            axios.get(getters["getBaseUrl"] + state.apiUrl, getters['getHeader'])
                .then(resp => {
                    if (resp.status === 200) {
                        commit('commitCompanyInfos', resp.data);
                    }
                });
        },
        fetchDataByEmail({state, commit, getters}, searchQuery) {
            let url = getters["getBaseUrl"] + state.apiUrl + "/search/email/" + searchQuery;
            axios.get(url, getters['getHeader'])
                .then(resp => {
                    if (resp.status === 200) {
                        commit('commitCompanyInfos', resp.data);
                    }
                });
        },
        fetchDataInRawData({state, commit, getters}, searchQuery) {
            let url = getters["getBaseUrl"] + state.apiUrl + "/search/rawData/" + searchQuery;
            axios.get(url, getters['getHeader'])
                .then(resp => {
                    if (resp.status === 200) {
                        commit('commitCompanyInfos', resp.data);
                    }
                });
        },
        create({state, commit, dispatch, getters}) {
            let url = getters["getBaseUrl"] + state.apiUrl;
            axios
                .post(url, state.companyInfo, getters['getHeader'])
                .then(resp => {
                    if (resp.status === 200) {
                        commit('companyInfos', []);
                        dispatch('fetchData');
                    }
                });
        },
        update({state, commit, dispatch, getters}) {
            let url = getters["getBaseUrl"] + state.apiUrl;
            axios
                .put(url, state.companyInfo, getters['getHeader'])
                .then(resp => {
                    if (resp.status === 200) {
                        commit('companyInfos', []);
                        dispatch('fetchData');
                    }
                });
        },
        delete({state, commit, dispatch, getters}) {
            let url = getters["getBaseUrl"] + state.apiUrl + "/" + state.companyInfo.id;
            axios
                .delete(url, getters['getHeader'])
                .then(resp => {
                    if (resp.status === 200) {
                        commit('companyInfos', []);
                        dispatch('fetchData');
                    }
                });
        },
        filterByCode({state, commit}, code) {
            let result = null;
            if (state.companyInfos) {
                result = state.companyInfos.filter(company => company.companyCode.match(code))
            }
            commit('commitSearchResult', result);
        },
        filterByTitle({state, commit}, title) {
            let result = null;
            if (state.companyInfos) {
                result = state.companyInfos.filter(company => company.title.match(title))
            }
            commit('commitSearchResult', result);
        },
        filterInRaw({state, commit}, text) {
            let result = null;
            if (state.companyInfos) {
                result = state.companyInfos.filter((company) => {
                    let regex = new RegExp(text, "g");
                    return company.rawContacts.match(regex);
                })
            }
            commit('commitSearchResult', result);
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
        },
        commitSearchResult(state, items) {
            state.pageOfItems = items;
        },
    }
}
