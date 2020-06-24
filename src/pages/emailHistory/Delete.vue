<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="deleteItem" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('emailHistory.delete.view.title')}}</h3>
                            <model-nav/>
                            <div class="form-group">
                                <label>{{$t('id')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.id"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('text')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.text"/>
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
    import modelNav from "./modelNav.vue";
    export default {
        name: "EmailHistoryDelete",
        components: {
            'model-nav': modelNav
        },
        props: ["id"],
        computed: mapState({
            item: function (store) {
                return store.emailHistory.emailHistory;
            }
        }),
        created() {
            this.$store.commit('emailHistory/commitSelectedEmailHistory', this.$props.id);
            this.$store.dispatch('emailHistory/getSelected');
        },
        methods: {
            deleteItem() {
                this.$store.dispatch('emailHistory/delete');
                this.$router.push({path:'//email/history/list'});
            }
        }
    };
</script>