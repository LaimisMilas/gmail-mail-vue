<template>
    <h2 class="title" >{{ headerTitle }}</h2>
</template>

<script>
    export default {
        name: "My-Header",
        props: ['headerTitle'],
        computed: {
            userName () {
              //console.info("hEADER.vue this.$store.state.login.user.userName " + JSON.stringify(this.$store.state));
               // return this.$store.state.login.user.userName
                return this.$store.state.login.user.userName;
            }
        }
    }
</script>
<style scoped>

</style>
