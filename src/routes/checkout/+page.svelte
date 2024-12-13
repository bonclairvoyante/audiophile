<script>
	import GoBack from '$lib/components/GoBack.svelte';
	import { cartProducts } from '$lib/cart.svelte';

	const shipping = $state(50);
	const summaryTotal = $derived.by(() => {
		let total = 0;
		for (const product of cartProducts) {
			total += product.price * product.quantity;
		}
		return total;
	});
</script>

<section class=" bg-white-grey">
	<div class="pb-4 mx-4 md:mx-14">
		<a href="/" class="p-2"><GoBack /></a>
		<form class="bg-white rounded-md px-8 py-4">
			<h1 class="uppercase text-2xl lg:text-3xl font-bold">Checkout</h1>
			<h2 class="uppercase text-xs lg:text-3xl font-bold text-orange pt-2">Billing details</h2>

			<div class="flex flex-col md:flex-row gap-4">
				<label for="name" class="form-control w-full">
					<div class="label">
						<span class="label-text">Name</span>
					</div>
					<input type="text" name="name" class="input input-bordered w-full" />
				</label>
				<label for="email" class="form-control w-full">
					<div class="label">
						<span class="label-text">Email Address</span>
					</div>
					<input type="email" name="email" class="input input-bordered w-full" />
				</label>
			</div>

			<label for="tel" class="form-control w-full max-w-xs">
				<div class="label">
					<span class="label-text">Phone Number</span>
				</div>
				<input type="tel" name="tel" class="input input-bordered w-full max-w-xs" />
			</label>

			<h2 class="uppercase text-xs lg:text-3xl font-bold text-orange pt-6">Shipping Info</h2>

			<label for="address" class="form-control w-full">
				<div class="label">
					<span class="label-text">Your Address</span>
				</div>
				<input type="address" name="address" class="input input-bordered w-full" />
			</label>

			<div class="flex flex-col md:flex-row gap-4">
				<label for="zip" class="form-control w-full">
					<div class="label">
						<span class="label-text">ZIP Code</span>
					</div>
					<input type="number" name="zip" class="input input-bordered w-full" />
				</label>

				<label for="city" class="form-control w-full">
					<div class="label">
						<span class="label-text">City</span>
					</div>
					<input type="string" name="city" class="input input-bordered w-full" />
				</label>
			</div>

			<label for="country" class="form-control max-w-xs">
				<div class="label">
					<span class="label-text">Country</span>
				</div>
				<input
					type="string"
					name="country"
					class="input input-bordered w-full md:w-[18em] lg:w-[25.5em] xl:w-[39em]"
				/>
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

	<div class="py-4 mx-4 md:mx-14 bg-white rounded-md px-4 md:px-8">
		<h2 class="uppercase text-xl lg:text-2xl font-bold py-4">Summary</h2>

		<div class="flex justify-between items-center">
			<img
				src="https://via.placeholder.com/50"
				alt="Product"
				class="size-12 object-cover rounded mr-4"
			/>
			<div>
				<p class="font-medium">Product Short Name</p>
				<p class="text-sm font-semibold text-zinc-400">$19.99</p>
			</div>
			<div>
				<p class="text-zinc-400 font-semibold">x1</p>
			</div>
		</div>
	</div>
</section>
