<script>
    // Bring in the navigation helper
    import { fade } from 'svelte/transition';
    import { resolve, asset } from '$app/paths';
	import { goto } from '$app/navigation';
	import { catalogue } from '$lib/stores';
	import { CatalogueCard } from '$lib/components';

    // `data` is automatically provided by the load function from +page.js
    export let data;

	/** @type {any[]} */
	let relatedItems = [];

	// Destructure item from the loaded data
	$: item = data.item; // reactive assignment ensures updates
	
	$: animationKey = `${item.title}-${relatedItems.map(i => i.title).join(',')}`;

	$: { // Look up related items
		const itemTags = new Set((item.tags || []).map(tag => tag.toLowerCase()));

		relatedItems = $catalogue.filter(other => 
		{ // Filter out the current item
			if (other.id === item.id) return false;
			// Check if they share the same category
			const sameCategory = other.category === item.category;
			// Check if they share any tags
			const otherTags = new Set((other.tags || []).map(tag => tag.toLowerCase()));
			const sharedTags = [...itemTags].some(tag => otherTags.has(tag));
			// Return true if they share the same category or any tags
			return sameCategory || sharedTags;
		}).slice(0, 3); // Show max 3 related
	}
</script>


<svelte:head>
	<title>{item.title} | My Work </title>
</svelte:head>


<section class="item-detail">
	<div class="detail-content">
		{#if item.type === 'image-duo' && item.images}
    <div class="image-duo">
        <img src={item.images[0]} alt={item.title} />
        <img src={item.images[1]} alt={item.title} />
    </div>
{:else}
    <img class="hero-image" src={item.image} alt={`Image for ${item.title}`} />
{/if}
		<h1>{item.title}</h1>
		<p class="category">{item.category}</p>
		<p class="description">{item.description}</p>

	</div>
</section>

{#if relatedItems.length > 0}
	<section class="related">
		<h2>Related Items</h2>
		{#key animationKey}
			<div class="related-grid">
				{#each relatedItems as item, index}
					<button
						type="button"
						class="card-button"
						on:click={() => goto(resolve('/catalogue/[title]', { title: item.title }))}
						aria-label={`View details for ${item.title}`}
					>
						<CatalogueCard
							title={item.title}
							description={item.description}
							image={item.image ?? item.images?.[0]}
							category={item.category}
							tags={item.tags}
                        	animationDelay={index * 100}
						/>
					</button>
				{/each}
			</div>
		{/key}
	</section>
{/if}


<style>
	.item-detail {
    position: relative;

    padding: 3rem 1.5rem;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    background: #0b0a10; /* solid base */

    color: #f2f2f2;
}
	
	.detail-content {
    max-width: 720px;
    width: 100%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

	.hero-image {
    width: 100%;
    max-height: 420px;

    object-fit: cover;

    border: 2px solid #2a1f3d;

    border-radius: 0px; /* important: remove softness */
}

.image-duo {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 1rem;
}

.image-duo img {
    width: 100%;

    height: 100%;

    object-fit: cover;

    border: 2px solid #2a1f3d;
}

	.detail-content h1 {
    margin: 0;

    font-family: 'Anton', sans-serif;

    font-size: clamp(2rem, 4vw, 3rem);

    letter-spacing: 2px;
    text-transform: uppercase;

    color: #ffffff;
}

	.category {
		margin: 0;

		font-size: 0.75rem;

		letter-spacing: 2px;
		text-transform: uppercase;

		color: rgba(185, 167, 255, 0.55);
	}

	.description {
		margin: 0; /* Remove extra margins */
		line-height: 1.65;
	}

	/* Related Section */
	.related {
		margin-top: var(--space-xl);
		padding: var(--space-lg) var(--space-md);
		background-image: url('/images/backgrounds/rice-texture.png');
        background-size: 800px;
        background-repeat: repeat;
        background-color: rgba(255, 255, 255, 0.85);
	}

	.related h2 {
		margin-top: 0;
		margin-bottom: var(--space-md);
		font-family: var(--font-heading);
		font-size: var(--font-xl);
		text-align: center;
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-lg);
		justify-items: center;
	}

	

	/* Mobile adjustments */
	@media (max-width: 768px) {
		.item-detail {
			padding: var(--space-md) var(--space-sm);
		}

		.detail-content {
			padding: var(--space-sm);
			gap: var(--space-sm);
		}

		.hero-image {
			max-height: 250px;
			margin-bottom: var(--space-sm);
		}

		.related {
			padding: var(--space-md) var(--space-sm);
		}
	}

</style>