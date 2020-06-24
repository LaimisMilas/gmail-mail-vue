<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <h3 class="text-center text-info">{{$t('email.list.view.title')}}</h3>
                        <router-link to="/email/add"> {{$t('add')}}</router-link>
                        <table>
                            <thead>
                            <tr>
                                <th>{{$t('id')}}</th>
                                <th>{{$t('email')}}</th>
                                <th>{{$t('domain')}}</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in itemList">
                            <tr>
                                <td>{{item.id}}</td>
                                <td>{{item.email}}</td>
                                <td>{{item.domain}}</td>
                                <td>
                                    <router-link :to="{ name: 'EmailEdit', params: { id: item.id }}">{{$t('edit')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'EmailDelete', params: { id: item.id }}">
                                        {{$t('delete')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'EmailView', params: { id: item.id }}">
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
        name: "EmailList",
        computed: mapState({
            itemList: function (store) {
                return store.email.emails;
            }
        }),
        created() {
            this.$store.dispatch('email/fetchData');
        },
        methods: {
        }
    };

</script>