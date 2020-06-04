<template>
  <div>
    <header headerTitle="Redaguoti"/>
    <form @submit.prevent="updateUser" method="post">
      <div class="line">
        <input type="text" v-model="user.id" id="user_id"/>
      </div>
      <div class="line">
        <input type="text" v-model="user.userName" id="user_userName"/>
      </div>
      <div class="line">
        <input type="text" v-model="user.enabled" id="user_enabled"/>
      </div>
      <div class="line">
        <button type="submit" name="save">Išaugoti</button>
      </div>
    </form>
  </div>
</template>
<script>
    import axios from "axios";

    export default {
        data() {
            return {
                user: {},
                userRoles: []
            };
        },
        created() {
            this.fetch();
        },
        methods: {
            fetch() {
                this.user = this.$store.state.login.user;
            },
            updateUser() {
                axios
                    .put(
                        this.$store.state.baseUrl  + "/api/users", this.user)
                    .then(data => {
                        this.$router.push({ path: '/profile' })
                    });
            }
        }
    };
</script>
