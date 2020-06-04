<template>
  <nav>
    <router-link to="/profile">Profilis |</router-link>
    <router-link to="/settings"> Nustatymai</router-link>
  </nav>
</template>

<script>
    export default {
        name: "nav-buttom",
        props: ['active']
    }
</script>

<style lang="scss">
  nav {
    padding: 10px;
    background: coral;
    text-align: center;
    position: fixed;
    width: 330px;
    top: 516px;
    a {
      font-weight: bold;
    }
  }
</style>
