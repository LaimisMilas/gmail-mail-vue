<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div>
                    <div class="col-md-12">
                        <router-link to="/company/info/add"> {{$t('add')}}</router-link>
                        <div class="form-group">
                            <input type="text" class="form-control"
                                   v-model="searchQuery"/>
                        </div>
                        <div class="form-group">
                            <input @click="search" type="submit" class="btn btn-info btn-md"
                                   :value="$t('byEmail')">
                            <input @click="filterInRaw" type="submit" class="btn btn-info btn-md"
                                   :value="$t('inRawData')">
                            <input @click="filterByTitle" type="submit" class="btn btn-info btn-md"
                                   :value="$t('byTitle')">
                            <input @click="filterByCode" type="submit" class="btn btn-info btn-md"
                                   :value="$t('byCode')">
                        </div>
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>El.pastas</th>
                                <th>Title</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody v-for="ci in pageOfItems" :key="ci.id">
                            <tr>
                                <td @click="viewItem(ci)">{{ci.id}}</td>
                                <td @click="viewItem(ci)">{{ci.email}}</td>
                                <td @click="viewItem(ci)">{{ci.title}}</td>
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
                                <td>
                                    <router-link :to="{ name: 'CompanyInfoView', params: { id: ci.id }}">
                                        {{$t('view')}}
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
    import {mapState,} from "vuex";

    export default {
        name: "CompanyInfoList",
        computed: mapState({
            itemList: function (store) {
                return store.companyInfo.companyInfos;
            },
            pageOfItems: function (store) {
                return store.companyInfo.pageOfItems;
            }
        }),
        data() {
            return {
                searchQuery: null,
            };
        },
        created() {
            this.$store.dispatch('companyInfo/fetchData');
        },
        methods: {
            onChangePage(pageOfItems) {
                this.$store.commit('companyInfo/commitSearchResult', pageOfItems);
            },
            search() {
                if (this.searchQuery.length > 0) {
                    this.$store.dispatch('companyInfo/fetchDataByEmail', this.searchQuery);
                }
            },
            filterInRaw() {
                if (this.searchQuery.length > 0) {
                    this.$store.dispatch('companyInfo/filterInRaw', this.searchQuery);
                }
            },
            filterByTitle() {
                if (this.searchQuery.length > 0) {
                    this.$store.dispatch('companyInfo/filterByTitle', this.searchQuery);
                }
            },
            filterByCode() {
                if (this.searchQuery.length > 0) {
                    this.$store.dispatch('companyInfo/filterByCode', this.searchQuery);
                }
            }
        }
    };

</script>
