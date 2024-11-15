<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import type { PageData } from './$types';
	import ProductCardList from '$lib/components/ProductCardList.svelte';
	import PreviewTiles from '$lib/components/PreviewTiles.svelte';
	let { data }: { data: PageData } = $props();
</script>

<Hero />
<ProductCardList />
<PreviewTiles />
