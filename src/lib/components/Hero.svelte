<div class="hero-image font-sans">
	<section class="hero-bottom">
		<p class="hero-bottom--new-product tracking-wide text-zinc-300">NEW PRODUCT</p>
		<h1 class="hero-bottom--title text-white leading-10 text-5xl font-bold">
			XX99 MARK II HEADPHONES
		</h1>
		<p class="hero-bottom--paragraph text-zinc-300">
			Experience natural, lifelike audio and exceptional build quality made for the passionate music
			enthusiast.
		</p>
		<div class="md:block">
			<button class="bg-orange hover:bg-orange-bright text-white px-4 py-4"> SEE PRODUCT </button>
		</div>
	</section>
</div>

<style>
	.hero-image {
		background-image: url('/src/lib/assets/home/desktop/image-hero.jpg');
	}
	.hero-image {
		background-image: url('/src/lib/assets/home/mobile/image-header.jpg');
		background-size: cover;
		background-position: center -90px;
		background-blend-mode: difference;
		background-repeat: no-repeat;
		margin: 0;
	}

	.hero-bottom {
		display: flex;
		flex-direction: column;
		align-self: center;
		gap: 1.75em;
		text-align: center;
		max-width: 328px;
		padding: 6.75em 0 7em;
		margin: 0 auto;
	}

	.hero-bottom--new-product {
		opacity: 0.5;
	}

	.hero-bottom--title {
		text-align: center;
		letter-spacing: 2px;
		line-height: 40px;
	}
	@media (min-width: 376px) {
		/* header bottom */
		.hero-image {
			background-image: url('/src/lib/assets/home/tablet/image-header.jpg');
		}

		.hero-bottom {
			max-width: 379px;
			padding: 7.875em 0 10.4375em;
			gap: 2.5em;
		}

		.hero-bottom--paragraph {
			max-width: 349px;
		}
	}

	@media (min-width: 400px) {
		.hero-bottom--title {
			line-height: 58px;
		}
	}

	@media (min-width: 769px) {
		/* header bottom */
		.hero-image {
			background-image: url('/src/lib/assets/home/desktop/image-hero.jpg');
		}

		.hero-bottom {
			max-width: 398px;
			padding: 8em 0 9.875em;
			margin-left: calc((165 / 1440) * 100%);
			align-items: flex-start;
			text-align: left;
			gap: 1.5em;
		}

		.hero-bottom--title {
			text-align: left;
		}
	}
</style>
