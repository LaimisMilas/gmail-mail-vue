<template>
  <div id="add_item">
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
              <h3 class="text-center text-info">{{$t('email.view.view.title')}}</h3>
              <model-nav/>
              <div class="form-group">
                  <label>{{$t('id')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.id"/>
              </div>
              <div class="form-group">
                  <label>{{$t('email')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.email"/>
              </div>
              <div class="form-group">
                  <label>{{$t('domain')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.domain"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import {mapState} from "vuex";
  import modelNav from "./modelNav.vue";

  export default {
    name: "EmailView",
    components: {
          'model-nav': modelNav
    },
    props: ["id"],
    computed: mapState({
      item: function (store) {
          return store.email.email;
      }
    }),
    created() {
        this.$store.commit('email/commitSelectedEmail', this.$props.id);
        this.$store.dispatch('email/getSelected');
    },
    methods: {
    }
  };
</script>