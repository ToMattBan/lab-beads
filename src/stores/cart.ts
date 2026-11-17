import type { IColor } from '@/interfaces/interfaces';
import { computed, reactive, readonly, ref } from 'vue';

export interface ICartItem extends IColor { quantity: number; }

interface ICartData { items: ICartItem[]; }

const cartData = reactive<ICartData>({ items: [] });
const isOpen = ref<boolean>(false);

export const useCartStore = () => {
  const totalData = computed(() => {
    const totalBeads = cartData.items.reduce((total, item) => total + item.quantity, 0);

    return {
      quantity: totalBeads,
      price: totalBeads / 100,
    };
  });

  function addItem(color: IColor, quantity: number) {
    const existingColor = cartData.items.find((seekign) => seekign.cod === color.cod);

    if (!existingColor) {
      cartData.items.push({
        cod: color.cod,
        hexaCode: color.hexaCode,
        quantity: quantity,
        stock: color.stock,
      });
    } else {
      const colorStock = existingColor.stock;
      existingColor.quantity = Math.ceil(existingColor.quantity / 500) * 500 + quantity;

      const minQuantity = Math.min(500, colorStock ?? 500);
      if (existingColor.quantity <= minQuantity) {
        existingColor.quantity = 500;
      }

      const maxQuantity = colorStock < 500 ? colorStock : Math.floor(colorStock / 500) * 500;
      if (existingColor.quantity >= maxQuantity) {
        existingColor.quantity = maxQuantity;
      }
    }
  }

  function removeItem(colorCode: string) {
    const existingColor = cartData.items.findIndex((seekign) => seekign.cod === colorCode);

    if (existingColor > -1) {
      cartData.items.splice(existingColor, 1);
    }
  }

  function openCart() {
    isOpen.value = true;
  }

  function closeCart() {
    isOpen.value = false;
  }

  function getWhatsappUrl() {
    const itemsList = cartData.items.map((item) => `- ${ item.cod } - ${ item.quantity }`).join('\n');

    const message =
      '💎 Oii, estou vindo do Lab Pixel Beads e gostaria das seguintes beads:' +
      '\n' +
      `\n${ itemsList }` +
      '\n' +
      `\n🛍 Totalizando um pedido de R$ *${ totalData.value.price },00*`;

    return `https://api.whatsapp.com/send?phone=5581996996117&text=${ encodeURIComponent(message) }`;
  }

  return reactive({
    cartData: readonly(cartData),
    isOpen: readonly(isOpen),
    totalData: readonly(totalData),
    addItem,
    removeItem,
    openCart,
    closeCart,
    getWhatsappUrl,
  });
};
