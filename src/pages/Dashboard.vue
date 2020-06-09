<template>
    <div>
        <div class="container">
            <form @submit.prevent="runComp" class="form" action="" method="post">
                <h3 class="text-center text-info">Kompanija</h3>
                <div class="form-group">
                    <input
                            type="text"
                            placeholder="El.paštas"
                            class="form-control"
                            v-model="localState.compigne" >
                </div>
                <div class="form-group">
                    <input type="submit" name="submit" class="btn btn-info btn-md" value="Paleisti siuntiną">
                </div>
            </form>
            <input v-on:click="getStatus" class="btn btn-info btn-md" value="Gauti būsena">
            <input v-on:click="stopProcess" class="btn btn-info btn-md" value="Stabdyti siuntiną">
            <input v-on:click="startProcess" class="btn btn-info btn-md" value="Paleisti siuntiną">
            <div>{{logs}}</div>
        </div>
    </div>
</template>

<script>

    import axios from "axios";

    export default {
        name: "Dashboard",
        data(){
            return {
                localState: {
                    compigne: 3
                },
                logs: ""
            }
        },
        methods:{
            runComp(){
                this.logs = "";
                console.log('Authorization: Bearer ' + this.$store.state.login.token);
                console.log('Set-Cookie: JSESSIONID=' + this.$store.state.login.sessionId);

                axios.get(this.$store.state.baseUrl + "/api/do/send/init/" + this.localState.compigne, {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.login.token,
                        'Content-Type': 'application/json',
                        'Set-Cookie': 'JSESSIONID=' + this.$store.state.login.sessionId
                    }
                }).then(resp => {
                    this.logs = resp;
                });
            },
            getStatus(){
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/status/" + this.localState.compigne, {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.login.token,
                        'Content-Type': 'application/json',
                        'Set-Cookie': 'JSESSIONID=' + this.$store.state.login.sessionId
                    }
                }).then(resp => {
                    this.logs = resp;
                }).catch(reason => {
                    this.logs = reason;
                });
            },
            stopProcess(){
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/stop/" + this.localState.compigne, {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.login.token,
                        'Content-Type': 'application/json',
                        'Set-Cookie': 'JSESSIONID=' + this.$store.state.login.sessionId
                    }
                }).then(resp => {
                    this.logs = resp;
                }).catch(reason => {
                    this.logs = reason;
                });
            },
            startProcess(){
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/start/" + this.localState.compigne, {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.login.token,
                        'Content-Type': 'application/json',
                        'Set-Cookie': 'JSESSIONID=' + this.$store.state.login.sessionId
                    }
                }).then(resp => {
                    this.logs = resp;
                }).catch(reason => {
                    this.logs = reason;
                });
            }
        }
    }
</script>

<style scoped>

</style>
