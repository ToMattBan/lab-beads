<template>
  <LabHeader />

  <main>
    <RouterView />
  </main>

  <LabFooter />
</template>

<script setup lang="ts">
import LabFooter from './components/LabFooter.vue';
import LabHeader from './components/LabHeader.vue';

</script>

<!-- Global style here -->
<style lang="scss">
@font-face {
  font-family: "Jersey";
  src: url("./assets/fonts/Jersey\ 10.ttf");
}

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
