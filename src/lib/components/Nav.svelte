<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';
	import '$lib/app.css';

	const submitUpdateTheme: SubmitFunction = () => {
		const theme = 'black';

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};

	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];
</script>

<div class="bg-base-100 sticky top-0 shadow-lg z-40">
	<div class="flex items-center justify-between p-2 lg:container lg:mx-auto">
		<div class="">
			<a href="/" class="font-bold text-primary text-xl">H2 Solutions</a>
		</div>

		<div class="">
			<div class="dropdown dropdown-hover dropdown-end">
				<form method="POST" use:enhance={submitUpdateTheme}>
					<button class="btn btn-sm" formaction="/?/setTheme&redirectTo={$page.url.pathname}"
						>Contact Us</button
					>
				</form>
			</div>
		</div>
	</div>
</div>
