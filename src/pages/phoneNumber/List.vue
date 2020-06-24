<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <h3 class="text-center text-info">{{$t('phoneNumber.list.view.title')}}</h3>
                        <router-link to="/phone/number/add"> {{$t('add')}}</router-link>
                        <table>
                            <thead>
                            <tr>
                                <th>{{$t('id')}}</th>
                                <th>{{$t('number')}}</th>
                                <th>{{$t('operator')}}</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in itemList">
                            <tr>
                                <td>{{item.id}}</td>
                                <td>{{item.number}}</td>
                                <td>{{item.operator}}</td>
                                <td>
                                    <router-link :to="{ name: 'PhoneNumberEdit', params: { id: item.id }}">
                                        {{$t('edit')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'PhoneNumberDelete', params: { id: item.id }}">
                                        {{$t('delete')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'PhoneNumberView', params: { id: item.id }}">
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
        name: "PhoneNumberList",
        computed: mapState({
            itemList: function (store) {
                return store.phoneNumber.phoneNumbers;
            }
        }),
        created() {
            this.$store.dispatch('phoneNumber/fetchData');
        },
        methods: {
        }
    };

</script>
