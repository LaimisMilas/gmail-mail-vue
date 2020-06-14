import axios from "axios";

export default {
    namespaced: true,
    state: {
        apiUrl:"/api/gmail/campaigns",
        campaigns: [],
        campaign: {
            id:1
        },
        selectedId: 0
    },
    actions: {
        getSelected({state, commit}) {
            state.campaigns.forEach(item => {
                console.log("item.id: " + item.id)
                if (item.id === state.selectedId) {
                    commit('commitCampaign', item);
                }
            });
        },
        fetchData({state, rootGetters, commit, rootState}) {
            if(state.campaigns.length > 0){
                return;
            }
            axios.get(rootState.baseUrl + state.apiUrl, rootGetters['login/header'])
                .then(resp => {
                    commit('commitCampaigns', resp.data);
                });
        },
        create({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .post(rootState.baseUrl + state.apiUrl, state.campaign, rootGetters['login/header'])
                .then(resp => {
                    commit('commitCampaigns', []);
                    dispatch('fetchData');
                });
        },
        update({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .put(rootState.baseUrl + state.apiUrl, state.campaign, rootGetters['login/header'])
                .then(resp => {
                    commit('commitCampaigns', []);
                    dispatch('fetchData');
                });
        },
        delete({state, commit, rootGetters, dispatch, rootState}) {
            axios
                .delete(rootState.baseUrl + state.apiUrl + "/" + state.campaign.id, rootGetters['login/header'])
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
