<template>
  <div>
    <header headerTitle="Peržiurėti"/>
    <div class="line">
      <router-link to="/profile/edit">Redaguoti</router-link>
    </div>
    <div class="view_line">
      <label for="user_userName">Vardas</label>
      <input type="text" v-model="user.userName" id="user_userName"/>
    </div>
    <div class="view_line">
      <label>El.paštas</label>
      <input type="text" v-model="user.enabled"/>
    </div>
    <div class="view_line">
      <label>Telefonas</label>
      <input type="text" v-model="user.enabled"/>
    </div>
    <div class="view_line">
      <label>Adresas</label>
      <input type="text" v-model="user.enabled"/>
    </div>
    <div class="line">
      <router-link to="/setting/customers">Klientai</router-link>
    </div>
    <div class="line">
      <router-link to="/statistic">Statistika</router-link>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    id: 0,
                    email: "",
                    firstName: "",
                    lastName: "",
                    phone: ""
                }
            };
        },
        created() {
           // console.info("ViewUserProfile $baseUrl: " + this.$baseUrl);
           // console.info("ViewUserProfile this.$store.state.currentUser.id: " + this.$store.state.currentUser.id);
           // console.info("ViewUserProfile this.$store.state.currentUser.userName: " + this.$store.state.currentUser.userName);
            this.fetch();
        },
        methods: {
            fetch() {
                //console.info("ViewUserProfile this.$store.state: " + this.$store.state);
                this.user = this.$store.state.login.user;
            }
        }
    };

   // var sd = {"id":11,"userName":"laimis","password":"","enabled":true,"token":"","roles":[{"id":1,"role":"ADMIN"}],"accountNonExpired":false,"accountNonLocked":false,"credentialsNonExpired":false,"authorities":null,"username":"laimis"}

</script>
