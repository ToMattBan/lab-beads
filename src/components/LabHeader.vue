<template>
  <header>
    <RouterLink to="/" class="logo">
      <img src="../assets/lab-icon.jpg">
      <span>BEADS</span>
    </RouterLink>

    <div class="cart">
      <div class="cart-icon" @click="cartStore.openCart()">
        <img src="../assets/icons/cart-icon.svg">
        <div v-show="cartStore.cartData.items.length > 0" class="badge">{{ cartStore.cartData.items.length }}</div>
      </div>

      <div :class="['cart-container', { 'cart-open': cartStore.isOpen }]">
        <div class="cart-header">
          <div>Sacola de Compras</div>
          <div class="cart-close" @click="cartStore.closeCart()"><img src="../assets/icons/add-icon.svg"></div>
        </div>

        <div class="cart-listing">
          <table>
            <thead>
              <tr class="cart-listing--header">
                <th></th>
                <th>Cor</th>
                <th>Quantidade</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="color in cartStore.cartData.items" class="cart-listing--item">
                <td class="cart-listing--hexa" :style="`background-color: ${color.hexaCode}`"></td>
                <td class="cart-listing--cod">{{ color.cod }}</td>
                <td class="cart-listing--qtd">
                  <div>
                    <button @click="removeQuantity(color)"><img src="../assets/icons/remove-icon.svg"></button>
                    <div class="quantity">{{ color.quantity }}</div>
                    <button @click="addQuantity(color)"><img src="../assets/icons/add-icon.svg"></button>
                  </div>
                </td>
                <td class="cart-listing--remove">
                  <button @click="removeItem(color)"><img src="../assets/icons/trash-icon.svg"></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <a
          target="_blank"
          class="cart-buyButton"
          rel="noopener noreferrer"
          :href="cartStore.getWhatsappUrl()"
        >Fazer pedido via Whatsapp</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useCartStore, type ICartItem } from '@/stores/cart';

  const cartStore = useCartStore();

  function removeQuantity(color: ICartItem) {
    cartStore.addItem(color, -500);
  }

  function addQuantity(color: ICartItem) {
    cartStore.addItem(color, 500);
  }

  function removeItem(color: ICartItem) {
    cartStore.removeItem(color.cod);
  }
</script>

<style scoped>
header {
  background-color: var(--color-base);
  padding: 12px;

  position: sticky;
  top: 0;
  z-index: 99;
  /* For flutating cart */

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    font-size: 3rem;
    font-family: "Jersey";
    color: #4d5078;
    text-decoration: none;
    text-shadow: 1px 1px 0px #FFB210;

    img {
      height: 70px;
    }
  }

  .cart {
    padding-right: 12px;
    position: relative;

    .cart-icon {
      cursor: pointer;

      img {
        height: 50px;
      }

      .badge {
        position: absolute;
        bottom: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 20px;
        aspect-ratio: 1/1;
        border-radius: 50%;

        background-color: var(--color-blue);
        color: var(--color-golden);
        font-family: "Jersey";
      }
    }

    .cart-container {
      position: absolute;
      right: 0;
      top: calc(100% + 8px);
      padding: 12px;
      width: 400px;
      max-width: 80vw;
      height: 60vh;

      background-color: #fafafa;
      border: solid 1px black;
      border-radius: 4px;

      display: none;
      flex-direction: column;

      &.cart-open {
        display: flex;
      }

      .cart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 8px;

        .cart-close {
          cursor: pointer;

          img {
            width: 1.5em;
            height: 1.5em;
            rotate: 45deg;
          }
        }
      }

      .cart-listing {
        max-height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        margin-bottom: 8px;

        table {
          width: 100%;
        }

        td {
          padding: 0 8px;
          margin: 4px 0;
        }

        .cart-listing--header {
          position: sticky;
          top: 0;
          background-color: #fafafa;
        }

        .cart-listing--hexa {
          display: flex;
          aspect-ratio: 1/1;
          width: 80px;
          padding: 0;
        }

        .cart-listing--qtd {
          div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .quantity {
              flex: 3;
              justify-content: center;
              align-items: center;
            }
          }
        }

        .cart-listing--qtd,
        .cart-listing--remove {
          button {
            flex: 1;
            background-color: lightgray;
            border-radius: 4px;
            border: solid 1px gray;

            img {
              width: 20px;
            }
          }
        }

        .cart-listing--remove {
          padding-right: 0;
        }
      }

      .cart-buyButton {
        display: block;
        box-sizing: border-box;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        width: 100%;
        padding: 8px 16px;
        border-radius: 8px;
        background-color: color-mix(in srgb, var(--color-blue) 80%, #fff);
        color: white;
        font-size: 1.3em;
        border: none;
        margin-top: auto;


        &:hover {
          background-color: color-mix(in srgb, var(--color-blue) 80%, #000);
          color: var(--color-golden);
        }
      }
    }
  }

  @media screen and (min-width: 1600px) {
    justify-content: space-around;
  }
}
</style>
