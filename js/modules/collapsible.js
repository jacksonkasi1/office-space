// Module: collapsible
export function initializeCollapsibleSections() {
    const toggle = document.querySelector('.section-toggle');
    if (toggle) {
        // Handle click events
        toggle.addEventListener('click', handleToggleClick);
        
        // Handle keyboard events for accessibility
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleToggleClick.call(this);
            }
        });
    }

    // Initialize reminder item interactions
    initializeReminderItems();
    
    // Initialize reminder settings button
    initializeReminderSettings();
}

function handleToggleClick() {
    const reminderList = document.querySelector('.reminder-list');
    const chevron = this.querySelector('.toggle-icon');
    const emptyState = document.querySelector('.reminder-empty-state');
    
    if (reminderList) {
        const isCollapsed = reminderList.classList.contains('collapsed');
        
        if (isCollapsed) {
            // Expand
            reminderList.style.maxHeight = reminderList.scrollHeight + 'px';
            reminderList.classList.remove('collapsed');
            chevron.style.transform = 'rotate(0deg)';
            this.setAttribute('aria-expanded', 'true');
            
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
            this.setAttribute('aria-expanded', 'false');
        }
    }
}

function initializeReminderItems() {
    const reminderItems = document.querySelectorAll('.reminder-item');
    
    reminderItems.forEach(item => {
        // Handle click events
        item.addEventListener('click', function(e) {
            // Don't trigger if clicking on action buttons
            if (e.target.closest('.reminder-action-btn')) {
                return;
            }
            
            // Toggle completion status
            toggleReminderCompletion(this);
        });
        
        // Handle keyboard events
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleReminderCompletion(this);
            }
        });
        
        // Initialize action buttons
        initializeReminderActions(item);
    });
}

function toggleReminderCompletion(item) {
    const isCompleted = item.classList.contains('completed');
    
    if (isCompleted) {
        // Mark as incomplete
        item.classList.remove('completed');
        item.querySelector('.reminder-icon i').className = 'fas fa-file-alt';
        item.querySelector('.reminder-meta').innerHTML = `
            <span class="priority-indicator ${item.dataset.priority}">${getPriorityText(item.dataset.priority)}</span>
            <span class="reminder-time">Due in 2 hours</span>
        `;
        
        // Update action buttons
        const undoBtn = item.querySelector('.reminder-action-btn');
        if (undoBtn) {
            undoBtn.innerHTML = '<i class="fas fa-edit"></i>';
            undoBtn.title = 'Edit reminder';
        }
    } else {
        // Mark as completed
        item.classList.add('completed');
        item.querySelector('.reminder-icon i').className = 'fas fa-check-circle';
        item.querySelector('.reminder-meta').innerHTML = `
            <span class="completion-status">Completed</span>
            <span class="reminder-time">Completed just now</span>
        `;
        
        // Update action buttons
        const editBtn = item.querySelector('.reminder-action-btn');
        if (editBtn) {
            editBtn.innerHTML = '<i class="fas fa-undo"></i>';
            editBtn.title = 'Undo completion';
        }
    }
    
    // Update count
    updateReminderCount();
}

function initializeReminderActions(item) {
    const actionButtons = item.querySelectorAll('.reminder-action-btn');
    
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the item click
            
            const action = this.title.toLowerCase();
            
            if (action.includes('edit')) {
                handleEditReminder(item);
            } else if (action.includes('undo')) {
                toggleReminderCompletion(item);
            } else if (action.includes('more options')) {
                handleMoreOptions(item, this);
            }
        });
    });
}

function handleEditReminder(item) {
    // Show edit modal or inline editing
    console.log('Edit reminder:', item.querySelector('.reminder-title').textContent);
    // TODO: Implement edit functionality
}

function handleMoreOptions(item, button) {
    // Show dropdown menu with options
    console.log('More options for:', item.querySelector('.reminder-title').textContent);
    // TODO: Implement dropdown menu
}

function initializeReminderSettings() {
    const settingsBtn = document.querySelector('.reminder-settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            console.log('Open reminder settings');
            // TODO: Implement settings modal
        });
    }
}

function getPriorityText(priority) {
    const priorityMap = {
        'high': 'High Priority',
        'medium': 'Medium Priority',
        'low': 'Low Priority'
    };
    return priorityMap[priority] || 'Medium Priority';
}

function updateReminderCount() {
    const activeReminders = document.querySelectorAll('.reminder-item:not(.completed)');
    const countBadge = document.querySelector('.count-badge');
    
    if (countBadge) {
        countBadge.textContent = activeReminders.length;
        
        // Show/hide empty state
        const emptyState = document.querySelector('.reminder-empty-state');
        const reminderList = document.querySelector('.reminder-list');
        
        if (activeReminders.length === 0) {
            reminderList.style.display = 'none';
            emptyState.style.display = 'block';
        } else {
            reminderList.style.display = 'block';
            emptyState.style.display = 'none';
        }
    }
}

// Project Actions

