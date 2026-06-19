document.addEventListener('DOMContentLoaded', () => {
    // --- Favicon Logic ---
    const favicon = document.getElementById('favicon');
    
    function updateFavicon() {
        if (document.documentElement.classList.contains('dark')) {
            favicon.href = "../resources/images/siteIcon.png";
        } else {
            favicon.href = "../resources/images/siteIconLight.png";
        }
    }

    // --- Existing Logic ---
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, i * 120);
    });

    const tiles = document.querySelectorAll('.scrabble-rack .tile');
    tiles.forEach((tile, i) => {
        tile.style.setProperty('--delay', (i * 120) + 'ms');
        tile.addEventListener('click', () => {
            const href = tile.dataset.href;
            if (href) location.href = href;
        });
    });

    // Dark mode toggle
    const toggle = document.getElementById('dark-toggle');
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');
    
    if (saved === 'dark') {
        root.classList.add('dark');
        toggle.checked = true;
    }
    
    // Initialize favicon on load
    updateFavicon();

    toggle.addEventListener('change', () => {
        root.classList.toggle('dark');
        localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
        updateFavicon();
    });
});