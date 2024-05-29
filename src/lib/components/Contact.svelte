<script lang="ts">
	import { enhance } from '$app/forms';

	let name = '';
	let email = '';
	let phone = '';
	let message = '';
</script>

<div id="contact" class="text-center pt-16 pb-11">
	<h1 class="text-5xl font-bold text-accent">Contact Us</h1>
	<p class="text-md pt-3">Feel free to ask us a question</p>
</div>
<section class="flex flex-col md:flex-row gap-6 p-6">
	<div
		class="flex flex-col justify-center items-start p-6 bg-base-200 rounded-lg shadow-md md:w-1/2"
	>
		<a class="flex items-center mb-4 cursor-pointer" href="mailto:hazimreidzuan@gmail.com">
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
			>
				<rect width="20" height="16" x="2" y="4" rx="2" />
				<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
			</svg>
			<p class="ml-4 text-lg break-all">hazimreidzuan@gmail.com</p>
		</a>
		<a class="flex items-center cursor-pointer" href="https://wa.me/60129182160" target="_blank">
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
			>
				<path
					d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
				/>
			</svg>
			<p class="ml-4 text-lg">+60 12-918 2160</p>
		</a>
	</div>
	<div class="flex flex-col justify-center items-start p-6 bg-white rounded-lg shadow-md md:w-1/2">
		<form
			method="POST"
			action="?/sendmessage"
			class="w-full space-y-4"
			use:enhance={() => {
				return async ({ result }) => {
					// `result` is an `ActionResult` object
					if (result.type === 'success') {
						alert('Message Sent');
						name = '';
						email = '';
						phone = '';
						message = '';
					} else {
						alert('Try again');
					}
				};
			}}
		>
			<div>
				<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
				<input
					type="text"
					name="name"
					bind:value={name}
					class="input input-bordered w-full"
					required
				/>
			</div>
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
				<input type="email" name="email" bind:value={email} class="input input-bordered w-full" />
			</div>
			<div>
				<label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
				<input type="text" name="phone" bind:value={phone} class="input input-bordered w-full" />
			</div>
			<div>
				<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
				<textarea
					name="message"
					bind:value={message}
					class="textarea textarea-bordered w-full"
					required
				/>
			</div>
			<button type="submit" class="btn btn-primary">Send</button>
		</form>
	</div>
</section>
