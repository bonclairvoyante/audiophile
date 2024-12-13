<script>
	import SeeButton from '$lib/components/SeeButton.svelte';
	import { quintIn, quintOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';
</script>

<main class="mx-4 md:mx-24">
	<!-- ZX9 Speaker -->
	<section in:slide={{ delay: 500, duration: 750, easing: quintIn}} out:slide={{easing:quintOut}}
		
		class="flex flex-col lg:flex-row gap-4 lg:gap-10 text-center lg:text-start mt-8 md:mt-12 mb-24 lg"
	>
		<enhanced:img
			src="/src/lib/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
			alt="ZX9-Speaker"
			class="rounded-md"
		/>

		<div class="flex flex-col gap-4 self-center">
			<p class="tracking-wide uppercase text-orange">New Product</p>
			<h1 class="uppercase text-3xl lg:text-5xl font-bold">ZX9 Speaker</h1>
			<p class="font-normal leading-relaxed text-sm md:text-lg">
				Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker
				system that offers truly wireless connectivity -- creating new possibilities for more
				pleasing and practical audio setups.
			</p>
			<div class="block">
				<a href="/speakers/zx9">
					<SeeButton />
				</a>
			</div>
		</div>
	</section>
	<!-- ZX7 Speaker -->
	<section
		class="flex flex-col-reverse lg:flex-row gap-4 lg:gap-16 text-center lg:text-start mt-8 md:mt-12 mb-40"
	>
		<div class="flex flex-col gap-4 lg:gap-7 self-center">
			<h1 class="uppercase text-3xl lg:text-5xl font-bold">ZX7 Speaker</h1>
			<p class="font-normal leading-relaxed text-sm md:text-lg">
				Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end
				audiophile components that represents the top of the line powered speakers for home or
				studio use.
			</p>
			<div class="block">
				<a href="/speakers/zx7">
					<SeeButton />
				</a>
			</div>
		</div>
		<div>
			<enhanced:img
				src="/src/lib/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
				alt="ZX7-Speaker"
				class="rounded-md"
			/>
		</div>
	</section>
</main>
