<script lang="ts">
	import { Menu } from 'lucide-svelte';
	import { ShoppingCart } from 'lucide-svelte';
	let showMenu = false;
	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<nav class="px-6 py-6 flex justify-between items-center bg-charcoal text-white">
	<div class="flex gap-2 items-center">
		<div class=" mt-2 lg:hidden">
			<Menu />
		</div>
		<a class="text-xl font-bold md:text-2xl" href="/src/routes">audiophile </a>
	</div>

	<div
		class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0 {showMenu
			? 'flex'
			: 'hidden'}"
	>
		<a class="text-gray-100 hover:text-orange-bright" href="/home">Home</a>
		<a class="text-gray-100 hover:text-orange-bright" href="/src/routes/headphones">Headphones</a>
		<a class="text-gray-100 hover:text-orange-bright" href="/src/routes/speakers">Speakers</a>
		<a class="text-gray-100 hover:text-orange-bright" href="/src/routes/earphones">Earphones</a>
	</div>
	<a href="/src/routes/cart"><ShoppingCart /></a>
</nav>
