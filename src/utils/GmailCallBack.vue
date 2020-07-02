<template>
    <div></div>
</template>
<script>
    import axios from "axios";

    export default {
        name: "GmailCallBack",
        props: ["code"],
        created() {
            this.gmailCallBack();
        },
        methods: {
            gmailCallBack(){
                console.log(this.$props.code);
                axios
                    .get(this.$store.state.baseUrl + "/auth/login/gmailCallback?code=" + this.$props.code,
                        this.$store.getters["login/getToken"])
                    .then(resp => {
                        console.log("resp " + JSON.stringify(resp));
                    });
            }
        }
    }
</script>
