import axios from "axios";

export default {
    namespaced: true,
    state: {
        baseUrl: 'http://127.0.0.1:8080',
        apiUrl:"",
    },
    actions: {

    },
    mutations: {
        commitBaseUrl(state, url) {
            console.log(url)
            state.baseUrl = url;
        }
    }
}
