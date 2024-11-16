<script lang="ts">
	import { Plus, Minus } from 'lucide-svelte';
	import GoBack from '$lib/components/GoBack.svelte';

	let { data } = $props();
</script>

<main class="mx-[1.51em] mb-24">
	<!-- Card section -->
	<div class="p-4">
		<GoBack />
	</div>
	<section class="p-3 md:p-4 lg:p-5 flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-10 text-start">
		<enhanced:img
			src="/src/lib/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
			class="rounded-md"
			alt="yx1-earphones"
		/>
		<div class="flex flex-col gap-4 md:gap-2 self-center">
			<p class="tracking-wide uppercase text-orange font-sans">New Product</p>
			<h1 class="uppercase text-3xl lg:text-5xl font-bold">YX1 Wireless Earphones</h1>
			<p class="text-zinc-700">
				Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless
				Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active
				noise cancellation feature.
			</p>
			<p class="font-bold lg:py-4">$ 599</p>
			<div class="flex gap-3 lg:py-3.5 lg:justify-start">
				<div class="border bg-white-grey px-6 md:px-8 py-3 uppercase flex gap-x-4 md:gap-6">
					<button><Minus size="14" color="gray" /></button>
					1
					<button><Plus size="14" color="gray" /></button>
				</div>
				<button class="bg-orange hover:bg-orange-bright px-8 md:px-12 py-3 text-white text-nowrap"
					>Add to Cart</button
				>
			</div>
		</div>
	</section>
	<!-- Features section -->
	<section class="p-3 md:p-4 lg:p-5">
		<h2 class="uppercase font-bold text-2xl lg:text-3xl">Features</h2>
		<div class="tracking-smaller font-light text-zinc-700">
			<p class="my-6">
				Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved
				ergonomics designed for full day wearing, these revolutionary earphones have been finely
				crafted to provide you with the perfect fit, delivering complete comfort all day long while
				enjoying exceptional noise isolation and truly immersive sound.
			</p>
			<p>
				The YX1 Wireless Earphones features customizable controls for volume, music, calls, and
				voice assistants built into both earbuds. The new 7-hour battery life can be extended up to
				28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship
				with a splash resistant design now available in an all new white and grey color scheme as
				well as the popular classic black.
			</p>
		</div>
	</section>
	<section
		class="p-3 md:p-4 lg:p-5 flex flex-col md:flex-row gap-4 md:gap-60 lg:gap-96 text-nowrap pb-4 md:pb-12 lg:pb-16"
	>
		<h2 class="uppercase font-bold text-2xl lg:text-3xl">In the box</h2>
		<div class="flex flex-col gap-3 md:gap-2">
			<div class="flex gap-x-4">
				<p class="text-orange font-bold">2x</p>
				<p>Earphone unit</p>
			</div>
			<div class="flex gap-x-4">
				<p class="text-orange font-bold">6x</p>
				<p>Multi-size earplugs</p>
			</div>
			<div class="flex gap-x-4">
				<p class="text-orange font-bold">1x</p>
				<p>User manual</p>
			</div>
			<div class="flex gap-x-4">
				<p class="text-orange font-bold">1x</p>
				<p>USB-C charging cable</p>
			</div>
			<div class="flex gap-x-4">
				<p class="text-orange font-bold">1x</p>
				<p>Travel pouch</p>
			</div>
		</div>
	</section>
	<!-- Gallery -->
	<section
		class="flex flex-col gap-2 md:gap-[1rem] lg:gap-[1.4rem] md:flex-row pb-4 md:pb-8 lg:pb-12"
	>
		<div class="flex flex-col gap-2 md:gap-[1.32rem] lg:gap-[1.6rem]">
			<enhanced:img
				src="/src/lib/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
				class="rounded-md"
				alt="yx1-earphones"
			/>
			<enhanced:img
				src="/src/lib/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
				class="rounded-md"
				alt="yx1-earphones"
			/>
		</div>
		<enhanced:img
			src="/src/lib/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
			class="rounded-md"
			alt="yx1-earphones"
		/>
	</section>
	<!-- you may also like section -->
	<section class="pb-12 md:pb-16 lg:pb-24">
		<h2 class="uppercase font-bold text-2xl lg:text-3xl py-8">You may also like</h2>
		<div class="wrapper flex flex-col gap-5 md:gap-2 lg:gap-5 md:flex-row text-center">
			<div class="flex flex-col gap-4">
				<enhanced:img
					src="/src/lib/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
					class="rounded-md"
					alt="xx99-mark-one-headphones"
				/>
				<h3 class="font-bold text-2xl uppercase">xx99 mark I</h3>
				<div class="block">
					<button
						class="bg-orange hover:bg-orange-bright px-4 py-3 text-white text-nowrap uppercase"
						>see product</button
					>
				</div>
			</div>
			<div class="flex flex-col gap-4 justify-center items-center">
				<enhanced:img
					src="/src/lib/assets/product-xx59-headphones/mobile/image-product.jpg"
					class="rounded-md"
					alt="xx59-headphones"
				/>
				<h3 class="font-bold text-2xl uppercase">xx59</h3>
				<button class="bg-orange hover:bg-orange-bright px-4 py-3 text-white text-nowrap uppercase"
					>see product</button
				>
			</div>
			<div class="flex flex-col gap-4 justify-center items-center">
				<enhanced:img
					src="/src/lib/assets/product-zx9-speaker/mobile/image-product.jpg"
					class="rounded-md"
					alt="zx9-speaker"
				/>
				<h3 class="font-bold text-2xl uppercase">{data.products[5].name}</h3>
				<button class="bg-orange hover:bg-orange-bright px-4 py-3 text-white text-nowrap uppercase"
					>see product</button
				>
			</div>
		</div>
	</section>
</main>
