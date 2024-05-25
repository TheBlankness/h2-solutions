<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import Chat from '$lib/components/Chat.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Mobile from '$lib/components/Mobile.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import HeroCards from '$lib/components/HeroCards.svelte';
	import Links from '$lib/components/Links.svelte';
	import Countdown from '$lib/components/Countdown.svelte';
	import Drawer from '$lib/components/Drawer.svelte';
	import Card from '$lib/components/Card.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Tagline from '$lib/components/tagline.svelte';
</script>

<svelte:head>
	<title>H2 Solutions | Your Trusted Partner for Cutting-Edge Technology Solutions</title>
	<meta
		name="description"
		content="Welcome to H2 Solutions - Your Trusted Partner for Cutting-Edge Technology Solutions. Explore our range of services including web development, mobile app development, digital marketing, and IT consulting. Contact us today to elevate your business to new heights."
	/>
	<link rel="canonical" href="https://h2-solutions.lawcloud.page/" />
	<meta
		name="keywords"
		content="H2 Solutions, technology solutions, web development, mobile app development, digital marketing, IT consulting"
	/>
</svelte:head>

<div>
	<div class="">
		<div class="">
			<Hero />
		</div>
	</div>
	<div class="mt-20">
		<Tagline />
	</div>
	<div class="container mx-auto md:px-20">
		<div class="my-10">
			<HeroCards />
		</div>

		<div class="my-10">
			<Contact />
		</div>

		<!-- <div class="my-10">
			<Links />
		</div> -->
	</div>
</div>
