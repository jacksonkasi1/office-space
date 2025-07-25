// Module: fab
export function initializeFAB() {
    const fab = document.querySelector('.fab');
    if (fab) {
        // Load saved position from localStorage
        loadFABPosition(fab);
        
        // Add click event listener
        fab.addEventListener('click', function() {
            // FAB action - could open quick actions menu
            showQuickActions();
        });
        
        // Add drag functionality
        makeFABDraggable(fab);
        
        // Handle window resize to keep FAB within bounds
        window.addEventListener('resize', () => {
            constrainFABToViewport(fab);
        });
    }
}

function loadFABPosition(fab) {
    const savedPosition = localStorage.getItem('fabPosition');
    if (savedPosition) {
        try {
            const position = JSON.parse(savedPosition);
            const margin = 20;
            const fabSize = fab.offsetWidth;
            
            // Ensure saved position respects margins
            let x = Math.max(margin, Math.min(position.x, window.innerWidth - fabSize - margin));
            let y = Math.max(margin, Math.min(position.y, window.innerHeight - fabSize - margin));
            
            fab.style.left = x + 'px';
            fab.style.top = y + 'px';
            fab.style.right = 'auto';
            fab.style.bottom = 'auto';
        } catch (error) {
            console.error('Error loading FAB position:', error);
        }
    }
}

function saveFABPosition(fab) {
    const rect = fab.getBoundingClientRect();
    const position = {
        x: rect.left,
        y: rect.top
    };
    localStorage.setItem('fabPosition', JSON.stringify(position));
}

function constrainFABToViewport(fab) {
    const rect = fab.getBoundingClientRect();
    const fabSize = fab.offsetWidth;
    const margin = 20; // Minimum margin from viewport edges
    const maxX = window.innerWidth - fabSize - margin;
    const maxY = window.innerHeight - fabSize - margin;
    
    let newX = rect.left;
    let newY = rect.top;
    
    // Ensure FAB doesn't go off-screen on any side
    if (rect.left < margin) {
        newX = margin;
    }
    if (rect.right > window.innerWidth - margin) {
        newX = maxX;
    }
    if (rect.top < margin) {
        newY = margin;
    }
    if (rect.bottom > window.innerHeight - margin) {
        newY = maxY;
    }
    
    if (newX !== rect.left || newY !== rect.top) {
        fab.style.left = newX + 'px';
        fab.style.top = newY + 'px';
        fab.style.right = 'auto';
        fab.style.bottom = 'auto';
        saveFABPosition(fab);
    }
}

function makeFABDraggable(fab) {
    let isDragging = false;
    let startX, startY, initialX, initialY;
    
    // Add cursor style for dragging
    fab.style.cursor = 'grab';
    
    // Mouse events
    fab.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    
    // Touch events for mobile
    fab.addEventListener('touchstart', startDragTouch);
    document.addEventListener('touchmove', dragTouch);
    document.addEventListener('touchend', endDrag);
    
    function startDrag(e) {
        e.preventDefault();
        isDragging = true;
        
        const rect = fab.getBoundingClientRect();
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;
        initialX = rect.left;
        initialY = rect.top;
        
        fab.style.cursor = 'grabbing';
        fab.style.transition = 'none';
        fab.style.zIndex = '1002';
        fab.style.opacity = '0.8';
        fab.style.transform = 'scale(1.1)';
    }
    
    function startDragTouch(e) {
        e.preventDefault();
        isDragging = true;
        
        const touch = e.touches[0];
        const rect = fab.getBoundingClientRect();
        startX = touch.clientX - rect.left;
        startY = touch.clientY - rect.top;
        initialX = rect.left;
        initialY = rect.top;
        
        fab.style.cursor = 'grabbing';
        fab.style.transition = 'none';
        fab.style.zIndex = '1002';
        fab.style.opacity = '0.8';
        fab.style.transform = 'scale(1.1)';
    }
    
    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const newX = e.clientX - startX;
        const newY = e.clientY - startY;
        
        // Constrain to viewport bounds with proper margins
        const margin = 20;
        const maxX = window.innerWidth - fab.offsetWidth - margin;
        const maxY = window.innerHeight - fab.offsetHeight - margin;
        
        const constrainedX = Math.max(margin, Math.min(newX, maxX));
        const constrainedY = Math.max(margin, Math.min(newY, maxY));
        
        fab.style.left = constrainedX + 'px';
        fab.style.top = constrainedY + 'px';
        fab.style.right = 'auto';
        fab.style.bottom = 'auto';
    }
    
    function dragTouch(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const touch = e.touches[0];
        const newX = touch.clientX - startX;
        const newY = touch.clientY - startY;
        
        // Constrain to viewport bounds with proper margins
        const margin = 20;
        const maxX = window.innerWidth - fab.offsetWidth - margin;
        const maxY = window.innerHeight - fab.offsetHeight - margin;
        
        const constrainedX = Math.max(margin, Math.min(newX, maxX));
        const constrainedY = Math.max(margin, Math.min(newY, maxY));
        
        fab.style.left = constrainedX + 'px';
        fab.style.top = constrainedY + 'px';
        fab.style.right = 'auto';
        fab.style.bottom = 'auto';
    }
    
    function endDrag() {
        if (!isDragging) return;
        
        isDragging = false;
        fab.style.cursor = 'grab';
        fab.style.transition = 'all 0.2s';
        fab.style.zIndex = '1000';
        fab.style.opacity = '1';
        fab.style.transform = 'scale(1)';
        
        // Save position to localStorage
        saveFABPosition(fab);
    }
}


