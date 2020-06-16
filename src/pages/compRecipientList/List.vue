<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <router-link to="/comp/recipient/list/add"> {{$t('add')}}</router-link>
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Title</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in itemList">
                            <tr>
                                <td @click="viewItem(item)">{{item.id}}</td>
                                <td @click="viewItem(item)">{{item.title}}</td>
                                <td>
                                    <router-link :to="{ name: 'CompRecipientListEdit', params: { id: item.id }}">{{$t('edit')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'CompRecipientListDelete', params: { id: item.id }}">
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
        name: "CompRecipientList",
        computed: mapState({
            itemList: function (store) {
                return store.compRecipientList.compRecipientLists;
            }
        }),
        data() {
            return {
                pageOfItems: []
            };
        },
        created() {
            this.$store.dispatch('compRecipientList/fetchData');
        },
        methods: {
            view(ci) {
                this.$router.push('/company/info/' + ci.id);
            },
            onChangePage(pageOfItems) {
                this.pageOfItems = pageOfItems;
            }
        }
    };

</script>
