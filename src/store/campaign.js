import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl: "/api/gmail/campaigns",
        campaigns: [],
        campaign: {
            id: 1
        },
        selectedId: 0
    },
    getters:{
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
            state.campaigns.forEach(item => {
                if (item.id === state.selectedId) {
                    commit('commitCampaign', item);
                }
            });
        },
        fetchAllData({state, getters, commit}) {
            if (state.campaigns.length > 0) {
                return;
            }
            axios.get(getters["getBaseUrl"] + state.apiUrl, getters['getHeader'])
                .then(resp => {
                    commit('commitCampaigns', resp.data);
                });
        },
        fetchData({state, getters, dispatch, commit}) {
            if (state.campaigns.length > 0) {
                return;
            }
            let user = getters["getUser"];
            if (user && user.id) {
                let header = getters['getHeader'];
                axios.get(getters["getBaseUrl"] + "/api/gmail/user/" + user.id + "/campaigns", header)
                    .then(resp => {
                        commit('commitCampaigns', resp.data);
                    });
            } else {
                dispatch('login/getCurrentUser', {}, {root: true});
            }
        },
        create({state, commit, getters, dispatch}) {
            axios
                .post(getters["getBaseUrl"] + state.apiUrl, state.campaign, getters['getHeader'])
                .then(resp => {
                    commit('commitCampaigns', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, getters, dispatch}) {
            axios
                .put(getters["getBaseUrl"] + state.apiUrl, state.campaign, getters['getHeader'])
                .then(resp => {
                    commit('commitCampaigns', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, getters, dispatch}) {
            axios
                .delete(getters["getBaseUrl"] + state.apiUrl + "/" + state.campaign.id, getters['getHeader'])
                .then(resp => {
                    commit('commitCampaigns', []);
                    dispatch('fetchData');
                });
        }
    },
    mutations: {
        commitCampaigns(state, campaigns) {
            state.campaigns = campaigns;
        },
        commitCampaign(state, campaign) {
            state.campaign = campaign;
        },
        commitSelectedCampaign(state, id) {
            console.log("id: " + id)
            state.selectedId = id;
        },
        commitResetCampaign(state) {
            state.campaign = {};
        }
    }
}
