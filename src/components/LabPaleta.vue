<template>
  <div class="colors-container">
    <div v-for="color in paleta.colors" class="color-square" :style="`background-color: ${color.hexaCode};`" />
  </div>
  <figcaption v-if="caption">{{ caption }}</figcaption>
</template>

<script setup lang="ts">
import type { IColorGroup } from '@/interfaces/interfaces';

defineProps<{
  caption: string;
  paleta: IColorGroup;
}>()
</script>

<style scoped>
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
</style>