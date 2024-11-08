<script lang="ts">
	import { ShoppingCart } from 'lucide-svelte';
	import { Hamburger } from 'svelte-hamburgers';

	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import ProductCardList from './ProductCardList.svelte';

	let open = $state(false);
	let showMenu = $state(false);
</script>

<nav class=" flex justify-between items-center gap-12 p-5 bg-charcoal text-white">
	<div class=" mt-2">
		<Hamburger
			bind:open
			type="spring"
			title="Toggle products menu"
			ariaControls="nav"
			--color="white"
			--active-color="#FBAF85"
			--padding="2px"
			--layer-width="20px"
			--layer-height=""
			--layer-spacing="4px"
		/>
	</div>
	{#if !open}
		<div class="text-xl font-bold md:text-2xl">audiophile</div>
	{/if}
	<div
		class="flex mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row items-center lg:space-x-10 lg:mt-0 {showMenu
			? 'flex'
			: 'hidden'}"
	>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/">Home</a>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/headphones">Headphones</a>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/speakers">Speakers</a>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/earphones">Earphones</a>
	</div>

	{#if !open}
		<ShoppingCart />
	{/if}
</nav>

{#if open}
	<ProductCardList />
{/if}
