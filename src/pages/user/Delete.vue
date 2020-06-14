<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="deleteItem" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('user.delete.view.title')}}</h3>
                            <div class="form-group">
                                <label>{{$t('id')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.id"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('userName')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.userName"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('email')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.email"/>
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
        name: "UserDelete",
        props: ["id"],
        computed: mapState({
            item: function (store) {
                return store.user.user;
            }
        }),
        created() {
            this.$store.commit('user/commitSelectedUser', this.$props.id);
            this.$store.dispatch('user/getSelected');
        },
        methods: {
            deleteItem() {
                this.$store.dispatch('user/delete');
                this.$router.push({path: '/user/list'});
            }
        }
    };
</script>
