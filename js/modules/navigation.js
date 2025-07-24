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
            greeting.style.display = 'block';
            document.querySelector('.sidebar').style.display = 'block';
            
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
            greeting.style.display = 'block';
            document.querySelector('.sidebar').style.display = 'block';
            window.renderDaisyAI(dashboardContent);
            break;
            
        case 'tasks':
            greeting.innerHTML = 'My Tasks <span class="greeting-question">Stay organized and productive</span>';
            tabNavigation.style.display = 'none';
            greeting.style.display = 'block';
            document.querySelector('.sidebar').style.display = 'block';
            window.renderKanbanBoard(dashboardContent);
            break;
            
        case 'inbox':
            greeting.innerHTML = 'Inbox <span class="greeting-question">Your messages and notifications</span>';
            tabNavigation.style.display = 'none';
            greeting.style.display = 'block';
            document.querySelector('.sidebar').style.display = 'block';
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
            greeting.style.display = 'block';
            document.querySelector('.sidebar').style.display = 'block';
            dashboardContent.innerHTML = window.originalContent.dashboard;
            setTimeout(() => {
                window.initializeCalendar();
            }, 100);
            break;
            
        case 'team-chat':
            greeting.style.display = 'none';
            tabNavigation.style.display = 'none';
            document.querySelector('.sidebar').style.display = 'none';
            dashboardContent.innerHTML = `
                <div class="team-chat-container">
                    <!-- Sidebar -->
                    <div class="team-chat-sidebar">
                        <!-- Back Navigation -->
                        <div class="back-navigation">
                            <button class="back-btn" onclick="handleNavigation('home')">
                                <i class="fas fa-arrow-left"></i>
                                <span>Back to Dashboard</span>
                            </button>
                        </div>
                        
                        <!-- Workspace Header -->
                        <div class="workspace-header">
                            <div class="workspace-info">
                                <h2>Glassy Inc</h2>
                                <div class="workspace-status">
                                    <span class="status-indicator online"></span>
                                    <span>8 members online</span>
                                </div>
                            </div>
                            <button class="workspace-menu-btn">
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </div>

                        <!-- Channels Section -->
                        <div class="sidebar-section">
                            <div class="section-header">
                                <button class="section-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <h3>Channels</h3>
                                <button class="add-channel-btn">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="channel-list">
                                <div class="channel-item active" data-channel="team-chat">
                                    <span class="channel-icon">#</span>
                                    <span class="channel-name">team-chat</span>
                                    <span class="unread-badge">4</span>
                                </div>
                                <div class="channel-item" data-channel="project-gizmo">
                                    <span class="channel-icon">#</span>
                                    <span class="channel-name">project-gizmo</span>
                                </div>
                                <div class="channel-item" data-channel="genz-team">
                                    <span class="channel-icon">#</span>
                                    <span class="channel-name">genz-team</span>
                                </div>
                                <div class="channel-item" data-channel="daily-meeting">
                                    <span class="channel-icon">🔒</span>
                                    <span class="channel-name">daily-meeting</span>
                                </div>
                                <div class="channel-item" data-channel="retro">
                                    <span class="channel-icon">#</span>
                                    <span class="channel-name">retro</span>
                                </div>
                            </div>
                        </div>

                        <!-- Direct Messages Section -->
                        <div class="sidebar-section">
                            <div class="section-header">
                                <button class="section-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <h3>Direct messages</h3>
                                <button class="add-dm-btn">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="dm-list">
                                <div class="dm-item">
                                    <div class="user-avatar">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="Nathan Wood">
                                        <span class="status-dot online"></span>
                                    </div>
                                    <span class="user-name">Nathan Wood</span>
                                </div>
                                <div class="dm-item">
                                    <div class="user-avatar">
                                        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" alt="Ashley Adams">
                                        <span class="status-dot away"></span>
                                    </div>
                                    <span class="user-name">Ashley Adams</span>
                                </div>
                                <div class="dm-item">
                                    <div class="user-avatar">
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" alt="Sarah Johnson">
                                        <span class="status-dot offline"></span>
                                    </div>
                                    <span class="user-name">Sarah Johnson</span>
                                </div>
                            </div>
                        </div>

                        <!-- Apps Section -->
                        <div class="sidebar-section">
                            <div class="section-header">
                                <button class="section-toggle">
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <h3>Apps</h3>
                            </div>
                            <div class="app-list">
                                <div class="app-item">
                                    <span class="app-icon">📊</span>
                                    <span class="app-name">John Davis</span>
                                </div>
                                <div class="app-item">
                                    <span class="app-icon">🎨</span>
                                    <span class="app-name">Drakmas</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Main Chat Area -->
                    <div class="team-chat-main">
                        <!-- Chat Header -->
                        <div class="chat-header">
                            <div class="channel-info">
                                <h2># team-chat</h2>
                                <span class="member-count">8 members</span>
                            </div>
                            <div class="chat-actions">
                                <button class="chat-action-btn" title="Search">
                                    <i class="fas fa-search"></i>
                                </button>
                                <button class="chat-action-btn" title="Call">
                                    <i class="fas fa-phone"></i>
                                </button>
                                <button class="chat-action-btn" title="Settings">
                                    <i class="fas fa-cog"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Messages Area -->
                        <div class="messages-container">
                            <div class="message-group">
                                <div class="message-header">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=36&h=36&fit=crop&crop=face" alt="Macrow" class="message-avatar">
                                    <span class="message-author">Macrow</span>
                                    <span class="message-time">21:15 PM</span>
                                </div>
                                <div class="message-content">
                                    <p>Let me think.</p>
                                    <div class="voice-message">
                                        <button class="play-btn">
                                            <i class="fas fa-play"></i>
                                        </button>
                                        <div class="voice-waveform">
                                            <div class="waveform-bar"></div>
                                            <div class="waveform-bar"></div>
                                            <div class="waveform-bar"></div>
                                            <div class="waveform-bar"></div>
                                            <div class="waveform-bar"></div>
                                        </div>
                                        <span class="voice-duration">0:24</span>
                                    </div>
                                </div>
                            </div>

                            <div class="message-group">
                                <div class="message-header">
                                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=36&h=36&fit=crop&crop=face" alt="Mondialov" class="message-avatar">
                                    <span class="message-author">Mondialov</span>
                                    <span class="message-time">21:24 PM</span>
                                </div>
                                <div class="message-content">
                                    <p>What do you want to eat?</p>
                                    <div class="poll-message">
                                        <div class="poll-option">
                                            <input type="radio" name="food-poll" id="pizza">
                                            <label for="pizza">Pizza</label>
                                        </div>
                                        <div class="poll-option">
                                            <input type="radio" name="food-poll" id="burgers">
                                            <label for="burgers">Burgers</label>
                                        </div>
                                        <div class="poll-option">
                                            <input type="radio" name="food-poll" id="salars">
                                            <label for="salars">Salars</label>
                                        </div>
                                        <div class="poll-footer">
                                            <span class="vote-count">8 votes | Vote to see result</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="message-group">
                                <div class="message-header">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=36&h=36&fit=crop&crop=face" alt="Javier Ortiz" class="message-avatar">
                                    <span class="message-author">Javier Ortiz</span>
                                    <span class="message-time">22:53 PM</span>
                                </div>
                                <div class="message-content">
                                    <p>My favorite subject is English. The first reason I like this subject is that it is a core subject which is vital and essential in my career path.</p>
                                    <p>I found her lessons interesting</p>
                                </div>
                            </div>
                        </div>

                        <!-- Message Input -->
                        <div class="message-input-container">
                            <div class="input-toolbar">
                                <button class="format-btn" title="Bold">
                                    <i class="fas fa-bold"></i>
                                </button>
                                <button class="format-btn" title="Italic">
                                    <i class="fas fa-italic"></i>
                                </button>
                                <button class="format-btn" title="Underline">
                                    <i class="fas fa-underline"></i>
                                </button>
                                <button class="format-btn" title="Code">
                                    <i class="fas fa-code"></i>
                                </button>
                                <button class="format-btn" title="Link">
                                    <i class="fas fa-link"></i>
                                </button>
                                <button class="format-btn" title="List">
                                    <i class="fas fa-list"></i>
                                </button>
                                <button class="format-btn" title="Quote">
                                    <i class="fas fa-quote-right"></i>
                                </button>
                            </div>
                            <div class="input-area">
                                <button class="attach-btn">
                                    <i class="fas fa-paperclip"></i>
                                </button>
                                <div class="input-wrapper">
                                    <textarea placeholder="Message #team-chat" class="message-input"></textarea>
                                </div>
                                <div class="input-actions">
                                    <button class="emoji-btn">
                                        <i class="fas fa-smile"></i>
                                    </button>
                                    <button class="voice-btn">
                                        <i class="fas fa-microphone"></i>
                                    </button>
                                    <button class="send-btn">
                                        <i class="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Panel (Optional - for thread view or member list) -->
                    <div class="team-chat-right-panel" style="display: none;">
                        <div class="panel-header">
                            <h3>Thread</h3>
                            <button class="close-panel-btn">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="panel-content">
                            <!-- Thread messages would go here -->
                        </div>
                    </div>
                </div>
            `;
            // Initialize team chat functionality
            if (typeof initializeTeamChat === 'function') {
                initializeTeamChat();
            }
            break;
    }
}

// Tab Management

