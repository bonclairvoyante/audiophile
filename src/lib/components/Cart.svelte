<script lang="ts">
	import CartItem from './CartItem.svelte';
	import { cart } from '$lib/cart.svelte';
	
	import Link from './Link.svelte';

	const cartTotal = $derived.by(() => {
		let total = 0;
		for (const product of cart.cartProducts.current) {
			total += product.price * product.quantity;
		}
		return total;
	});
	
</script>

<section>
	<div>
		{#if cart.cartProducts.current.length === 0}
			<div class="flex flex-col justify-center items-center gap-7 pt-5">
				<p class="text-zinc-600">Your cart cannot be empty 🙂‍↔️</p>
				<a
					href="/"
					class="capitalize flex gap-x-1 pt-4 text-black hover:text-orange underline underline-offset-8"
					>Start Shopping
					<Link />
				</a>
			</div>
		{:else}
			<p class="text-center font-sans text-xl font-bold">Your Cart</p>

			{#each cart.cartProducts.current as cartProduct}
				<CartItem {cartProduct} />
			{/each}
		{/if}
	</div>

	<div class="flex justify-between items-center p-2 font-bold">
		{#if cart.cartProducts.current.length > 0}
			<p>Total:</p>
			<p>$ {cartTotal}</p>
		{/if}
	</div>

	{#if cart.cartProducts.current.length > 0}
		<a href="/checkout" class="text-center"
			><button class="btn btn-block hover:bg-orange-bright bg-orange uppercase rounded-none"
				>checkout</button
			></a
		>
	{/if}
</section>
