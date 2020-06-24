<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <h3 class="text-center text-info">{{\$t('${lowerCase}.list.view.title')}}</h3>
                        <router-link to="/${path}/add"> {{$t('add')}}</router-link>
                        <table>
                            <thead>
                            <tr>
#foreach( $field in $fields )
                                <th>{{\$t('${field}')}}</th>
#end
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in itemList">
                            <tr>
#foreach( $field in $fields )
                                <td>{{item.${field}}}</td>
#end
                                <td>
                                    <router-link :to="{ name: '${objectName}Edit', params: { id: item.id }}">{{$t('edit')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: '${objectName}Delete', params: { id: item.id }}">
                                        {{$t('delete')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: '${objectName}View', params: { id: item.id }}">
                                        {{$t('view')}}
                                    </router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "${objectName}List",
        computed: mapState({
            itemList: function (store) {
                return store.${lowerCase}.${lowerCase}s;
            }
        }),
        created() {
            this.\$store.dispatch('${lowerCase}/fetchData');
        },
        methods: {
        }
    };

</script>
