import axios from "axios";
import router from "../router";

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
                router.push({path: '/'})
            });
        },
        userLogIn({state, commit, dispatch, rootState}) {
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
        }
    }
}

