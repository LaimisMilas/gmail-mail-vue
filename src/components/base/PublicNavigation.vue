<template>
  <nav>
    <router-link class="text-info" to="/">{{$t('nav.home')}}</router-link>
    <router-link class="text-info" to="/login">{{$t('nav.login')}}</router-link>
    <router-link class="text-info" to="/register">{{$t('nav.register')}}</router-link>
  </nav>
</template>

<script>
    export default {
        name: "public-nav",
        props: ['active']
    }
</script>

