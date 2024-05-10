document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('#projects .project a');
    
    projectLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Prevent default link behavior (page navigation)
        event.preventDefault();
        
        // Get the target URL from the project link
        const targetUrl = this.getAttribute('href');
        
        // Redirect to the project detail page
        window.location.href = targetUrl;
      });
    });
  });
  