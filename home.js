function openForm() {
        document.getElementById("myForm").style.display = "block";
      }

       document.addEventListener('DOMContentLoaded', function() {
        const homeLink = document.querySelector('nav a[href="home.html"]');
        homeLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('You are already on the Home page!');
        });
    });
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }
    