<script lang="ts">
	// Supports weights 200-800
	import '@fontsource-variable/manrope';
	let { children } = $props();
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { Toaster } from "svelte-french-toast";

	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Audiophile</title>
	<meta
		name="description"
		content="Audiophile is a one-stop place to get the best of headphones, earphones, and speakers for audiophile"
	/>
</svelte:head>

<Toaster />

<Navbar />

{@render children()}

<Footer />
