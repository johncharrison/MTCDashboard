<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import FileUpload from 'primevue/fileupload';
import { useToast } from "primevue/usetoast";

const toast = useToast();

const print = (s, sev) => {
    toast.add({ severity: sev, summary: 'Action', detail: s, life: 3000 });
}

</script>
<template>
    <div class="page-layout">
        <div class="grid w-full">
            <div v-for="i in [1, 2, 3, 4, 5]" class="col-12 md:col-6 lg:col-3">
                <div class="flex justify-content-between h-full">
                    <Card>
                        <template #title> Document {{ i }} </template>
                        <template #subtitle> Short description </template>
                        <template #content>
                            <p>
                                Long Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
                                consequuntur
                                error
                                repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam
                                perferendis
                                esse,
                                cupiditate neque
                                quas!
                            </p>
                        </template>
                        <template #footer>
                            <Button icon="pi pi-download" label="Download"
                                @click="() => { print('Downloaded document', 'success') }" />
                            <Button icon="pi pi-times" label="Delete" severity="danger" style="margin-left: 0.5em"
                                @click="() => { print('Deleted document', 'error') }" />
                        </template>
                    </Card>

                </div>

            </div>

        </div>
        <div class="flex justify-content-end w-full p-3">
            <FileUpload mode="basic" name="demo[]" accept="image/*" :maxFileSize="1000000"
                @upload="() => { print('Uploaded document', 'info') }" />

        </div>
    </div>
</template>