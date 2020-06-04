<template>
   <div id="dialog_layout">
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: "Dialog"
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
  #dialog_layout{
    padding-top: 10px;
  }
  .agenda_line{
    height: 20px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    label{
      width: 100px;
      display: block;
      text-align: left;
      font-size: 14px;
    }
  }
  div.datetime-picker{
      input {
         width: 100px;
         margin-right: 20px;
      }
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
