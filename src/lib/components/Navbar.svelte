<script lang="ts">
	import { ShoppingCart } from 'lucide-svelte';
	import { Hamburger } from 'svelte-hamburgers';

	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import ProductCardList from './ProductCardList.svelte';

	let open = $state(false);
	let showMenu = $state(false);
</script>

<nav class=" flex justify-around items-center gap-16 p-5 bg-charcoal text-white">
	<div class=" mt-2 lg:hidden">
		<Hamburger
			bind:open
			type="spring-r"
			title="Toggle products menu"
			ariaControls="nav"
			--color="white"
			--active-color="#FBAF85"
			--padding="2px"
			--layer-width="22px"
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
	{#if open}
		<ul
			class="flex flex-col gap-4 justify-center items-center"
			transition:fly|global={{ y: -15, duration: 500, easing: quadInOut }}
		>
			<li><a class="text-gray-100 hover:text-orange-bright uppercase" href="/">Home</a></li>
			<li>
				<a class="text-gray-100 hover:text-orange-bright uppercase" href="/headphones">Headphones</a
				>
			</li>
			<li>
				<a class="text-gray-100 hover:text-orange-bright uppercase" href="/speakers">Speakers</a>
			</li>
			<li>
				<a class="text-gray-100 hover:text-orange-bright uppercase" href="/earphones">Earphones</a>
			</li>
		</ul>
	{/if}
</nav>
