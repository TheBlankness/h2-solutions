<script>
	import videoSrc from './h2vid.mp4';
</script>

<div class="hero h-[100vh] lg:h-[45rem] relative">
	<!-- Video Loop -->
	<video autoplay loop muted class="absolute inset-0 w-full h-full object-cover z-0">
		<source src={videoSrc} type="video/mp4" />
		<!-- Add additional source elements for different video formats if needed -->
		Your browser does not support the video tag.
	</video>

	<!-- Overlay -->
	<div class="absolute inset-0 bg-black opacity-90 z-10" />

	<!-- Hero Content -->
	<div class="hero-content text-neutral-content relative z-20">
		<div class="z-60 drop-shadow-lg text-center">
			<div class="mb-5 text-6xl font-semibold">H2 Solutions</div>
			<div class="mb-10 max-w-lg text-xl text-justify">
				Transform your business with H2 Solutions. We provide affordable, innovative digital
				solutions tailored to meet your unique needs and address your business challenges.
			</div>
			<div class="flex gap-4 justify-between">
				<button class="btn btn-primary transition-color duration-300 text-lg">Learn More</button>
				<button class="btn btn-primary transition-color duration-300 text-lg">Get Started</button>
			</div>
		</div>
	</div>
</div>
