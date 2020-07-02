<template>
    <div>
    <sidebar-menu :menu="menu" />
    </div>
</template>

<script>
    export default {
        name: "side-bar-nav",
        data() {
            return {
                menu: [
                    { href: '/', title: this.$t('nav.home')},
                    { href: '/dashboard', title: this.$t('nav.dashboard')},
                    { href: '/company/info/list', title: this.$t('nav.companyInfo')},
                    { href: '/comp/recipient/list', title: this.$t('nav.compRecipientList')},
                    { href: '/send/reg/list', title: this.$t('nav.sendReg')},
                    { href: '/gmail/setting/list', title: this.$t('nav.gmailSetting')},
                    { href: '/campaign/list', title: this.$t('nav.campaign')},
                    { href: '/user/list', title: this.$t('nav.user')},
                    { href: '/user/role/list', title: this.$t('nav.userRole')},
                    { href: '/email/html/list', title: this.$t('nav.mailHTML')}
                ]
            }
        },
        methods:{
            resetSelected(){
                this.$store.commit('persona/commitResetPersona');
                this.$store.commit('email/commitResetEmail');
                this.$store.commit('phoneNumber/commitResetPhoneNumber');
                this.$store.commit('companyInfo/commitResetCompanyInfo');
            }
        }
    }
</script>
