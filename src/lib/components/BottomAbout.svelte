<article class="flex flex-col gap-4 lg:gap-8 lg:flex-row-reverse w-full ">
	<!-- <enhanced:img
		src="/src/lib/assets/shared/tablet/image-best-gear.jpg"
		alt="best-gear"
		class="rounded-md"
	></enhanced:img> -->
	<div class="img w-full"></div>

	<div
		class=" flex flex-col gap-2 text-center lg:text-start text-wrap self-start lg:self-center w-full"
	>
		<h4 class="mb-2 text-2xl font-bold leading-relaxed tracking-smaller">
			BRINGING YOU THE<br /> <span class="text-orange">BEST</span> AUDIO GEAR
		</h4>

		<p class="mb-3 text leading-relaxed text-lg text-balance text-justify">
			Bringing you the best audio gear located at the heart of New York City, Audiophile is the
			premier store for high end headphones, earphones, speakers, and audio accessories. We have a
			large showroom and luxury demonstration rooms available for you to browse and experience a
			wide range of our products. Stop by our store to meet some of the fantastic people who make
			Audiophile the best place to buy your portable audio equipment.
		</p>
	</div>
</article>

<style>
	.img {
		width: 100%;
		background: url('/src/lib/assets/shared/mobile/image-best-gear.jpg');
		background-position: top center;
		height: 30rem;
		background-repeat: no-repeat;
		border-radius: .4em;

		@media (min-width: 768px) {
			background: url('/src/lib/assets/shared/tablet/image-best-gear.jpg');
			background-position: center;
			background-repeat: no-repeat;
		}

		@media (min-width: 1024px) {
			background: url('/src/lib/assets/shared/desktop/image-best-gear.jpg');

			background-position: center;
			background-repeat: no-repeat;
			border-radius: .4em;
		}
	}
</style>
