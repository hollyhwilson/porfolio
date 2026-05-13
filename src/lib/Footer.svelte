<footer class="footer">
    <p>&copy; 2026 Holly Wilson. Web portfolio site.</p>
</footer>


<style>
    .footer {
        width: 100%;
        padding: var(--space-md);
        text-align: center;
        font-family: var(--font-body);
        font-size: var(--font-sm);
        color: #2a1f3d;
        background-color: var(--color-background);
        border-top: var(--border-default);
        box-shadow: var(--shadow-sm);
        position: relative;
        z-index: 10;
        animation: fadeInFooter var(--transition-slow) ease-in-out;
    }
    

    .footer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        width: 100%;
        animation: gradientScroll 6s linear infinite;
    }

    @keyframes fadeInFooter {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gradientScroll {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }

    @media (max-width: 768px) {
        .footer {
            padding: var(--space-sm);
            font-size: var(--font-xs);
        }
    }
</style>
