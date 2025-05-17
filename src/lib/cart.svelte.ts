import { LocalStorage } from './storage.svelte';
import type { CartProduct } from './types';

class Cart {
	cartProducts = new LocalStorage('cartProducts', []);

	removeFromCart(id: string) {
		const index = this.cartProducts.current.findIndex((product: CartProduct) => product.id === id);
		if (index > -1) {
			this.cartProducts.current.splice(index, 1);
		}
	}
}

export const cart = new Cart();
