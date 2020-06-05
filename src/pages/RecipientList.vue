<template>
    <ul id="example-1">
        <li v-for="item in items" :key="item.userName">
            {{ item.companyCode }} {{ item.title }} {{ item.id }}
        </li>
    </ul>
</template>

<script>

    import axios from "axios";

    export default {
        name: "RecipientList",
        data() {
            return {
                items: [
                    {userName: 'Foo'},
                    {userName: 'Bar'}
                ]
            }
        },
        created(){
           this.getData();
        },
        methods: {
            getData() {
                axios.get(this.$store.state.baseUrl + "/api/company/info", {
                    headers: {
                        Authorization: 'Bearer ' + this.$store.state.login.token
                    }
                }).then(resp => {
                    console.log(resp.data);
                    this.items = resp.data;
                }).catch(reason => {
                    this.logs = reason;
                });
            }
        }
    }
</script>

<style scoped>

</style>
