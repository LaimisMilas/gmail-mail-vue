<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>RedirectUri</th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in pageOfItems">
                            <tr>
                                <td>{{item.id}}</td>
                                <td>{{item.redirectUri}}</td>
                                <td>
                                    <router-link :to="{ name: 'GmailSettingEdit', params: { id: item.id }}">Redaguoti</router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <jw-pagination :items="gmailSettings" :pageSize="20"
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
        name: "GmailSettingListEdit",
        props: ["id"],
        computed: mapState({
            gmailSettings: function (store) {
                return store.gmailSetting.gmailSettings;
            }
        }),
        data() {
            return {
                pageOfItems: []
            };
        },
        created() {
            this.$store.dispatch('gmailSetting/fetchData');
        },
        methods: {
            create() {
                this.$store.dispatch('gmailSetting/create');
                this.$router.push({path: '/gmail/setting/list'});
            },
            onChangePage(pageOfItems) {
                this.pageOfItems = pageOfItems;
            }
        }
    };
</script>
