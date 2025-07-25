// Module: inbox
export function renderInboxContent(container) {
    container.innerHTML = `
        <div class="inbox-container">
            <!-- Inbox Header -->
            <div class="inbox-header">
                <div class="inbox-title">
                    <h2>Recent Messages</h2>
                    <span class="message-count">15 unread</span>
                </div>
                <div class="inbox-actions">
                    <button class="inbox-action-btn" title="Mark all as read">
                        <i class="fas fa-check-double"></i>
                    </button>
                    <button class="inbox-action-btn" title="Filter messages">
                        <i class="fas fa-filter"></i>
                    </button>
                    <button class="inbox-action-btn" title="Search messages">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>

            <!-- Compose Button -->
            <button class="inbox-compose-btn" title="Compose new message">
                <i class="fas fa-plus"></i>
                <span>Compose</span>
            </button>

            <!-- Message List -->
            <div class="message-list">
                <div class="message-item unread" data-message-id="1">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=John+Doe" alt="John Doe">
                        <span class="unread-indicator"></span>
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">John Doe</h4>
                            <span class="message-time">2 hours ago</span>
                        </div>
                        <p class="message-preview">Project update meeting scheduled for tomorrow</p>
                        <div class="message-meta">
                            <span class="message-type">Meeting</span>
                            <span class="priority high">High Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Mark as read">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item" data-message-id="2">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Sarah+Wilson" alt="Sarah Wilson">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Sarah Wilson</h4>
                            <span class="message-time">5 hours ago</span>
                        </div>
                        <p class="message-preview">Great work on the presentation!</p>
                        <div class="message-meta">
                            <span class="message-type">Feedback</span>
                            <span class="priority medium">Medium Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Reply">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item unread" data-message-id="3">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Mike+Johnson" alt="Mike Johnson">
                        <span class="unread-indicator"></span>
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Mike Johnson</h4>
                            <span class="message-time">1 day ago</span>
                        </div>
                        <p class="message-preview">Please review the latest design mockups</p>
                        <div class="message-meta">
                            <span class="message-type">Design Review</span>
                            <span class="priority high">High Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Mark as read">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item" data-message-id="4">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Lisa+Chen" alt="Lisa Chen">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Lisa Chen</h4>
                            <span class="message-time">2 days ago</span>
                        </div>
                        <p class="message-preview">Team lunch this Friday at 12 PM</p>
                        <div class="message-meta">
                            <span class="message-type">Social</span>
                            <span class="priority low">Low Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Reply">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item unread" data-message-id="5">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=David+Brown" alt="David Brown">
                        <span class="unread-indicator"></span>
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">David Brown</h4>
                            <span class="message-time">3 days ago</span>
                        </div>
                        <p class="message-preview">Budget approval needed for Q4 projects</p>
                        <div class="message-meta">
                            <span class="message-type">Finance</span>
                            <span class="priority high">High Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Mark as read">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item" data-message-id="6">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Emma+Wilson" alt="Emma Wilson">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Emma Wilson</h4>
                            <span class="message-time">4 days ago</span>
                        </div>
                        <p class="message-preview">Client presentation feedback and next steps</p>
                        <div class="message-meta">
                            <span class="message-type">Client</span>
                            <span class="priority medium">Medium Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Reply">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item unread" data-message-id="7">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Alex+Chen" alt="Alex Chen">
                        <span class="unread-indicator"></span>
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Alex Chen</h4>
                            <span class="message-time">5 days ago</span>
                        </div>
                        <p class="message-preview">New feature requirements for mobile app</p>
                        <div class="message-meta">
                            <span class="message-type">Development</span>
                            <span class="priority high">High Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Mark as read">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item" data-message-id="8">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Maria+Garcia" alt="Maria Garcia">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Maria Garcia</h4>
                            <span class="message-time">1 week ago</span>
                        </div>
                        <p class="message-preview">Marketing campaign results and analytics</p>
                        <div class="message-meta">
                            <span class="message-type">Marketing</span>
                            <span class="priority medium">Medium Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Reply">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item unread" data-message-id="9">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=James+Miller" alt="James Miller">
                        <span class="unread-indicator"></span>
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">James Miller</h4>
                            <span class="message-time">1 week ago</span>
                        </div>
                        <p class="message-preview">Server maintenance scheduled for this weekend</p>
                        <div class="message-meta">
                            <span class="message-type">IT</span>
                            <span class="priority high">High Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Mark as read">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item" data-message-id="10">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Sophie+Taylor" alt="Sophie Taylor">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Sophie Taylor</h4>
                            <span class="message-time">1 week ago</span>
                        </div>
                        <p class="message-preview">Team building event planning for next month</p>
                        <div class="message-meta">
                            <span class="message-type">HR</span>
                            <span class="priority low">Low Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Reply">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item unread" data-message-id="11">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Ryan+Anderson" alt="Ryan Anderson">
                        <span class="unread-indicator"></span>
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Ryan Anderson</h4>
                            <span class="message-time">2 weeks ago</span>
                        </div>
                        <p class="message-preview">Sales pipeline update and quarterly targets</p>
                        <div class="message-meta">
                            <span class="message-type">Sales</span>
                            <span class="priority high">High Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Mark as read">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item" data-message-id="12">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Jessica+Lee" alt="Jessica Lee">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Jessica Lee</h4>
                            <span class="message-time">2 weeks ago</span>
                        </div>
                        <p class="message-preview">Product roadmap discussion for Q1 2025</p>
                        <div class="message-meta">
                            <span class="message-type">Product</span>
                            <span class="priority medium">Medium Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Reply">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item" data-message-id="13">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Michael+Clark" alt="Michael Clark">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Michael Clark</h4>
                            <span class="message-time">3 weeks ago</span>
                        </div>
                        <p class="message-preview">Legal compliance review for new features</p>
                        <div class="message-meta">
                            <span class="message-type">Legal</span>
                            <span class="priority medium">Medium Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Reply">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item" data-message-id="14">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Amanda+White" alt="Amanda White">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Amanda White</h4>
                            <span class="message-time">3 weeks ago</span>
                        </div>
                        <p class="message-preview">Customer support ticket escalation</p>
                        <div class="message-meta">
                            <span class="message-type">Support</span>
                            <span class="priority low">Low Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Reply">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>

                <div class="message-item" data-message-id="15">
                    <div class="message-avatar">
                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Daniel+Martinez" alt="Daniel Martinez">
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <h4 class="sender-name">Daniel Martinez</h4>
                            <span class="message-time">1 month ago</span>
                        </div>
                        <p class="message-preview">Annual performance review scheduling</p>
                        <div class="message-meta">
                            <span class="message-type">HR</span>
                            <span class="priority medium">Medium Priority</span>
                        </div>
                    </div>
                    <div class="message-actions">
                        <button class="message-action-btn" title="Reply">
                            <i class="fas fa-reply"></i>
                        </button>
                        <button class="message-action-btn" title="Archive">
                            <i class="fas fa-archive"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Empty State (hidden by default) -->
            <div class="inbox-empty-state" style="display: none;">
                <div class="empty-state-icon">
                    <i class="fas fa-inbox"></i>
                </div>
                <h3>No messages</h3>
                <p>You're all caught up! No new messages in your inbox.</p>
            </div>
        </div>
    `;

    // Initialize inbox functionality
    initializeInboxFeatures();
}

