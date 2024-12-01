import type { CartProduct } from './types';

export const cartProducts = $state<CartProduct[]>([]);

export function removeFromCart(id: string) {
	const index = cartProducts.findIndex((product) => product.id === id);
	if (index > -1) {
		cartProducts.splice(index, 1);
	}
}

