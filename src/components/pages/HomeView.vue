<template>
  <h2 class="title">Escolha a sua paleta</h2>

  <ul>
    <li v-for="group in colorsGroup">
      <figure>
        <RouterLink :to="`/paleta?name=${group.name}`">
          <LabPaleta :paleta="group" :caption="group.name" />
        </RouterLink>
      </figure>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { IColorGroup } from '@/interfaces/interfaces';

  import colorsRaw from '../../assets/colors.json';
  import LabPaleta from '../LabPaleta.vue';

  const colorsGroup = ref<IColorGroup[]>(colorsRaw);
</script>

<style scoped>
.title {
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: auto;
  margin-bottom: 32px;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
}

figure {
  text-align: center;
}
</style>
