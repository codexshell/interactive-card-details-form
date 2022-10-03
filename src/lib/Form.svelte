<script>
	let completed = false;

	function handleFormSubmit() {
		completed = !completed;
	}
</script>

<form on:submit|preventDefault={handleFormSubmit}>
	<!-- default state -->
	{#if !completed}
		<label for="name">Cardholder Name</label>
		<input id="name" type="text" placeholder="e.g. Jane Appleseed" />
		<label for="number">Card Number</label>
		<input id="number" type="text" placeholder="e.g. 1234 5678 9123 0000" />
		<label for="exp">Exp. Date (MM/YY)</label>
		<input id="exp" type="text" placeholder="MM" />
		<input type="text" placeholder="YY" />
		<label for="cvc">CVC</label>
		<input id="cvc" type="text" placeholder="e.g. 123" />
	{:else}
		<!-- completed state -->
		<h2>Thak you!</h2>
		<p>We've added your card details</p>
	{/if}
	<button type="submit">{completed ? 'Continue' : 'Confirm'}</button>
</form>
