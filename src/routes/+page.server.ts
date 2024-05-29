import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	sendmessage: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const phone = formData.get('phone');
		const message = formData.get('message');

		const webhookUrl =
			'https://discord.com/api/webhooks/1243495041687752785/jY3LWLMGKrdwAeluYsMJ8N_3Y3y93ic0S85EVyMe0Mi5M5HzAm6pp8FT2E1dnbREYp6W';

		const payload = {
			content: `**<@348100226432630784> New Contact Form Submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:**\n${message}\n**Phone:**\n${phone}`
		};

		await fetch(webhookUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		// Redirect or return a success message
		return {
			success: true
		};
	},
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme');
		const redirectTo = url.searchParams.get('redirectTo');

		if (theme) {
			cookies.set('colortheme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		throw redirect(303, redirectTo ?? '/');
	}
};
