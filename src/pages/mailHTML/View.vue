<template>
  <div id="add_item">
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
              <h3 class="text-center text-info">{{$t('user.role.view.view.title')}}</h3>
              <div class="form-group">
                  <label>{{$t('id')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.id"/>
              </div>
              <div class="form-group">
                  <label>{{$t('role')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.role"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    name: "UserRoleView",
    props: ["id"],
    computed: mapState({
      item: function (store) {
        return store.userRole.userRole;
      }
    }),
    created() {
      this.$store.commit('userRole/commitSelectedUserRole', this.$props.id);
      this.$store.dispatch('userRole/getSelected');
    },
    methods: {
    }
  };
</script>
