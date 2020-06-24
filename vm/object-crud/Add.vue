<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="createItem" class="form" method="post">
                            <h3 class="text-center text-info">{{\$t('${lowerCase}.add.view.title')}}</h3>
#foreach( $field in $fields )
                            <div class="form-group">
                                <label>{{\$t('${field}')}}</label>
                                <input type="text" class="form-control"
                                       v-model="item.${field}"/>
                            </div>
#end
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
        name: "${objectName}Add",
        computed: mapState({
            user: function (store) {
                return store.${lowerCase}.${lowerCase};
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
                this.\$store.commit('${lowerCase}/commit${objectName}', this.item);
                this.\$store.dispatch('${lowerCase}/create');
                this.\$router.push({path:'/${path}/list'});
            }
        }
    };
</script>
