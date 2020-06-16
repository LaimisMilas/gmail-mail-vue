<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <form @submit.prevent="update" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('campaign.edit.view.title')}}</h3>
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
                                    <label>{{$t('campaign.title')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.title"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('campaign.subjectLine')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.subjectLine"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('campaign.sender')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.sender"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('campaign.logKey')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.logKey"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('campaign.unsubscribeListId')}}</label>
                                    <input disabled type="text" class="form-control"
                                           v-model="item.unsubscribeListId"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('campaign.gmailHTML.tmp')}}</label>
                                    <input disabled type="text" class="form-control"
                                           v-model="item.gmailHTML.title"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('campaign.recipient.list.title')}}</label>
                                    <input disabled type="text" class="form-control"
                                           v-model="item.recipientList.title"/>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="submit" class="btn btn-info btn-md" :value="$t('save')">
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from "vuex";

    export default {
        name: "CampaignEdit",
        props: ["id"],
        computed: mapState({
            item: function (store) {
               return store.campaign.campaign;
            }
        }),
        created() {
           this.$store.commit('campaign/commitSelectedCampaign', this.$props.id);
           this.$store.dispatch('campaign/getSelected');
        },
        methods: {
            update() {
               this.$store.dispatch('campaign/update');
               this.$router.push({path: '/campaign/list'});
            }
        }
    };
</script>
