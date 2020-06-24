<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <h3 class="text-center text-info">{{$t('emailHistory.list.view.title')}}</h3>
                        <router-link to="//email/history/add"> {{$t('add')}}</router-link>
                        <table>
                            <thead>
                            <tr>
                                <th>{{$t('id')}}</th>
                                <th>{{$t('text')}}</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in itemList">
                            <tr>
                                <td>{{item.id}}</td>
                                <td>{{item.text}}</td>
                                <td>
                                    <router-link :to="{ name: 'EmailHistoryEdit', params: { id: item.id }}">{{$t('edit')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'EmailHistoryDelete', params: { id: item.id }}">
                                        {{$t('delete')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'EmailHistoryView', params: { id: item.id }}">
                                        {{$t('view')}}
                                    </router-link>
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
        name: "EmailHistoryList",
        computed: mapState({
            itemList: function (store) {
                return store.emailHistory.emailHistorys;
            }
        }),
        created() {
            this.$store.dispatch('emailHistory/fetchData');
        },
        methods: {
        }
    };

</script>