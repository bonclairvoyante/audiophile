<script lang="ts">
	import { Plus, Minus } from 'lucide-svelte';
	import GoBack from '$lib/components/GoBack.svelte';
	import { marktwo, markone, xx59, zx9 } from '$lib/data/productdetails.json';
	import { goto } from '$app/navigation';
	import clsx from 'clsx';
	import SeeButton from '$lib/components/SeeButton.svelte';
	import { cartProducts } from '$lib/cart.svelte';

	let {
		min = 0,
		max = 99,
		value = $bindable(0)
	}: { min?: number; value?: number; max?: number } = $props();

	const defaultValue = value;

	let input: HTMLInputElement;

	let showCaret = $state(true);

	const handleClick = function () {
		goto('/headphones', { replaceState: true });
	};

	function handleInput() {
		let next = value;
		if (input.value === '') {
			next = defaultValue;
		} else {
			const num = parseInt(input.value);
			if (!isNaN(num) && min <= num && num <= max) next = num;
		}
		// Manually update the input.value in case the number stays the same e.g. 09 == 9
		input.value = String(next);
		value = next;
	}
	function handlePointerDown(event: PointerEvent, diff: number) {
		if (event.pointerType === 'mouse') {
			event?.preventDefault();
			input.focus();
		}
		const newVal = Math.min(Math.max(value + diff, min), max);
		value = newVal;
	}
</script>

