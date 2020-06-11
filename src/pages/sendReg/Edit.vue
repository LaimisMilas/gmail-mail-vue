<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <form @submit.prevent="create" class="form" method="post">
                            <h3 class="text-center text-info">Gavėjų sąrašo redagavimas</h3>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Id"
                                           v-model="compRecipientList.id"/><br>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="UserId"
                                           v-model="compRecipientList.userId"/><br>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Title"
                                           v-model="compRecipientList.title"/><br>
                                </div>
                                <div class="form-group">
                                    <label>Priskirti visas kompanijas</label>
                                    <input type="checkbox" name="checkedItem" /><br>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="Saugoti">
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
        name: "CompRecipientListEdit",
        props: ["id"],
        computed: mapState({
            compRecipientList: function (store) {
                return store.compRecipientList.compRecipientList;
            }
        }),
        created() {
            this.$store.commit('compRecipientList/commitSelectedRecipientList', this.$props.id);
            this.$store.dispatch('compRecipientList/getSelected');
        },
        methods: {
            create() {
                this.$store.dispatch('compRecipientList/create');
                this.$router.push({path: '/comp/recipient/list'});
            }
        }
    };
</script>
