<script lang="ts">
	import { cart } from '$lib/cart.svelte';
	import type { CartProduct } from '$lib/types';
	import { Plus, Minus, Trash } from 'lucide-svelte';

	type Props = {
		cartProduct: CartProduct;
	};

	let { cartProduct }: Props = $props();
</script>

<div class="flex items-center justify-between py-2 border-b border-gray-200">
	<div class="flex items-center">
		<img src={cartProduct.thumbmail} alt="Product" class="size-12 object-cover rounded mr-4" />
		<div>
			<p class="font-medium">{cartProduct.name}</p>
			<p class="text-sm">$ {cartProduct.price * cartProduct.quantity}</p>
		</div>
	</div>
	<div class="flex items-center">
		<button
			onclick={() => {
				if (cartProduct.quantity === 1) {
					cart.removeFromCart(cartProduct.id);
				} else {
					cartProduct.quantity--;
				}
			}}
			class="p-1 hover:bg-gray-200 rounded"
			aria-label="Subtract 1 from quantity"
		>
			<Minus size="12" />
		</button>
		<span class="mx-2">{cartProduct.quantity}</span>
		<button
			class="p-1 hover:bg-gray-200 rounded"
			aria-label="Add 1 to quantity"
			onclick={() => {
				cartProduct.quantity++;
			}}
		>
			<Plus size="12" />
		</button>
		<button
			onclick={() => {
				cart.removeFromCart(cartProduct.id);
			}}
			class="ml-4 p-1 text-orange hover:bg-orange-bright rounded"
		>
			<Trash size="12" />
		</button>
	</div>
</div>
