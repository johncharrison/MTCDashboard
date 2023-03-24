<script setup>
import { useDashboard } from '../stores'
import { computed } from 'vue';
import Button from 'primevue/button';

const dashboardStore = useDashboard()
const count = computed(() => dashboardStore.count)

const increment = () => {
    dashboardStore.increment();
}
</script>

<template>
    <div>
        <header>
            <h1>{{ count }}</h1>
        </header>
        <main>
            <div class="dashboard-grid">
                <p>Block 1</p>
                <p>Block 2</p>
                <p>Block 3</p>
                <p>Block 4</p>
                <p>Block 5</p>
                <Button @click="increment" label="Click Me" />
            </div>
        </main>

    </div>
</template>

<style scoped>
/* add your styles here */

header {
    text-align: center;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #eee;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
}

footer {
    text-align: center;
    padding: 1rem;
}

p {
    margin: 0;
}
</style>
  