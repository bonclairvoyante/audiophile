<script lang="ts">
	import { Facebook, Twitter, Instagram } from 'lucide-svelte';
</script>

<footer class="bg-charcoal py-10">
	<div class="text-center md:text-start px-24 mb-8">
		<a class="text-2xl font-bold md:text-3xl text-white-grey" href="/src/routes">audiophile </a>
	</div>
	<div class="flex flex-col md:flex-row gap-4 md:gap-12 mb-8 text-center md:text-start px-24">
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/">Home</a>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/headphones">Headphones</a>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/speakers">Speakers</a>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/earphones">Earphones</a>
	</div>
	<div class="text-center md:text-start md:px-24">
		<p class="text-zinc-400 text-balance tracking-smaller font text-sm lg:text-xl leading-relaxed">
			Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
			lovers and sound specialists who are devoted to helping you get the most out of personal
			audio. Come and visit our demo facility - we’re open 7 days a week.
		</p>
	</div>
	<div
		class="mt-12 flex flex-col md:flex-row gap-x-4 gap-y-6 justify-center items-center md:justify-between px-18 md:px-24"
	>
		<p class="text-zinc-400 tracking-smaller font-thin font text-xs">
			Copyright 2021. All Rights Reserved
		</p>
		<div class="flex gap-6">
			<Facebook color="#FAFAFA" />
			<Twitter color="#FAFAFA" />
			<Instagram color="#FAFAFA" />
		</div>
	</div>
</footer>
