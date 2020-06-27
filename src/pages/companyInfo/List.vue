<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <router-link to="/company/info/add"> {{$t('add')}}</router-link>
                        <form @submit.prevent="search" class="form" method="post">
                            <div class="form-group">
                                <input type="text" class="form-control"
                                       v-model="searchQuery"/>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" :value="$t('searchQuery')">
                            </div>
                        </form>
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>El.pastas</th>
                                <th>Adresas</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody v-for="ci in pageOfItems" :key="ci.id">
                            <tr>
                                <td @click="viewItem(ci)">{{ci.id}}</td>
                                <td @click="viewItem(ci)">{{ci.email}}</td>
                                <td @click="viewItem(ci)">{{ci.address}}</td>
                                <td>
                                    <router-link :to="{ name: 'CompanyInfoEdit', params: { id: ci.id }}">
                                        {{$t('edit')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'CompanyInfoDelete', params: { id: ci.id }}">
                                        {{$t('delete')}}
                                    </router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <jw-pagination :items="itemList" @changePage="onChangePage" :pageSize="20"></jw-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from "vuex";

    export default {
        name: "CompanyInfoList",
        computed: mapState({
            itemList: function (store) {
                return store.companyInfo.companyInfos;
            },
            resultQuery() {
                if (this.searchQuery) {
                    return this.pageOfItems.filter((item) => {
                        return this.searchQuery.toLowerCase().split(' ').every(v => item.email.toLowerCase().includes(v))
                    })
                } else {
                    return this.pageOfItems;
                }
            }
        }),
        data() {
            return {
                searchQuery: null,
                pageOfItems: []
            };
        },
        created() {
            this.$store.dispatch('companyInfo/fetchData');
        },
        methods: {
            view(ci) {
                this.$router.push('/company/info/' + ci.id);
            },
            onChangePage(pageOfItems) {
                this.pageOfItems = pageOfItems;
            },search(){
                this.$store.dispatch('companyInfo/fetchDataByEmail', this.searchQuery);
            }
        }
    };

</script>
