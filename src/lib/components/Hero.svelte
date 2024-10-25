

<script lang="ts">
	import Button1 from './Button1.svelte';

	let innerHeight: number;
	let localSize: string;

	$: if (innerHeight >= 1024) {
		localSize = 'desktop';
	} else if (innerHeight >= 768) {
		localSize = 'tablet';
	} else {
		localSize = 'mobile';
	}

	//Consider adding the 'products' store in order to grab data from the object to fill this page about the mark-two headphones
</script>

<svelte:window bind:innerWidth={innerHeight} />

<section
	id="homepage-hero-section"
	class="w-full h-[51rem] mTab:h-[72.9rem] bg-[#191919] lg:h-[63.2rem] overflow-hidden font-sans "
>
	<div class="section-inner-container w-full h-full max-w-[111rem] p-10">
		<div class="img-container w-full m-auto relative">
			<img
				src="/src/lib/assets/home/{localSize}/image-header.jpg"
				alt=""
				class="lg:max-w-none lg:w-[80rem] lg:absolute bottom-[-400px] lg:hidden"
			/>
		</div>
		<div
			class="textContainer flex justify-center items-center flex-col text-center w-[32.8rem]
			container m-auto lg:m-0 lg:pl-20 xl:pl-0 lg:text-left lg:items-start z-10
			transition-all"
		>
			<h4
				class="mb-[1.6rem] md:text-lg text-sm tracking-wider text-zinc-500
				transition-all"
			>
				NEW PRODUCT
			</h4>
			<h1
				class="mb-[2.4rem] text-xl tracking-[1.5px] text-white
				font-bold lg:text-[5.6rem] lg:leading-[5.8rem] transition-all"
			>
				XX99 MARK II HEADPHONES
			</h1>
			<p
				class="mb-[2.8rem] md:text-lg text-sm leading-10 font-extralight text-zinc-200
				 transition-all"
			>
				Experience natural, lifelike audio <br />and exceptional build quality for the <br /> passionate
				music enthusiast.
			</p>
			<Button1 />
		</div>
	</div>
</section>

<style>
	.section-inner-container {
		display: grid;
		grid: 'textAndImage' 1fr / 1fr;
	}

	.textContainer,
	.img-container {
		grid-area: textAndImage;
	}

	@media screen and (min-width: 1024px) {
		.section-inner-container {
			grid: 'text img' 1fr / min-content 1fr;
		}

		.textContainer {
			grid-area: text;
		}

		.img-container {
			grid-area: img;
		}

		.section-inner-container {
			position: relative;
		}

		.section-inner-container::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: url('/src/lib/assets/home/desktop/image-hero.jpg') no-repeat center center;
			background-size: cover;
		}
	}
</style>
