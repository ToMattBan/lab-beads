<template>
  <h2 class="title">Escolha a sua paleta</h2>

  <ul>
    <li v-for="group in colorsGroup">
      <figure>
          <RouterLink :to="`/paleta?name=${group.name}`">
          <div class="colors-container">
            <div v-for="color in group.colors" class="color-square" :style="`background-color: ${color.hexaCode};`" />
          </div>
          <figcaption>{{ group.name }}</figcaption>
        </RouterLink>
      </figure>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IColorGroup } from "@/interfaces/interfaces";

import colorsRaw from "../../assets/colors.json"

const colorsGroup = ref<IColorGroup[]>(colorsRaw)
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

  .colors-container {
    margin: auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);

    width: calc((4 * 42px) + 8px);
    border-radius: 4px;
    border: solid 1px black;
    overflow: hidden;

    .color-square {
      border: solid 1px white;
      border-radius: 4px;
      width: 42px;
      height: 24px;
    }
  }

  figcaption {
    margin-top: 8px;
    font-size: 1.6rem;
    letter-spacing: 3px;
    font-family: monospace;
  }
}
</style>