<template>
    <modal name="add" :adaptive="true" :scrollable="true">
        <form @submit.prevent="create" method="post">
            <input type="text" placeholder="Title" v-model="companyInfo.title"/>
            <input type="text" placeholder="Address" v-model="companyInfo.address"/>
            <input type="text" placeholder="Email" v-model="companyInfo.email"/>
            <input type="text" placeholder="Company code" v-model="companyInfo.companyCode"/>
            <input type="text" placeholder="Raw contacts" v-model="companyInfo.rawContacts"/>
            <input type="text" placeholder="Company url" v-model="companyInfo.companyUrl"/>
            <input type="text" placeholder="status" v-model="companyInfo.status"/>
            <input type="text" placeholder="Web site url" v-model="companyInfo.webSiteUrl"/>
            <input type="text" placeholder="Company owner" v-model="companyInfo.companyOwner"/>
            <input type="text" placeholder="Sales" v-model="companyInfo.sales"/>
            <button type="submit">Save</button>
        </form>
    </modal>
</template>
<script>
    import axios from "axios";

    export default {
        props: ['id'],
        data() {
            return {
                companyInfo: {
                    id: 0,
                    title: "UAB Krabaėęčs",
                    address: "Vilnius, Nemencines pl. 32-2",
                    email: "info@krabas.com",
                    companyCode: "1231212312",
                    rawContacts: "",
                    companyUrl: "http://rekvizitai.lt/krabas",
                    status: 0,
                    webSiteUrl: "http://krabas.lt",
                    companyOwner: "Stasius Andriulaitis",
                    sales: ""
                }
            };
        },
        created() {
            this.fetch();
        },
        methods: {
            fetch() {
                axios.get(this.$store.state.baseUrl + "/api/company/info/" + this.$props.id).then(response => {
                    this.companyInfo = response.data;
                });
            },
            update() {
                axios
                    .post(this.$store.state.baseUrl + "/api/company/info", this.companyInfo)
                    .then(data => {

                    });
            }
        }
    };
</script>
