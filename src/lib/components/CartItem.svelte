<script lang="ts">
	import { cartProducts } from '$lib/cart.svelte';
	import type { CartProduct } from '$lib/types';
	import { Plus, Minus, Trash } from 'lucide-svelte';
	type Props = {
		cartProduct: CartProduct;
	};

	let { cartProduct = $bindable() }: Props = $props();

	function removeCartItem() {
		cartProducts.filter((item) => item.id !== cartProduct.id);
		return;
	}
</script>

<div class="flex items-center justify-between py-2 border-b border-gray-200">
	<div class="flex items-center">
		<img
			src="{cartProduct.thumbmail}"
			alt="Product"
			class="size-12 object-cover rounded mr-4"
		/>
		<div>
			<p class="font-medium">{cartProduct.name}</p>
			<p class="text-sm">$ {cartProduct.price}</p>
		</div>
	</div>
	<div class="flex items-center">
		<button
			onclick={() => {
				if (cartProduct.quantity > 1) {
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
			class="ml-4 p-1 text-red-500 hover:bg-red-100 rounded"
			onclick={() => {
				removeCartItem;
			}}
		>
			<Trash size="12" />
		</button>
	</div>
</div>
