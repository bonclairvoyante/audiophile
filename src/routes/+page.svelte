<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import BottomAbout from '$lib/components/BottomAbout.svelte';
	import Button3 from '$lib/components/Button3.svelte';
	import ButtonClear from '$lib/components/ButtonClear.svelte';
	import ProductCards from '$lib/components/ProductCards.svelte';
</script>

<Hero />

<main class="mx-4 md:mx-24">
	<!-- Product Card List-->
	<ProductCards />
	
	<!-- Product Preview Tiles -->
	 <!-- ZX9 Speaker -->
	<article
		class="flex lg:flex-row flex-col bg-orange bg-spiral justify-center items-center rounded-xl text-balance mb-12"
	>
		<enhanced:img
			src="/src/lib/assets/shared/desktop/image-category-thumbnail-speakers.png"
			alt="ZX9 Speaker"
			class="mt-12"
		/>
		<div class="flex flex-col lg:justify-end justify-between items-center text-center">
			<h3 class="text-white font-bold text-3xl pb-4">ZX9<br />SPEAKER</h3>
			<p class="text-balance text-white-grey font-thin">
				Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound
			</p>
			<div class="pb-4 pt-4">
				<a href="/speakers/zx9">
					<button class=" text-white bg-charcoal hover:bg-zinc-700 px-4 py-3 text-sm mb-5 shadow-sm">
						SEE PRODUCT
					</button>
				</a>
			</div>
		</div>
	</article>

	<!-- ZX7 Speaker -->
	<article class="zx7-speaker flex items-center mt-8 rounded-xl bg-no-repeat mb-14 p-12">
		<div class="flex flex-col items-start gap-8">
			<h3 class="font-bold text-3xl">ZX7 SPEAKER</h3>
			<a href="/speakers/zx7"><ButtonClear /></a>
		</div>
	</article>

	<!-- XY1 Earphones -->
	<article class=" flex flex-col md:flex-row mt-10 gap-3 mb-16">
		<enhanced:img
			src="/src/lib/assets/home/desktop/image-earphones-yx1.jpg"
			alt="YX1 Earphones"
			class="rounded-lg"
		/>
		<div
			class="flex flex-col justify-center items-center gap-3 text-center bg-white-grey rounded-lg md:w-4/6"
		>
			<p class="font-bold text-3xl py-6">XY1 EARPHONES</p>
			<a href="/earphones/yx1" class="pb-6"><ButtonClear /></a>
		</div>
	</article>
	<div class="mb-16"><BottomAbout /></div>
</main>

<style>
	.zx7-speaker {
		background: url('/src/lib/assets/home/desktop/image-speaker-zx7.jpg');
		background-position: center;
		background-size: cover;

		@media (min-width: 768px) {
			background: url('/src/lib/assets/home/tablet/image-speaker-zx7.jpg');
			background-size: cover;
			background-position: center;
		}
		@media (min-width: 1280px) {
			background: url('/src/lib/assets/home/desktop/image-speaker-zx7.jpg');
			background-size: cover;
			background-position: center;
		}
	}
</style>
