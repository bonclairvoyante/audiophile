<script lang="ts">
	import { ShoppingCart } from 'lucide-svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from './Menu.svelte';

	let open = $state(false);
	let showMenu = $state(false);
</script>

<nav class="px-6 py-6 flex justify-between items-center bg-charcoal text-white">
	<div class="flex gap-2 items-center">
		<div class=" mt-2 lg:hidden">
			<div class="lg:hidden">
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

				{#if open}
					<Menu />
				{/if}
			</div>
		</div>
		{#if !open}
			<a class="text-xl font-bold md:text-2xl" href="/">audiophile </a>
		{/if}
	</div>

	<div
		class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0 {showMenu
			? 'flex'
			: 'hidden'}"
	>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/">Home</a>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/headphones">Headphones</a>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/speakers">Speakers</a>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/earphones">Earphones</a>
	</div>
	{#if !open}
		<a href="/src/routes/cart"><ShoppingCart /></a>
	{/if}
</nav>
