<script>
  import Navigation from './Navigation.svelte';
  import { onMount } from 'svelte';

  let lastScrollY = 0;
  let hidden = false;

  onMount(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 80) {
        hidden = true; // scrolling down
      } else {
        hidden = false; // scrolling up
      }

      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class="header" class:hidden={hidden}>

    <div class="title-group">
        <h1>Holly</h1>
        <p class="status">web portfolio</p>
    </div>

    <Navigation />

</header>

<style>
.header {
    position: sticky;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;

    background: #0b0b0f;
    border-bottom: 2px solid #2a1f3d;

    transition: transform 0.25s ease, opacity 0.25s ease;
    z-index: 1000;

    backdrop-filter: blur(10px);
    background: rgba(11, 11, 15, 0.85);
}


.header.hidden {
    transform: translateY(-100%);
    opacity: 0;
}

.title-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.title-group h1 {
    margin: 0;

    font-family: 'Anton', sans-serif;
    font-size: 2rem;

    letter-spacing: 2px;
    text-transform: uppercase;

    color: #f2f2f2;

    background: #111114;
    border: 2px solid #3a2b55;

    padding: 0.25rem 0.75rem;

    display: inline-block;
}

.status {
    margin: 0;

    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;

    color: rgba(255,255,255,0.5);
}

/* MOBILE STACK */
@media (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }
}
</style>