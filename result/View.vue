<template>
  <div id="add_item">
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
              <h3 class="text-center text-info">{{$t('relationLink.view.view.title')}}</h3>
              <model-nav/>
              <div class="form-group">
                  <label>{{$t('id')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.id"/>
              </div>
              <div class="form-group">
                  <label>{{$t('emailId')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.emailId"/>
              </div>
              <div class="form-group">
                  <label>{{$t('phoneId')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.phoneId"/>
              </div>
              <div class="form-group">
                  <label>{{$t('personaId')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.personaId"/>
              </div>
              <div class="form-group">
                  <label>{{$t('companyId')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.companyId"/>
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
    name: "RelationLinkView",
    components: {
          'model-nav': modelNav
    },
    props: ["id"],
    computed: mapState({
      item: function (store) {
          return store.relationLink.relationLink;
      }
    }),
    created() {
        this.$store.commit('relationLink/commitSelectedRelationLink', this.$props.id);
        this.$store.dispatch('relationLink/getSelected');
    },
    methods: {
    }
  };
</script>