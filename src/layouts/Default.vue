<template>
    <b-container>
        <b-row>
            <b-col>
                <nav-buttom/> <div class="navUser">ID: {{user.id}}, {{user.userName}} kaip {{user.roles[0].role}} <a href="#" @click.prevent="logout">Atsijungti</a></div>
            </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <side-bar-nav/>
          </b-col>
          <b-col cols="10">
                <router-view/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Default",
        data(){
            return {
                user: {
                    id:"",
                    userName: "",
                    roles: [{role: "ADMIN"}]
                }
            }
        },
        methods: {
            logout(){
                this.$store.commit('login/commitDropData');
                this.$router.push({path: '/logout'});
            }
        }
    }
</script>
<style lang="scss">
    .navUser{
        float: right;
    }
</style>
