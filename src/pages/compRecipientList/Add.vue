<template>
    <modal name="add" :adaptive="true" :scrollable="true">
        <form @submit.prevent="create" method="post">
          <input type="text" placeholder="Title" v-model="companyInfo.title"/>
          <input type="text" placeholder="Address" v-model="companyInfo.address"/>
          <button type="submit">Save</button>
        </form>
    </modal>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            companyInfos: function(store) {
                return store.companyInfo.companyInfos;
            }
        }),
        data() {
            return {
                companyInfo: {
                }
            };
        },
        created() {
            this.$store.dispatch('companyInfo/fetchData');
        },
        methods: {
            create() {
                this.$store.dispatch('companyInfo/create');
            }
        }
    };
</script>
