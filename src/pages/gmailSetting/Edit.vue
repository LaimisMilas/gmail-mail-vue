<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <form @submit.prevent="update" class="form" method="post">
                            <h3 class="text-center text-info">Gmail API nustatymu redagavimas</h3>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Id"
                                           v-model="item.id"/><br>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="UserId"
                                           v-model="item.redirectUri"/><br>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="Saugoti">
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
        },
        methods: {
            update() {
                this.$store.dispatch('gmailSetting/update');
                this.$router.push({path: '/gmail/setting/list'});
            }
        }
    };
</script>
