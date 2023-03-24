<script setup>
import { computed, onMounted, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useClientStore } from "../../stores";
import SplitButton from "primevue/splitbutton";
import DataTable from 'primevue/datatable';
import Card from "primevue/card";
import Column from 'primevue/column';
import Divider from 'primevue/divider';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { useToast } from "primevue/usetoast";

const toast = useToast();
const route = useRoute()
const clientStore = useClientStore();
const client = computed(() => clientStore.getClient(route.params.id))
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

const data = [{ serialNumber: "AA1234567890", modelNumber: "01-78B", label: "Rack Server" }, { serialNumber: "AA4377090901", modelNumber: "01-78B", label: "Rack Server" }, { serialNumber: "AB8008135", modelNumber: "01-78B", label: "Rack Server" }, { serialNumber: "DD5656567890", modelNumber: "81-73V", label: "Laptop" }]

const exportPDF = () => {
    toast.add({ severity: 'success', summary: 'PDF downloaded', detail: 'Client data downloaded', life: 3000 });
}
</script>
<template>
    <div class="page-layout">
        <div class="grid w-full justify-content-center">
            <div class="col-3">
                <img :src="`/src/assets/${client.imgSrc}`" class="client-logo w-full" />
            </div>
            <div class=" col-9">
                <div class="col-12">
                    <p class="text-4xl">{{ client.name }} </p>
                    <Divider />
                    <p class="text-md ">{{ client.ppoc.name }}</p>
                    <p class="text-md text-500">{{ client.ppoc.phone }}</p>
                    <p class="text-md text-500">
                        <a :href="`mailto:${client.ppoc.email}`">
                            {{ client.ppoc.email }}
                        </a>
                    </p>
                </div>
                <Divider />
                <div class="col-12">
                    <TabView>
                        <TabPanel v-for="site in client.sites" :header="site.name">
                            <div>
                                <div>
                                    <div class="col-6">
                                        <p class="text-md">Equipment</p>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-sm">Address:
                                            <a target="_blank" :href="`https://www.google.com/maps/place/${site.address}`">
                                                {{ site.address }}
                                            </a>
                                        </p>
                                    </div>
                                    <DataTable :value="data" stripedRows class="p-datatable-sm">
                                        <Column field="label" header="Label" sortable></Column>
                                        <Column field="serialNumber" header="Serial Number" sortable></Column>
                                        <Column field="modelNumber" header="Model Number" sortable></Column>
                                    </DataTable>
                                </div>
                                <div class="flex justify-content-end pt-4">
                                    <SplitButton severity="success" :model="items" class="z-5" label="Export PDF"
                                        @click="exportPDF" icon="pi pi-file-pdf" />
                                </div>
                            </div>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.client-logo {
    width: 40%;
    height: auto;
}
</style>