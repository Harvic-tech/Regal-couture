document.addEventListener("DOMContentLoaded", () => {

    // --- Intersection Observer for Fade-in Animation ---
    
    // Select all sections we want to animate
    const sections = document.querySelectorAll('.content-section');

    // Set up the options for the observer
    const options = {
        root: null, // observes intersections relative to the viewport
        threshold: 0.1, // triggers when 10% of the element is visible
        rootMargin: "0px"
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the section is intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS transition
                entry.target.classList.add('visible');
                
                // Stop observing this element after it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Tell the observer to watch each section
    sections.forEach(section => {
        observer.observe(section);
    });

});