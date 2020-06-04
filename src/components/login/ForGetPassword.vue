<template>
  <div>
    <header headerTitle="Pamiršote saptažodį" />
    <form @submit.prevent="resetPassword" method="post" class="register-form form">
      <input type="text" placeholder="El.paštas" v-model="user.email" />
      <input type="submit" value="Tęsti" class="button" />
      <router-link class="link" to="/login">Prisijungti</router-link>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: ""
      }
    };
  },
  methods: {
    resetPassword() {
      this.$router.router.push({ path: "/login" });
    }
  }
};
</script>
