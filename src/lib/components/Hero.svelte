<script lang="ts">
	import Button1 from './Button1.svelte';
	import Button3 from './Button3.svelte';
</script>

<div class="header__image">
	<section class="header__bottom">
		<p class="header__bottom--new-product tracking-wide text-zinc-300">NEW PRODUCT</p>
		<h1 class="header__bottom--title text-white leading-10 text-4xl lg:text-7xl font-bold">
			XX99 MARK II HEADPHONES
		</h1>
		<p class="header__bottom--paragraph text-zinc-300">
			Experience natural, lifelike audio and exceptional build quality made for the passionate music
			enthusiast.
		</p>
		<div class="md:block">
			<Button1 />
			
		</div>
	</section>
</div>

<style>
	.header__image {
		background-image: url('/src/lib/assets/home/desktop/image-hero.jpg');
		
	}
	.header__image {
		background-color: var(--clr-lighter-dark);
		background-image: url('/src/lib/assets/home/mobile/image-header.jpg');
		background-size: cover;
		background-position: center -90px;
		background-blend-mode: difference;
		background-repeat: no-repeat;
		margin: 0;
	}

	.header__bottom {
		color: var(--clr-light);
		display: flex;
		flex-direction: column;
		align-self: center;
		gap: 1.75em;

		text-align: center;
		max-width: 328px;
		padding: 6.75em 0 7em;
		margin: 0 auto;
	}

	.header__bottom--new-product {
		opacity: 0.5;
	}

	.header__bottom--title {
		text-align: center;
		letter-spacing: 2px;
		line-height: 40px;
	}
	@media (min-width: 376px) {
		/* header bottom */
		.header__image {
			background-image: url('/src/lib/assets/home/tablet/image-header.jpg');
		}

		.header__bottom {
			max-width: 379px;
			padding: 7.875em 0 10.4375em;
			gap: 2.5em;
		}

		.header__bottom--paragraph {
			max-width: 349px;
		}

		.header__bottom--title {
			font-size: var(--fs-h2);
		}
	}

	@media (min-width: 400px) {
		.header__bottom--title {
			line-height: 58px;
		}
	}

	@media (min-width: 769px) {
		/* header bottom */
		.header__image {
			background-image: url('/src/lib/assets/home/desktop/image-hero.jpg');
		}

		.header__bottom {
			max-width: 398px;
			padding: 8em 0 9.875em;
			margin-left: calc((165 / 1440) * 100%);
			align-items: flex-start;
			text-align: left;
			gap: 1.5em;
		}

		.header__bottom--title {
			text-align: left;
		}
	}
</style>
