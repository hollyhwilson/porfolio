<script> 
    import { asset } from '$app/paths';
    import { PhilosophyCard } from '$lib/components';
</script>

<svelte:head>
    <title>About Me</title>
</svelte:head>

<section class="hero">
  <div class="hero-text">
    <h1 class="about-heading">About Me</h1>

    <p class="subtitle">Interactive Digital Art & Design Student</p>

    <p>
      Hi! I'm Holly- a student studying Computing in Interactive Digital Art & Design in SETU Carlow.
      I've always had a passion for design and have spent most of my life learning about art,
      improving my skills and focusing on web design.
    </p>
  </div>

  <div class="hero-image">
    <img src="/images/about/profile.jpg" alt="me me me" />
  </div>
</section>

<section class="socials-section">
  <div class="socials-header">
    <h2>My Socials</h2>
    <p>Where you can find me online</p>
  </div>

  <div class="social-buttons">
    <a href="https://instagram.com/hollychive" target="_blank" rel="noreferrer" aria-label="Instagram">
      <svg viewBox="0 0 24 24" class="icon">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5zM18 6.8a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
      </svg>
      <span>Instagram</span>
    </a>

    <a href="https://github.com/hollyhwilson" target="_blank" rel="noreferrer" aria-label="GitHub">
      <svg viewBox="0 0 24 24" class="icon">
        <path d="M12 .5A11.5 11.5 0 0 0 0 12a11.6 11.6 0 0 0 7.9 11c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-1.7 1.9-2.2-2.5-.3-5.1-1.2-5.1-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .9a10 10 0 0 1 5.4 0c2.1-1.2 3-.9 3-.9.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.1-5.1 5.4.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.6 11.6 0 0 0 24 12 11.5 11.5 0 0 0 12 .5z"/>
      </svg>
      <span>GitHub</span>
    </a>

    <a href="https://linkedin.com/in/holly-helen-wilson" target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <svg viewBox="0 0 24 24" class="icon">
        <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.7zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.6V9h3.5v11.4z"/>
      </svg>
      <span>LinkedIn</span>
    </a>

    <a href="mailto:you@email.com" aria-label="Email">
      <svg viewBox="0 0 24 24" class="icon">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
      <span>Email</span>
    </a>
  </div>
</section>

<section class="skills">
    <h2>Tools & Skills</h2>

    <ul class="skills-list">
        <li>Svelte / SvelteKit</li>
        <li>JavaScript / TypeScript</li>
        <li>UI Design</li>
        <li>UI Prototyping</li>
        <li>Digital Art/ primarily IBIS Paintx</li>
        <li>Basic 3d work/ Maya</li>
        <li>HTML / CSS Systems</li>
        <li>Photoshop</li>
        <li>Aseprite</li>
    </ul>
</section>

<style>
    .subtitle {
      display: inline-block;

      padding: 0.4rem 0.75rem;

      border: 1px solid #7b5cff;
      border-radius: 999px;

      font-size: 0.7rem;
      letter-spacing: 2px;
      text-transform: uppercase;

      color: #cfc7ff;
      background: rgba(123, 92, 255, 0.08);

      width: fit-content;

      margin: 0 auto;

    align-self: center;
   }

    .about-heading {
        font-family: Impact, Anton, sans-serif;

        font-size: clamp(3rem, 6vw, 5rem);
        text-transform: uppercase;
        letter-spacing: 2px;

        color: #f2f2f2;
   
        text-align: center;

        margin: 4rem 0 0;
    }

    section {
        padding: var(--space-lg) var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
        animation: fadeIn 0.6s ease-in;
    }

    section h1 {
        font-family: var(--font-heading);
        font-size: var(--font-xl);
        margin-bottom: var(--space-sm);
        text-align: center;
        position: relative;
    }

   .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
      max-width: 1000px;
      margin: 6rem auto 4rem;
      padding: 2rem;

      transition: all 0.3s ease;
    }
    
   .hero-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      align-items: center;
      text-align: center;

      max-width: 55ch;
      transition: transform 0.25s ease;
    }

   .hero-text p {
     width: 100%;
    }

   .hero-text:hover {
     transform: translateY(-3px);
    }

    .hero-image {
      flex: 0.8;
      display: flex;
      justify-content: center;
    }

   .hero-image img {
      width: 100%;
      max-width: 320px;

      border-radius: 16px;
      border: 1px solid #7b5cff;

      object-fit: cover;

      box-shadow: 0 10px 30px rgba(0,0,0,0.4);

      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }

   .hero-image img:hover {
      transform: translateY(-6px) scale(1.02);
      border-color: #9a7bff;
      box-shadow: 0 18px 45px rgba(123, 92, 255, 0.25);
    }

  .socials-section {
  max-width: 1000px;
  margin: 3rem auto 6rem;
  padding: 2rem;

  border-radius: 16px;
  border: 1px solid #1d1728;
  background: rgba(0,0,0,0.2);

  text-align: center;
}

