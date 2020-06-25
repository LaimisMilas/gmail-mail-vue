<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <form @submit.prevent="updateItem" class="form" method="post">
                                <h3 class="text-center text-info">{{$t('persona.edit.view.title')}}</h3>
                                <model-nav/>
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
                                    <label>{{$t('number')}}</label>
                                    <multiselect
                                            class="form-control"
                                            :multiple="true"
                                            label="number"
                                            track-by="number"
                                            v-model="item.phoneNumbers"
                                            :options="phoneNumbers">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('email')}}</label>
                                    <multiselect
                                            class="form-control"
                                            :multiple="true"
                                            label="email"
                                            track-by="email"
                                            v-model="item.emails"
                                            :options="emails">
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
    import modelNav from "./modelNav.vue";
    import Multiselect from 'vue-multiselect';

    export default {
        name: "PersonaEdit",
        components: {
            'model-nav': modelNav,
             Multiselect
        },
        props: ["id"],
        computed: mapState({
            item: function (store) {
               return store.persona.persona;
            },
            phoneNumbers: function (store) {
                return store.phoneNumber.phoneNumbers;
            },
            emails: function (store) {
                return store.email.emails;
            }
        }),
        created() {
           this.$store.commit('persona/commitSelectedPersona', this.$props.id);
           this.$store.dispatch('persona/getSelected');
            this.$store.dispatch('phoneNumber/fetchData');
            this.$store.dispatch('email/fetchData');
        },
        methods: {
            updateItem() {
               this.$store.dispatch('persona/update');
               this.$router.push({path: '/persona/list'});
            }
        }
    };
</script>
