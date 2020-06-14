<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="createItem" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('user.add.view.title')}}</h3>
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
        name: "UserAdd",
        components: { Multiselect },
        computed: mapState({
            roleLists: function (store) {
                return store.userRole.userRoles;
            },
        }),
        data() {
            return {
                item: {
                    id: 0,
                    userName: "",
                    roles: [{id:1, role:"ADMIN"}]
                }
            }
        },
        created() {
            this.$store.dispatch('userRole/fetchData');
        },
        methods: {
            createItem() {
                this.$store.commit('user/commitUser', this.item);
                this.$store.dispatch('user/create');
                this.$router.push({path: '/user/list'});
            },
            nameWithLang ({ id, role }) {
                return `${id}, ${role}`
            }
        }
    };
</script>
