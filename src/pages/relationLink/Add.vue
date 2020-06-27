<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="createItem" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('relationLink.add.view.title')}}</h3>
                            <div class="form-group">
                                <label>{{$t('id')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.id"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('emailId')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.emailId"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('phoneId')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.phoneId"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('personaId')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.personaId"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('companyId')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.companyId"/>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" :value="$t('save')">
                            </div>
                            <div class="form-group">
                                <input @click="resetSelected" class="btn btn-info btn-md" :value="$t('reset')">
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
        name: "RelationLinkAdd",
        computed: mapState({
            item: function (store) {
                return store.relationLink.relationLink;
            },
            email: function (store) {
                return store.email.email;
            },
            phoneNumber: function (store) {
                return store.phoneNumber.phoneNumber;
            },
            persona: function (store) {
                return store.persona.persona;
            },
            companyInfo: function (store) {
                return store.companyInfo.companyInfo;
            }
        }),
        data() {
            return {
                item: {
                    id: 0,
                    phoneId: 0,
                    emailId: 0,
                    personaId: 0,
                    companyId: 0,
                },
                showModal: false
            }
        },
        created() {
            this.item.phoneId = this.phoneNumber.id;
            this.item.emailId = this.email.id;
            this.item.personaId = this.persona.id;
            this.item.companyId = this.companyInfo.id;
        },
        methods: {
            createItem() {
                this.$store.commit('relationLink/commitRelationLink', this.item);
                this.$store.dispatch('relationLink/create');
                this.$router.push({path:'/relation/link/list'});
            },
            resetSelected(){
                this.$store.commit('persona/commitResetPersona');
                this.$store.commit('email/commitResetEmail');
                this.$store.commit('phoneNumber/commitResetPhoneNumber');
                this.$store.commit('companyInfo/commitResetCompanyInfo');
                this.item.phoneId = this.phoneNumber.id;
                this.item.emailId = this.email.id;
                this.item.personaId = this.persona.id;
                this.item.companyId = this.companyInfo.id;
            }
        }
    };
</script>
