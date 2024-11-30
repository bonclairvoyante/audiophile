<script lang="ts">
	import CartIcon from './CartIcon.svelte';
	import Cart from './Cart.svelte';
	import { Menu, X } from 'lucide-svelte';
	import { cartProducts } from '$lib/cart.svelte';
	

	const cartQuantity = $derived.by(() => {
		let total = 0;
		for (const product of cartProducts) {
			total += product.quantity;
		}
		return total;
	});

</script>


<nav
	class="flex justify-between items-center bg-charcoal text-white px-6 lg:px-[7rem] xl:px-[10rem] py-3 md:py-5"
>
	<div class="flex gap-3 md:gap-8 justify-center items-center">
		<div class="lg:hidden">
			<div class="drawer bg-charcoal">
				<input id="my-drawer" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content">
					<!-- Page content here -->
					<label for="my-drawer" class=" drawer-button">
						<Menu />
					</label>
				</div>
				<div class="drawer-side">
					<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
					<ul class="menu bg-base-300 text-base-content min-h-80 w-64 md:w-80 p-4 gap-5" >
						<!-- Sidebar content here -->
						<li><a class="hover:text-orange-bright uppercase" href="/">Home</a></li>
						<li>
							<a class=" hover:text-orange-bright uppercase" href="/headphones">Headphones</a>
						</li>
						<li>
							<a class=" hover:text-orange-bright uppercase" href="/speakers">Speakers</a>
						</li>
						<li>
							<a class="hover:text-orange-bright uppercase" href="/earphones">Earphones</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<a href="/"><p class="text-xl font-bold md:text-3xl">audiophile</p></a>
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

	<div>
		<div class="drawer drawer-end">
			<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
				<!-- Page content here -->
				<label for="my-drawer-4" class="drawer-button">
					<div class="badge badge-secondary badge-xs absolute -top-2 -right-1">{cartQuantity}</div>
					<CartIcon />
				</label>
			</div>
			<div class="drawer-side -px-8">
				<label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
				<div class="menu bg-base-200 text-base-content min-h-96 w-80 p-4">
					<!-- Sidebar content here -->
					<Cart />
				</div>
			</div>
		</div>
	</div>
</nav>
