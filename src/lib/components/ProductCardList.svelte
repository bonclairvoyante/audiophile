<script>
	import Button3 from './Button3.svelte';
</script>

<div
	class="container mx-auto flex flex-col md:flex-row justify-center items-center gap-24 md:gap-4 p-6 md:p-24"
>
	<div
		class="flex flex-col justify-center items-center bg-white-grey rounded-xl p-6 md:p-12 relative"
	>
		<enhanced:img
			src="/src/lib/assets/shared/desktop/image-category-thumbnail-headphones.png"
			alt="mark-one-headphones"
			class="absolute left-0.5 -top-24"
		/>
		<h3 class="text-lg font-bold pt-8 px-3">HEADPHONES</h3>
		<Button3 />
	</div>
	<div
		class="flex flex-col justify-center items-center bg-white-grey rounded-xl p-6 md:p-12 relative"
	>
		<enhanced:img
			src="/src/lib/assets/shared/desktop/image-category-thumbnail-speakers.png"
			alt="mark-one-headphones"
			class="absolute left-0.5 -top-20"
		/>
		<h3 class="text-lg font-bold pt-8 px-6">SPEAKERS</h3>
		<Button3 />
	</div>
	<div
		class="flex flex-col justify-center items-center bg-white-grey rounded-xl p-6 md:p-12 relative"
	>
		<enhanced:img
			src="/src/lib/assets/shared/desktop/image-category-thumbnail-earphones.png"
			alt="mark-one-headphones"
			class="absolute left-0.5 -top-16"
		/>
		<h3 class="text-lg font-bold pt-8 px-6">EARPHONES</h3>
		<Button3 />
	</div>
</div>
