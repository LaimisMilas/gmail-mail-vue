<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="deleteItem" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('companyInfo.delete.view.title')}}</h3>
                            <div class="form-group">
                                <label>{{$t('id')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.id"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('id')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.title"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('address')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.address"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('email')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.email"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('companyCode')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.companyCode"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('rawContacts')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.rawContacts"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('companyUrl')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.companyUrl"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('status')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.status"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('status')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.webSiteUrl"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('companyOwner')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.companyOwner"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('sales')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.sales"/>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" :value="$t('delete')">
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
        name: "CompanyInfoDelete",
        props: ["id"],
        computed: mapState({
            item: function (store) {
                return store.companyInfo.companyInfo;
            }
        }),
        created() {
            this.$store.commit('companyInfo/commitSelectedCompanyInfo', this.$props.id);
            this.$store.dispatch('companyInfo/getSelected');
        },
        methods: {
            deleteItem() {
                this.$store.dispatch('companyInfo/delete');
                this.$router.push({path: '/company/info/list'});
            }
        }
    }
</script>

