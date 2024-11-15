<script lang="ts">
	import type { PageData } from './$types';
	import { Plus, Minus } from 'lucide-svelte';

	let { data }: { data: PageData } = $props();
	const itemsNumber = $state(0);
</script>

<!-- <h1>{data.products[0].includes[0].quantity}</h1> -->
<main class="mx-4 md:mx-24 mb-24">
	<section
		class="p-3 md:p-4 lg:p-5 flex flex-col lg:flex-row gap-2 md:gap-6 md:text-center text-start lg:text-start"
	>
		<enhanced:img
			src="/src/lib/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
		/>
		<div class="flex flex-col gap-4 md:gap-2">
			<p class="tracking-wide uppercase text-orange font-sans">New Product</p>
			<h1 class="uppercase text-3xl lg:text-5xl font-bold">{data.products[0].name}</h1>
			<p class="text-zinc-700">
				{data.products[0].description}
			</p>
			<p class="font-bold">$ {data.products[0].price}</p>
			<div class="flex gap-6 lg:py-3.5 md:justify-center lg:justify-start">
				<div class="bg-orange hover:bg-orange-bright text-white px-6 py-3 uppercase">
					<div class="flex gap-x-4">
						<button><Minus size="14" color="gray" /></button>
						1
						<button><Plus size="14" color="gray" /></button>
					</div>
				</div>
				<button class="bg-orange hover:bg-orange-bright px-10 py-3 text-white text-nowrap"
					>Add to Cart</button
				>
			</div>
		</div>
	</section>
	<section class="p-3 md:p-4 lg:p-5">
		<h2 class="uppercase font-bold text-2xl lg:text-3xl">Features</h2>
		<div class="tracking-smaller font-light text-zinc-700">
			<p class="my-6">{data.products[0].featureuno}</p>
			<p>{data.products[0].featuresec}</p>
		</div>
	</section>
	<section class="p-3 md:p-4 lg:p-5 flex flex-col md:flex-row gap-4 md:gap-64 lg:gap-96">
		<h2 class="uppercase font-bold text-2xl lg:text-3xl">In the box</h2>
		<div class="flex flex-col gap-3 md:gap-2">
			{#each data.products[0].includes as include}
				<div class="flex gap-x-4">
					<p class="text-orange font-bold">{include.quantity}x</p>
					<p>{include.item}</p>
				</div>
			{/each}
		</div>
	</section>
</main>
