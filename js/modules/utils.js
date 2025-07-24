// Module: utils

/**
 * Format a JavaScript Date object into a friendly string.
 * @param {Date} date - The date to format.
 * @returns {string} Formatted date string.
 */
export function formatDate(date) {
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Create a debounced version of a function that will postpone its execution
 * until after wait milliseconds have elapsed since the last time it was invoked.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {Function} Debounced function.
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Initialize the theme based on the stored preference. Defaults to light.
 */
export function initializeTheme() {
    const savedTheme = localStorage.getItem('office-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Global event listeners

// Handle window resize to close the sidebar on larger screens
window.addEventListener('resize', debounce(function() {
    if (window.innerWidth > 768) {
        // Ensure the sidebar is closed when resizing to desktop view
        if (typeof window.closeSidebar === 'function') {
            window.closeSidebar();
        }
    }
}, 250));

// Keyboard shortcuts for quick actions
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for quick search placeholder
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Quick search shortcut activated');
        // Implement quick search functionality here if needed
    }
    
    // Escape key to close modals/menus
    if (e.key === 'Escape') {
        if (typeof window.closeSidebar === 'function') {
            window.closeSidebar();
        }
        const quickMenu = document.querySelector('.quick-actions-menu');
        if (quickMenu) {
            quickMenu.remove();
        }
    }
});
