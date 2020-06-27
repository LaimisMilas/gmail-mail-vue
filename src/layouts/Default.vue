<template>
    <b-container>
        <b-row>
            <b-col>
                <nav-buttom/>
            </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <side-bar-nav/>
          </b-col>
          <b-col cols="10">
                <router-view/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Default"
    }
</script>
