<template>
  <section v-if="paletaSelected">
    <article>
      <div class="title-container">
        <span class="title">{{ paletaSelected.name }}</span>
        <span>Clique na cor que deseja selecionar</span>
      </div>

      <div class="color-container">
        <div 
          v-for="color in colorsSelected"
          @click="selectColor(color)"
          :class="['color', { 'selected': color.selected }]"
          :style="`background-color: ${color.hexaCode}`"
        />
      </div>
    </article>
  </section>

  <section v-else>
    <span>A paleta escolhida não existe. Clique <RouterLink to="/">aqui</RouterLink> para voltar pra home</span>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import colorsRaw from "../../assets/colors.json";
import { reactive } from 'vue';
import type { IColor } from '@/interfaces/interfaces';

const route = useRoute();
const namePaleta = route.query.name;

interface IRowColor extends IColor {selected: boolean}

const paletaSelected = colorsRaw.find(paleta => paleta.name === namePaleta);
const colorsSelected = reactive<IRowColor[]>(paletaSelected ? paletaSelected.colors.map(c => {return {...c, selected: false}}) : [])

function selectColor(color: IRowColor) {
  color.selected = !color.selected
}
</script>

<style lang="scss" scoped>
section {
  max-width: 900px;
  margin: 32px auto;

  article {
    --page-padding: calc(8px + 4px + 8px);
    background-color: var(--color-base);
    padding: var(--page-padding);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      inset: 8px;
      border: 4px solid black;
      pointer-events: none;
    }

    .title-container {
      text-align: center;
      border-bottom: dashed 4px var(--color-blue);
      padding-bottom: 12px;
      margin-bottom: 12px;

      span {
        display: block;
      }

      .title {
        font-family: "Jersey";
        font-size: 4rem;
        letter-spacing: 4px;
        color: var(--color-blue);
        text-shadow: 3px 3px 0px var(--color-golden);
      }
    }

    .color-container {
      --row-gap: 24px;

      // Negative margin bottom to compensate last row
      margin-bottom: calc(var(--row-gap) * -1);

      .color {
        --gap: 18px;
  
        display: inline-block;
        width: calc((100vw - (2 * var(--page-padding)) - (3 * var(--gap))) / 4);
        aspect-ratio: 1/1;
        border-radius: 4px;
        margin-bottom: var(--row-gap);
        
        &:not(:nth-child(4n)) {
          margin-right: var(--gap);
        }

        &.selected {
          position: relative;

          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: var(--row-gap);
            background-color: rgba(0, 0, 0, 0.368);
          }
        }
      }
    }
  }
}
</style>