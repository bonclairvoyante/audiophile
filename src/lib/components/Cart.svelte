<script lang="ts">
	import CartItem from './CartItem.svelte';
	import { cartProducts } from '$lib/cart.svelte';
	import type { CartProduct } from '$lib/types';

	const cartTotal = $derived.by(() => {
		let total = 0;
		for (const product of cartProducts) {
			total += product.price * product.quantity;
		}
		return total;
	});
</script>

{#each cartProducts as cartProduct}
	<CartItem {cartProduct} />
{/each}

<div class="divider"></div>
<div class="flex justify-between items-center p-2 font-bold">
	<p>Total:</p>
	<p>$ {cartTotal}</p>
</div>

<a href="/" class="text-center"
	><button class="btn btn-block hover:bg-orange-bright bg-orange uppercase rounded-none">checkout</button></a
>
