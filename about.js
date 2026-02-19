    document.addEventListener('DOMContentLoaded', function() {
        const aboutLink = document.querySelector('nav a[href="about.html"]');
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('You are already on the About page!');
        });
    });

    