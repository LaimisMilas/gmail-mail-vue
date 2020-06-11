<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="create" class="form"  method="post">
                            <input type="text" class="form-control" placeholder="Title" v-model="companyInfo.title"/>
                            <input type="text" class="form-control" placeholder="Address" v-model="companyInfo.address"/>
                            <input type="text" class="form-control" placeholder="Email" v-model="companyInfo.email"/>
                            <input type="text" class="form-control" placeholder="Company code" v-model="companyInfo.companyCode"/>
                            <input type="text" class="form-control" placeholder="Raw contacts" v-model="companyInfo.rawContacts"/>
                            <input type="text" class="form-control" placeholder="Company url" v-model="companyInfo.companyUrl"/>
                            <input type="text" class="form-control" placeholder="status" v-model="companyInfo.status"/>
                            <input type="text" class="form-control" placeholder="Web site url" v-model="companyInfo.webSiteUrl"/>
                            <input type="text" class="form-control" placeholder="Company owner" v-model="companyInfo.companyOwner"/>
                            <input type="text" class="form-control" placeholder="Sales" v-model="companyInfo.sales"/>
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
