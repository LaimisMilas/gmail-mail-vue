<template>
  <div>
    <header headerTitle="Prisijungti" />
    <form @submit.prevent="userLogIn" method="post" class="register-form form">
      <input type="text" placeholder="El.paštas" v-model="localLoginState.username" />
      <input type="text" placeholder="Slaptažodis" v-model="localLoginState.password" />
      <input type="submit" value="Prisijungti" class="button" />

      <router-link class="link" to="/register">Neturite paskyros? REGISTRUOTIS ČIA</router-link>
      <router-link class="link" to="/forget/password">Pamiršote slaptažodį?</router-link>

      <span class="small-text">arba</span>

      <input type="submit" value="Registruotis su Facebook" class="button fb" />
      <input type="submit" value="Registruotis su Google" class="button google" />
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    localLoginState: function(store) {
      //console.log("login.vue computed mapState param :store ", JSON.stringify(store));
      //console.log("login.vue computed mapState param :store.login.login ", JSON.stringify(store.login.login));
      return store.login.login;
    }
  }),
  methods: mapActions("login", ["userLogIn"])
};
</script>
