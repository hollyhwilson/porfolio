<script>
    import { asset } from '$app/paths';

    export let title;
    export let description;
    export let icon = "";
    export let theme = 'default';
</script>


<div class="philosophy-card {theme}" aria-label={`Principle: ${title}`}>
    <div class="card-face front">
        {#if icon !== ""}
            <div class="image-wrapper">
                <img src={asset(icon)} alt={`Icon for ${title}`} />
            </div>
        {/if}
        <h3>{title}</h3>
    </div>
    <div class="card-face back">
        <p>{description}</p>
    </div>
</div>


<style>

    .front {
        z-index: 2;
        transform: rotateY(0deg);
    }

    .back {
        transform: rotateY(180deg);
        z-index: 1;
        background: var(--color-background);
        color: var(--text-secondary);
        font-style: italic;
        font-size: var(--font-sm);
        line-height: 1.5;
    }

    .philosophy-card:hover .front {
        transform: rotateY(-180deg);
    }

    .philosophy-card:hover .back {
        transform: rotateY(0deg);
    }

    .image-wrapper {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--space-sm);
        overflow: hidden;
    }

    .image-wrapper img {
        max-width: 80%;
        max-height: 100%;
        object-fit: contain;
    }

    /* Optional Theming */
    .philosophy-card.shinobi {
        border: 2px solid var(--color-secondary);
    }

    .philosophy-card.bushido {
        border: 2px solid var(--color-accent);
    }

    @media (max-width: 480px) {
        
    }
</style>