export function initializeInboxFeatures() {
    const messageItems = document.querySelectorAll('.message-item');
    const inboxActionBtns = document.querySelectorAll('.inbox-action-btn');
    const messageActionBtns = document.querySelectorAll('.message-action-btn');
    const composeBtn = document.querySelector('.inbox-compose-btn');

    // Handle message item clicks
    messageItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Don't trigger if clicking on action buttons
            if (e.target.closest('.message-actions')) {
                return;
            }
            
            const messageId = item.dataset.messageId;
            openMessageDetail(messageId);
        });

        // Handle hover effects
        item.addEventListener('mouseenter', () => {
            item.querySelector('.message-actions').style.opacity = '1';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('.message-actions').style.opacity = '0';
        });
    });

    // Handle inbox action buttons
    inboxActionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.title.toLowerCase();
            handleInboxAction(action);
        });
    });

    // Handle message action buttons
    messageActionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.title.toLowerCase();
            const messageItem = btn.closest('.message-item');
            const messageId = messageItem.dataset.messageId;
            handleMessageAction(action, messageId, messageItem);
        });
    });

    // Handle compose button
    if (composeBtn) {
        composeBtn.addEventListener('click', () => {
            composeNewMessage();
        });
    }
}

export function handleInboxAction(action) {
    switch(action) {
        case 'mark all as read':
            markAllAsRead();
            break;
        case 'filter messages':
            showFilterOptions();
            break;
        case 'search messages':
            showSearchBar();
            break;
    }
}

export function handleMessageAction(action, messageId, messageItem) {
    switch(action) {
        case 'mark as read':
            markAsRead(messageId, messageItem);
            break;
        case 'reply':
            replyToMessage(messageId);
            break;
        case 'archive':
            archiveMessage(messageId, messageItem);
            break;
    }
}

export function markAsRead(messageId, messageItem) {
    messageItem.classList.remove('unread');
    const unreadIndicator = messageItem.querySelector('.unread-indicator');
    if (unreadIndicator) {
        unreadIndicator.style.display = 'none';
    }
    
    // Update unread count
    updateUnreadCount();
    
    // Show success feedback
    showMessageFeedback('Message marked as read');
}

export function markAllAsRead() {
    const unreadMessages = document.querySelectorAll('.message-item.unread');
    unreadMessages.forEach(message => {
        message.classList.remove('unread');
        const unreadIndicator = message.querySelector('.unread-indicator');
        if (unreadIndicator) {
            unreadIndicator.style.display = 'none';
        }
    });
    
    updateUnreadCount();
    showMessageFeedback('All messages marked as read');
}

