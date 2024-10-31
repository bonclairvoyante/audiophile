<script>
	import Button3 from './Button3.svelte';
</script>

<div
	class="flex flex-col md:flex-row justify-center items-center md:gap-2 gap-24 mt-8 md:mt-12 mb-12 xl:pt-20 mx-4 md:mx-24"
>
	<div
		class="flex flex-col justify-center items-center bg-white-grey rounded-md p-4 relative product-card-headphones"
	>
		<enhanced:img
			src="/src/lib/assets/shared/desktop/image-category-thumbnail-headphones.png"
			alt="mark-one-headphones"
			class="absolute left-0.5 -top-24 lg:-top-32"
		/>
		<h3 class="text-lg font-bold pt-8 px-3">HEADPHONES</h3>
		<Button3 />
	</div>
	<div
		class="flex flex-col justify-center items-center bg-white-grey rounded-md p-4 relative product-card-speaker"
	>
		<enhanced:img
			src="/src/lib/assets/shared/desktop/image-category-thumbnail-speakers.png"
			alt="mark-one-headphones"
			class="absolute left-0.5 -top-20 lg:-top-28"
		/>
		<h3 class="text-lg font-bold pt-8 px-6">SPEAKERS</h3>
		<Button3 />
	</div>
	<div
		class="flex flex-col justify-center items-center bg-white-grey rounded-md p-4 relative product-card-earphones"
	>
		<enhanced:img
			src="/src/lib/assets/shared/desktop/image-category-thumbnail-earphones.png"
			alt="mark-one-headphones"
			class="absolute left-0.5 -top-20 lg:-top-24"
		/>
		<h3 class="text-lg font-bold pt-8 px-6">EARPHONES</h3>
		<Button3 />
	</div>
</div>

<style>
	.product-card-headphones {
		@media (min-width: 768px) {
			padding: 1.2rem;
		}
		@media (min-width: 1024px) {
			padding: 3.7rem;
		}
	}
	.product-card-speaker {
		@media (min-width: 768px) {
			padding: 1.2rem;
		}
		@media (min-width: 1024px) {
			padding: 3.7rem;
		}
	}
	.product-card-earphones {
		@media (min-width: 768px) {
			padding: 1.2rem;
		}
		@media (min-width: 1024px) {
			padding: 3.7rem;
		}
	}
</style>
