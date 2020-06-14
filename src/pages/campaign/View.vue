<template>
  <div id="add_item">
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
              <h3 class="text-center text-info">{{$t('campaign.view.view.title')}}</h3>
              <div class="form-group">
                  <label>{{$t('id')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.id"/>
              </div>
              <div class="form-group">
                  <label>{{$t('userId')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.userId"/>
              </div>
              <div class="form-group">
                  <label>{{$t('campaign.title')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.title"/>
              </div>
              <div class="form-group">
                  <label>{{$t('campaign.subjectLine')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.subjectLine"/>
              </div>
              <div class="form-group">
                  <label>{{$t('campaign.sender')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.sender"/>
              </div>
              <div class="form-group">
                  <label>{{$t('campaign.logKey')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.logKey"/>
              </div>
              <div class="form-group">
                  <label>{{$t('campaign.unsubscribeListId')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.unsubscribeListId"/>
              </div>
              <div class="form-group">
                  <label>{{$t('campaign.created')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.created"/>
              </div>
              <div class="form-group">
                  <label>{{$t('campaign.gmailHTML.tmp')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.gmailHTML.title"/>
              </div>
              <div class="form-group">
                  <label>{{$t('campaign.recipientList.title')}}</label>
                  <input disabled type="text" class="form-control"
                         v-model="item.recipientList.title"/>
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
    name: "CampaignView",
    props: ["id"],
    computed: mapState({
      item: function (store) {
        return store.campaign.campaign;
      }
    }),
    created() {
      this.$store.commit('campaign/commitSelectedCampaign', this.$props.id);
      this.$store.dispatch('campaign/getSelected');
    },
    methods: {
    }
  };
</script>
