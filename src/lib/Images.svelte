<script>
	export let cvc = '000';
	export let month = '00';
	export let year = '00';
	export let cardHolder = 'Jane Appleseed';
	export let cardNumber = '0000 0000 0000 0000';
</script>

<section>
	<div class="img-container">
		<img class="back" src="/bg-card-back.png" alt="" />
		<span class="card-cvc">{cvc}</span>
	</div>

	<div class="img-container">
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

	section {
		position: relative;
		background-image: url('/bg-main-mobile.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 15rem;
	}

	@media (min-width: theme("screens.xl")) {
		section {
			background-image: url('/bg-main-desktop.png');
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

	.card-cvc {
		color: theme('colors.n-white');
		position: absolute;
		z-index: 1;
		right: 3.3rem;
		top: 6.3rem;
		font-size: 0.75rem;
		letter-spacing: theme('letterSpacing.widest');
	}

	.expiry {
		color: theme('colors.n-white');
		position: absolute;
		top: 5.25rem;
		left: 15rem;
		font-size: 0.75rem;
		letter-spacing: theme('letterSpacing.widest');
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

	.card-number {
		color: theme('colors.n-white');
		position: absolute;
    letter-spacing: theme("letterSpacing.widest");
    left: 2.25rem;
    top: 3rem;
	}
</style>
