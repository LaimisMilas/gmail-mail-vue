<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Adresas</th>
          <th>El.pastas</th>
          <th>Komp. kodas</th>
          <th>RAW tekstas</th>
          <th>Komp. URL</th>
          <th>Statusas</th>
          <th>WEB svetaine</th>
          <th>Komp. savininkas</th>
          <th>Pardavimai</th>
        </tr>
      </thead>
      <tbody v-for="ci in companyInfos" v-bind:key="ci.id">
        <tr>
          <td @click="viewItem(ci)">{{ci.id}}</td>
          <td @click="viewItem(ci)">{{ci.address}}</td>
          <td @click="viewItem(ci)">{{ci.email}}</td>
          <td @click="viewItem(ci)">{{ci.companyCode}}</td>
          <td @click="viewItem(ci)">{{ci.rawContacts}}</td>
          <td @click="viewItem(ci)">{{ci.companyUrl}}</td>
          <td @click="viewItem(ci)">{{ci.status}}</td>
          <td @click="viewItem(ci)">{{ci.webSiteUrl}}</td>
          <td @click="viewItem(ci)">{{ci.companyOwner}}</td>
          <td @click="viewItem(ci)">{{ci.sales}}</td>
          <td>
            <router-link to="/company/info/edit/{{ci.id}}">Redaguoti</router-link>
          </td>
          <td>
            <router-link to="/company/info/delete/{{ci.id}}">Trinti</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CompanyInfoList",
  data() {
    return {
      companyInfos: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios.get(this.$store.state.baseUrl + "/api/company/info").then(response => {
        this.companyInfos = response.data;
      });
    },
    view(ci){
      this.$router.push('/company/info/' + ci.id);
    }
  }
};

</script>
