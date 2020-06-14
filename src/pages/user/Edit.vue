<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <form @submit.prevent="update" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('user.edit.view.title')}}</h3>
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
                                    <label>{{$t('user.title')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.title"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('user.subjectLine')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.subjectLine"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('user.sender')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.sender"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('user.logKey')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.logKey"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('user.unsubscribeListId')}}</label>
                                    <input disabled type="text" class="form-control"
                                           v-model="item.unsubscribeListId"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('user.gmailHTML.tmp')}}</label>
                                    <input disabled type="text" class="form-control"
                                           v-model="item.gmailHTML.title"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('user.recipientList.title')}}</label>
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
        name: "UserEdit",
        props: ["id"],
        computed: mapState({
            item: function (store) {
               return store.cser.user;
            }
        }),
        created() {
           this.$store.commit('user/commitSelectedUser', this.$props.id);
           this.$store.dispatch('user/getSelected');
        },
        methods: {
            update() {
               this.$store.dispatch('user/update');
               this.$router.push({path: '/user/list'});
            }
        }
    };
</script>
