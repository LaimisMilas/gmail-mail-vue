<template>
  <div>
    <b-container tag="header" class="bg-primary py-5">
      <nav-buttom/>
    </b-container>
    <b-container tag="main" class="flex-grow-1">
      <router-view/>
    </b-container>
    <b-container tag="footer" class="bg-primary py-5">
    </b-container>
  </div>
</template>

<script>
    export default {
        name: "Auth"
    }
</script>
