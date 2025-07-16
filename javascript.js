// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.list');
    const indicator = document.querySelector('.indicator');
    
    // Colors for each menu item
    const colors = [
        'linear-gradient(45deg, #ff00cc, #333399)',
        'linear-gradient(45deg, #00b09b, #96c93d)',
        'linear-gradient(45deg, #ff416c, #ff4b2b)',
        'linear-gradient(45deg, #654ea3, #da98b4)',
        'linear-gradient(45deg, #2193b0, #6dd5ed)'
    ];
    
    // Activate menu item and move indicator
    function activateMenuItem() {
        // Remove active class from all items
        listItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Get index of clicked item
        const index = this.dataset.index;
        
        // Move indicator
        indicator.style.transform = `translateX(${index * 70}px)`;
        
        // Change indicator color
        indicator.style.background = colors[index];
    }
    
    // Add click event to each menu item
    listItems.forEach(item => {
        item.addEventListener('click', activateMenuItem);
    });
    
    // Initialize indicator position
    indicator.style.transform = `translateX(0px)`;
    indicator.style.background = colors[0];
});