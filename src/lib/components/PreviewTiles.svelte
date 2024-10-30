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
	class="flex justify-start items-center md:mx-24 mx-4 mt-8 rounded-xl bg-speakermobile lg:bg-speakerdesktop bg-no-repeat bg-cover bg-center mb-14"
>
	<div class="flex flex-col justify-center items-center gap-8 p-12">
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
		class="flex flex-col justify-start items-center text-center bg-white-grey rounded-xl max-w-1/2 grow gap-6 p-5  lg:py-[4.5rem]"
	>
		<h3 class="font-bold text-3xl mb-8">XY1 EARPHONES</h3>
		<ButtonClear />
	</div>
</article>

<div class="max-w-sm rounded-lg shadow">
	<enhanced:img
		class="rounded-t-lg"
		src="/src/lib/assets/shared/desktop/image-best-gear.jpg"
		alt="card"
	/>

	<div class="p-5">
		<h5 class="mb-2 text-2xl font-bold tracking-tight">Noteworthy technology acquisitions 2021</h5>

		<p class="mb-3 font-normal">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</div>
</div>
