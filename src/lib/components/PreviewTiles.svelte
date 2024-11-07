<script>
	import ButtonClear from './ButtonClear.svelte';
</script>

<main class="mx-4 md:mx-24">
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
	<article class="flex flex-col md:flex-row mt-10 gap-3 mb-16">
		<enhanced:img
			src="/src/lib/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
			alt="YX1 Earphones"
			class="rounded-lg w-full"
		/>
		<div
			class="flex flex-col items-center text-center bg-white-grey rounded-xl gap-3 p-5 lg:py-[4.5rem]"
		>
			<p class="font-bold text-3xl mb-8">XY1 EARPHONES</p>
			<ButtonClear />
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
