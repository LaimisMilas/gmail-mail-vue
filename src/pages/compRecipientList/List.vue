<template>
    <div id="add_item">
      <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Id</th>
          <th>Title</th>
<!--
          <th>Komp. kodas</th>
-->
        </tr>
      </thead>
      <tbody v-for="item in pageOfItems" :key="item.id">
        <tr>
          <td><input type="checkbox" /></td>
          <td @click="viewItem(item)">{{item.id}}</td>
          <td @click="viewItem(item)">{{item.title}}</td>

<!--      <td @click="viewItem(ci)">{{ci.rawContacts}}</td>
-->
          <td>
            <router-link :to="{ name: 'CompRecipientListEdit', params: { id: item.id }}">Redaguoti</router-link>
          </td>
          <td>
            <router-link :to="{ name: 'CompRecipientListDelete', params: { id: item.id }}">Trinti</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <jw-pagination :items="compRecipientLists" @changePage="onChangePage" :pageSize="20"></jw-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CompRecipientList",
  computed: mapState({
    compRecipientLists: function(store) {
      return store.compRecipientList.compRecipientLists;
    }
  }),
  data() {
    return {
      pageOfItems: []
    };
  },
  created() {
    this.$store.dispatch('compRecipientList/fetchData');
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
