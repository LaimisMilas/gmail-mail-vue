<template>
  <nav>
    <router-link class="text-info" to="/">Board |</router-link>
    <router-link class="text-info" to="/company/info/list"> CompanyInfo |</router-link>
    <router-link class="text-info" to="/comp/recipient/list"> CompRecipientList |</router-link>
    <router-link class="text-info" to="/send/reg/list"> SendReg |</router-link>
    <router-link class="text-info" to="/gmail/setting/list"> GmailSetting |</router-link>
  </nav>
</template>

<script>
    export default {
        name: "nav-buttom",
        props: ['active']
    }
</script>

