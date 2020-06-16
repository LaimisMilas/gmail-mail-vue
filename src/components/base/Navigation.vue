<template>
  <nav>

    <router-link class="text-info" to="/">{{$t('nav.home')}}</router-link>
    <router-link class="text-info" to="/dashboard">{{$t('nav.dashboard')}}</router-link>
    <router-link class="text-info" to="/company/info/list">{{$t('nav.companyInfo')}}</router-link>
    <router-link class="text-info" to="/comp/recipient/list">{{$t('nav.compRecipientList')}}</router-link>
    <router-link class="text-info" to="/send/reg/list">{{$t('nav.sendReg')}}</router-link>
    <router-link class="text-info" to="/gmail/setting/list">{{$t('nav.gmailSetting')}}</router-link>
    <router-link class="text-info" to="/campaign/list">{{$t('nav.campaign')}}</router-link>
    <router-link class="text-info" to="/user/list">{{$t('nav.user')}}</router-link>
    <router-link class="text-info" to="/user/role/list">{{$t('nav.userRole')}}</router-link>
    <router-link class="text-info" to="/email/html/list">{{$t('nav.mailHTML')}}</router-link>
  </nav>
</template>

<script>
    export default {
        name: "nav-buttom",
        props: ['active']
    }
</script>

