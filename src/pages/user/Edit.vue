<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <form @submit.prevent="update" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('user.edit.view.title')}}</h3>
                                <div class="form-group">
                                    <label>{{$t('id')}}</label>
                                    <input disabled type="text" class="form-control"
                                           v-model="item.id"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('userName')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.userName"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('password')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.password"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('enabled')}}</label>
                                    <input type="checkbox" class="form-control"
                                           v-model="item.enabled"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('role')}}</label>
                                    <multiselect
                                            :placeholder="$t('role')"
                                            class="form-control"
                                            :multiple="true"
                                            label="role"
                                            track-by="role"
                                            :custom-label="nameWithLang"
                                            v-model="item.roles"
                                            :options="roleLists">
                                        <template slot="singleLabel" slot-scope="{ option }">
                                            <strong>Id: {{ option.id }}</strong>
                                            <strong>,  {{ option.role }}</strong>
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
        name: "UserEdit",
        props: ["id"],
        components: { Multiselect },
        computed: mapState({
            item: function (store) {
               return store.user.user;
            },
            roleLists: function (store) {
                return store.userRole.userRoles;
            },
        }),
        created() {
           this.$store.commit('user/commitSelectedUser', this.$props.id);
           this.$store.dispatch('user/getSelected');
        },
        methods: {
            update() {
               this.$store.dispatch('user/update');
               this.$router.push({path: '/user/list'});
            }
        }
    };
</script>
