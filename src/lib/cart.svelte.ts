import type { CartProduct } from './types';

export const cartProducts = $state<CartProduct[]>([]);
export function removeFromCart(id: string) {
	cartProducts.filter((product) => product.id !== id);
}
