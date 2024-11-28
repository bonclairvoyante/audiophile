<script lang="ts">
	import CartIcon from './CartIcon.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import CartItem from './CartItem.svelte';
	import { cartProducts } from '$lib/cart.svelte';

	import { fly } from 'svelte/transition';
	import { quadInOut, quadOut } from 'svelte/easing';

	let open = $state(false);
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: quadInOut
	};
	let cartOpen = $state(false);
</script>

<nav
	class="flex justify-between items-center bg-charcoal text-white px-6 lg:px-[7rem] xl:px-[10rem] py-3 md:py-5"
>
	<div class="flex gap-3 md:gap-8 justify-center items-center">
		<div class="lg:hidden pt-2">
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
			{#if open}
				<ul
					class="flex flex-col gap-6 pt-6"
					transition:fly={{
						delay: 100,
						duration: 700,
						easing: quadOut,
						x: -30,
						y: -15
					}}
				>
					<li><a class="text-gray-100 hover:text-orange-bright uppercase" href="/">Home</a></li>
					<li>
						<a class="text-gray-100 hover:text-orange-bright uppercase" href="/headphones"
							>Headphones</a
						>
					</li>
					<li>
						<a class="text-gray-100 hover:text-orange-bright uppercase" href="/speakers">Speakers</a
						>
					</li>
					<li>
						<a class="text-gray-100 hover:text-orange-bright uppercase" href="/earphones"
							>Earphones</a
						>
					</li>
				</ul>
			{/if}
		</div>
		{#if !open}
			<p class="text-xl font-bold md:text-3xl">audiophile</p>
		{/if}
	</div>

	<ul class="lg:flex gap-6 hidden p-5">
		<li><a class="text-gray-100 hover:text-orange-bright uppercase" href="/">Home</a></li>
		<li>
			<a class="text-gray-100 hover:text-orange-bright uppercase" href="/headphones">Headphones</a>
		</li>
		<li>
			<a class="text-gray-100 hover:text-orange-bright uppercase" href="/speakers">Speakers</a>
		</li>
		<li>
			<a class="text-gray-100 hover:text-orange-bright uppercase" href="/earphones">Earphones</a>
		</li>
	</ul>

	{#if !open}
		<button
			onclick={() => {
				cartOpen = !cartOpen;
			}}
		>
			<CartIcon />
			{#if cartOpen}
				{#each cartProducts as cartProduct}
					<CartItem {cartProduct} />
				{/each}
			{/if}
		</button>
	{/if}
</nav>
