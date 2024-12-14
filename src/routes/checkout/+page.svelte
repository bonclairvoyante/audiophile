<script lang="ts">
	import GoBack from '$lib/components/GoBack.svelte';
	import { cartProducts } from '$lib/cart.svelte';
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { CheckoutSchema } from '$lib/schema/Checkoutschema.js';
	import { valibotClient } from 'sveltekit-superforms/adapters';

	const shipping = $state(50);
	const summaryTotal = $derived.by(() => {
		let total = 0;
		for (const product of cartProducts) {
			total += product.price * product.quantity;
		}
		return total;
	});

	let { data } = $props();
	const { form, enhance, errors, message, capture, restore } = superForm(data.form, {
		validators: valibotClient(CheckoutSchema)
	});
	export const snapshot = { capture, restore };
</script>

<!-- <SuperDebug data={$form} /> -->

<section class=" bg-white-grey pb-16">
	<div class="pb-4 mx-4 md:mx-14">
		<a href="/" class="p-2"><GoBack /></a>
		<form class="bg-white rounded-md px-8 py-4" method="post" action="?/checkout" use:enhance>
			<h1 class="uppercase text-2xl lg:text-3xl font-bold">Checkout</h1>
			<h2 class="uppercase text-xs lg:text-3xl font-bold text-orange pt-2">Billing details</h2>

			<div class="flex flex-col md:flex-row gap-4">
				<label for="name" class="form-control w-full">
					<div class="label">
						<span class="label-text">Name</span>
					</div>
					<input
						type="text"
						name="name"
						aria-invalid={$errors.name ? 'true' : undefined}
						class="input input-bordered w-full"
						bind:value={$form.name}
						placeholder="Bruce Wayne"
					/>
					{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
				</label>
				<label for="email" class="form-control w-full pb-4">
					<div class="label">
						<span class="label-text">Email Address</span>
					</div>
					<input
						type="email"
						name="email"
						aria-invalid={$errors.email ? 'true' : undefined}
						class="input input-bordered w-full"
						bind:value={$form.email}
					/>
					{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
				</label>
			</div>

			<label for="tel" class="form-control w-full max-w-xs">
				<div class="label">
					<span class="label-text">Phone Number</span>
				</div>
				<input
					type="tel"
					name="tel"
					aria-invalid={$errors.tel ? 'true' : undefined}
					class="input input-bordered w-full max-w-xs"
					bind:value={$form.tel}
					placeholder="+1 123 456789"
				/>
				{#if $errors.tel}<span class="invalid">{$errors.tel}</span>
				{/if}
			</label>

			<h2 class="uppercase text-xs lg:text-3xl font-bold text-orange pt-6">Shipping Info</h2>

			<label for="address" class="form-control w-full">
				<div class="label">
					<span class="label-text">Your Address</span>
				</div>
				<input
					type="address"
					name="address"
					aria-invalid={$errors.address ? 'true' : undefined}
					class="input input-bordered w-full"
					bind:value={$form.address}
				/>
				{#if $errors.address}
					<span class="invalid">{$errors.address}</span>
				{/if}
			</label>

			<div class="flex flex-col md:flex-row gap-4">
				<label for="road" class="form-control w-full">
					<div class="label">
						<span class="label-text">Name of Street or Road</span>
					</div>
					<input
						type="street"
						name="street"
						aria-invalid={$errors.street ? 'true' : undefined}
						class="input input-bordered w-full"
						bind:value={$form.street}
					/>
					{#if $errors.street}<span class="invalid">{$errors.street}</span>{/if}
				</label>

				<label for="city" class="form-control w-full">
					<div class="label">
						<span class="label-text">City</span>
					</div>
					<input
						type="string"
						name="city"
						aria-invalid={$errors.city ? 'true' : undefined}
						class="input input-bordered w-full"
						bind:value={$form.city}
					/>
					{#if $errors.city}<span class="invalid">{$errors.city}</span>{/if}
				</label>
			</div>

			<label for="country" class="form-control max-w-xs">
				<div class="label">
					<span class="label-text">Country</span>
				</div>
				<input
					type="string"
					name="country"
					aria-invalid={$errors.country ? 'true' : undefined}
					class="input input-bordered w-full md:w-[18em] lg:w-[25.5em] xl:w-[39em]"
					bind:value={$form.country}
				/>
				{#if $errors.country}<span class="invalid">{$errors.country}</span>{/if}
			</label>

			<!-- <h2 class="uppercase text-xs lg:text-3xl font-bold text-orange">Payment Details</h2>

			<label for="country" class="form-control w-full max-w-xs">
				<div class="label">
					<span class="label-text font-bold">Payment Method</span>
				</div>
                <div class="flex flex-col gap-3">
                    <div class="input input-bordered w-full max-w-xs flex gap-2 justify-start items-center">
					<input type="radio" name="payment" class=" radio radio-secondary" />
					e-Money
				</div>
                <div class="input input-bordered w-full max-w-xs flex gap-2 justify-start items-center">
					<input type="radio" name="payment" class=" radio radio-secondary" />
					Cash on Delivery
				</div>
                </div>
			</label> -->
		</form>
	</div>

	<div class="py-4 mx-4 md:mx-14 bg-white rounded-md px-4 md:px-8 pb-12">
		<h2 class="uppercase text-xl lg:text-2xl font-bold py-4">Summary</h2>

		{#each cartProducts as cartProduct}
			<div class="flex justify-between items-center pb-5">
				<img src={cartProduct.thumbmail} alt="Product" class="size-12 object-cover rounded mr-4" />
				<div>
					<p class="font-medium">{cartProduct.short}</p>
					<p class="text-sm font-semibold text-zinc-400">
						$ {cartProduct.price * cartProduct.quantity}
					</p>
				</div>
				<div>
					<p class="text-zinc-400 font-semibold">x{cartProduct.quantity}</p>
				</div>
			</div>
		{/each}

		<a href="/">
			<button
				class="bg-orange hover:bg-orange-bright px-4 py-3 text-white text-nowrap uppercase w-full rounded tracking-small"
			>
				continue & pay
			</button></a
		>
	</div>
</section>

<style>
	.invalid {
		color: red;
	}
</style>
