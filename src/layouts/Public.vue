<template>
  <div>
    <b-container tag="header">
      <public-nav/>
    </b-container>
    <b-container tag="main" >
      <router-view/>
    </b-container>
    <b-container tag="footer" >
    </b-container>
  </div>
</template>

<script>
    export default {
        name: "Public"
    }
</script>
