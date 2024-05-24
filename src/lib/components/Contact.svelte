<script>
	let name = '';
	let email = '';
	let message = '';

	async function handleSubmit() {
		const webhookUrl =
			'https://discord.com/api/webhooks/1243495041687752785/jY3LWLMGKrdwAeluYsMJ8N_3Y3y93ic0S85EVyMe0Mi5M5HzAm6pp8FT2E1dnbREYp6W';

		const payload = {
			content: `**New Contact Form Submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:**\n${message}`
		};

		await fetch(webhookUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		// Clear the form
		name = '';
		email = '';
		message = '';
	}
</script>

<div class="text-center pt-16 pb-11">
	<h1 class="text-5xl font-bold text-accent">Contact Us</h1>
	<p class="text-md pt-3">Feel free to ask us a question</p>
</div>
<section class="flex flex-col md:flex-row gap-6 p-6">
	<div
		class="flex flex-col justify-center items-start p-6 bg-base-200 rounded-lg shadow-md md:w-1/2"
	>
		<div class="flex items-center mb-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-mail"
				><rect width="20" height="16" x="2" y="4" rx="2" /><path
					d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
				/></svg
			>
			<p class="ml-4 text-lg">jim99hazim@gmail.com</p>
		</div>
		<div class="flex items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-phone"
				><path
					d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
				/></svg
			>
			<p class="ml-4 text-lg">+60 12-918 2160</p>
		</div>
	</div>
	<div class="flex flex-col justify-center items-start p-6 bg-white rounded-lg shadow-md md:w-1/2">
		<form on:submit|preventDefault={handleSubmit} class="w-full space-y-4">
			<div>
				<label class="block text-sm font-medium text-gray-700">Name</label>
				<input type="text" bind:value={name} class="input input-bordered w-full" required />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700">Email</label>
				<input type="text" bind:value={email} class="input input-bordered w-full" required />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700">Message</label>
				<textarea bind:value={message} class="textarea textarea-bordered w-full" required />
			</div>
			<button type="submit" class="btn btn-primary">Send</button>
		</form>
	</div>
</section>
