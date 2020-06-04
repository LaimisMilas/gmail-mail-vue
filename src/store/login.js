import axios from "axios";
import router from "../router";

export default {
  namespaced: true,
  state: {
    login: {username: "", password: ""},
    token: "",
    user: {}
  },
  loggedIn() {
    return !!this.state.token
  },
  getters: {},
  actions: {
    userLogIn({state, commit, rootState}) {
      //console.info("param state.login " + JSON.stringify(state.login));

      axios
        .post(rootState.baseUrl + "/api/users/login", state.login)
        .then(resp => {
          this.commit('login/commitToken', resp.data.token);
          //console.info("this.state " + JSON.stringify(this.state));
          if (this.state.login.token || this.state.login.token.trim().length > 0) {
            axios.get(rootState.baseUrl + "/api/users/current", {
              headers: {
                Authorization: 'Bearer ' + this.state.login.token
              }
            }).then(resp => {
              this.commit('login/commitUser', resp.data);
              this.dispatch('reservation/fetchData');
              router.push({path: '/'})
            });
          } else {
            router.push({path: '/login'});
          }
        });
    }
  },
  mutations: {
    commitToken(state, token) {
      console.info("login.mutations.commitToken, run");
      //console.info("commitToken, state ", JSON.stringify(state));
      //console.info("commitToken, token ", token);
      state.token = token;
    },
    commitUser(state, user) {
      console.info("login.mutations.commitUser, run");
      //console.info("commitUser, state ", JSON.stringify(state));
      //console.info("commitUser, user ", JSON.stringify(user));
      state.user = user;
    }
  }
}

