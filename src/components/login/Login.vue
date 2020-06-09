<template>
  <div id="login">
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form @submit.prevent="userLogIn" id="login-form" class="form" action="" method="post">
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                <input
                        type="text"
                        placeholder="El.paštas"
                        class="form-control"
                        v-model="localLoginState.username" >
              </div>
              <div class="form-group">
                <input
                        type="password"
                        class="form-control"
                        placeholder="Slaptažodis"
                        v-model="localLoginState.password">
              </div>
              <div class="form-group">
                <input type="submit" name="submit" class="btn btn-info btn-md" value="Prisijungti">
              </div>
              <div id="register-link" class="text-right">
                <router-link class="text-info" to="/register">REGISTRUOTIS ČIA</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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

<style>

  #login .container #login-row #login-column #login-box {
    height: 280px;
  }
  #login .container #login-row #login-column #login-box #login-form #register-link {
    margin-top: -45px;
  }

</style>
