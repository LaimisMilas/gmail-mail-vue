<template>
    <div>
        <div class="container">
            <div class="form-group">
                <label>{{$t('id')}}: </label><span>{{user.id}}</span><br/>
                <label>{{$t('userName')}}: </label><span>{{user.userName}}</span><br/>
                <label>{{$t('email')}}: </label><span>{{user.email}}</span><br/>
                <label>{{$t('role')}}: </label><span>{{user.roles[0].role}}</span><br/>
                <label>{{$t('sendRegs')}}: </label><span>{{sendRegs.length}}</span>
                <button class="btn btn-info btn-md" v-on:click="updateSendReg">Atnaujinti</button><br/>

            </div>
            <form @submit.prevent="runComp" class="form" action="" method="post">
                <h3 class="text-center text-info">Kampanija</h3>
                <div class="form-group">
                    <input
                            type="text"
                            placeholder="El.paštas"
                            class="form-control"
                            v-model="localState.compigne">
                </div>
                <div class="form-group">
                    <input type="submit" name="submit" class="btn btn-info btn-md" value="Inicijuoti siuntiną">
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

    export default {
        name: "Dashboard",
        computed: mapState({
            user: function (store) {
                return store.login.user;
            },
            sendRegs: function (store) {
                return store.sendReg.sendRegs;
            }
        }),
        data() {
            return {
                localState: {
                    compigne: 3
                },
                logs: ""
            }
        },
        methods: {
            runComp() {
                this.logs = "";

                axios.get(this.$store.state.baseUrl + "/api/do/send/init/" + this.localState.compigne,
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
                axios.get(this.$store.state.baseUrl + "/api/do/send/status/" + this.localState.compigne,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            stopProcess() {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/stop/" + this.localState.compigne,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            startProcess() {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/start/" + this.localState.compigne,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            killProcess() {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/kill/" + this.localState.compigne,
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
            }
        }
    }
</script>

<style scoped>

</style>
