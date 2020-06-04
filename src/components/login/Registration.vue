<template>
  <div>
    <header headerTitle="Sukurti paskyrą" />
    <form @submit.prevent="userRegistration" method="post" class="register-form form">
      <input type="text" placeholder="Vardas" v-model="customer.firstName" id="firstName" />
      <input type="text" placeholder="El.paštas" v-model="customer.email" id="email" />
      <input type="text" placeholder="Slaptažodis" v-model="customer.password" id="phone" />
      <input type="submit" value="Registruotis" class="button" />

      <router-link class="link" to="/login">Prisijungti</router-link>
      <span class="small-text">arba</span>
      <input type="submit" value="Registruotis su Facebook" class="button fb" />
      <input type="submit" value="Registruotis su Google" class="button google" />
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      customer: {
        id: 0,
        email: "",
        firstName: "",
        lastName: "",
        phone: ""
      }
    };
  },
  methods: {
    userRegistration() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
