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
            if (localStorage.getItem("token")) {
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
            console.log("before call api/users/current" + JSON.stringify(getters.header));

            axios.get(rootGetters['getBaseUrl'] +"/api/users/current", getters.header)
                .then(resp => {
                    console.log("response call api/users/current");
                    if (resp.status === 200) {
                        console.log("response" + JSON.stringify(resp.data));
                        commit('commitUser', resp.data);
                        router.push({path: '/dashboard'})
                    }
                });
        },
        userLogIn({state, commit, dispatch, getters}) {
            commit("commitDropData");
            console.log("before login post " + JSON.stringify(state.login));
            axios
                .post(getters.getBaseUrl + "/login", state.login)
                .then(resp => {
                    if (resp.status === 200) {
                        console.log(resp.data.token);
                        commit('commitToken', resp.data.token);
                        if (getters.getToken || getters.getToken.trim().length > 0) {
                            console.log("before dispatch getCurrentUser");
                            dispatch('getCurrentUser');
                        } else {
                            console.log("before get routing to login");
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
            localStorage.setItem("token", token);
            //localStorage.token = token;
        },
        commitUser(state, user) {
            state.user = user;
        },
        commitCallAPI(state, value) {
            state.callAPI = value;
        },
        commitDropData(state) {
            if(localStorage.getItem("token")){
                localStorage.removeItem("token");
            }
            state.user = {};
            this.commit("campaign/commitReset");
            this.commit("companyInfo/commitReset");
            this.commit("compRecipientList/commitReset");
            this.commit("sendReg/commitReset");
            this.commit("gmailSetting/commitReset");
            this.commit("campaign/commitReset");
            this.commit("emailHTML/commitReset");
            this.commit("user/commitReset");
            this.commit("userRole/commitReset");
        }
    }
}

