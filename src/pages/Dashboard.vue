<template>
    <div>
        <div class="container">
            <a :href="gmailAuthUrl">{{$t("gmailAPILogin")}}</a>
            <h3 class="text-center">Kampanijos</h3>
            <router-link v-if="campaignList.length === 0" to="/campaign/add">
                {{$t("dashboard.add.campaign")}}
            </router-link>
            <table v-else>
                <thead>
                <tr>
                    <!--<th>{{$t('id')}}</th>
                    <th>{{$t('userId')}}</th>-->
                    <th>{{$t('title')}}</th>
                    <th>{{$t('logKey')}}</th>
                </tr>
                </thead>
                <tbody :key="item.id" v-for="item in campaignList">
                <tr>
                    <!--<td>{{item.id}}</td>
                    <td>{{item.userId}}</td>-->
                    <td>{{item.title}}</td>
                    <td>{{item.logKey}}</td>
                    <!--<td><input type="button" @click="viewCampaign(item.id)"  value="View" /></td>
                    <td><input type="button" @click="getStatus(item.id)" :value="$t('init.status')"/></td>
                    -->
                    <td><input type="button" @click="initCompigne(item.id)" :value="$t('init.send')"/></td>
                    <td><input type="button" @click="stopProcess(item.id)" :value="$t('init.stop')"/></td>
                    <td><input type="button" @click="startProcess(item.id)" :value="$t('init.start')"/></td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td><input type="text" :value="limit"/></td>
                                    <td><input type="button" @click="setLimit(item.id, limit)" :value="$t('init.limit')"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
            <input v-show="serverStatusVisible" type="button" @click="getServiceStatus" value="Service Status"/>
            <div>{{dashboard.logs}}</div>
        </div>
    </div>
</template>

<script>

    import {mapState, mapActions} from "vuex";

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
            dashboard: (store) => {
                return store.dashboard;
            },
        }),
        data() {
            return {
                limit:0,
                periodStatus: {},
                serverStatusVisible: false,
                localState: {
                    compigne: {
                        id: 0
                    }
                },
                logs: "",
                gmailAuthUrl: "",
                campaign: {
                    title: "",
                    subjectLine: "",
                    logKey: "",
                    gmailHTML: {title: ""},
                    recipientList: {title: ""}
                }
            }
        },
        created() {
            this.$store.dispatch('campaign/fetchData');
            this.gmailAuthUrl = this.$store.state.baseUrl + "/auth/login/gmail/" + this.user.id;
            this.isRoleAdmin();
            this.getServiceStatus();
            this.updateStatus();
        },
        beforeDestroy() {
            console.log("ondestroy");
            this.stopStatus();
        },
        methods: {
            stopStatus() {
                clearInterval(this.periodStatus);            },
            updateStatus() {
                this.periodStatus = setInterval(this.getStatus, 5000);
               // setInterval(() => moment().format(), 1000)
            },
            ...mapActions(
                {initCompigne: 'dashboard/initCompigne'}
            ),
            ...mapActions(
                {getServiceStatus: 'dashboard/getServiceStatus'},
            ),
            ...mapActions(
                {stopProcess: 'dashboard/stopProcess'},
            ),
            ...mapActions(
                {startProcess: 'dashboard/startProcess'},
            ),
            ...mapActions(
                {getStatus: 'dashboard/getStatus'}
            ),
            ...mapActions(
                {setLimit: 'dashboard/setLimit'}
            ),
            isRoleAdmin() {
                if (this.user.roles.filter(item => {
                    return item.role === "ADMIN";
                }).length > 0) {
                    this.serverStatusVisible = true;
                }
            },
            viewCampaign(campaignId) {
                let result = this.campaignList.filter(campaign => campaign.id === campaignId);
                if (result.length > 0) {
                    this.campaign = result[0];
                }
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

    label {
        width: 220px;
    }

</style>
