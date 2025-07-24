// Module: collapsible
export function initializeCollapsibleSections() {
    const toggle = document.querySelector('.section-toggle');
    if (toggle) {
        toggle.addEventListener('click', function() {
            // Query the reminder list and chevron icon within the click handler
            const reminderList = document.querySelector('.reminder-list');
            const chevron = this.querySelector('.fa-chevron-down');
            
            if (reminderList) {
                const isCollapsed = reminderList.classList.contains('collapsed');
                
                if (isCollapsed) {
                    // Expand
                    reminderList.style.maxHeight = reminderList.scrollHeight + 'px';
                    reminderList.classList.remove('collapsed');
                    chevron.style.transform = 'rotate(0deg)';
                    
                    // Reset max-height after animation
                    setTimeout(() => {
                        if (!reminderList.classList.contains('collapsed')) {
                            reminderList.style.maxHeight = 'none';
                        }
                    }, 250);
                } else {
                    // Collapse
                    reminderList.style.maxHeight = reminderList.scrollHeight + 'px';
                    // Force reflow
                    reminderList.offsetHeight;
                    reminderList.style.maxHeight = '0px';
                    reminderList.classList.add('collapsed');
                    chevron.style.transform = 'rotate(-90deg)';
                }
            }
        });
    }
}

// Project Actions

