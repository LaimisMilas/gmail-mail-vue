<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <h3 class="text-center text-info">{{$t('campaign.regLog.list.title')}}</h3>
                        <router-link :to="{ name: 'CampaignView', params: { id: campaign.id }}">
                            {{$t('view')}}
                        </router-link>
                        <router-link :to="{ name: 'CampaignRegListView'}">
                            {{$t('nav.sendReg')}}
                        </router-link>
                        <router-link :to="{ name: 'CampaignMailHTMLView', params: { id: campaign.gmailHTML.id }}">
                            {{$t('nav.mailHTML')}}
                        </router-link>
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Logs</th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in pageOfItems">
                            <tr>
                                <td>{{item.id}}</td>
                                <td>{{item.logs}}</td>
                            </tr>
                            </tbody>
                        </table>
                        <jw-pagination :items="sendRegLists" :pageSize="20"
                                       @changePage="onChangePage"></jw-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        computed: mapState({
            sendRegLists: function (store) {
                return store.sendReg.sendRegs;
            },
            campaign: function (store) {
                return store.campaign.campaign;
            }
        }),
        data() {
            return {
                pageOfItems: []
            };
        },
        created() {
            this.$store.dispatch('sendReg/fetchData');
        },
        methods: {
            onChangePage(pageOfItems) {
                this.pageOfItems = pageOfItems;
            }
        }
    };

</script>
