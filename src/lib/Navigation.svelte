<script>
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
    

    const navigationItems = [
        { name: 'Home', path: '/' },
        { name: 'Catalogue', path: '/catalogue' },
        { name: 'About', path: '/about' }
    ];

    let isOpen = false;

    function hideMenu() {
        isOpen = false;
    }
</script>


<nav class="nav" aria-label="Main navigation">
    <button
        class="burger"
        on:click={() => (isOpen = !isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="main-menu"
    >
        ☰
    </button>

    <ul id="main-menu" class:open={isOpen}>
        {#each navigationItems as item}
            <li class="nav-item">
                <a 
                    href={resolve(item.path)}
                    class:active={page.url.pathname === resolve(item.path)}
                    on:click={hideMenu}
                >{item.name}</a>
            </li>
        {/each}
    </ul>
</nav>


<style>
    .nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        gap: var(--space-lg);
        animation: fadeIn var(--transition-slow);
    }

    .nav ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-item {
        animation: fadeUp 0.4s ease forwards;
    }

    .nav-item:nth-child(1) { animation-delay: 0.2s; }
    .nav-item:nth-child(2) { animation-delay: 0.4s; }
    .nav-item:nth-child(3) { animation-delay: 0.6s; }
    .nav-item:nth-child(4) { animation-delay: 0.8s; }

   .nav a {
    font-family: 'Space Grotesk', sans-serif;

    font-size: 0.85rem;
    font-weight: 600;

    letter-spacing: 1px;
    text-transform: uppercase;

    color: #eaeaea;

    background: transparent;

    border: none;

    padding: 0.3rem 0.5rem;

    transition: none;
}

.nav a:hover {
    color: #b9a7ff;
    text-decoration: underline;
}

.nav a.active {
    color: #ffffff;

    border-bottom: 1px solid #7b5cff;
}


    .burger {
        display: none;
        font-size: var(--font-xl);
        background: none;
        border: none;
        color: var(--text-primary);
        padding: var(--space-xs);
        cursor: pointer;
        margin-left: auto;
    }

    @media (max-width: 768px) {
        .nav {
            flex-direction: column;
            align-items: flex-start;
        }

        .nav ul {
            display: none;
            flex-direction: column;
            gap: var(--space-sm);
            margin-top: var(--space-sm);
        }

        .nav ul.open {
            display: flex;
        }

        .burger {
            display: block;
        }

        .nav li,
        .nav a {
            width: 100%;
        }

        .nav-item {
            transform: translateX(20px);
            animation: fadeLeft 0.4s ease forwards;
        }
    }

    @keyframes slideGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 100%; }
        100% { background-position: 0% 50%; }
    }

    @keyframes fadeUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeLeft {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
    }
</style>
