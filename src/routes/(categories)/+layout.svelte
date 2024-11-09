<script>
	let { children } = $props();
	import ProductCardList from '$lib/components/ProductCardList.svelte';
</script>
{@render children()}
<ProductCardList />
