<script lang="ts">
	import CartItem from './CartItem.svelte';
	import { cartProducts } from '$lib/cart.svelte';
	import type { CartProduct } from '$lib/types';
    
	function removeFromCart(id: string) {
	cartProducts.filter((product) => product.id !== id);
	return cartProducts;
}
</script>


{#each cartProducts as cartProduct}
	<CartItem {cartProduct} />
{/each}