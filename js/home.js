document.addEventListener('DOMContentLoaded', () => {
        // Animate project items on page load
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

        // Scrabble tiles
        const tiles = document.querySelectorAll('.scrabble-rack .tile');
        tiles.forEach((tile, i) => {
            tile.style.setProperty('--delay', (i * 120) + 'ms');
            tile.addEventListener('click', () => {
                const href = tile.dataset.href;
                if (href) location.href = href;
            });
            tile.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') tile.click();
            });
        });
    });