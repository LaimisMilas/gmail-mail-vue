<template>
  <div id="default_layout">
    <router-view/>
    <nav-buttom/>
  </div>
</template>

<script>
    export default {
        name: "Default"
    }
</script>

<style lang="scss">
  .line{
    height: 45px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .view_line{
    height: 65px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    label{
      width: 100px;
      display: block;
      text-align: left;
    }
    input, textarea{
      width: 290px;
      height: 20px;
      border: 0;
      margin-top: 5px;
      padding: 5px;
    }
  }
  #default_layout{
    padding-top: 10px;
  }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
