<template>
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Id</th>
          <th>El.pastas</th>
          <th>Adresas</th>
<!--
          <th>Komp. kodas</th>
          <th>RAW tekstas</th>
          <th>Komp. URL</th>
          <th>Statusas</th>
          <th>WEB svetaine</th>
          <th>Komp. savininkas</th>
          <th>Pardavimai</th>
-->
        </tr>
      </thead>
      <tbody v-for="ci in pageOfItems" :key="ci.id">
        <tr>
          <td><input type="checkbox" /></td>
          <td @click="viewItem(ci)">{{ci.id}}</td>
          <td @click="viewItem(ci)">{{ci.email}}</td>
          <td @click="viewItem(ci)">{{ci.address}}</td>

<!--      <td @click="viewItem(ci)">{{ci.rawContacts}}</td>
          <td @click="viewItem(ci)">{{ci.companyUrl}}</td>
          <td @click="viewItem(ci)">{{ci.status}}</td>
          <td @click="viewItem(ci)">{{ci.webSiteUrl}}</td>
          <td @click="viewItem(ci)">{{ci.companyOwner}}</td>
          <td @click="viewItem(ci)">{{ci.sales}}</td>
-->
          <td>
            <router-link :to="{ name: 'CompanyInfoEdit', params: { id: ci.id }}">Redaguoti</router-link>
          </td>
          <td>
            <router-link :to="{ name: 'CompanyInfoDelete', params: { id: ci.id }}">Trinti</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <jw-pagination :items="companyInfos" @changePage="onChangePage" :pageSize="20"></jw-pagination>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CompanyInfoList",
  computed: mapState({
    companyInfos: function(store) {
      return store.companyInfo.companyInfos;
    }
  }),
  data() {
    return {
      pageOfItems: []
    };
  },
  created() {
    this.$store.dispatch('companyInfo/fetchData');
  },
  methods: {
    view(ci){
      this.$router.push('/company/info/' + ci.id);
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    }
  }
};

</script>
