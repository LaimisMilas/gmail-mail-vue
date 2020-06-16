<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="update" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('companyInfo.add.view.title')}}</h3>
                            <div class="form-group">
                                <label>{{$t('id')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.id"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('address')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.address"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('email')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.email"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('companyCode')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.companyCode"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('rawContacts')}}</label>
                                <textarea class="form-control"
                                          v-model="item.rawContacts"></textarea>
                            </div>
                            <div class="form-group">
                                <label>{{$t('companyUrl')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.companyUrl"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('status')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.status"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('webSiteUrl')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.webSiteUrl"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('companyOwner')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.companyOwner"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('sales')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.sales"/>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" :value="$t('save')">
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
    import Multiselect from 'vue-multiselect';

    export default {
        name: "CompanyInfoEdit",
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
            update() {
                this.$store.dispatch('companyInfo/update');
                this.$router.push({path: '/company/info/list'});
            }
        }
    };
</script>
