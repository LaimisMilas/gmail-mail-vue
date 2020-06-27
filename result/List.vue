<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <h3 class="text-center text-info">{{$t('relationLink.list.view.title')}}</h3>
                        <router-link to="//relation/link/add"> {{$t('add')}}</router-link>
                        <table>
                            <thead>
                            <tr>
                                <th>{{$t('id')}}</th>
                                <th>{{$t('emailId')}}</th>
                                <th>{{$t('phoneId')}}</th>
                                <th>{{$t('personaId')}}</th>
                                <th>{{$t('companyId')}}</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in itemList">
                            <tr>
                                <td>{{item.id}}</td>
                                <td>{{item.emailId}}</td>
                                <td>{{item.phoneId}}</td>
                                <td>{{item.personaId}}</td>
                                <td>{{item.companyId}}</td>
                                <td>
                                    <router-link :to="{ name: 'RelationLinkEdit', params: { id: item.id }}">{{$t('edit')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'RelationLinkDelete', params: { id: item.id }}">
                                        {{$t('delete')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'RelationLinkView', params: { id: item.id }}">
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
        name: "RelationLinkList",
        computed: mapState({
            itemList: function (store) {
                return store.relationLink.relationLinks;
            }
        }),
        created() {
            this.$store.dispatch('relationLink/fetchData');
        },
        methods: {
        }
    };

</script>