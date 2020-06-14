<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <router-link to="/gmail/setting/add"> {{$t('add')}}</router-link>
                        <table>
                            <thead>
                            <tr>
                                <th>{{$t('id')}}</th>
                                <th>{{$t('redirectUri')}}</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in itemList">
                            <tr>
                                <td>{{item.id}}</td>
                                <td>{{item.redirectUri}}</td>
                                <td>
                                    <router-link :to="{ name: 'GmailSettingEdit', params: { id: item.id }}">{{$t('edit')}}</router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "GmailSettingList",
        computed: mapState({
            itemList: function (store) {
                return store.gmailSetting.gmailSettings;
            }
        }),
        created() {
            this.$store.dispatch('gmailSetting/fetchData');
        },
        methods: {
        }
    };
</script>
