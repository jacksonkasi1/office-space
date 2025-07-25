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
            fab.style.left = position.x + 'px';
            fab.style.top = position.y + 'px';
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
    const maxX = window.innerWidth - fab.offsetWidth;
    const maxY = window.innerHeight - fab.offsetHeight;
    
    let newX = rect.left;
    let newY = rect.top;
    
    if (rect.left > maxX) {
        newX = maxX;
    }
    if (rect.top > maxY) {
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
        
        // Constrain to viewport bounds
        const maxX = window.innerWidth - fab.offsetWidth;
        const maxY = window.innerHeight - fab.offsetHeight;
        
        const constrainedX = Math.max(0, Math.min(newX, maxX));
        const constrainedY = Math.max(0, Math.min(newY, maxY));
        
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
        
        // Constrain to viewport bounds
        const maxX = window.innerWidth - fab.offsetWidth;
        const maxY = window.innerHeight - fab.offsetHeight;
        
        const constrainedX = Math.max(0, Math.min(newX, maxX));
        const constrainedY = Math.max(0, Math.min(newY, maxY));
        
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
    
    // Calculate position relative to FAB
    const menuWidth = 180;
    const menuHeight = 120; // Approximate height
    const spacing = 8; // Reduced spacing for better alignment
    
    // Position menu to the left of FAB, aligned with FAB center
    let left = fabRect.left - menuWidth - spacing;
    let top = fabRect.top + (fabRect.height / 2) - (menuHeight / 2); // Center align vertically
    let arrowPosition = 'right'; // Arrow pointing right (from menu to FAB)
    
    // If menu would go off-screen to the left, position it to the right of FAB
    if (left < 0) {
        left = fabRect.right + spacing;
        arrowPosition = 'left'; // Arrow pointing left (from menu to FAB)
    }
    
    // If menu would go off-screen to the right, position it to the left of FAB
    if (left + menuWidth > window.innerWidth) {
        left = fabRect.left - menuWidth - spacing;
        arrowPosition = 'right'; // Arrow pointing right (from menu to FAB)
    }
    
    // If menu would go off-screen at the bottom, adjust upward
    if (top + menuHeight > window.innerHeight) {
        top = window.innerHeight - menuHeight - 20; // 20px margin from bottom
    }
    
    // If menu would go off-screen at the top, adjust downward
    if (top < 20) { // 20px margin from top
        top = 20;
    }
    
    // Add arrow indicator
    const arrow = document.createElement('div');
    arrow.style.cssText = `
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border: 6px solid transparent;
        z-index: 1002;
    `;
    
    if (arrowPosition === 'right') {
        arrow.style.right = '-12px';
        arrow.style.borderLeftColor = 'white';
        arrow.style.borderRight = 'none';
    } else {
        arrow.style.left = '-12px';
        arrow.style.borderRightColor = 'white';
        arrow.style.borderLeft = 'none';
    }
    
    // Add styles
    menu.style.cssText = `
        position: fixed;
        left: ${left}px;
        top: ${top}px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        padding: 8px;
        z-index: 1001;
        min-width: ${menuWidth}px;
        border: 1px solid #e5e7eb;
    `;
    
    menu.appendChild(arrow);
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