export function archiveMessage(messageId, messageItem) {
    // Add animation for archiving
    messageItem.style.transform = 'translateX(100%)';
    messageItem.style.opacity = '0';
    
    setTimeout(() => {
        messageItem.remove();
        updateUnreadCount();
        showMessageFeedback('Message archived');
        
        // Check if inbox is empty
        const remainingMessages = document.querySelectorAll('.message-item');
        if (remainingMessages.length === 0) {
            showEmptyState();
        }
    }, 300);
}

export function replyToMessage(messageId) {
    // This would typically open a reply modal or compose window
    showMessageFeedback('Reply feature coming soon');
}

export function openMessageDetail(messageId) {
    // This would typically open a detailed view of the message
    showMessageFeedback(`Opening message ${messageId}`);
}

export function updateUnreadCount() {
    const unreadMessages = document.querySelectorAll('.message-item.unread');
    const messageCount = document.querySelector('.message-count');
    
    if (messageCount) {
        const count = unreadMessages.length;
        messageCount.textContent = `${count} unread`;
        
        if (count === 0) {
            messageCount.style.display = 'none';
        } else {
            messageCount.style.display = 'inline';
        }
    }
}

export function showFilterOptions() {
    // Create and show filter dropdown
    const filterDropdown = document.createElement('div');
    filterDropdown.className = 'filter-dropdown';
    filterDropdown.innerHTML = `
        <div class="filter-option" data-filter="all">All Messages</div>
        <div class="filter-option" data-filter="unread">Unread Only</div>
        <div class="filter-option" data-filter="high-priority">High Priority</div>
        <div class="filter-option" data-filter="meetings">Meetings</div>
        <div class="filter-option" data-filter="feedback">Feedback</div>
    `;
    
    // Position and show dropdown
    const filterBtn = document.querySelector('.inbox-action-btn[title="Filter messages"]');
    filterBtn.appendChild(filterDropdown);
    
    // Handle filter selection
    filterDropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-option')) {
            const filter = e.target.dataset.filter;
            applyFilter(filter);
            filterDropdown.remove();
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
        if (!filterDropdown.contains(e.target) && !filterBtn.contains(e.target)) {
            filterDropdown.remove();
            document.removeEventListener('click', closeDropdown);
        }
    });
}

export function applyFilter(filter) {
    const messageItems = document.querySelectorAll('.message-item');
    
    messageItems.forEach(item => {
        let show = true;
        
        switch(filter) {
            case 'unread':
                show = item.classList.contains('unread');
                break;
            case 'high-priority':
                show = item.querySelector('.priority.high') !== null;
                break;
            case 'meetings':
                show = item.querySelector('.message-type').textContent === 'Meeting';
                break;
            case 'feedback':
                show = item.querySelector('.message-type').textContent === 'Feedback';
                break;
            case 'all':
            default:
                show = true;
                break;
        }
        
        item.style.display = show ? 'flex' : 'none';
    });
    
    showMessageFeedback(`Filtered by: ${filter}`);
}

export function showSearchBar() {
    const searchBar = document.createElement('div');
    searchBar.className = 'inbox-search-bar';
    searchBar.innerHTML = `
        <div class="search-input-container">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search messages..." class="search-input">
            <button class="close-search-btn">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    const inboxHeader = document.querySelector('.inbox-header');
    inboxHeader.appendChild(searchBar);
    
    const searchInput = searchBar.querySelector('.search-input');
    const closeBtn = searchBar.querySelector('.close-search-btn');
    
    searchInput.focus();
    
    // Handle search
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        searchMessages(query);
    });
    
    // Close search
    closeBtn.addEventListener('click', () => {
        searchBar.remove();
        // Show all messages when search is closed
        const messageItems = document.querySelectorAll('.message-item');
        messageItems.forEach(item => {
            item.style.display = 'flex';
        });
    });
}

export function searchMessages(query) {
    const messageItems = document.querySelectorAll('.message-item');
    
    messageItems.forEach(item => {
        const senderName = item.querySelector('.sender-name').textContent.toLowerCase();
        const messagePreview = item.querySelector('.message-preview').textContent.toLowerCase();
        const messageType = item.querySelector('.message-type').textContent.toLowerCase();
        
        const matches = senderName.includes(query) || 
                       messagePreview.includes(query) || 
                       messageType.includes(query);
        
        item.style.display = matches ? 'flex' : 'none';
    });
}

export function showEmptyState() {
    const messageList = document.querySelector('.message-list');
    const emptyState = document.querySelector('.inbox-empty-state');
    
    if (messageList && emptyState) {
        messageList.style.display = 'none';
        emptyState.style.display = 'flex';
    }
}

export function composeNewMessage() {
    // This would typically open a compose modal or new window
    showMessageFeedback('Compose feature coming soon');
}

export function showMessageFeedback(message) {
    // Create temporary feedback element
    const feedback = document.createElement('div');
    feedback.className = 'message-feedback';
    feedback.textContent = message;
    
    document.body.appendChild(feedback);
    
    // Animate in
    setTimeout(() => {
        feedback.classList.add('show');
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
            feedback.remove();
        }, 300);
    }, 2000);
} 