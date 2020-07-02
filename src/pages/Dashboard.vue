<template>
    <div>
        <div class="container">
            <h3 class="text-center">Kampanijos</h3>
            <table>
                <thead>
                <tr>
                    <th>{{$t('id')}}</th>
                    <th>{{$t('userId')}}</th>
                    <th>{{$t('title')}}</th>
                    <th>{{$t('logKey')}}</th>
                </tr>
                </thead>
                <tbody :key="item.id" v-for="item in campaignList">
                <tr>
                    <td>{{item.id}}</td>
                    <td>{{item.userId}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.logKey}}</td>
                    <td><input type="button" @click="viewCampaign(item.id)"  value="View" /></td>
                    <td><input type="button" @click="initCompigne(item.id)"  value="Init" /></td>
                    <td><input type="button" @click="getStatus(item.id)"  value="Status" /></td>
                    <td><input type="button" @click="stopProcess(item.id)"  value="Stop" /></td>
                    <td><input type="button" @click="startProcess(item.id)"  value="Start" /></td>
                </tr>
                </tbody>
            </table>
            <input type="button" @click="getServiceStatus"  value="Service Status" />
            <a :href="gmailAuthUrl">Gmail API Login</a>
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
            user: (store) => {
                return store.login.user;
            },
            sendRegs: (store) => {
                return store.sendReg.sendRegs;
            },
            campaignList: (store) => {
                return store.campaign.campaigns;
            },
            baseUrl: (store) => {
                return store.baseUrl;
            },
        }),
        data() {
            return {
                localState: {
                    compigne: {
                        id:0
                    }
                },
                logs: "",
                gmailAuthUrl: "",
                campaign: {
                    title: "",
                    subjectLine: "",
                    logKey: "",
                    gmailHTML: { title: ""},
                    recipientList: {title: ""}
                }
            }
        },
        created() {
            this.$store.dispatch('campaign/fetchData');
            this.gmailAuthUrl = "http://127.0.0.1:8080/auth/login/gmail/" + this.user.id;
        },
        methods: {
            initCompigne(campaignId) {
                this.logs = "/api/do/send/init/" + campaignId;
                axios.get(this.$store.state.baseUrl + "/api/do/send/init/" + campaignId,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;this.localState.compigne.id
                });
            },
            viewCampaign(campaignId){
                let result = this.campaignList.filter(campaign => campaign.id === campaignId);
                if(result.length > 0){
                    this.campaign = result[0];
                }
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
            getStatus(campaignId) {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/status/" + campaignId,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            stopProcess(campaignId) {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/stop/" + campaignId,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            startProcess(campaignId) {
                this.logs = "";
                axios.get(this.$store.state.baseUrl + "/api/do/send/start/" + campaignId,
                    this.$store.getters['login/header'])
                    .then(resp => {
                        this.logs = resp.data;
                    }).catch(reason => {
                    this.logs = reason;
                });
            },
            updateSendReg() {
                this.$store.commit('sendReg/commitSendRegs', []);
                this.$store.dispatch('sendReg/fetchData');
            },
            nameWithLang({id, title}) {
                return `${id}, ${title}`
            },
            updateBaseUrl() {
                this.$store.commit('devSettings/commitBaseUrl', this.baseUrl);
            },
        }
    }
</script>

<style scoped>

    label{ width:220px;}

</style>
