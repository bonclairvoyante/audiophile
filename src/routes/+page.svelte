<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';

	import Button3 from '$lib/components/Button3.svelte';
	import ButtonClear from '$lib/components/ButtonClear.svelte';
</script>

<Hero />

<main class="mx-4 md:mx-24">
	<!-- Product Card List-->
	<div
		class="flex flex-col md:flex-row justify-center items-center md:gap-2 gap-24 mt-20 md:mt-16 mb-12 xl:pt-20 mx-4 md:mx-24"
	>
		<div
			class="flex flex-col justify-center items-center bg-white-grey rounded-md p-4 relative product-card-headphones"
		>
			<enhanced:img
				src="/src/lib/assets/shared/desktop/image-category-thumbnail-headphones.png"
				alt="mark-one-headphones"
				class="absolute left-0.5 -top-24"
			/>
			<h3 class="text-lg font-bold pt-8 px-3">HEADPHONES</h3>
			<a href="/headphones"><Button3 /></a>
		</div>
		<div
			class="flex flex-col justify-center items-center bg-white-grey rounded-md p-4 relative product-card-speaker"
		>
			<enhanced:img
				src="/src/lib/assets/shared/desktop/image-category-thumbnail-speakers.png"
				alt="mark-one-headphones"
				class="absolute left-0.5 -top-20"
			/>
			<h3 class="text-lg font-bold pt-8 px-6">SPEAKERS</h3>
			<a href="/speakers"><Button3 /></a>
		</div>
		<div
			class="flex flex-col justify-center items-center bg-white-grey rounded-md p-4 relative product-card-earphones"
		>
			<enhanced:img
				src="/src/lib/assets/shared/desktop/image-category-thumbnail-earphones.png"
				alt="mark-one-headphones"
				class="absolute left-0.5 -top-20"
			/>
			<h3 class="text-lg font-bold pt-8 px-6">EARPHONES</h3>
			<a href="/earphones"><Button3 /></a>
		</div>
	</div>

	<!-- Product Preview Tiles -->

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
			<div class="block pb-4 pt-4">
				<button class=" text-white bg-charcoal hover:bg-zinc-700 px-4 py-3 text-sm mb-5">
					SEE PRODUCT
				</button>
			</div>
		</div>
	</article>

	<!-- ZX7 Speaker -->
	<article class="zx7-speaker flex items-center mt-8 rounded-xl bg-no-repeat mb-14 p-12">
		<div class="flex flex-col items-start gap-8">
			<h3 class="font-bold text-3xl">ZX7 SPEAKER</h3>
			<ButtonClear />
		</div>
	</article>

	<!-- XY1 Earphones -->
	<article class="grid grid-cols-2 flex-col md:flex-row mt-10 gap-3 mb-16">
		<enhanced:img
			src="/src/lib/assets/home/desktop/image-earphones-yx1.jpg"
			alt="YX1 Earphones"
			class="rounded-lg"
		/>
		<div
			class="flex flex-col justify-center items-center gap-3 text-center bg-white-grey rounded-lg"
		>
			<p class="font-bold text-3xl mb-8">XY1 EARPHONES</p>
			<a href="/earphones/yx1"><ButtonClear /></a>
		</div>
	</article>
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
