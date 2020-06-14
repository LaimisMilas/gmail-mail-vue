<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <router-link to="/campaign/add"> {{$t('add')}}</router-link>
                        <table>
                            <thead>
                            <tr>
                                <th>{{$t('id')}}</th>
                                <th>{{$t('userId')}}</th>
                                <th>{{$t('title')}}</th>
                                <th>{{$t('logKey')}}</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in itemList">
                            <tr @click="viewItem(item.id)">
                                <td>{{item.id}}</td>
                                <td>{{item.userId}}</td>
                                <td>{{item.title}}</td>
                                <td>{{item.logKey}}</td>
                                <td>
                                    <router-link :to="{ name: 'CampaignEdit', params: { id: item.id }}">{{$t('edit')}}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'CampaignDelete', params: { id: item.id }}">
                                        {{$t('delete')}}
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
        name: "CampaignList",
        computed: mapState({
            itemList: function (store) {
                return store.campaign.campaigns;
            }
        }),
        created() {
            this.$store.dispatch('campaign/fetchData');
        },
        methods: {
            view(itemId){
                this.$router.push('/campaign/view/' + itemId);
            },
        }
    };

</script>
