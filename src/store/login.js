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
        header: () => {
            let token = localStorage.getItem("token");
            console.log(`10 header ${token}`);
            return {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            };
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
            console.log("11 before call localStorage.token " + localStorage.getItem("token"));
            console.log("11 before call api/users/current " + JSON.stringify(getters["header"]));

            axios.get(rootGetters['getBaseUrl'] +"/api/users/current", getters["header"])
                .then(resp => {
                    console.log("12 response call api/users/current");
                    if (resp.status === 200) {
                        console.log("13 response" + JSON.stringify(resp.data));
                        commit('commitUser', resp.data);
                        router.push({path: '/dashboard'})
                    }
                });
        },
        userLogIn({state, commit, dispatch, getters}) {
            commit("commitDropData");
            console.log("1 before login post " + JSON.stringify(state.login));
            axios
                .post(getters.getBaseUrl + "/login", state.login)
                .then(resp => {
                    if (resp.status === 200) {
                        console.log("2 token after login OK: " + resp.data.token);
                        console.log("3 token after login OK before commitToken: " + localStorage.getItem('token'));
                        localStorage.setItem('token', resp.data.token);
                        console.log("4 token after login OK and commitToken: " + localStorage.getItem('token'));
                        let token = localStorage.getItem('token');
                        if (token || token.trim().length > 0) {
                            console.log("5 before dispatch getCurrentUser");
                            dispatch('getCurrentUser');
                        } else {
                            console.log("6 before get routing to login");
                            router.push({path: '/login'});
                        }
                    }
                });
        },
        userRegister({getters}, user) {
          //  console.log(user);
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
        commitToken(state, token, getters) {
            localStorage.setItem("token", token);
            console.log("7 commitToken token after setItem: " + getters["getToken"]);
        },
        commitUser(state, user) {
            state.user = user;
        },
        commitCallAPI(state, value) {
            state.callAPI = value;
        },
        commitDropData(state) {
            console.log("8 commitDropData");
            if(localStorage.getItem("token")){
                localStorage.removeItem("token");
                window.localStorage.clear();
                localStorage.clear();
            }
            console.log("9 commitDropData token after removeItem: " + localStorage.getItem("token"));
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

