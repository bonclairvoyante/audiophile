<script>
	import ButtonClear from './ButtonClear.svelte';
</script>

<!-- ZX9 Speaker -->
<article
	class="flex lg:flex-row flex-col bg-orange bg-spiral xl:justify-center xl:gap-96 justify-between items-center rounded-xl md:mx-24 mx-4 text-balance mb-12"
>
	<enhanced:img
		src="/src/lib/assets/shared/desktop/image-category-thumbnail-speakers.png"
		alt="ZX9 Speaker"
		class="mt-12"
	/>
	<div class="flex flex-col lg:justify-end justify-between items-center text-center">
		<h3 class="text-white font-bold text-3xl pb-4">ZX9<br />SPEAKER</h3>
		<p class="text-balance text-white-grey">
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
<article
	class="flex items-center md:mx-24 mx-4 mt-8 rounded-xl bg-speakermobile lg:bg-speakerdesktop bg-cover bg-center mb-14 p-12"
>
	<div class="flex flex-col items-start gap-8">
		<h3 class="font-bold text-3xl">ZX7 SPEAKER</h3>
		<ButtonClear />
	</div>
</article>

<!-- XY1 Earphones -->
<article class="flex flex-col md:flex-row md:mx-24 mx-4 mt-10 gap-3 mb-28">
	<enhanced:img
		src="/src/lib/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
		alt="YX1 Earphones"
		class="rounded-lg"
	/>
	<div
		class="flex flex-col justify-start items-center text-center bg-white-grey rounded-xl max-w-1/2 grow gap-6 p-5 lg:py-[4.5rem]"
	>
		<p class="font-bold text-3xl mb-8">XY1 EARPHONES</p>
		<ButtonClear />
	</div>
</article>

<article
	class="flex flex-col items-center lg:flex-row-reverse lg:justify-between mx-4 md:mx-24 rounded-lg gap-3 lg:gap-16"
>
	<div class="image rounded-lg bg-cover lg:w-48"></div>
	<div class="p-5 flex flex-col gap-2 text-center lg:text-start">
		<h4 class="mb-2 text-2xl font-bold leading-9 tracking-smaller">
			BRINGING YOU THE<br /> <span class="text-orange">BEST</span> AUDIO GEAR
		</h4>

		<p class="mb-3 text text-balance lg:w-[25rem]">
			Bringing you the best audio gear Located at the heart of New York City, Audiophile is the
			premier store for high end headphones, earphones, speakers, and audio accessories. We have a
			large showroom and luxury demonstration rooms available for you to browse and experience a
			wide range of our products. Stop by our store to meet some of the fantastic people who make
			Audiophile the best place to buy your portable audio equipment.
		</p>
	</div>
</article>

<style>
	.image {
		width: 100%;
		background: url('/src/lib/assets/shared/mobile/image-best-gear.jpg');
		background-position: top center;
		height: 30rem;

		@media (min-width: 768px) {
			background: url('/src/lib/assets/shared/tablet/image-best-gear.jpg');
			background-position: center;
		}

		@media (min-width: 1024px) {
			background: url('/src/lib/assets/shared/desktop/image-best-gear.jpg');
			background-position: center;
		}
	}
</style>
