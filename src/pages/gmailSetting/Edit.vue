<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <form @submit.prevent="update" class="form" method="post">
                            <h3 class="text-center text-info">Gmail API nustatymu redagavimas</h3>
                                <div class="form-group">
                                    <label>{{$t('id')}}</label>
                                    <input disabled type="text" class="form-control"
                                           v-model="item.id"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('userId')}}</label>
                                    <input disabled type="text" class="form-control"
                                           v-model="item.user.id"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('defaultConfig')}}</label>
                                    <input type="checkbox" class="form-control"
                                           v-model="item.defaultConfig"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('clientId')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.clientId"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('clientSecret')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.clientSecret"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('redirectUri')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.redirectUri"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('applicationName')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.applicationName"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('accessTokenUri')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.accessTokenUri"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('userAuthorizationUri')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.userAuthorizationUri"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('scope')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.scope"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('preferTokenInfo')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.preferTokenInfo"/>
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
        name: "GmailSettingEdit",
        props: ["id"],
        computed: mapState({
            item: function (store) {
                return store.gmailSetting.gmailSetting;
            }
        }),
        created() {
            this.$store.commit('gmailSetting/commitSelectedGmailSetting', this.$props.id);
            this.$store.dispatch('gmailSetting/getSelected');
           // console.log(JSON.stringify(this.item));
        },
        methods: {
            update() {
                this.$store.dispatch('gmailSetting/update');
                this.$router.push({path: '/gmail/setting/list'});
            }
        }
    };
</script>