export function showQuickActions() {
    // Create quick actions menu
    const existingMenu = document.querySelector('.quick-actions-menu');
    if (existingMenu) {
        existingMenu.remove();
        return;
    }
    
    const fab = document.querySelector('.fab');
    const fabRect = fab.getBoundingClientRect();
    
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
    
    // Calculate menu dimensions
    const menuWidth = 200;
    const menuHeight = 140;
    const spacing = 16; // Increased spacing between FAB and menu
    const margin = 20; // Minimum margin from viewport edges
    
    // Calculate available space in each direction
    const spaceLeft = fabRect.left - margin;
    const spaceRight = window.innerWidth - fabRect.right - margin;
    const spaceTop = fabRect.top - margin;
    const spaceBottom = window.innerHeight - fabRect.bottom - margin;
    
    // Determine best position based on available space
    let position = 'left'; // Default position
    let left, top;
    
    // Check if we have enough space on the left
    if (spaceLeft >= menuWidth + spacing) {
        position = 'left';
        left = fabRect.left - menuWidth - spacing;
        top = fabRect.top + (fabRect.height / 2) - (menuHeight / 2);
    }
    // Check if we have enough space on the right
    else if (spaceRight >= menuWidth + spacing) {
        position = 'right';
        left = fabRect.right + spacing;
        top = fabRect.top + (fabRect.height / 2) - (menuHeight / 2);
    }
    // Check if we have enough space above
    else if (spaceTop >= menuHeight + spacing) {
        position = 'top';
        left = fabRect.left + (fabRect.width / 2) - (menuWidth / 2);
        top = fabRect.top - menuHeight - spacing;
    }
    // Check if we have enough space below
    else if (spaceBottom >= menuHeight + spacing) {
        position = 'bottom';
        left = fabRect.left + (fabRect.width / 2) - (menuWidth / 2);
        top = fabRect.bottom + spacing;
    }
    // If no ideal position, choose the one with most space and adjust
    else {
        const maxSpace = Math.max(spaceLeft, spaceRight, spaceTop, spaceBottom);
        if (maxSpace === spaceLeft) {
            position = 'left';
            left = margin;
            top = fabRect.top + (fabRect.height / 2) - (menuHeight / 2);
        } else if (maxSpace === spaceRight) {
            position = 'right';
            left = window.innerWidth - menuWidth - margin;
            top = fabRect.top + (fabRect.height / 2) - (menuHeight / 2);
        } else if (maxSpace === spaceTop) {
            position = 'top';
            left = fabRect.left + (fabRect.width / 2) - (menuWidth / 2);
            top = margin;
        } else {
            position = 'bottom';
            left = fabRect.left + (fabRect.width / 2) - (menuWidth / 2);
            top = window.innerHeight - menuHeight - margin;
        }
    }
    
    // Constrain to viewport bounds with better edge handling
    left = Math.max(margin, Math.min(left, window.innerWidth - menuWidth - margin));
    top = Math.max(margin, Math.min(top, window.innerHeight - menuHeight - margin));
    
    // Additional check for bottom edge - if menu would be cut off, move it up
    if (top + menuHeight > window.innerHeight - margin) {
        top = window.innerHeight - menuHeight - margin;
    }
    
    // Additional check for right edge - if menu would be cut off, move it left
    if (left + menuWidth > window.innerWidth - margin) {
        left = window.innerWidth - menuWidth - margin;
    }
    
    // Add styles with improved design
    menu.style.cssText = `
        position: fixed;
        left: ${left}px;
        top: ${top}px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);
        padding: 12px;
        z-index: 1001;
        min-width: ${menuWidth}px;
        border: 1px solid #e5e7eb;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;
    
    document.body.appendChild(menu);
    
    // Add event listeners to quick actions with improved styling
    menu.querySelectorAll('.quick-action').forEach(action => {
        action.style.cssText = `
            display: flex;
            align-items: center;
            padding: 16px 20px;
            cursor: pointer;
            border-radius: 12px;
            transition: all 0.2s ease;
            margin-bottom: 4px;
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            position: relative;
        `;
        
        // Add hover state
        action.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f3f4f6';
            this.style.transform = 'translateX(2px)';
        });
        
        action.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.transform = 'translateX(0)';
        });
        
        // Add focus state for accessibility
        action.addEventListener('focus', function() {
            this.style.backgroundColor = '#f3f4f6';
            this.style.outline = '2px solid #6366f1';
            this.style.outlineOffset = '2px';
        });
        
        action.addEventListener('blur', function() {
            this.style.backgroundColor = 'transparent';
            this.style.outline = 'none';
        });
        
        // Add active state
        action.addEventListener('mousedown', function() {
            this.style.backgroundColor = '#e5e7eb';
            this.style.transform = 'translateX(1px) scale(0.98)';
        });
        
        action.addEventListener('mouseup', function() {
            this.style.backgroundColor = '#f3f4f6';
            this.style.transform = 'translateX(2px) scale(1)';
        });
        
        action.addEventListener('click', function() {
            const actionType = this.getAttribute('data-action');
            handleQuickAction(actionType);
            menu.remove();
        });
    });
    
    // Style icons with consistent appearance
    menu.querySelectorAll('.quick-action i').forEach(icon => {
        icon.style.cssText = `
            margin-right: 16px;
            color: #6366f1;
            width: 18px;
            height: 18px;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        `;
    });
    
    // Style text with better alignment
    menu.querySelectorAll('.quick-action span').forEach(span => {
        span.style.cssText = `
            font-size: 14px;
            color: #374151;
            font-weight: 500;
            line-height: 1.4;
            display: flex;
            align-items: center;
        `;
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

