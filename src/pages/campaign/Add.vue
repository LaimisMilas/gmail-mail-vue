<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="createItem" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('campaign.add.view.title')}}</h3>
                            <div class="form-group">
                                <label>{{$t('id')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.id"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('userId')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.userId"/>
                            </div>
                            <div class="form-group">
                                <label>Kampanijos pavadinimas</label>
                                <input type="text" class="form-control"
                                       v-model="item.title"/>
                            </div>
                            <div class="form-group">
                                <label>Subjektas</label>
                                <input type="text" class="form-control"
                                       v-model="item.subjectLine"/>
                            </div>
                            <div class="form-group">
                                <label>Siuntėjas</label>
                                <input type="text" class="form-control"
                                       v-model="item.sender"/>
                            </div>
                            <div class="form-group">
                                <label>Raktinis žodis</label>
                                <input type="text" class="form-control"
                                       v-model="item.logKey"/>
                            </div>
                            <div class="form-group">
                                <label>Atsisakiusiūjų sąrašas</label>
                                <input type="text" class="form-control"
                                       v-model="item.unsubscribeListId"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('email.html.tmp')}}</label>
                                <multiselect
                                        :placeholder="$t('select.html.tmp')"
                                        class="form-control"
                                        label="title"
                                        track-by="title"
                                        v-model="item.gmailHTML"
                                        :options="gmailHTMLs">

                                </multiselect>
                            </div>
                            <div class="form-group">
                                <label>{{$t('recipient.list')}}</label>
                                <multiselect
                                        :placeholder="$t('select.recipient.list')"
                                        class="form-control"
                                        label="title"
                                        track-by="title"
                                        :custom-label="nameWithLang"
                                        v-model="item.recipientList"
                                        :options="recipientLists">
                                    <template slot="singleLabel" slot-scope="{ option }">
                                        <strong>Id: {{ option.id }}</strong>
                                        <strong>, tur {{ option.title }}</strong>
                                    </template>
                                </multiselect>
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
        name: "CampaignAdd",
        components: { Multiselect },
        computed: mapState({
            user: function (store) {
                return store.login.user;
            },
            gmailHTMLs: function (store) {
                return store.emailHTML.emailHTMLs;
            },
            recipientLists: function (store) {
                return store.compRecipientList.compRecipientLists;
            },
        }),
        data() {
            return {
                item: {
                    id: 0,
                    userId: "",
                    title: "",
                    subjectLine: "",
                    sender: "me",
                    logKey: "",
                    unsubscribeListId: "",
                    created: "",
                    gmailHTML: {
                        title: ""
                    },
                    recipientList: {
                        title: ""
                    }
                }
            }
        },
        created() {
            this.item.userId = this.user.id;
            this.$store.dispatch('emailHTML/fetchData');
            this.$store.dispatch('compRecipientList/fetchData');
        },
        methods: {
            createItem() {
                this.$store.commit('campaign/commitCampaign', this.item);
                this.$store.dispatch('campaign/create');
                this.$router.push({path: '/campaign/list'});
            },
            nameWithLang ({ id, title }) {
                return `${id}, ${title}`
            }
        }
    };
</script>
