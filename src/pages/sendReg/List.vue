<template>
    <div id="add_item">
        <div class="container">
            <div class="row justify-content-center align-items-center" id="login-row">
                <div class="col-md-6" id="login-column">
                    <div class="col-md-12" id="login-box">
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Logs</th>
                            </tr>
                            </thead>
                            <tbody :key="item.id" v-for="item in pageOfItems">
                            <tr>
                                <td>{{item.id}}</td>
                                <td>{{item.logs}}</td>
                            </tr>
                            </tbody>
                        </table>
                        <jw-pagination :items="sendRegLists" :pageSize="20"
                                       @changePage="onChangePage"></jw-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "SendRegList",
        computed: mapState({
            sendRegLists: function (store) {
                return store.sendReg.sendRegs;
            }
        }),
        data() {
            return {
                pageOfItems: []
            };
        },
        created() {
            this.$store.dispatch('sendReg/fetchData');
        },
        methods: {
            onChangePage(pageOfItems) {
                this.pageOfItems = pageOfItems;
            }
        }
    };

</script>
