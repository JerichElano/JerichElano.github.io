window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Wait for one cycle of the looped GIF (adjust to actual GIF cycle duration in milliseconds)
    const gifDuration = 4000; // Placeholder: 3 seconds
    setTimeout(() => {
        mainContent.style.display = 'flex'; // Show main content
        loadingScreen.style.transform = 'translateY(-100%)'; // Slide up
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Hide after transition
        }, 500); // Match CSS transition duration
    }, gifDuration);

    // Custom cursor logic
    const customCursor = document.querySelector('.custom-cursor');
    const hoverElements = document.querySelectorAll('.btn, .socials-container a');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.style.display = 'none'; // Hide custom cursor on hover
        });

        element.addEventListener('mouseleave', () => {
            customCursor.style.display = 'block'; // Show custom cursor when leaving
        });
    });

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX - 16}px`; // Offset to center 32x32 image
        customCursor.style.top = `${e.clientY - 16}px`;
    });
});