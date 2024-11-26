import type { CartProduct } from './types';

export const cartProducts = $state<CartProduct[]>([]);
export const cartOpen = $state(false);