<main class="mx-[1.51rem] md:mx-[1em] mb-24">
	<!-- Card section -->
	<button onclick={handleClick} class="p-4">
		<GoBack />
	</button>
	<section class="p-3 md:p-4 lg:p-5 flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-10 text-start">
		<enhanced:img
			src="/src/lib/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
			class="rounded-md"
			alt="yx1-earphones"
		/>
		<div class="flex flex-col gap-4 md:gap-2 md:self-center">
			<p class="tracking-wide uppercase text-orange font-sans">New Product</p>
			<h1 class="uppercase text-3xl lg:text-5xl font-bold">{marktwo[0].name}</h1>
			<p class="text-zinc-700">
				{marktwo[0].description}
			</p>
			<p class="font-bold lg:py-4">$ {marktwo[0].price}</p>
			<div class="flex gap-3 lg:py-3.5 lg:justify-start">
				<div
					class="focus-within:ring-accent group flex items-stretch text-3xl font-semibold bg-white-grey"
				>
					<button
						aria-hidden="false"
						tabindex={-1}
						class="flex items-center pl-[.5em] pr-[.325em] hover:text-orange-bright active:text-orange"
						disabled={min != null && value <= min}
						onpointerdown={(event) => handlePointerDown(event, -1)}
					>
						<Minus class="size-4" absoluteStrokeWidth strokeWidth="3.5" />
					</button>
					<div
						class="relative grid items-center justify-items-center text-center [grid-template-areas:'overlap'] *:[grid-area:overlap]"
					>
						<input
							bind:this={input}
							class={clsx(
								showCaret ? 'caret-white-bright' : 'caret-transparent',
								'spin-hide w-[1.5em] bg-transparent py-2 text-center font-[inherit] outline-none'
							)}
							style="font-kerning: none"
							type="number"
							{min}
							step="1"
							autocomplete="off"
							inputmode="numeric"
							{max}
							{value}
							oninput={handleInput}
						/>
					</div>
					<button
						aria-hidden="false"
						tabindex="-1"
						class="flex items-center pl-[.325em] pr-[.5em] hover:text-orange-bright active:text-orange"
						disabled={max != null && value >= max}
						onpointerdown={(event) => handlePointerDown(event, 1)}
					>
						<Plus class="size-4" absoluteStrokeWidth strokeWidth="3.5" />
					</button>
				</div>
				<button
					class="bg-orange hover:bg-orange-bright w-40 lg:w-48 py-3 text-white text-nowrap"
					onclick={() => {
						cartProducts.push({
							id: crypto.randomUUID(),
							name: marktwo[0].name,
							quantity: value,
							price: marktwo[0].price,
							thumbmail: marktwo[0].thumbnail
						});
					}}>Add to Cart</button
				>
			</div>
		</div>
	</section>
	<!-- Features section -->
	<section class="p-3 md:p-4 lg:p-5">
		<h2 class="uppercase font-bold text-2xl lg:text-3xl">Features</h2>
		<div class="tracking-smaller font-light text-zinc-700">
			<p class="my-6">
				{marktwo[0].featureuno}
			</p>
			<p>
				{marktwo[0].featuresec}
			</p>
		</div>
	</section>
	<section
		class="p-3 md:p-4 lg:p-5 flex flex-col md:flex-row gap-4 md:gap-60 lg:gap-96 text-nowrap pb-4 md:pb-12 lg:pb-16"
	>
		<h2 class="uppercase font-bold text-2xl lg:text-3xl">In the box</h2>
		<div class="flex flex-col gap-3 md:gap-2">
			<div class="flex gap-x-4">
				<p class="text-orange font-bold">{marktwo[0].includes[0].quantity}x</p>
				<p>{marktwo[0].includes[0].item}</p>
			</div>
			<div class="flex gap-x-4">
				<p class="text-orange font-bold">{marktwo[0].includes[1].quantity}x</p>
				<p>{marktwo[0].includes[1].item}</p>
			</div>
			<div class="flex gap-x-4">
				<p class="text-orange font-bold">{marktwo[0].includes[2].quantity}x</p>
				<p>{marktwo[0].includes[2].item}</p>
			</div>
			<div class="flex gap-x-4">
				<p class="text-orange font-bold">{marktwo[0].includes[3].quantity}x</p>
				<p>{marktwo[0].includes[3].item}</p>
			</div>
			<div class="flex gap-x-4">
				<p class="text-orange font-bold">{marktwo[0].includes[4].quantity}x</p>
				<p>{marktwo[0].includes[4].item}</p>
			</div>
		</div>
	</section>
	<!-- Gallery -->
	<section
		class="flex flex-col gap-2 md:gap-[1rem] lg:gap-[1.4rem] md:flex-row pb-4 md:pb-8 lg:pb-12 items-center xl:gap-[2rem]"
	>
		<div class="flex flex-col gap-2 md:gap-[1.32rem] lg:gap-[1.6rem] xl:gap-[2rem]">
			<enhanced:img
				src="/src/lib/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
				class="rounded-md"
				alt="xx99-mark-one-headphones"
			/>
			<enhanced:img
				src="/src/lib/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
				class="rounded-md"
				alt="xx99-mark-one-headphones"
			/>
		</div>
		<enhanced:img
			src="/src/lib/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
			class="rounded-md"
			alt="xx99-mark-one-headphones"
		/>
	</section>
	<!-- you may also like section -->
	<section class="pb-12 md:pb-16 lg:pb-24">
		<h2 class="uppercase font-bold text-2xl lg:text-3xl py-8 md:text-center">You may also like</h2>
		<div class="wrapper flex flex-col gap-5 md:gap-2 lg:gap-5 md:flex-row text-center">
			<div class="flex flex-col gap-4">
				<enhanced:img
					src="/src/lib/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
					class="rounded-md"
					alt="xx99-mark-one-headphones"
				/>
				<h3 class="font-bold text-2xl uppercase">{markone[0].short}</h3>
				<div class="block">
					<a href="/headphones/markone">
						<SeeButton />
					</a>
				</div>
			</div>
			<div class="flex flex-col gap-4 justify-center items-center">
				<enhanced:img
					src="/src/lib/assets/product-xx59-headphones/mobile/image-product.jpg"
					class="rounded-md"
					alt="xx59-headphones"
				/>
				<h3 class="font-bold text-2xl uppercase">{xx59[0].short}</h3>
				<a href="/headphones/xx59">
					<SeeButton />
				</a>
			</div>
			<div class="flex flex-col gap-4 justify-center items-center">
				<enhanced:img
					src="/src/lib/assets/product-zx9-speaker/mobile/image-product.jpg"
					class="rounded-md"
					alt="zx9-speaker"
				/>
				<h3 class="font-bold text-2xl uppercase">{zx9[0].short}</h3>
				<a href="/speakers/zx9">
					<SeeButton />
				</a>
			</div>
		</div>
	</section>
</main>
