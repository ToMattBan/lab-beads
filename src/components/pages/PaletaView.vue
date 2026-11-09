<template>
  <article v-if="paletaSelected">
    <section class="sample">
      <div>{{ paletaSelected.name }}</div>

      <div class="colors-container">
        <div
          v-for="color in colorsFromPaleta"
          :style="`background-color: ${color.hexaCode};`"
          :class="['color-square', {'transparent': color.cod === 'A04'}]"
          @click="selectColor(color)"
        >
          <span>{{ color.cod }}</span>
        </div>
      </div>
    </section>

    <section class="pickers">
      <figure class="color-picker">
        <figcaption>Escolha sua Cor:</figcaption>
        <ul>
          <li v-for="color in colorsFromPaleta" :class="{ 'selected': color.selected }" @click="selectColor(color)">
            {{
              color.cod }}
          </li>
        </ul>
      </figure>

      <figure class="quantity-picker">
        <div>
          <button @click="removeQuantity"><img src="../../assets/icons/remove-icon.svg"></button>
          <div class="quantity">{{ desiredQuantity }}</div>
          <button @click="addQuantity"><img src="../../assets/icons/add-icon.svg"></button>
        </div>
      </figure>

      <figure class="price">
        <!-- <figcaption>Preço das Beads Selecionada:</figcaption> -->
        <div>R$ <span>{{ desiredQuantity / 100 }}</span>,00</div>
      </figure>

      <button class="add-cart" @click="addToCart">Adicionar ao carrinho</button>
      <span class="error">{{ error }}</span>
    </section>
  </article>

  <article v-else>
    <span>A paleta escolhida não existe. Clique <RouterLink to="/">aqui</RouterLink> para voltar pra home</span>
  </article>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { useRoute } from 'vue-router';

  import type { IColor } from '@/interfaces/interfaces';
  import colorsRaw from '../../assets/colors.json';
  import { useCartStore } from '../../stores/cart.ts';

  const route = useRoute();
  const namePaleta = route.query.name;
  const cartStore = useCartStore();

  interface IRowColor extends IColor { selected: boolean; }

  const paletaSelected = colorsRaw.find((paleta) => paleta.name === namePaleta);
  const colorsFromPaleta = reactive<IRowColor[]>(paletaSelected ?
    paletaSelected.colors.map((c) => { return { ...c, selected: false }; }) :
    []);

  const error = ref<string | null>(null);

  const colorSelected = ref<IRowColor>();
  const desiredQuantity = ref<number>(500);

  function selectColor(color: IRowColor) {
    const originalState = color.selected;
    colorsFromPaleta.forEach((color) => color.selected = false);
    color.selected = !originalState;

    // desiredQuantity.value = 500;
    error.value = null;

    if (color.selected === true) {
      colorSelected.value = color;
    } else {
      colorSelected.value = undefined;
    }
  }

  function addQuantity() {
    desiredQuantity.value += 500;
    error.value = null;
  }
  function removeQuantity() {
    if (desiredQuantity.value <= 500) {
      desiredQuantity.value = 500;
    } else {
      desiredQuantity.value -= 500;
    }

    error.value = null;
  }

  function addToCart() {
    if (!colorSelected.value) {
      error.value = 'Escolha uma cor de beads antes de adicioná-la ao carrinho';
      return;
    }

    cartStore.addItem({
      cod: colorSelected.value.cod,
      hexaCode: colorSelected.value.hexaCode,
    }, desiredQuantity.value);
  }
</script>

<style scoped>
article {
  max-width: 900px;
  margin: 32px auto;
  text-align: center;
  padding: 0 var(--mobile-gap);

  @media screen and (min-width: 900px) {
    display: flex;
    gap: 32px;

    section.sample {
      flex: 1;
    }

    section.pickers {
      flex: 1;
    }
  }

  .sample {
    figcaption {
      font-size: 1.3rem;
      font-family: monospace;
    }

    .colors-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-top: 12px;

      .color-square {
        width: 80%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px black;
        cursor: pointer;

        &.transparent {
          background-image: url("../../assets/transparent.jpg");
        }

        span {
          font-family: monospace;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background-color: #fafafa;
          padding: 2px;

          display: flex;
          justify-content: center;
          align-items: center;

          @media screen and (min-width: 900px) {
            padding: 8px;
            border: dashed 1px black;
          }
        }
      }
    }
  }

  .pickers {
    figure {
      text-align: left;
      margin: 2em 0;

      figcaption {
        margin-bottom: 8px;

        @media screen and (min-width: 900px) {
          font-size: 1.3rem;
        }
      }

      &.color-picker {
        margin-top: 1em;

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          row-gap: 4px;
          column-gap: 8px;

          li {
            font-family: monospace;
            border: solid 1px black;
            border-radius: 8px;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 1.1em;

            &:hover {
              background-color: var(--color-base);
            }

            &.selected {
              background-color: var(--color-base);
              font-weight: bold;
            }
          }
        }
      }

      &.quantity-picker {
        div {
          display: flex;

          button {
            flex: 1;
            background-color: lightgray;
            border-radius: 4px;
            border: solid 1px gray;

            img {
              width: 30px;
            }
          }

          .quantity {
            flex: 3;
            justify-content: center;
            align-items: center;
            font-family: 'Jersey';
            letter-spacing: 3px;
            font-size: 1.6em;
          }
        }
      }
    }

    .price {
      text-align: center;
      margin-top: -18px;
      font-size: 0.9rem;
      border-top: solid 1px gray;
      padding-top: 8px;

      span {
        font-size: 1.5rem;
        font-weight: 300;
      }
    }

    .add-cart {
      width: 100%;
      padding: 8px 16px;
      border-radius: 8px;
      background-color: color-mix(in srgb, var(--color-blue) 80%, #fff);
      color: white;
      font-size: 1.3em;
      border: none;


      &:hover {
        background-color: color-mix(in srgb, var(--color-blue) 80%, #000);
        color: var(--color-golden);
      }
    }

    .error {
      color: red;
    }
  }
}
</style>
