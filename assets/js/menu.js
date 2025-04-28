(function($) {
    // Menu toggle functionality
    $(document).ready(function() {
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (menuToggle && navMenu) {
            // Toggle menu on button click
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            $(document).on('click', function(event) {
                if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                    navMenu.classList.remove('active');
                }
            });

            // Close menu when clicking on a link (better mobile experience)
            $(navMenu).find('a').on('click', function() {
                navMenu.classList.remove('active');
            });
        }
    });
})(jQuery);