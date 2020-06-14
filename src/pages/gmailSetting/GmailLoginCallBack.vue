<template>
    <div id="add_item">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "",
        props: ["code"],
        created() {
            this.$store.commit('gmailSetting/commitGmailSettingCode', this.$props.code);
            this.$store.dispatch('gmailSetting/loginCallBack');
        },
        methods: {
        }
    };
</script>
