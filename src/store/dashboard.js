import axios from "axios";

export default {
    namespaced: true,
    state: {
        compaignIDs: [],
        gmailAPISettingId: {},
        logs: "Logs"
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
        initCompigne({commit, getters}, campaignId) {
            commit("commitLogs", "/api/do/send/init/" + campaignId);
            axios.get(getters.getBaseUrl + "/api/do/send/init/" + campaignId,
                getters['header'])
                .then(resp => {
                    commit("commitLogs", resp.data);
                }).catch(reason => {
                commit("commitLogs", reason);
            });
        },
        getServiceStatus({commit, getters}) {
            axios.get(getters.getBaseUrl + "/api/send/manager/status",
                getters['header'])
                .then(resp => {
                    //Compaigns itemsCF size: 1, Compaigns itemsCF keySet: [9], GmailAPISetting Id: 5
                    if(resp.status === 200){
                        let tmp = resp.data.split("keySet: ");
                        tmp = tmp[1].split(", GmailAPISetting Id: ");
                        let ids = tmp[0].replace('[', '');
                        ids = ids.replace(']', '');
                        ids = ids.split(',')
                        if(ids && ids.length > 0 && ids[0].trim().length > 0){
                            commit("compaignIDs",ids);
                        }
                        if(tmp.length > 0 && tmp[1]){
                            commit("gmailAPISettingId",tmp[1].trim());
                        }
                    }
                    commit("commitLogs", resp.data);
                }).catch(reason => {
                commit("commitLogs", reason);
            });
        },
        getStatus({state, commit, getters}) {
            if(state.compaignIDs[0]){
                axios.get(getters.getBaseUrl + "/api/do/send/status/" + state.compaignIDs[0],
                    getters['header'])
                    .then(resp => {
                        commit("commitLogs", resp.data);
                    }).catch(reason => {
                    commit("commitLogs", reason);
                });
            }
        },
        stopProcess({commit, getters}, campaignId) {
            axios.get(getters.getBaseUrl + "/api/do/send/stop/" + campaignId,
                getters['header'])
                .then(resp => {
                    commit("commitLogs", resp.data);
                }).catch(reason => {
                commit("commitLogs", reason);
            });
        },
        startProcess({commit, getters}, campaignId) {
            axios.get(getters.getBaseUrl + "/api/do/send/start/" + campaignId,
                getters['header'])
                .then(resp => {
                    commit("commitLogs", resp.data);
                }).catch(reason => {
                commit("commitLogs", reason);
            });
        },
        updateSendReg({commit, dispatch}) {
            commit('sendReg/commitSendRegs', []);
            dispatch('sendReg/fetchData');
        }
    },
    mutations: {
        gmailAPISettingId(state, id){
            state.gmailAPISettingId = id;
        },
        compaignIDs(state, ids){
            state.compaignIDs =  ids;
        },
        commitLogs(state, logs) {
            state.logs = logs;
        }
    }
}
