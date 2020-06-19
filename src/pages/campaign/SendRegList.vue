<template>
    <div id="add_item">
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "CampaignRegList",
        computed: mapState({
            sendRegLists: function (store) {
                return store.sendReg.sendRegs;
            }
        }),
        data() {
            return {
                pageOfItems: []
            };
        },
        created() {
            console.log("Labas as krabas");
            this.$store.dispatch('sendReg/fetchData');
        },
        methods: {
            onChangePage(pageOfItems) {
                this.pageOfItems = pageOfItems;
            }
        }
    };

</script>