.socials-header {
  text-align: center;
  margin-bottom: 1.5rem;

  
}

.socials-header h2 {
  font-family: 'Space Grotesk', sans-serif; /* matches your skills */
  font-size: 0.75rem;
 display: inline-block;

      padding: 0.4rem 0.75rem;

      border: 1px solid #7b5cff;
      border-radius: 999px;

      font-size: 0.7rem;
      letter-spacing: 2px;
      text-transform: uppercase;

      color: #cfc7ff;
      background: rgba(123, 92, 255, 0.08);

      width: fit-content;

      margin: 0 auto;

    align-self: center;
}

.socials-header p {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 0.5rem;

  font-size: 0.85rem;
  color:#2a1f3d;

  letter-spacing: 0.2px;


}

.social-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 1.5rem;
}

.social-buttons a {
  display: flex;
  align-items: center;
  gap: 0.6rem;

  padding: 0.9rem 1.2rem;

  border-radius: 14px;
  border: 1px solid #241b33;
  background: rgba(255,255,255,0.03);

  text-decoration: none;

  color:#7857b2;
  font-size: 0.9rem;

  transition: all 0.25s ease;
}

.social-buttons a:hover {
  transform: translateY(-4px);
  border-color: #7b5cff;
  background: rgba(123, 92, 255, 0.12);
  color: #fff;
  box-shadow: 0 12px 30px rgba(123, 92, 255, 0.15);
}

.icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.social-buttons span {
  font-size: 0.9rem;
}
     
    .skills-list {
      list-style: none;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 0.75rem;

      max-width: 900px;
      margin: 0 auto;
      padding: 0;

    }

    .skills-list li {
      padding: 0.75rem 1rem;

      border: 1px solid #241b33;
      background: rgba(255,255,255,0.03);

      border-radius: 12px;

      font-size: 0.85rem;
      letter-spacing: 0.5px;

      color: rgba(255,255,255,0.85);

      transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
   }

   .skills-list li:hover {
      border-color: #7b5cff;
      background: rgba(123, 92, 255, 0.08);

      transform: translateY(-3px);
   }

   .skills h2 {
      font-family: 'Space Grotesk', sans-serif;

      font-size: 0.75rem;
      letter-spacing: 4px;
      text-transform: uppercase;

      color: #8f7cff;

      text-align: center;

      margin-bottom: 2rem;
   }

   .skills {
    max-width: 1000px;
    margin: 0 auto 5rem;

    padding: 2rem 1.5rem;

    border: 1px solid #1d1728;
    background: rgba(0,0,0,0.2);

    border-radius: 16px;
   }
   
    /* Animations */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
   
    @media (hover: hover) {
    .skills-list li:hover {
        border-color: #7b5cff;
        background: rgba(123, 92, 255, 0.08);
        transform: translateY(-3px);
      }
    }

    @media (max-width: 768px) 
  {
    .skills {
       padding: 1.5rem 1rem;
    }

    .skills-list {
       grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
        }

    .skills-list li {
          font-size: 0.8rem;
          padding: 0.85rem;
        } 
    .hero {
          flex-direction: column;
          text-align: center;
        }

    .hero-image img {
          max-width: 220px;
        }

    section h1 {
            font-size: var(--font-lg);
        }
    }
</style>