<template>
    <div>
        <div class="container">
            <div class="form-group">
                <label>{{$t('id')}}: </label><span>{{user.id}}, {{user.userName}}
                {{user.email}}, {{user.roles[0].role}}</span><br/>
                <label>{{$t('sendRegs')}}: </label><span>{{sendRegs.length}}</span>
                <button class="btn btn-info btn-md" v-on:click="updateSendReg">Atnaujinti</button><br/>
                <input type="text" :value="mainStore.baserUrl" />
                <button class="btn btn-info btn-md" v-on:click="updateBaseUrl">Atnaujinti</button><br/>
            </div>
            <form @submit.prevent="runComp" class="form" action="" method="post">
                <h3 class="text-center text-info">Kampanija</h3>
                <multiselect
                        :placeholder="$t('select.campaign.to.send')"
                        class="form-control"
                        label="title"
                        track-by="title"
                        :custom-label="nameWithLang"
                        v-model="localState.compigne"
                        :options="compigneLists">
                    <template slot="singleLabel" slot-scope="{ option }">
                        <strong>Id: {{ option.id }}</strong>
                        <strong>, {{ option.title }}</strong>
                    </template>
                </multiselect>

                <div class="form-group">
                    <input type="submit" name="submit" class="btn btn-info btn-md" :value="$t('init.send')">
                </div>
            </form>
            <input v-on:click="getStatus" class="btn btn-info btn-md" value="Gauti būsena">
            <input v-on:click="getServiceStatus" class="btn btn-info btn-md" value="Serviso būsena">
            <input v-on:click="stopProcess" class="btn btn-info btn-md" value="Stabdyti siuntiną">
            <input v-on:click="startProcess" class="btn btn-info btn-md" value="Paleisti siuntiną">
            <input v-on:click="killProcess" class="btn btn-info btn-md" value="Žudyti siuntimą">
            <a href="http://127.0.0.1:8080/auth/login/gmail/1">Gmail API Login</a>
            <div>{{logs}}</div>
        </div>
    </div>
</template>

<script>

    import axios from "axios";
    import {mapState} from "vuex";
    import Multiselect from 'vue-multiselect';

    export default {
        name: "Dashboard",
        components: { Multiselect },
        computed: mapState({
            mainStore: (store) => {
                return store.devSettings;
            },
            user: (store) => {
                return store.login.user;
            },
            sendRegs: (store) => {
                return store.sendReg.sendRegs;
            },
            compigneLists: (store) => {
             return store.campaign.campaigns;
            }
        }),
        data() {
            return {
                baserUrl: "",
                localState: {
                    compigne: {
                        id:0
                    }
                },
                logs: ""
            }
        },
        created() {

            this.$store.dispatch('campaign/fetchData');
        },
        methods: {
            runComp() {
                this.logs = "/api/do/send/init/" + this.localState.compigne.id;
                axios.get(this.$store.state.baseUrl + "/api/do/send/init/" + this.localState.compigne.id,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            getServiceStatus() {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/send/manager/status",
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            getStatus() {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/status/" + this.localState.compigne.id,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            stopProcess() {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/stop/" + this.localState.compigne.id,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            startProcess() {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/start/" + this.localState.compigne.id,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            killProcess() {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/kill/" + this.localState.compigne.id,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            updateSendReg(){
                this.$store.commit('sendReg/commitSendRegs', []);
                this.$store.dispatch('sendReg/fetchData');
            },
            updateBaseUrl(){
                this.$store.state.baserUrl = this.mainStore.baseUrl;
                this.$store.commit('sendReg/commitBaseUrl', this.mainStore.baseUrl);
            },
            nameWithLang ({ id, title }) {
                return `${id}, ${title}`
            }
        }
    }
</script>

<style scoped>

</style>
