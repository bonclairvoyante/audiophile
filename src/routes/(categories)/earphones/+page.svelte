<script lang="ts">
	import { quintIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<main class="mx-[3rem] mt-8 md:mt-12">
	<!-- YX1 Wireless earphones -->
	<section
		in:fade={{ delay: 500, duration: 750, easing: quintIn }}
		out:fade
		class="flex flex-col lg:flex-row gap-4 lg:gap-8 text-center lg:text-start pb-10 md:pb-14 lg:pb-20"
	>
		<enhanced:img
			src="/src/lib/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
			alt="YX1 wireless earphones"
			class="rounded-md"
		/>
		<div class="flex flex-col gap-2 self-center">
			<p class="tracking-wide uppercase text-orange">New Product</p>
			<h1 class="uppercase text-3xl lg:text-5xl font-bold">YX1 wireless earphones</h1>
			<p class="font-normal leading-relaxed text-sm md:text-lg">
				Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless
				Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active
				noise cancellation feature.
			</p>
			<div class="block">
				<a href="/earphones/yx1"
					><button class="bg-orange hover:bg-orange-bright text-white py-4 px-4 uppercase"
						>see product</button
					></a
				>
			</div>
		</div>
	</section>
	
</main>
