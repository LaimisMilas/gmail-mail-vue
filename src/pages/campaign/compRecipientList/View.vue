<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <h3 class="text-center text-info">{{$t('campaign.recipient.view.view.title')}}</h3>
                        <router-link :to="{ name: 'CampaignView', params: { id: item.id }}">
                            {{$t('view')}}
                        </router-link>
                        <router-link :to="{ name: 'CampaignRegListView'}">
                            {{$t('nav.sendReg')}}
                        </router-link>
                        <router-link :to="{ name: 'CampaignMailHTMLView'}">
                            {{$t('nav.mailHTML')}}
                        </router-link>
                        <router-link :to="{ name: 'CampaignRecipientListView'}">
                            {{$t('nav.compRecipientList')}}
                        </router-link>
                        <div class="form-group">
                            <label>{{$t('id')}}</label>
                            <input disabled type="text" class="form-control"
                                   v-model="item.recipientList.id"/>
                        </div>
                        <div class="form-group">
                            <label>{{$t('userId')}}</label>
                            <input disabled type="text" class="form-control"
                                   v-model="item.recipientList.userId"/>
                        </div>
                        <div class="form-group">
                            <label>{{$t('title')}}</label>
                            <input disabled type="text" class="form-control"
                                   v-model="item.recipientList.title"/>
                        </div>
                        <div class="form-group">
                            <label>{{item.recipientList.id}}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "CompaignRecipientListView",
        computed: mapState({
            item: function (store) {
                return store.campaign.campaign;
            }
        }),
        created() {
        },
        methods: {}
    };
</script>
