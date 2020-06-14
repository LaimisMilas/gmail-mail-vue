<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="createItem" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('user.role.add.view.title')}}</h3>
                            <div class="form-group">
                                <label>{{$t('id')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.id"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('role')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.role"/>
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
        name: "UserRoleAdd",
        computed: mapState({
        }),
        data() {
            return {
                item: {
                    id: 0,
                    role: ""
                }
            }
        },
        created() {
        },
        methods: {
            createItem() {
                this.$store.commit('userRole/commitUserRole', this.item);
                this.$store.dispatch('userRole/create');
                this.$router.push({path: '/user/role/list'});
            }
        }
    };
</script>
