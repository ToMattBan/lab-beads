import type { IColor } from '@/interfaces/interfaces';
import { reactive, readonly, ref } from 'vue';

export interface ICartItem extends IColor { quantity: number; }

interface ICartData { items: ICartItem[]; }

const cartData = reactive<ICartData>({ items: [] });
const isOpen = ref<boolean>(false);

export const useCartStore = () => {
  function addItem(color: IColor, quantity: number) {
    const existingColor = cartData.items.find((seekign) => seekign.cod === color.cod);

    if (!existingColor) {
      cartData.items.push({
        cod: color.cod,
        hexaCode: color.hexaCode,
        quantity: quantity,
      });
    } else {
      existingColor.quantity = existingColor.quantity + quantity;

      if (existingColor.quantity < 500) {
        existingColor.quantity = 500;
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
    const itemsList = cartData.items.map((item) => `${ item.cod } - ${ item.quantity }`).join('\n');
    const message = `Oii, estou vindo do Lab Pixel Beads e gostaria das seguintes beads:\n${ itemsList }`;

    return `https://wa.me/5581996996117?text=${ encodeURIComponent(message) }`;
  }

  return reactive({
    cartData: readonly(cartData),
    isOpen: readonly(isOpen),
    addItem,
    removeItem,
    openCart,
    closeCart,
    getWhatsappUrl,
  });
};
