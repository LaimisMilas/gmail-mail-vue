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
                                <input type="text" class="form-control"
                                       v-model="item.id"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('emailId')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.emailId"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('phoneId')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.phoneId"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('personaId')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.personaId"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('companyId')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.companyId"/>
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

    export default {
        name: "RelationLinkAdd",
        computed: mapState({
            user: function (store) {
                return store.relationLink.relationLink;
            },
        }),
        data() {
            return {
                item: {
                    id: 0
                }
            }
        },
        created() {
        },
        methods: {
            createItem() {
                this.$store.commit('relationLink/commitRelationLink', this.item);
                this.$store.dispatch('relationLink/create');
                this.$router.push({path:'//relation/link/list'});
            }
        }
    };
</script>