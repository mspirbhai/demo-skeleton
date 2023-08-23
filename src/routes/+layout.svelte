<script>
	import '../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"
					><img class="max-h-24 min-h-10 px-2" src="website -2-.png" alt="kipimo logo" /></a
				>
				<div class="grid text-primary-500">
					<div class="text-3xl uppercase">Kipimo Solutions</div>
					<div class="text-lg uppercase">Rooted in Impact</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if $page.route.id === '/about'}<a class="btn btn-sm variant-filled-primary" href="/about">
						About
					</a>
				{:else}
					<a class="btn btn-sm variant-ghost-surface" href="/about"> About </a>
				{/if}

				{#if $page.route.id === '/pricing'}<a
						class="btn btn-sm variant-filled-primary"
						href="/pricing"
					>
						Pricing
					</a>
				{:else}
					<a class="btn btn-sm variant-ghost-surface" href="/pricing"> Pricing </a>
				{/if}
				{#if $page.route.id === '/contact'}<a
						class="btn btn-sm variant-filled-primary"
						href="/contact"
					>
						Contact
					</a>
				{:else}
					<a class="btn btn-sm variant-ghost-surface" href="/contact"> Contact </a>
				{/if}
				{#if $page.route.id === '/healthcheck'}<a
						class="btn btn-sm variant-filled-primary"
						href="/healthcheck"
					>
						Healthcheck
					</a>
				{:else}
					<a class="btn btn-sm variant-ghost-surface" href="/healthcheck"> Healthcheck </a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
