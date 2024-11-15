<script>
	let { children } = $props();
	import Button3 from '$lib/components/Button3.svelte';
</script>

{@render children()}
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
