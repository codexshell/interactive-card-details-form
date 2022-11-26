<script>
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style>
	:global(body) {
		font-family: theme('fontFamily.space-grotesk');
		font-size: theme('fontSize.body-copy');
	}

	:global(html) {
		height: 100vh;
	}
</style>
