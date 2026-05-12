<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
    import { CatalogueCard, Modal } from '$lib/components';
    import { catalogue } from '$lib/stores/catalogueStore.js';
    import { currentQuote, setRandomQuote } from '$lib/stores/quoteStore.js';
    
    let showQuoteModal = false;

    /**
     * Select a few featured items — e.g., first 4 items
	 * @type {any[]}
	 */
    let featuredItems = [];

    $: $catalogue && (featuredItems = $catalogue.slice(0, 4));

    function openQuoteModal() {
        setRandomQuote();
        showQuoteModal = true;
    }
</script>

<svelte:head>
    <title>HOLLY WILSON</title>
</svelte:head>

<section class="home">
    <div class="hero">
        <h1>HOLLY WILSON</h1>
        <p>portfolio / design / experiments / code</p>
    </div>

    <div class="links">
        <a href="/catalogue">View Work</a>
        <a href="/about">About</a>
    </div>
</section>

<style>
    .home {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: #0b0a10;
        color: #f2f2f2;
        text-align: center;
    }

    .hero h1 {
        font-family: Impact, Anton, sans-serif;
        font-size: clamp(3rem, 6vw, 6rem);
        letter-spacing: 2px;
        text-transform: uppercase;
        border: 2px solid rgba(255,255,255,0.15);
        padding: 1rem 2rem;
        background: #0e0b14;
    }

    .hero p {
        margin-top: 1rem;
        letter-spacing: 3px;
        text-transform: uppercase;
        opacity: 0.7;
    }

    .links {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
    }

    .links a {
        padding: 0.6rem 1rem;
        border: 2px solid #2a1f3d;
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2px;
        background: #0e0b14;
    }

    .links a:hover {
        background: #1a1025;
        border-color: #7b5cff;
    }
</style>