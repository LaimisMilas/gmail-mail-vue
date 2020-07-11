<template>
    <div>Labas as krabas</div>
</template>
<script>
    import axios from "axios";
    export default {
        name: "GmailCallBack",
        props: ["code"],
        created() {
            console.log("GmailCallBack created");
            this.gmailCallBack();
        },
        methods: {
            gmailCallBack(){
                console.log("GmailCallBack gmailCallBack");
                console.log("token: " + localStorage.getItem("token"));
                console.log("baseUrl: " + this.$store.state.baseUrl);
                axios
                    .get(this.$store.state.baseUrl + "/auth/login/gmailCallback?code=" + this.$props.code,
                        localStorage.getItem("token"))
                    .then(resp => {
                        console.log("resp " + JSON.stringify(resp));
                    });
            }
        }
    }
</script>
