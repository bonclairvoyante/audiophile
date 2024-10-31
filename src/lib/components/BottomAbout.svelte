<article
	class="flex flex-col items-center lg:flex-row-reverse justify-around mx-4 md:mx-24 rounded-lg gap-3 xl:gap-60 mb-16"
>
	<div class="image rounded-xl"></div>
	<div class="p-5 flex flex-col gap-2 text-center lg:text-start">
		<h4 class="mb-2 text-2xl font-bold leading-relaxed tracking-smaller">
			BRINGING YOU THE<br /> <span class="text-orange">BEST</span> AUDIO GEAR
		</h4>

		<p class="mb-3 text text-balance lg:w-[25rem] font-light leading-relaxed text-lg">
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
		background-repeat: no-repeat;

		@media (min-width: 768px) {
			background: url('/src/lib/assets/shared/tablet/image-best-gear.jpg');
			background-position: center;
			background-repeat: no-repeat;
		}

		@media (min-width: 1024px) {
			background: url('/src/lib/assets/shared/desktop/image-best-gear.jpg');

			background-position: center;
			background-repeat: no-repeat;
		}
	}
</style>