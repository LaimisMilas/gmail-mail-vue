<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <form @submit.prevent="updateItem" class="form" method="post">
                            <h3 class="text-center text-info">{{$t('email.html.edit.view.title')}}</h3>
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
                                    <label>{{$t('title')}}</label>
                                    <input type="text" class="form-control"
                                           v-model="item.title"/>
                                </div>
                                <div class="form-group">
                                    <label>{{$t('htmlContent')}}</label>
                                    <textarea class="form-control" v-model="item.htmlContent"></textarea>
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
        name: "EmailHTMLEdit",
        props: ["id"],
        computed: mapState({
            item: function (store) {
               return store.emailHTML.emailHTML;
            }
        }),
        created() {
           this.$store.commit('emailHTML/commitSelectedEmailHTML', this.$props.id);
           this.$store.dispatch('emailHTML/getSelected');
        },
        methods: {
            updateItem() {
               this.$store.dispatch('emailHTML/update');
               this.$router.push({path: '/email/html/list'});
            }
        }
    };
</script>
