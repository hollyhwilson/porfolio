<script>
    import { catalogue } from '$lib/stores';
    import { CatalogueCard } from '$lib/components';
    import { resolve } from '$app/paths';
    import { goto } from '$app/navigation';

	$: personalWork = $catalogue.filter(
         item => item.category === 'personal'
	);

	$: collegeWork = $catalogue.filter(
         item => item.category === 'college'
	);

	
</script>


<svelte:head>
    <title>My Work | Holly Wilson</title>
</svelte:head>


<section class="catalogue-wrapper">

    <h1 class="catalogue-heading">
        My Work
    </h1>

    <!-- PERSONAL -->
    <section class="work-section">

        <h2>Personal Work</h2>

        <div class="grid">
            {#each personalWork as item}
                <button
                  type="button"
                  class="work-item"
                  on:click={() =>
        goto(resolve('/catalogue/[title]', {
            title: item.title
        }))
     }
>
     {#if item.images}
     <div class="image-duo">
         <img src={item.images[0]} alt="" />
         <img src={item.images[1]} alt="" />
     </div>
     {:else}
     <img src={item.image} alt={item.title ?? ''} />
     {/if}

                <div class="overlay">
                    <p>{item.title}</p>
                   </div>
                </button>
            {/each}
        </div>

    </section>
</section>

    <!-- COLLEGE -->
   <section class="work-section">

    <h2>Projects</h2>

     <div class="project-list">

        {#each collegeWork as item}

            <a
                class="project-item"
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div>
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                </div>

                <span>↗</span>

            </a>

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

		margin: 4rem 0 5rem;

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

	.work-section {
    margin-bottom: 5rem;
}
    .work-section h2 {
        font-family: 'Space Grotesk', sans-serif;

        font-size: 0.75rem;

        letter-spacing: 4px;
        text-transform: uppercase;

        color: #8f7cff;
        margin-bottom: 1.5rem;

        padding-left: 1.5rem;

		border-left: 2px solid #7b5cff;
        padding-left: 0.8rem;
}

.work-item {
    position: relative;

    background: none;
    border: none;

    padding: 0;

    cursor: pointer;

    overflow: hidden;

    border: 1px solid #1d1728;

    transition:
        transform 0.2s ease,
        border-color 0.2s ease;
}

.work-item img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    aspect-ratio: 4 / 5;

    filter: brightness(0.92);
}

.work-item:hover {
    transform: translateY(-4px);

    border-color: #7b5cff;
}

.overlay {
    position: absolute;

    bottom: 0;
    left: 0;
    right: 0;

    padding: 0.8rem;

    background: linear-gradient(
        to top,
        rgba(0,0,0,0.85),
        transparent
    );

    opacity: 0;

    transition: opacity 0.2s ease;
}

.work-item:hover .overlay {
    opacity: 1;
}

.overlay p {
    margin: 0;

    font-size: 0.75rem;

    letter-spacing: 2px;
    text-transform: uppercase;

    color: #f2f2f2;
}

.project-list {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    max-width: 900px;

    margin: 0 auto;

    padding: 0 1.5rem;
}

.project-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.2rem;

    border: 1px solid #241b33;

    background: rgba(255,255,255,0.02);

    text-decoration: none;

    color: #f2f2f2;

    transition:
        border-color 0.2s ease,
        transform 0.2s ease,
        background 0.2s ease;
}

.project-item:hover {
    border-color: #7b5cff;

    background: rgba(123,92,255,0.06);

    transform: translateX(4px);
}

.project-item h3 {
    margin: 0 0 0.35rem;

    font-size: 1rem;

    letter-spacing: 1px;

    text-transform: uppercase;
}

.project-item p {
    margin: 0;

    font-size: 0.9rem;

    color: rgba(255,255,255,0.6);

    max-width: 60ch;
}

.project-item span {
    font-size: 1.4rem;

    color: #7b5cff;
}

    @media (max-width: 640px) {
        .grid {
            display: flex;
            flex-direction: column;
            gap: var(--space-lg);
        }
    }
</style>
