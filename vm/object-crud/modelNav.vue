<template>
    <div>
        <router-link :to="{ name: list}">
            {{$t('list')}}
        </router-link>
        <router-link :to="{ name: add}">
            {{$t('add')}}
        </router-link>
        <router-link :to="{ name: view}">
            {{$t('view')}}
        </router-link>
        <router-link :to="{ name: edit}">
            {{$t('edit')}}
        </router-link>
        <router-link :to="{ name: deleteItem}">
            {{$t('delete')}}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "modelNav",
        data() {
            return {
                list: "${objectName}List",
                view: "${objectName}View",
                edit: "${objectName}Edit",
                deleteItem: "${objectName}Delete",
                add: "${objectName}Add"
            }
        }
    }
</script>

