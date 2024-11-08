<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
</script>

<ul
	class=" mx-[8rem] md:mx-[18rem] flex flex-col gap-4 justify-center items-center"
	transition:fade={{ duration: 900, easing: quadOut }}
>
	<li><a class="text-gray-100 hover:text-orange-bright uppercase" href="/">Home</a></li>
	<li>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/headphones">Headphones</a>
	</li>
	<li><a class="text-gray-100 hover:text-orange-bright uppercase" href="/speakers">Speakers</a></li>
	<li>
		<a class="text-gray-100 hover:text-orange-bright uppercase" href="/earphones">Earphones</a>
	</li>
</ul>
