import axios from "axios";

export default {
    namespaced: true,
    state: {
        companyInfos: [],
        companyInfo: {}
    },
    getters: {
        header: state => {
            return {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.login.token
                }
            }
        }
    },
    actions: {
        fetchData({state, commit, rootState}) {

            if(!state.companyInfos.length === 0){
                return;
            }

            axios.get(rootState.baseUrl + "/api/company/info",
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.state.login.token,
                        'Content-Type': 'application/json',
                        'Set-Cookie': 'JSESSIONID=' + this.state.login.sessionId
                    }
                }
            )
                .then(resp => {
                    this.commit('companyInfo/commitCompanyInfos', resp.data);
                });
        },
        create({state, commit, rootState}) {
            axios
                .post(rootState.baseUrl + "/api/company/info", state.companyInfo, this.getters.header)
                .then(resp => {
                    this.dispatch('companyInfo/fetchData');
                });
        },
        update({state, commit, rootState}) {
            axios
                .put(rootState.baseUrl + "/api/company/info", state.companyInfo, this.getters.header)
                .then(resp => {
                    this.dispatch('companyInfo/fetchData');
                });
        },
        delete({state, commit, rootState}) {
            axios
                .delete(rootState.baseUrl + "/api/company/info/" + state.companyInfo.id, this.getters.header)
                .then(resp => {
                    this.dispatch('companyInfo/fetchData');
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
