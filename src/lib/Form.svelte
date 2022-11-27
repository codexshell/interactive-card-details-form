<script>
	// cleavejs import for number formatting
	import { cleave } from 'svelte-cleavejs';
	import { handleKeyDown } from "$lib/form.js";

	let isValid = false;

	function handleFormSubmit() {
		// validate form and then change state
		//TODO: Add form validation logic
		isValid = true;
	}

	function handleFocus(e) {
		// add gradient class to parent element of input element
		e.target.parentElement.classList.add('gradient');
	}

	function handleBlur(e) {
		// remove gradient class from parent element of input element
		e.target.parentElement.classList.remove('gradient');
	}

	function hadndleContinueClick() {
		// render new copy of the form
		isValid = false;
	}
</script>

<!-- default state -->
{#if !isValid}
	<form novalidate autocomplete="off" class="flow" on:submit|preventDefault={handleFormSubmit}>
		<div class="wrapper">
			<label for="name">Cardholder Name</label>
			<div>
				<input
					on:focus={handleFocus}
					on:blur={handleBlur}
					id="name"
					type="text"
					placeholder="e.g. Jane Appleseed"
				/>
				<div class="relative">
				 <span class="error"></span>
				</div>
			</div>
		</div>

		<div>
			<label for="number">Card Number</label>
			<div>
				<input
					on:keydown={handleKeyDown}
					use:cleave={{
						creditCard: true
					}}
					autocomplete="off"
					on:focus={handleFocus}
					on:blur={handleBlur}
					id="number"
					type="text"
					placeholder="e.g. 1234 5678 9123 0000"
				/>
				<div>
					<span class="error"></span>
				</div>
			</div>
		</div>

		<div class="date-cvc">
			<div>
				<label for="exp">Exp. Date (MM/YY)</label>
				<div class="date">
					<div>
						<input
						on:keydown={handleKeyDown}
							use:cleave={{
								date: true,
								datePattern: ['m']
							}}
							autocomplete="off"
							on:focus={handleFocus}
							on:blur={handleBlur}
							id="exp"
							type="text"
							placeholder="MM"
						/>
					<div class="relative">
						<span class="error"></span>
					</div>
					</div>
					<div>
						<input
						on:keydown={handleKeyDown}
							use:cleave={{
								date: true,
								datePattern: ['y']
							}}
							autocomplete="off"
							on:focus={handleFocus}
							on:blur={handleBlur}
							type="text"
							placeholder="YY"
						/>
					<div class="relative">
						<span class="error"></span>
					</div>
					</div>
				</div>
			</div>

			<div>
				<label for="cvc">CVC</label>
				<div>
					<input
					on:keydown={handleKeyDown}
						use:cleave={{
							blocks: [3],
							numericOnly: true
						}}
						autocomplete="off"
						on:focus={handleFocus}
						on:blur={handleBlur}
						id="cvc"
						type="text"
						placeholder="e.g. 123"
					/>
					<div class="relative">
					  <span class="error"></span>
					</div>
				</div>
			</div>
		</div>
		<button type="submit">Confirm</button>
	</form>
{:else}
	<!-- completed state -->
	<div class="complete | flow">
		<img class="complete__icon" src="/icon-complete.svg" alt="" />
		<h2 class="complete__heading">Thank you!</h2>
		<p class="complete__copy">We've added your card details</p>
		<button on:click={hadndleContinueClick} class="complete__btn" type="button">Continue</button>
	</div>
{/if}

<style>
	form {
		text-transform: uppercase;
		padding-inline: theme('padding.6');
	}

	@media (min-width: theme('screens.sm')) {
		form {
			max-width: theme('maxWidth.md');
			font-size: theme('fontSize.xl');
			margin-inline: auto;
		}
	}

	label {
		font-size: theme('fontSize.xs');
		letter-spacing: 0.15rem;
		color: theme('colors.n-very-dark-violet');
		display: inline-block;
		margin-bottom: theme('margin[1.5]');
	}

	input {
		outline: 0.0625rem solid theme('colors.n-light-grayish-violet');
		border-radius: theme('borderRadius.md');
		padding: theme('padding.2');
		width: 100%;
		padding-left: theme('padding.4');
		position: relative;
		color: theme('colors.n-very-dark-violet');
	}

	input::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	input:focus {
		outline: 0.0625rem solid transparent;
	}

	:global(.gradient) {
		position: relative;
		border-radius: theme('borderRadius.md');
	}

	:global(.gradient::before) {
		content: '';
		position: absolute;
		inset: 0;
		background-image: linear-gradient(
			to right,
			theme('colors.linear-gradient-start'),
			theme('colors.linear-gradient-end')
		);
		border-radius: inherit;
		margin: -0.0625rem;
	}

	.date {
		display: flex;
		gap: theme('gap.3');
	}

	.date-cvc {
		display: flex;
		gap: theme('gap.3');
	}

	.date-cvc > * {
		flex-basis: 50%;
	}

	button {
		width: 100%;
		background-color: theme('colors.n-very-dark-violet');
		color: theme('colors.n-white');
		padding-block: theme('padding[3]');
		border-radius: theme('borderRadius.lg');
		--flow-space: theme('margin.12');
	}

	button:active {
		background-color: theme('colors.n-dark-grayish-violet');
	}

	.complete {
		text-align: center;
		padding-inline: theme('padding.6');
	}

	.complete__icon {
		margin-inline: auto;
	}

	.complete__heading {
		font-size: theme('fontSize.3xl');
		text-transform: uppercase;
		letter-spacing: theme('letterSpacing.widest');
		--flow-space: 1.75rem;
	}

	.complete__copy {
		color: theme('colors.n-dark-grayish-violet');
		--flow-space: 0.75rem;
	}

	.complete__btn {
		--flow-space: 3rem;
	}

	.error {
		color: red;
		text-transform: initial;
		font-style: italic;
		font-size: theme("fontSize.sm");
		position: absolute;
		inset: 0;
	}
</style>