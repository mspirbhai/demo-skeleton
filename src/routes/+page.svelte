<script>
	/**
	 * @type {any}
	 */
	let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div
	class="h-[550px] bg-cover bg-center relative"
	style="background-image: url('Jacaranda Road.jpg')"
>
	<div class="w-full h-full flex justify-center items-center backdrop-brightness-75" />
	<div class="absolute top-0 text-center px-5 py-10 w-full">
		<h1 class="text-white leading-loose font-semibold text-3xl md:p-5">
			TAKE THE NEXT STEP ON YOUR PATH TO IMPROVED MONITORING, EVALUATION AND LEARNING
		</h1>
		<br />
		<p class="text-white tracking-wider leading-loose text-lg md:p-5">
			From creating a Theory of Change and MEL frameworks, to configuring and integrating ICT
			systems, our team of experts will guide you along the way...
		</p>
		<br />
		<div class="md:p-5">
			<a class="btn btn-lg bg-white hover:bg-primary-700 hover:text-white" href="/healthcheck">
				Healthcheck
			</a>
		</div>
	</div>
	{#if screenWidth > 1000}
		<div class="flex flex-row flex-1 p-10 gap-10">
			<div class="basis-1/2 text-center px-5 py-10 w-full">
				<h1 class="text-black leading-loose font-semibold text-3xl md:p-5">
					International Expertise based in East Africa
				</h1>

				<p class="text-primary-500 tracking-wider leading-loose text-2xl md:p-5">
					Our team of experts care about making programs more impactful for the communities you
					serve...
				</p>

				<div class="md:p-5">
					<a
						class="btn btn-lg variant-filled-tertiary hover:bg-primary-700 text-white"
						href="/about"
					>
						MEET THE TEAM
					</a>
				</div>
			</div>
			<div class="basis-1/4 text-center">
				<img src="ICT Support Website.jpg" alt="Two ladies working on a computer" />
				<h1 class="text-black leading-loose font-semibold text-2xl md:p-5">Fixed Packages</h1>
				<p class="text-primary-500 tracking-wider leading-loose text-lg">
					Try one of our easy standard solutions to help you on your way
				</p>
			</div>

			<div class="basis-1/4 text-center">
				<img src="Jacaranda Tree.jpg" alt="Jacaranda Tree" />
				<h1 class="text-black leading-loose font-semibold text-2xl md:p-5">Ongoing Support</h1>
				<p class="text-primary-500 tracking-wider leading-loose text-lg">
					Get ongoing support from our Swahili speaking team
				</p>
			</div>
			<div class="basis-1/4 text-center">
				<img src="Consultants.jpg" alt="Consultants" />
				<h1 class="text-black leading-loose font-semibold text-2xl md:p-5">Bespoke Projects</h1>
				<p class="text-primary-500 tracking-wider leading-loose text-lg">
					Consult us to build advanced systems and workflows
				</p>
			</div>
		</div>
	{:else}
		<div class="text-center px-5 py-10 w-screen">
			<h1 class="text-black leading-loose font-semibold text-3xl md:p-5">
				International Expertise based in East Africa
			</h1>

			<p class="text-primary-500 tracking-wider leading-loose text-2xl md:p-5">
				Our team of experts care about making programs more impactful for the communities you
				serve...
			</p>

			<div class="md:p-5">
				<a class="btn btn-lg variant-filled-tertiary hover:bg-primary-700 text-white" href="/about">
					MEET THE TEAM
				</a>
			</div>
		</div>
		<div class="text-center">
			<img
				class="mx-auto w-[600px] p-2"
				src="ICT Support Website.jpg"
				alt="Two ladies working on a computer"
			/>
			<h1 class="text-black leading-loose font-semibold text-2xl">Fixed Packages</h1>
			<p class="text-primary-500 tracking-wider leading-loose text-lg p-2">
				Try one of our easy standard solutions to help you on your way
			</p>
		</div>

		<div class="text-center">
			<img class="mx-auto w-[600px] p-2" src="Jacaranda Tree.jpg" alt="Jacaranda Tree" />
			<h1 class="text-black leading-loose font-semibold text-2xl">Ongoing Support</h1>
			<p class="text-primary-500 tracking-wider leading-loose text-lg p-2">
				Get ongoing support from our Swahili speaking team
			</p>
		</div>
		<div class="text-center">
			<img class="mx-auto w-[600px] p-2" src="Consultants.jpg" alt="Consultants" />
			<h1 class="text-black leading-loose font-semibold text-2xl">Bespoke Projects</h1>
			<p class="text-primary-500 tracking-wider leading-loose text-lg p-2">
				Consult us to build advanced systems and workflows
			</p>
		</div>
	{/if}
</div>
