// Module: navigation
export function initializeNavigation() {
    if (!window.navItems) {
        window.navItems = document.querySelectorAll('.nav-item a');
    }
    
    window.navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            window.navItems.forEach(nav => nav.parentElement.classList.remove('active'));
            
            // Add active class to clicked item
            this.parentElement.classList.add('active');
            
            // Get the page data attribute
            const page = this.getAttribute('data-page');
            handleNavigation(page);
        });
    });
}


export function handleNavigation(page) {
    // This function can be extended to handle different page content
    console.log(`Navigating to: ${page}`);
    
    // Update main content based on navigation
    updateMainContent(page);
}


export function updateMainContent(page) {
    const greeting = document.querySelector('.greeting');
    const dashboardContent = document.querySelector('.dashboard-content');
    const tabNavigation = document.querySelector('.tab-navigation');
    
    // Original content should already be saved in main.js initialization
    
    switch(page) {
        case 'home':
            greeting.innerHTML = window.originalContent.greeting;
            dashboardContent.innerHTML = window.originalContent.dashboard;
            tabNavigation.style.display = 'flex';
            
            // Reset tab state to home
            setTimeout(() => {
                // Re-query tab buttons to ensure they exist
                window.tabBtns = document.querySelectorAll('.tab-btn');
                window.tabBtns.forEach(tab => tab.classList.remove('active'));
                const homeTab = document.querySelector('.tab-btn[data-tab="home"]');
                if (homeTab) {
                    homeTab.classList.add('active');
                }
                
                // Re-initialize components after content change
                window.initializeCollapsibleSections();
                window.initializeSpotlightTabs();
                window.initializeTabs(); // Re-initialize tab functionality
            }, 100);
            break;
            
        case 'daisy':
            greeting.innerHTML = 'Daisy AI <span class="greeting-question">Your intelligent productivity companion</span>';
            tabNavigation.style.display = 'none';
            window.renderDaisyAI(dashboardContent);
            break;
            
        case 'tasks':
            greeting.innerHTML = 'My Tasks <span class="greeting-question">Stay organized and productive</span>';
            tabNavigation.style.display = 'none';
            window.renderKanbanBoard(dashboardContent);
            break;
            
        case 'inbox':
            greeting.innerHTML = 'Inbox <span class="greeting-question">Your messages and notifications</span>';
            tabNavigation.style.display = 'none';
            dashboardContent.innerHTML = `
                <div class="dashboard-row">
                    <section class="inbox-section">
                        <div class="section-header">
                            <i class="fas fa-envelope"></i>
                            <h3>Recent Messages</h3>
                        </div>
                        <div class="message-list">
                            <div class="message-item unread">
                                <div class="message-avatar">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User">
                                </div>
                                <div class="message-content">
                                    <h4>John Doe</h4>
                                    <p>Project update meeting scheduled for tomorrow</p>
                                    <span class="message-time">2 hours ago</span>
                                </div>
                            </div>
                            <div class="message-item">
                                <div class="message-avatar">
                                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face" alt="User">
                                </div>
                                <div class="message-content">
                                    <h4>Sarah Wilson</h4>
                                    <p>Great work on the presentation!</p>
                                    <span class="message-time">5 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            `;
            break;
            
        case 'calendar':
            greeting.innerHTML = 'Calendar <span class="greeting-question">Manage your schedule</span>';
            tabNavigation.style.display = 'none';
            dashboardContent.innerHTML = window.originalContent.dashboard;
            setTimeout(() => {
                window.initializeCalendar();
            }, 100);
            break;
            
        case 'team-chat':
            greeting.innerHTML = 'Team Chat <span class="greeting-question">Collaborate with your team</span>';
            tabNavigation.style.display = 'none';
            dashboardContent.innerHTML = `
                <div class="dashboard-row">
                    <section class="chat-section">
                        <div class="section-header">
                            <i class="fas fa-comments"></i>
                            <h3>Team Channels</h3>
                        </div>
                        <div class="channel-list">
                            <div class="channel-item active">
                                <span class="channel-name"># general</span>
                                <span class="message-count">12</span>
                            </div>
                            <div class="channel-item">
                                <span class="channel-name"># product-team</span>
                                <span class="message-count">5</span>
                            </div>
                            <div class="channel-item">
                                <span class="channel-name"># design</span>
                                <span class="message-count">2</span>
                            </div>
                        </div>
                    </section>
                </div>
            `;
            break;
    }
}

// Tab Management

