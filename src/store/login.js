import axios from "axios";
import router from "../router";

export default {
    namespaced: true,
    state: {
        apiUrl: "/auth/users",
        login: {username: "", password: ""},
        user: {},
        callAPI: true
    },
    getters: {
        header: (state, getters) => {
            return {
                headers: {
                    'Authorization': 'Bearer ' + getters.getToken,
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            };
        },
        getToken: () => {
            let result = null;
            if (localStorage.token) {
                result = localStorage.token;
            }
            return result;
        },
        getUser: (state) => {
            return state.user;
        },
        getBaseUrl: (state, getters, rootState, rootGetters) => {
            return rootGetters['getBaseUrl'] + state.apiUrl;
        }
    },
    actions: {
        getCurrentUser({commit, getters, rootGetters}) {
            axios.get(rootGetters['getBaseUrl'] +"/api/users/current", getters.header)
                .then(resp => {
                    if (resp.status === 200) {
                        commit('commitUser', resp.data);
                        router.push({path: '/dashboard'})
                    }
                });
        },
        userLogIn({state, commit, dispatch, getters}) {
            commit("commitDropData");
            axios
                .post(getters.getBaseUrl + "/login", state.login)
                .then(resp => {
                    if (resp.status === 200) {
                        commit('commitToken', resp.data.token);
                        if (getters.getToken || getters.getToken.trim().length > 0) {
                            dispatch('getCurrentUser');
                        } else {
                            router.push({path: '/login'});
                        }
                    }
                });
        },
        userRegister({getters}, user) {
            console.log(user);
            axios
                .post(getters.getBaseUrl + "/register", user)
                .then(resp => {
                    if (resp.status === 200) {
                        router.push({path: '/login'});
                    }
                });
        }
    },
    mutations: {
        commitToken(state, token) {
            localStorage.token = token;
        },
        commitUser(state, user) {
            state.user = user;
        },
        commitCallAPI(state, value) {
            state.callAPI = value;
        },
        commitDropData() {
            this.commit("campaign/commitCampaigns", []);
            this.commit("campaign/commitCampaign", {});
            this.commit("companyInfo/commitCompanyInfos", []);
            this.commit("companyInfo/commitCompanyInfo", {});
            this.commit("compRecipientList/commitCompRecipientLists", []);
            this.commit("compRecipientList/commitCompRecipientList", {});
            this.commit("sendReg/commitSendRegs", []);
            this.commit("sendReg/commitSendReg", {});
            this.commit("gmailSetting/commitGmailSettings", []);
            this.commit("gmailSetting/commitGmailSetting", {});
            this.commit("campaign/commitCampaigns", []);
            this.commit("campaign/commitCampaign", {});
            this.commit("emailHTML/commitEmailHTMLs", []);
            this.commit("emailHTML/commitEmailHTML", {});
            this.commit("user/commitUsers", []);
            this.commit("user/commitUser", {});
            this.commit("userRole/commitUserRoles", []);
            this.commit("userRole/commitUserRole", {});
        }
    }
}

