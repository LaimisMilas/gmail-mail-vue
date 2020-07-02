<template>
  <div>
    <b-container>
      <public-nav/>
    </b-container>
    <b-container>
      <router-view/>
    </b-container>
    <b-container>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: "Auth"
    }
</script>
