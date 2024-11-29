<script lang="ts">
	import { quadOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';
</script>

<main class="mx-4 md:mx-24">
	<!-- xx99 Mark II -->
	<section
		in:fly={{ x: 200, duration: 1000 }}
		out:slide={{ delay: 200, easing: quadOut }}
		class="flex flex-col lg:flex-row gap-4 lg:gap-10 text-center lg:text-start mt-8 md:mt-12 mb-24"
	>
		<enhanced:img
			src="/src/lib/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
			alt="XX99 Mark II"
			class="rounded-md"
		/>

		<div class="flex flex-col gap-4 self-center">
			<p class="tracking-wide uppercase text-orange">New Product</p>
			<h1 class="uppercase text-3xl lg:text-5xl font-bold">xx99 Mark II headphones</h1>
			<p class="font-normal leading-relaxed text-sm md:text-lg">
				The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium
				headphone experience by reproducing the balanced depth and precision of studio-quality
				sound.
			</p>
			<div class="block">
				<a href="/headphones/marktwo">
					<button class="bg-orange hover:bg-orange-bright text-white py-4 px-4 uppercase"
						>see product</button
					></a
				>
			</div>
		</div>
	</section>

	<!-- xx99 Mark I Headphones -->
	<section
		class="flex flex-col-reverse lg:flex-row gap-4 lg:gap-16 text-center lg:text-start mt-8 md:mt-12 mb-20"
	>
		<div class="flex flex-col gap-4 self-center">
			<h1 class="uppercase text-3xl lg:text-5xl font-bold">XX99 Mark I Headphones</h1>
			<p class="font-normal leading-relaxed text-sm md:text-lg">
				As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate
				audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios
				and on the go.
			</p>
			<div class="block">
				<a href="/headphones/markone"
					><button class="bg-orange hover:bg-orange-bright text-white py-4 px-4 uppercase"
						>see product</button
					></a
				>
			</div>
		</div>
		<div>
			<enhanced:img
				src="/src/lib/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
				alt="XX99 Mark I"
				class="rounded-md"
			/>
		</div>
	</section>
	<!-- XX59 Headphones -->
	<section
		class="flex flex-col lg:flex-row gap-4 lg:gap-16 text-center lg:text-start mt-8 md:mt-12 mb-40"
	>
		<enhanced:img
			src="/src/lib/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
			alt="XX59 Headphones"
			class="rounded-md"
		/>

		<div class="flex flex-col gap-4 self-center">
			<h1 class="uppercase text-3xl lg:text-5xl font-bold">XX59 Headphones</h1>
			<p class="font-normal leading-relaxed text-sm md:text-lg">
				Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59
				headphones. The stylish yet durable versatile wireless headset is a brilliant companion at
				home or on the move.
			</p>
			<div class="block">
				<a href="/headphones/xx59"
					><button
						class="bg-orange hover:bg-orange-bright text-white py-4 px-4 uppercase shadow-2xl"
						>see product</button
					></a
				>
			</div>
		</div>
	</section>
</main>
