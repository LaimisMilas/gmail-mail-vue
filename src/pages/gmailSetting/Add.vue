<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="createItem" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('gmail.api.edit.add.title')}}</h3>
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
        name: "GmailSettingAdd",
        data() {
            return {
                item: {
                    id: 0,
                    user: {
                        id:0
                    },
                    clientId: "",
                    clientSecret: "",
                    redirectUri: "",
                    applicationName: "",
                    accessTokenUri: "",
                    userAuthorizationUri: "",
                    clientAuthenticationScheme: "",
                    scope:"",
                    preferTokenInfo:""
                }
            }
        },
        computed: mapState({
            user: function (store) {
                return store.login.user;
            },
        }),
        created() {
            this.item.user.id = this.user.id;
        },
        methods: {
            createItem() {
                this.$store.commit('gmailSetting/commitGmailSetting', this.item);
                this.$store.dispatch('gmailSetting/create');
                this.$router.push({path: '/gmail/setting/list'});
            }
        }
    };
</script>
