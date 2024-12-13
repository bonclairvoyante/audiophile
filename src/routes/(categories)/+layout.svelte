<script>
	let { children } = $props();
	import ProductCards from '$lib/components/ProductCards.svelte';
	import BottomAbout from '$lib/components/BottomAbout.svelte';
</script>

{@render children()}

<ProductCards />

<div class="mx-4 md:mx-24 my-16">
	<BottomAbout />
</div>
