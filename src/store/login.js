import axios from "axios";
import router from "../router";
import companyInfoStore from "./companyInfo";
import compRecipientListStore from "./compRecipientList";
import sendRegStore from "./sendReg";
import gmailSettingStore from "./gmailSetting";
import campaignStore from "./campaign";
import emailHTML from "./mailHTML";
import userStore from "./user";
import userRole from "./userRole";
import devSettings from "./devSettings";

export default {
    namespaced: true,
    state: {
        apiLoginUrl: "/auth/users/login",
        apiUrl: "/api/users/current",
        login: {username: "", password: ""},
        token: "",
        sessionId: "",
        user: {}
    },
    loggedIn() {
        return !!this.state.token
    },
    getters: {
        header: (state) => {
            return {
                headers: {
                    'Authorization': 'Bearer ' + state.token,
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*',
                    'Set-Cookie': 'JSESSIONID=' + state.sessionId
                }
            };
        }
    },
    actions: {
        getCurrentUser({state, commit, rootState, getters}) {
            axios.get(rootState.baseUrl + state.apiUrl, getters.header).then(resp => {
                commit('commitUser', resp.data);
                router.push({path: '/dashboard'})
            });
        },
        userLogIn({state, commit, dispatch, rootState}) {
            commit("commitDropData");
            axios
                .post(rootState.baseUrl + state.apiLoginUrl, state.login)
                .then(resp => {
                    commit('commitToken', resp.data.token);
                    commit('commitSessionId', resp.data.sessionId);
                    if (state.token || state.token.trim().length > 0) {
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
            state.token = token;
        },
        commitUser(state, user) {
            state.user = user;
        },
        commitSessionId(state, sessionId) {
            state.sessionId = sessionId;
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

