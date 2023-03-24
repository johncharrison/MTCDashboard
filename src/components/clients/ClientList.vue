<script setup>
import Card from "primevue/card";
import Button from "primevue/button";
import SplitButton from "primevue/splitbutton";
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useClientStore } from "../../stores";
import { useToast } from "primevue/usetoast";

const router = useRouter()
const clientStore = useClientStore();
const clients = computed(() => clientStore.clients);
const toast = useToast();

const items = [
    {
        label: 'Export XLSX',
        icon: 'pi pi-file-excel',
        command: () => {
            toast.add({ severity: 'success', summary: 'XLSX downloaded', detail: 'Client data downloaded', life: 3000 });
        }
    },
    {
        label: 'Export CSV',
        icon: 'pi pi-download',
        command: () => {
            toast.add({ severity: 'success', summary: 'CSV downloaded', detail: 'Client data downloaded', life: 3000 });
        }
    },
    {
        label: 'Export JSON',
        icon: 'pi pi-code',
        command: () => {
            toast.add({ severity: 'success', summary: 'JSON downloaded', detail: 'Client data downloaded', life: 3000 });
        }
    },
];

const exportPDF = () => {
    toast.add({ severity: 'success', summary: 'PDF downloaded', detail: 'Client data downloaded', life: 3000 });
}

const cardClick = (id) => {
    router.push({ name: 'clients-detail', params: { id: id } })
}

</script>

<template>
    <div class="page-layout">
        <div class="grid w-full">
            <div v-for="client in clients" class="col-3">
                <div class="flex justify-content-between h-full">
                    <Card @click="() => { cardClick(client.id) }" class="cursor-pointer client-card">
                        <template #header>
                            <div class="flex justify-content-center">
                                <img :src="`/src/assets/${client.imgSrc}`" class="client-logo" />
                            </div>
                        </template>
                        <template #title> {{ client.name }} </template>
                        <template #subtitle> Short description </template>
                        <template #content>
                            <p class="text-lg">{{ client.ppoc.name }}</p>
                            <p class="text-sm text-500"> Phone: {{ client.ppoc.phone }}</p>
                            <p class="text-sm text-500"> Email: <a :href="`mailto:${client.ppoc.email}`">{{
                                client.ppoc.email }}</a>
                            </p>
                        </template>
                    </Card>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
.client-logo {
    width: 80%;
    height: auto;

}
</style>