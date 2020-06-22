<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="createItem" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('persona.add.view.title')}}</h3>
                            <div class="form-group">
                                <label>{{$t('id')}}</label>
                                <input disabled type="text" class="form-control"
                                       v-model="item.id"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('name')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.name"/>
                            </div>
                            <div class="form-group">
                                <label>{{$t('sureName')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.sureName"/>
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
        name: "PersonaAdd",
        computed: mapState({
            user: function (store) {
                return store.persona.persona;
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
                this.$store.commit('persona/commitPersona', this.item);
                this.$store.dispatch('persona/create');
                this.$router.push({path: '/persona/list'});
            }
        }
    };
</script>
