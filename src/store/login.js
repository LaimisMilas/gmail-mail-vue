import axios from "axios";
import router from "../router";

export default {
    namespaced: true,
    state: {
        login: {username: "", password: ""},
        token: "",
        sessionId: "",
        user: {}
    },
    loggedIn() {
        return !!this.state.token
    },
    getters: {},
    actions: {
        getCurrentUser({state, commit, rootState}) {
            //console.info("toke " + JSON.stringify(this.state.login.token));
            axios.get(rootState.baseUrl + "/api/users/current", {
                headers: {
                  'Authorization': 'Bearer ' + this.state.login.token,
                  'Content-Type': 'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin': '*',
                  'Set-Cookie': 'JSESSIONID=' + this.state.login.sessionId
                }
            }).then(resp => {
                this.commit('login/commitUser', resp.data);
                router.push({path: '/'})
            });
        },
        userLogIn({state, commit, rootState}) {
            //console.info("param state.login " + JSON.stringify(state.login));
            axios
                .post(rootState.baseUrl + "/auth/users/login", state.login)
                .then(resp => {
                    this.commit('login/commitToken', resp.data.token);
                    this.commit('login/commitSessionId', resp.data.sessionId);

                    //console.info("this.state " + JSON.stringify(this.state));
                    if (this.state.login.token || this.state.login.token.trim().length > 0) {
                        this.dispatch('login/getCurrentUser');
                        //this.dispatch('companyInfo/fetchData');
                    } else {
                        router.push({path: '/login'});
                    }
                });
        }
    },
    mutations: {
        commitToken(state, token) {
            //console.info("login.mutations.commitToken, run");
            //console.info("commitToken, state ", JSON.stringify(state));
            //console.info("commitToken, token ", token);
            state.token = token;
        },
        commitUser(state, user) {
            //console.info("login.mutations.commitUser, run");
            //console.info("commitUser, state ", JSON.stringify(state));
            //console.info("commitUser, user ", JSON.stringify(user));
            state.user = user;
        },
        commitSessionId(state, sessionId) {
            //console.info("login.mutations.commitSessionId, run");
            //console.info("commitUser, state ", JSON.stringify(state));
            //console.info("commitUser, user ", JSON.stringify(user));
            state.sessionId = sessionId;
        }
    }
}

