window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Wait for one cycle of the looped GIF
    const gifDuration = 4000;
    setTimeout(() => {
        mainContent.style.display = 'flex';
        loadingScreen.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, gifDuration);

    // Custom cursor logic - only for non-touch devices
    const customCursor = document.querySelector('.custom-cursor');
    const hoverElements = document.querySelectorAll('.btn, .socials-container a');

    // Check if device has touch capability
    if (!('ontouchstart' in window)) {
        // Show cursor only for non-touch devices
        customCursor.style.display = 'block';

        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                customCursor.style.display = 'none';
            });

            element.addEventListener('mouseleave', () => {
                customCursor.style.display = 'block';
            });
        });

        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = `${e.clientX - 16}px`;
            customCursor.style.top = `${e.clientY - 16}px`;
        });
    } else {
        // Hide cursor for touch devices
        customCursor.style.display = 'none';
    }
});