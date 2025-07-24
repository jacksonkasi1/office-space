// Module: spotlight
export function initializeSpotlightTabs() {
    const tabs = document.querySelectorAll('.spotlight-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all spotlight tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const tabName = this.textContent.toLowerCase();
            showSpotlightContent(tabName);
        });
    });
}


export function showSpotlightContent(tabName) {
    // Hide all spotlight content
    const allContent = document.querySelectorAll('.spotlight-tab-content');
    allContent.forEach(content => {
        content.style.display = 'none';
    });
    
    // Show selected content
    const contentId = `${tabName}-content`;
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

// Floating Action Button

