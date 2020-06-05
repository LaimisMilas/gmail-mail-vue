<template>
  <nav>
    <router-link class="text-info" to="/">Board |</router-link>
    <router-link class="text-info" to="/recipient/list">Recipients</router-link>
  </nav>
</template>

<script>
    export default {
        name: "nav-buttom",
        props: ['active']
    }
</script>

