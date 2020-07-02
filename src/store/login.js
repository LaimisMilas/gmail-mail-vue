import axios from "axios";
import router from "../router";

export default {
    namespaced: true,
    state: {
        apiLoginUrl: "/auth/users/login",
        apiUrl: "/api/users/current",
        login: {username: "", password: ""},
        user: {},
        callAPI: true
    },
    loggedIn() {
        return !!this.state.token
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
            if(localStorage.token){
                result = localStorage.token;
            }
            return result;
        },
        getUser: (state) => {
            return state.user;
        },
    },
    actions: {
        getCurrentUser({state, commit, rootState, getters}) {
            axios.get(rootState.baseUrl + state.apiUrl, getters.header).then(resp => {
                commit('commitUser', resp.data);
                router.push({path: '/dashboard'})
            });
        },
        userLogIn({state, commit, dispatch, rootState, getters}) {
            commit("commitDropData");
            axios
                .post(rootState.baseUrl + state.apiLoginUrl, state.login)
                .then(resp => {
                    commit('commitToken', resp.data.token);
                    if (getters.getToken || getters.getToken.trim().length > 0) {
                        dispatch('getCurrentUser');
                    } else {
                        router.push({path: '/login'});
                    }
                });
        },
        userRegister({rootState}, user) {
            console.log(user);
            axios
                .post(rootState.baseUrl + "/auth/users/register", user)
                .then(resp => {
                    router.push({path: '/login'});
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

