<script>
    import { catalogue } from '$lib/stores';
    import { CatalogueCard } from '$lib/components';
    import { resolve } from '$app/paths';
    import { goto } from '$app/navigation';
</script>


<svelte:head>
    <title>Catalogue | Starter Kit</title>
</svelte:head>


<section class="catalogue-wrapper">
	<div class="catalogue-heading-wrapper">
		<h1 class="catalogue-heading">Catalogue</h1>
	</div>

	

    <div class="grid">
		{#each $catalogue as item}
			<button
				type="button"
				class="card-button"
				on:click={() => goto(resolve('/catalogue/[title]', { title: item.title }))}
			>
				<CatalogueCard
					title={item.title}
					description={item.description}
					image={item.image}
					category={item.category}
					tags={item.tags}
				/>
			</button>
		{/each}
	</div>
</section>


<style>

    .catalogue-heading {
		font-family: Impact, Anton, sans-serif;

		font-size: clamp(3rem, 6vw, 5rem);

		text-transform: uppercase;
		letter-spacing: 2px;

		color: #f2f2f2;

		text-align: center;

		margin: 4rem 0 2rem;

		position: relative;
	}

   

    .grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

		gap: 2rem;

		padding: 2rem 1.5rem;

		max-width: 1200px;
		margin: 0 auto;
	}

   .catalogue-wrapper {
		min-height: 100vh;

		background: #0b0a10;

		color: #f2f2f2;
	}

	.catalogue-wrapper::before {
		content: "";
		position: fixed;
		inset: 0;

		background: repeating-linear-gradient(
			0deg,
			rgba(255,255,255,0.02),
			rgba(255,255,255,0.02) 1px,
			transparent 1px,
			transparent 2px
		);

		pointer-events: none;
		opacity: 0.15;
	}

    @media (max-width: 640px) {
        .grid {
            display: flex;
            flex-direction: column;
            gap: var(--space-lg);
        }
    }
</style>
