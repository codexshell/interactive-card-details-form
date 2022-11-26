<script>
	export let cvc = '000';
	export let month = '00';
	export let year = '00';
	export let cardHolder = 'Jane Appleseed';
	export let cardNumber = '0000 0000 0000 0000';
</script>

<section class="relative">
	<div class="img-container | back-img-container">
		<img class="back" src="/bg-card-back.png" alt="" />
		<span class="card-cvc">{cvc}</span>
	</div>

	<div class="img-container | front-img-container">
		<span class="logo-svg"><img src="/card-logo.svg" alt="" /></span>
		<img class="front" src="/bg-card-front.png" alt="" />
		<span class="card-number">{cardNumber}</span>
		<span class="card-holder">{cardHolder}</span>
		<span class="expiry">{month}/{year}</span>
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

	@media (min-width: theme('screens.xl')) {
		section {
			background-image: url('/bg-main-desktop.png');
			height: 100vh;
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
			top: 8.75rem;
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
			font-size: theme('fontSize.base');
			top: 10.5rem;
			left: 24rem;
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
			font-size: theme('fontSize.base');
			left: 3rem;
			top: 10.5rem;
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
			font-size: theme('fontSize.3xl');
			left: 3rem;
			top: 7rem;
		}
	}
</style>
