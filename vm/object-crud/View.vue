<template>
  <div id="add_item">
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
              <h3 class="text-center text-info">{{\$t('${lowerCase}.view.view.title')}}</h3>
              <model-nav/>
#foreach( $field in $fields )
              <div class="form-group">
                  <label>{{\$t('${field}')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.${field}"/>
              </div>
#end
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
    name: "${objectName}View",
    components: {
          'model-nav': modelNav
    },
    props: ["id"],
    computed: mapState({
      item: function (store) {
          return store.${lowerCase}.${lowerCase};
      }
    }),
    created() {
        this.\$store.commit('${lowerCase}/commitSelected${objectName}', this.\$props.id);
        this.\$store.dispatch('${lowerCase}/getSelected');
    },
    methods: {
    }
  };
</script>
