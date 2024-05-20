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
</script>

<svelte:head>
	<title>Homepage | H2 Solutions</title>
</svelte:head>
<div>
	<div class="">
		<div class="">
			<Hero />
		</div>
	</div>
	<div class="container mx-auto">
		<Stats />
		<div class="my-10">
			<HeroCards />
		</div>

		<!-- <div class="my-10">
			<Mobile />
		</div> -->

		<div class="my-10">
			<Links />
		</div>
	</div>
</div>
