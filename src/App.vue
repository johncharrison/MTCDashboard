<script setup>
import Navigation from './components/Navigation.vue';
import { RouterView } from 'vue-router';
import Toast from 'primevue/toast';
</script>

<template>
  <header>
    <Navigation />
  </header>
  <main>
    <Toast />
    <RouterView />
  </main>
  <footer class="text-center bg-primary">
    <p>&copy; 2023 Mountaineer Technology Consultants</p>

  </footer>
</template>

<style scoped>
header {
  width: 100%;
}
</style>