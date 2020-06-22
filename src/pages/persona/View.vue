<template>
  <div id="add_item">
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
              <h3 class="text-center text-info">{{$t('persona.view.view.title')}}</h3>
              <model-nav/>
              <div class="form-group">
                  <label>{{$t('id')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.id"/>
              </div>
              <div class="form-group">
                  <label>{{$t('name')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.name"/>
              </div>
              <div class="form-group">
                  <label>{{$t('sureName')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.sureName"/>
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
    name: "PersonaView",
    components: {
          'model-nav': modelNav
    },
    props: ["id"],
    computed: mapState({
      item: function (store) {
        return store.persona.persona;
      }
    }),
    created() {
      this.$store.commit('persona/commitSelectedPersona', this.$props.id);
      this.$store.dispatch('persona/getSelected');
    },
    methods: {
    }
  };
</script>
