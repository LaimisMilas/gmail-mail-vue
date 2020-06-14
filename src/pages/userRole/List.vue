<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <router-link to="/user/role/add"> {{$t('add')}}</router-link>
                        <table>
                            <thead>
                            <tr>
                                <th>{{$t('id')}}</th>
                                <th>{{$t('role')}}</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in itemList">
                            <tr>
                                <td @click="viewItem(item.id)">{{item.id}}</td>
                                <td>{{item.role}}</td>
                                <td>
                                    <router-link :to="{ name: 'UserRoleEdit', params: { id: item.id }}">{{$t('edit')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'UserRoleDelete', params: { id: item.id }}">
                                        {{$t('delete')}}
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
        name: "UserRoleList",
        computed: mapState({
            itemList: function (store) {
                return store.userRole.userRoles;
            }
        }),
        created() {
            this.$store.dispatch('userRole/fetchData');
        },
        methods: {
            viewItem(itemId){
                this.$router.push('/user/role/view/' + itemId);
            },
        }
    };

</script>
