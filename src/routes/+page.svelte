<script>
	import Form from '$lib/Form.svelte';
	import Images from '$lib/Images.svelte';
</script>

<svelte:head>
	<title>Frontend Mentor | Interactive card details form</title>
	<meta name="description" content="Interactive form demo app" />
</svelte:head>

<section class="App">
	<section class="hero">
		<Images />
	</section>
	<section class="main">
		<Form />
	</section>
</section>

<style>
	.App {
		display: flex;
		flex-direction: column;
		gap: theme('gap.20');
		max-width: 90rem;
	}

	@media (min-width: theme('screens.xl')) {
		.App {
			flex-direction: row;
		}

		.hero {
			flex-basis: 35%;
		}

		.main {
			display: grid;
			place-content: center;
			margin-inline: auto;
		}
	}
</style>
