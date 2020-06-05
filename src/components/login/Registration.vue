<template>
  <div id="login">
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form @submit.prevent="userRegistration" id="login-form" class="form" action="" method="post">
              <h3 class="text-center text-info">Registruotis</h3>
              <div class="form-group">
                <input
                        type="text"
                        class="form-control"
                        placeholder="Vardas" v-model="customer.firstName" >
              </div>
              <div class="form-group">
                <input
                        type="text"
                        class="form-control"
                        placeholder="El.paštas" v-model="customer.email">
              </div>
              <div class="form-group">
                <input
                        type="text"
                        class="form-control"
                        placeholder="Slaptažodis" v-model="customer.password">
              </div>
              <div class="form-group">
                <input type="submit" name="submit" class="btn btn-info btn-md" value="Registruotis">
              </div>
              <div id="register-link" class="text-right">
                <router-link class="text-info" to="/login">PRISIJUNGTI</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
