<script setup>
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';

const items = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        to: '/'
    },
    {
        label: 'Clients',
        icon: 'pi pi-fw pi-users',
        to: '/clients'
    },
    {
        label: 'Documents',
        icon: 'pi pi-fw pi-file',
        to: '/documents'
    },


])

</script>

<template>
    <nav>
        <TabMenu :model="items" />
    </nav>
</template>

<style scoped>
nav {
    margin-bottom: 2rem;
    width: 100%;
}
</style>