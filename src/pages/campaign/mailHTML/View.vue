<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <h3 class="text-center text-info">{{$t('mail.html.view.view.title')}}</h3>
                        <router-link :to="{ name: 'CampaignView', params: { id: campaign.id }}">
                            {{$t('view')}}
                        </router-link>
                        <router-link :to="{ name: 'CampaignRegListView'}">
                            {{$t('nav.sendReg')}}
                        </router-link>
                        <router-link :to="{ name: 'CampaignMailHTMLView', params: { id: campaign.gmailHTML.id }}">
                            {{$t('nav.mailHTML')}}
                        </router-link>
                        <router-link :to="{ name: 'CampaignRecipientListView'}">
                            {{$t('nav.compRecipientList')}}
                        </router-link>
                        <div class="form-group">
                            <label>{{$t('id')}}</label>
                            <input disabled type="text" class="form-control"
                                   v-model="item.id"/>
                        </div>
                        <div class="form-group">
                            <label>{{$t('userId')}}</label>
                            <input disabled type="text" class="form-control"
                                   v-model="item.userId"/>
                        </div>
                        <div class="form-group">
                            <label>{{$t('title')}}</label>
                            <input disabled type="text" class="form-control"
                                   v-model="item.title"/>
                        </div>
                        <div class="form-group">
                            <label>{{$t('htmlContent')}}</label>
                            <textarea disabled class="form-control" v-model="item.htmlContent"></textarea>
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
        name: "CampaignMailHTMLView",
        props: ["id"],
        computed: mapState({
            item: function (store) {
                return store.emailHTML.emailHTML;
            },
            campaign: function (store) {
                return store.campaign.campaign;
            }
        }),
        created() {
            this.$store.dispatch('emailHTML/fetchData');
            this.$store.commit('emailHTML/commitSelectedEmailHTML', this.$props.id);
            this.$store.dispatch('emailHTML/getSelected');
        },
        methods: {}
    };
</script>
