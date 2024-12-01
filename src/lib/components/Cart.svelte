<script lang="ts">
	import CartItem from './CartItem.svelte';
	import { cartProducts } from '$lib/cart.svelte';
	import { X } from 'lucide-svelte';
	import Link from './Link.svelte';

	const cartTotal = $derived.by(() => {
		let total = 0;
		for (const product of cartProducts) {
			total += product.price * product.quantity;
		}
		return total;
	});
</script>

<section class="">
	<div class="">
		{#if cartProducts.length === 0}
			<div class="flex flex-col justify-center items-center gap-7 pt-5">
				<p class="text-zinc-600">Your cart cannot be empty 🙂‍↔️</p>
				<a href="/" class="capitalize flex gap-x-1 pt-4 text-black hover:text-orange underline underline-offset-8"
					>Start Shopping
					<Link /> </a
				>
			</div>
		{:else}
			<p class="text-center font-sans text-xl font-bold">Your Cart</p>
			{#each cartProducts as cartProduct}
				<CartItem {cartProduct} />
			{/each}
		{/if}
	</div>

	<div class="divider"></div>
	<div class="flex justify-between items-center p-2 font-bold">
		<p>Total:</p>
		<p>$ {cartTotal}</p>
	</div>

	<a href="/" class="text-center"
		><button class="btn btn-block hover:bg-orange-bright bg-orange uppercase rounded-none"
			>checkout</button
		></a
	>
</section>
