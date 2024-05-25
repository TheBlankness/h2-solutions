<script>
	import Boostefi from '$lib/svgs/boostefi.svelte';
	import Customsvg from '$lib/svgs/customsvg.svelte';
	import Ideasvg from '$lib/svgs/ideasvg.svelte';
	import Arrowboostup from '$lib/svgs/Arrowboostup.svelte';
	import Citysvg from '$lib/svgs/citysvg.svelte';
	import Networksvg from '$lib/svgs/networksvg.svelte';
</script>

<div class="text-center pt-16 pb-11">
	<h1 class="text-5xl font-bold text-accent">Our Services</h1>
	<p class="text-md pt-3">Explore our services that can be the right solution</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-full bg-base-200 rounded-lg">
	<div class="card card-compact shadow-xl rounded-lg flex flex-col">
		<div class="card-body">
			<div class="w-full object-cover rounded-lg flex flex-row justify-start">
				<div class="w-32">
					<Customsvg />
				</div>
			</div>
			<div class="text-center max-w-lg">
				<h1 class="text-3xl font-bold text-accent text-left">Website Development</h1>
				<p class="py-6 text-left">
					Elevate your online presence with our bespoke website design and development solutions.
					From captivating designs to seamless functionality, we craft websites tailored to your
					brand identity and user experience goals.
				</p>
			</div>
		</div>
	</div>
	<div class="card card-compact shadow-xl rounded-lg flex flex-col">
		<div class="card-body">
			<div class=" w-full object-cover rounded-lg flex flex-col justify-center">
				<div class="w-32">
					<Networksvg />
				</div>
			</div>
			<div class="text-center max-w-lg">
				<h1 class="text-3xl font-bold text-accent text-left">Networking solutions</h1>
				<p class="py-6 text-left">
					Unlock the power of connectivity with our robust networking solutions. Whether you're a
					small business or a large enterprise, we design, implement, and manage networks that
					ensure reliable communication and seamless collaboration.
				</p>
			</div>
		</div>
	</div>
	<div class="card card-compact shadow-xl rounded-lg flex flex-col">
		<div class="card-body">
			<div class=" w-full object-cover rounded-lg flex flex-col justify-center">
				<div class="w-32">
					<Boostefi />
				</div>
			</div>
			<div class="text-center max-w-lg">
				<h1 class="text-3xl font-bold text-accent text-left">Workstation Setup</h1>
				<p class="py-6 text-left">
					Optimize productivity and efficiency with our workstation setup and support services. From
					PC installation to software configuration, we provide comprehensive solutions to keep your
					PCs running smoothly to ensure maximum productivity.
				</p>
			</div>
		</div>
	</div>
	<div class="card card-compact shadow-xl rounded-lg flex flex-col">
		<div class="card-body">
			<div class=" w-full object-cover rounded-lg flex flex-col justify-center">
				<div class="w-32">
					<Arrowboostup />
				</div>
			</div>
			<div class="text-center max-w-lg">
				<h1 class="text-3xl font-bold text-accent text-left">
					CCTV Installation<span class="text-base-100">__</span>
				</h1>
				<p class="py-6 text-left">
					Safeguard your premises and assets with our advanced CCTV installation services. Our
					tailored solutions offer comprehensive surveillance coverage, remote monitoring
					capabilities, and advanced analytics to enhance security and reliability
				</p>
			</div>
		</div>
	</div>
	<div class="card card-compact shadow-xl rounded-lg flex flex-col">
		<div class="card-body">
			<div class=" w-full object-cover rounded-lg flex flex-col justify-center">
				<div class="w-32">
					<Ideasvg />
				</div>
			</div>
			<div class="text-center max-w-lg">
				<h1 class="text-3xl font-bold text-accent text-left">Software Development</h1>
				<p class="py-6 text-left">
					Streamline your operations with our software deployment and support services. From
					implementation to ongoing maintenance, we ensure seamless integration and optimal
					performance of essential software applications.
				</p>
			</div>
		</div>
	</div>
	<div class="card card-compact shadow-xl rounded-lg flex flex-col">
		<div class="card-body">
			<div class=" w-full object-cover rounded-lg flex flex-col justify-center">
				<div class="w-32">
					<Citysvg />
				</div>
			</div>
			<div class="text-center max-w-lg">
				<h1 class="text-3xl font-bold text-accent text-left">Digital Transformation</h1>
				<p class="py-6 text-left">
					Embrace the future with our digital transformation solutions. We analyze your current
					processes and technologies, then implement innovative strategies to modernize your
					operations, enhance agility, and drive sustainable growth in the digital age.
				</p>
			</div>
		</div>
	</div>
</div>
