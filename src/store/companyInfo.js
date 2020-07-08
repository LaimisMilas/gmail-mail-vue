import axios from 'axios';

export default {
    namespaced: true,
    state: {
        apiUrl: '/api/company/info',
        companyInfos: [],
        companyInfo: {},
        pageOfItems: []
    },
    getters: {
        getUser: (state, getters, rootState, rootGetters) => {
            return rootGetters['login/getUser']
        },
        getHeader: (state, getters, rootState, rootGetters) => {
            return rootGetters['login/header'];
        },
        getBaseUrl: (state, getters, rootState, rootGetters) => {
            return rootGetters['getBaseUrl'] + state.apiUrl;
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
        fetchData({commit, getters}) {
            axios.get(getters.getBaseUrl, getters.getHeader)
                .then(resp => {
                    if (resp.status === 200) {
                        commit('commitCompanyInfos', resp.data.slice(0,10));
                    }
                });
        },
        fetchDataByEmail({commit, getters}, searchQuery) {
            let url = getters.getBaseUrl + "/search/email/" + searchQuery;
            axios.get(url, getters.getHeader)
                .then(resp => {
                    if (resp.status === 200) {
                        commit('commitCompanyInfos', resp.data);
                    }
                });
        },
        fetchDataInRawData({commit, getters}, searchQuery) {
            let url = getters.getBaseUrl + '/search/rawData/' + searchQuery;
            axios.get(url, getters.getHeader)
                .then(resp => {
                    if (resp.status === 200) {
                        commit('commitCompanyInfos', resp.data);
                    }
                });
        },
        create({state, commit, dispatch, getters}) {
            axios
                .post(getters.getBaseUrl, state.companyInfo, getters.getHeader)
                .then(resp => {
                    if (resp.status === 200) {
                        commit('companyInfos', []);
                        dispatch('fetchData');
                    }
                });
        },
        update({state, commit, dispatch, getters}) {
            axios
                .put(getters.getBaseUrl, state.companyInfo, getters.getHeader)
                .then(resp => {
                    if (resp.status === 200) {
                        commit('companyInfos', []);
                        dispatch('fetchData');
                    }
                });
        },
        delete({state, commit, dispatch, getters}) {
            let url = getters.getBaseUrl + "/" + state.companyInfo.id;
            axios
                .delete(url, getters.getHeader)
                .then(resp => {
                    if (resp.status === 200) {
                        commit('companyInfos', []);
                        dispatch('fetchData');
                        dispatch
                    }
                });
        },
        filterByCode({state, commit, dispatch}, code) {
            dispatch('fetchData')
                .then(resp => {
                    let result = null;
                    dispatch
                    if (state.companyInfos) {
                        result = state.companyInfos.filter(company => company.companyCode.match(code))
                    }
                    commit('commitSearchResult', result);
                });
        },
        filterByTitle({state, commit, dispatch}, title) {
            dispatch('fetchData')
                .then(resp => {
                    let result = null;
                    if (state.companyInfos) {
                        result = state.companyInfos.filter(company => company.title.match(title))
                    }
                    commit('commitSearchResult', result);
                })
        },
        filterInRaw({state, commit}, text) {
            let result = null;
            if (state.companyInfos) {
                result = state.companyInfos.filter((company) => {
                    if (company.rawContacts) {
                        let regex = new RegExp(text, "g");
                        return company.rawContacts.match(regex);
                    }
                    return false;
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
            state.companyInfos = items;
        },
        commitReset(state) {
            state.companyInfo = {};
            state.companyInfos = [];
        }
    }
}
