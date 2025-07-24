// Module: mobileMenu

// Internal state for the mobile menu module
let mobileMenuToggle;
let sidebarOverlay;
export function initializeMobileMenu() {
    // Create mobile menu toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'mobile-menu-toggle';
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(toggleBtn);
    mobileMenuToggle = toggleBtn;

    // Create sidebar overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    sidebarOverlay = overlay;

    // Event listeners
    mobileMenuToggle.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when clicking on nav items on mobile
    window.navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });
}


export function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
    sidebarOverlay.classList.toggle('active');
}


export function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('mobile-open');
    sidebarOverlay.classList.remove('active');
}

// Navigation Management

