// Module: fab
export function initializeFAB() {
    const fab = document.querySelector('.fab');
    if (fab) {
        fab.addEventListener('click', function() {
            // FAB action - could open quick actions menu
            showQuickActions();
        });
    }
}


export function showQuickActions() {
    // Create quick actions menu
    const existingMenu = document.querySelector('.quick-actions-menu');
    if (existingMenu) {
        existingMenu.remove();
        return;
    }
    
    const menu = document.createElement('div');
    menu.className = 'quick-actions-menu';
    menu.innerHTML = `
        <div class="quick-action" data-action="new-task">
            <i class="fas fa-plus"></i>
            <span>New Task</span>
        </div>
        <div class="quick-action" data-action="new-project">
            <i class="fas fa-folder-plus"></i>
            <span>New Project</span>
        </div>
        <div class="quick-action" data-action="new-meeting">
            <i class="fas fa-calendar-plus"></i>
            <span>Schedule Meeting</span>
        </div>
    `;
    
    // Add styles
    menu.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 32px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        padding: 8px;
        z-index: 1001;
        min-width: 180px;
    `;
    
    document.body.appendChild(menu);
    
    // Add event listeners to quick actions
    menu.querySelectorAll('.quick-action').forEach(action => {
        action.style.cssText = `
            display: flex;
            align-items: center;
            padding: 12px 16px;
            cursor: pointer;
            border-radius: 8px;
            transition: background-color 0.2s;
        `;
        
        action.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9fafb';
        });
        
        action.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
        
        action.addEventListener('click', function() {
            const actionType = this.getAttribute('data-action');
            handleQuickAction(actionType);
            menu.remove();
        });
    });
    
    // Style icons and text
    menu.querySelectorAll('.quick-action i').forEach(icon => {
        icon.style.cssText = 'margin-right: 12px; color: #6366f1; width: 16px;';
    });
    
    menu.querySelectorAll('.quick-action span').forEach(span => {
        span.style.cssText = 'font-size: 14px; color: #374151; font-weight: 500;';
    });
    
    // Close menu when clicking outside
    setTimeout(() => {
        // Define a named handler so it can be removed later
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target) && !document.querySelector('.fab').contains(e.target)) {
                menu.remove();
                // Remove this event listener after executing
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
}


export function handleQuickAction(action) {
    switch(action) {
        case 'new-task':
            const task = prompt('Enter new task:');
            if (task) {
                console.log(`New task created: ${task}`);
                // Add task logic here
            }
            break;
            
        case 'new-project':
            window.createNewProjectDialog();
            break;
            
        case 'new-meeting':
            const meeting = prompt('Enter meeting title:');
            if (meeting) {
                console.log(`New meeting scheduled: ${meeting}`);
                // Add meeting logic here
            }
            break;
    }
}

// Daisy AI Functions

