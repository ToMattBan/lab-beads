<template>
  <nav></nav>

  <main>
    <RouterView />
  </main>

  <LabFooter />
</template>

<script setup lang="ts">
import LabFooter from './components/LabFooter.vue';

</script>

<!-- Global style here -->
<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #fafafa;
}

body #app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
}
</style>
