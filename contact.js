    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
    document.addEventListener('DOMContentLoaded', function() {
        const contactLink = document.querySelector('nav a[href="contact.html"]');
        contactLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('You are already on the Contact page!');
        });
    });

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }