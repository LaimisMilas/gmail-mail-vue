import axios from "axios";
import router from "../router";

export default {
    namespaced: true,
    state: {
        compRecipientLists: [],
        compRecipientList: {},
        selectedId: 0
    },
    getters: {
        header: state => {
            return {
                headers: {
                    'Authorization': 'Bearer ' + this.state.login.token,
                    'Content-Type': 'application/json',
                    'Set-Cookie': 'JSESSIONID=' + this.state.login.sessionId
                }
            }
        }
    },
    actions: {
        getSelected({state, commit, rootState}){
            state.compRecipientLists.forEach(item => {
               if(item.id == state.selectedId){
                   this.commit('compRecipientList/commitCompRecipientList', item);
               }
            });
        },
        fetchData({state, commit, rootState}) {

            if (!state.compRecipientLists.length === 0) {
                return;
            }

            axios.get(rootState.baseUrl + "/api/company/info/recipients",
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.state.login.token,
                        'Content-Type': 'application/json',
                        'Set-Cookie': 'JSESSIONID=' + this.state.login.sessionId
                    }
                }
            )
                .then(resp => {
                    this.commit('compRecipientList/commitCompRecipientLists', resp.data);
                });
        },
        create({state, commit, rootState}) {
            axios
                .post(rootState.baseUrl + "/api/company/info/recipients", state.compRecipientList, {
                    headers: {
                        'Authorization': 'Bearer ' + this.state.login.token,
                        'Content-Type': 'application/json',
                        'Set-Cookie': 'JSESSIONID=' + this.state.login.sessionId
                    }
                })
                .then(resp => {
                    this.dispatch('compRecipientList/fetchData');
                });
        },
        update({state, commit, rootState}) {
            axios
                .put(rootState.baseUrl + "/api/company/info/recipients", state.compRecipientList, this.getters.header)
                .then(resp => {
                    this.dispatch('compRecipientList/fetchData');
                });
        },
        delete({state, commit, rootState}) {
            axios
                .delete(rootState.baseUrl + "/api/company/info/recipients" + state.compRecipientList.id, this.getters.header)
                .then(resp => {
                    this.dispatch('compRecipientList/fetchData');
                });
        }
    },
    mutations: {
        commitCompRecipientLists(state, compRecipientLists) {
            state.compRecipientLists = compRecipientLists;
        },
        commitCompRecipientList(state, compRecipientList) {
            state.compRecipientList = compRecipientList;
        },
        commitSelectedRecipientList(state, id) {
            state.selectedId = id;
        },
        commitResetCompRecipientList(state) {
            state.compRecipientList = {};
        }
    }
}
