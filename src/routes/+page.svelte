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
        <h1 class="hero-title"> Holly</h1>
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

        align-items: center;

        padding-top: 4rem;

        background: #0b0a10;
        background-image:
        radial-gradient(circle at 20% 30%, rgba(123,92,255,0.15) 0, transparent 25%),
        radial-gradient(circle at 80% 70%, rgba(255,0,140,0.08) 0, transparent 20%);
        color: #f2f2f2;

        text-align: center;
    }

    .home::after {
    content: "";

    position: fixed;
    inset: 0;

    background:
      repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.03) 0px,
        rgba(255,255,255,0.03) 1px,
        transparent 1px,
        transparent 3px
      );

    mix-blend-mode: soft-light;

    opacity: 0.25;

    pointer-events: none;
}

    .hero-title {
    font-family: Impact, Anton, sans-serif;

        font-size: clamp(11rem, 14vw, 13rem);
        text-transform: uppercase;
        letter-spacing: 2px;

        color: #f2f2f2;
        
        text-align: center;

        margin: 4rem 0 0;
}

.hero {
    position: relative;
}

.hero::before,
.hero::after {
    content: "";

    position: absolute;

    width: 60px;
    height: 60px;

    border: 1px solid rgba(123,92,255,0.5);
}

.hero::before {
    top: 30px;
    left: -300px;

    border-right: none;
    border-bottom: none;
}

.hero::after {
    bottom: -20px;
    right: -300px;

    border-left: none;
    border-top: none;
}

    .links {
        margin-top: 5rem;

        display: flex;
        
        gap: 1rem;
    }

    .links a {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: 6px;
    
    position: relative;

    padding: 1rem 1.4rem;

    border: 1px solid #7b5cff;

    background:
      linear-gradient(
        135deg,
        rgba(123,92,255,0.15),
        rgba(0,0,0,0.45)
      );

    color: #d7d0ff;

    text-transform: uppercase;
    letter-spacing: 3px;

    font-size: 0.75rem;

    overflow: hidden;

    box-shadow:
      inset 0 0 12px rgba(123,92,255,0.15),
      0 0 18px rgba(123,92,255,0.15);

    transition: all 0.25s ease;
}

  .links a:hover {
    transform: translateY(-4px);

    color: white;

    border-color: #c7b7ff;

    box-shadow:
      0 0 30px rgba(123,92,255,0.35),
      inset 0 0 18px rgba(123,92,255,0.2);
}

    @keyframes flicker {
    0%, 100% {
        opacity: 1;
    }

    3% {
        opacity: 0.92;
    }

    6% {
        opacity: 1;
    }

    7% {
        opacity: 0.96;
    }
}
</style>