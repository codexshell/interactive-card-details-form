<script>
	import { inputs } from './stores.js';
</script>

<section class="relative">
	<div class="img-container | back-img-container">
		<img class="back" src="/bg-card-back.png" alt="" />
		<span class="card-cvc">{$inputs.cvc}</span>
	</div>

	<div class="img-container | front-img-container">
		<span class="logo-svg"><img src="/card-logo.svg" alt="" /></span>
		<img class="front" src="/bg-card-front.png" alt="" />
		<span class="card-number">{$inputs.cardNumber}</span>
		<span class="card-holder">{$inputs.cardHolder}</span>
		<span class="expiry">{$inputs.month}/{$inputs.year}</span>
	</div>
</section>

<style>
	img {
		width: theme('width.72');
	}

	@media (min-width: theme('screens.xl')) {
		img {
			width: 90%;
		}
	}

	@media (min-width: theme('screens.xl')) {
		.back-img-container {
			position: relative;
			right: -15rem;
			top: 30rem;
		}

		.front-img-container {
			position: relative;
			right: -10rem;
		}
	}

	section {
		position: relative;
		background-image: url('/bg-main-mobile.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 15rem;
	}

	@media (min-width: theme('screens.sm')) {
		section {
			padding: theme('padding.6');
			padding-inline: theme('padding.16');
		}
	}

	@media (min-width: theme('screens.md')) {
		section {
			padding-inline: theme('padding.28');
		}
	}

	@media (min-width: theme('screens.lg')) {
		section {
			padding-inline: theme('padding.64');
		}
	}

	@media (min-width: theme('screens.xl')) {
		section {
			background-image: url('/bg-main-desktop.png');
			height: 100vh;
			padding: 0;
		}
	}

	.back {
		margin-left: auto;
		position: relative;
		top: 2rem;
		right: 1rem;
	}

	.front {
		position: relative;
		bottom: 2.275rem;
		left: 1rem;
		box-shadow: theme('boxShadow.2xl');
	}

	.img-container {
		position: relative;
	}

	.logo-svg {
		position: absolute;
		display: inline-block;
		width: theme('width[14]');
		z-index: 1;
		top: -1rem;
		left: 2.25rem;
	}

	@media (min-width: theme('screens.xl')) {
		.logo-svg {
			width: theme('width.24');
			left: 3rem;
			top: -0.5rem;
		}
	}

	.card-cvc {
		color: theme('colors.n-white');
		position: absolute;
		z-index: 1;
		right: 3.3rem;
		top: 6.3rem;
		font-size: 0.75rem;
		letter-spacing: theme('letterSpacing.widest');
	}

	@media (min-width: theme('screens.xl')) {
		.card-cvc {
			font-size: theme('fontSize.base');
			right: 4.5rem;
			top: 8rem;
		}
	}

	@media (min-width: 90rem) {
		.card-cvc {
			top: 9rem;
		}
	}

	.expiry {
		color: theme('colors.n-white');
		position: absolute;
		top: 5.25rem;
		left: 15rem;
		font-size: 0.75rem;
		letter-spacing: theme('letterSpacing.widest');
	}

	@media (min-width: theme('screens.xl')) {
		.expiry {
			font-size: theme('fontSize.sm');
			top: 9rem;
			left: 20rem;
		}
	}

	@media (min-width: 90rem) {
		.expiry {
			top: 10rem;
		}
	}

	.card-holder {
		color: theme('colors.n-white');
		position: absolute;
		font-size: 0.75rem;
		letter-spacing: theme('letterSpacing.widest');
		top: 5.25rem;
		left: 2.25rem;
		text-transform: uppercase;
	}

	@media (min-width: theme('screens.xl')) {
		.card-holder {
			font-size: theme('fontSize.sm');
			left: 3rem;
			top: 9rem;
		}
	}

	@media (min-width: 90rem) {
		.card-holder {
			top: 10rem;
		}
	}

	.card-number {
		color: theme('colors.n-white');
		position: absolute;
		letter-spacing: theme('letterSpacing.widest');
		left: 2.25rem;
		top: 3rem;
	}

	@media (min-width: theme('screens.xl')) {
		.card-number {
			font-size: theme('fontSize.2xl');
			left: 3rem;
			top: 6rem;
		}
	}

	@media (min-width: 90rem) {
		.card-number {
			top: 7rem;
		}
	}
</style>
