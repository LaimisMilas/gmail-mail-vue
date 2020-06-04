<template>
  <div>
    <header headerTitle="FB ar Google"/>
  </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                customer: {
                    id: 0,
                    email: "",
                    firstName: "",
                    lastName: "",
                    phone: ""
                }
            };
        },
        methods: {
        }
    };
</script>
