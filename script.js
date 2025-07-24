// DOM Elements
const navItems = document.querySelectorAll('.nav-item a');
const tabBtns = document.querySelectorAll('.tab-btn');
const spotlightTabs = document.querySelectorAll('.spotlight-tab');
const sectionToggle = document.querySelector('.section-toggle');
const reminderList = document.querySelector('.reminder-list');
const addProjectCard = document.querySelector('.add-project');
const calendarNavLeft = document.querySelector('.calendar-nav .fa-chevron-left');
const calendarNavRight = document.querySelector('.calendar-nav .fa-chevron-right');
const dates = document.querySelectorAll('.date');

// Mobile menu elements
let mobileMenuToggle;
let sidebarOverlay;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Save original home content immediately
    const dashboardContent = document.querySelector('.dashboard-content');
    if (dashboardContent && !window.originalHomeContent) {
        window.originalHomeContent = dashboardContent.innerHTML;
    }
    
    initializeMobileMenu();
    initializeNavigation();
    initializeTabs();
    initializeCollapsibleSections();
    initializeProjectActions();
    initializeCalendar();
    initializeSpotlightTabs();
    initializeFAB();
});

// Mobile Menu Initialization
function initializeMobileMenu() {
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
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
    sidebarOverlay.classList.toggle('active');
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('mobile-open');
    sidebarOverlay.classList.remove('active');
}

// Navigation Management
function initializeNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.parentElement.classList.remove('active'));
            
            // Add active class to clicked item
            this.parentElement.classList.add('active');
            
            // Get the page data attribute
            const page = this.getAttribute('data-page');
            handleNavigation(page);
        });
    });
}

function handleNavigation(page) {
    // This function can be extended to handle different page content
    console.log(`Navigating to: ${page}`);
    
    // Update main content based on navigation
    updateMainContent(page);
}

function updateMainContent(page) {
    const greeting = document.querySelector('.greeting');
    const dashboardContent = document.querySelector('.dashboard-content');
    const tabNavigation = document.querySelector('.tab-navigation');
    
    // Save the original content
    if (!window.originalContent) {
        window.originalContent = {
            greeting: greeting.innerHTML,
            dashboard: dashboardContent.innerHTML
        };
    }
    
    switch(page) {
        case 'home':
            greeting.innerHTML = window.originalContent.greeting;
            dashboardContent.innerHTML = window.originalContent.dashboard;
            tabNavigation.style.display = 'flex';
            // Re-initialize components after content change
            setTimeout(() => {
                initializeCollapsibleSections();
                initializeSpotlightTabs();
            }, 100);
            break;
            
        case 'daisy':
            greeting.innerHTML = 'Daisy AI <span class="greeting-question">Your intelligent productivity companion</span>';
            tabNavigation.style.display = 'none';
            renderDaisyAI(dashboardContent);
            break;
            
        case 'tasks':
            greeting.innerHTML = 'My Tasks <span class="greeting-question">Stay organized and productive</span>';
            tabNavigation.style.display = 'none';
            renderKanbanBoard(dashboardContent);
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
                initializeCalendar();
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
function initializeTabs() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get tab content
            const tabName = this.getAttribute('data-tab');
            handleTabSwitch(tabName);
        });
    });
}

function handleTabSwitch(tabName) {
    const dashboardContent = document.querySelector('.dashboard-content');
    
    switch(tabName) {
        case 'home':
            renderHomeContent(dashboardContent);
            break;
        case 'tasks':
            renderTasksContent(dashboardContent);
            break;
        case 'resources':
            renderResourcesContent(dashboardContent);
            break;
        case 'blogs':
            renderBlogsContent(dashboardContent);
            break;
        default:
            renderHomeContent(dashboardContent);
    }
}

function renderHomeContent(container) {
    // Save original content on first load
    if (!window.originalHomeContent) {
        window.originalHomeContent = container.innerHTML;
    }
    
    // Always restore from saved original content
    container.innerHTML = window.originalHomeContent;
    
    // Re-initialize components after content change
    setTimeout(() => {
        initializeCollapsibleSections();
        initializeSpotlightTabs();
        initializeCalendar();
        initializeProjectActions();
    }, 50);
}

function renderDaisyAI(container) {
    container.innerHTML = `
        <!-- Daisy AI Main Layout -->
        <div class="daisy-ai-layout">
            <!-- Left Column: Chat Interface -->
            <div class="daisy-left-column">
                <!-- Chat Header -->
                <div class="daisy-chat-header">
                    <div class="daisy-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="daisy-info">
                        <h3>Daisy AI</h3>
                        <span class="daisy-status">Online • Ready to assist</span>
                    </div>
                    <div class="daisy-actions">
                        <button class="daisy-action-btn" title="Voice Chat">
                            <i class="fas fa-microphone"></i>
                        </button>
                        <button class="daisy-action-btn" title="Clear Chat">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>

                <!-- Chat Messages -->
                <div class="daisy-chat-container">
                    <div class="daisy-message daisy-bot">
                        <div class="message-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">
                            <div class="message-bubble">
                                <p>Hello! I'm Daisy, your AI productivity assistant. I can help you with:</p>
                                <ul>
                                    <li>📝 Creating and managing tasks</li>
                                    <li>📅 Scheduling meetings and events</li>
                                    <li>📊 Analyzing project progress</li>
                                    <li>💡 Providing productivity insights</li>
                                    <li>🔍 Finding documents and resources</li>
                                </ul>
                                <p>How can I assist you today?</p>
                            </div>
                            <span class="message-time">Just now</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="daisy-quick-actions">
                    <button class="quick-action-card" onclick="handleDaisyQuickAction('schedule')">
                        <i class="fas fa-calendar-plus"></i>
                        <span>Schedule Meeting</span>
                    </button>
                    <button class="quick-action-card" onclick="handleDaisyQuickAction('tasks')">
                        <i class="fas fa-tasks"></i>
                        <span>Create Task List</span>
                    </button>
                    <button class="quick-action-card" onclick="handleDaisyQuickAction('analyze')">
                        <i class="fas fa-chart-line"></i>
                        <span>Analyze Progress</span>
                    </button>
                    <button class="quick-action-card" onclick="handleDaisyQuickAction('insights')">
                        <i class="fas fa-lightbulb"></i>
                        <span>Get Insights</span>
                    </button>
                </div>

                <!-- Chat Input -->
                <div class="daisy-chat-input">
                    <div class="input-container">
                        <input type="text" id="daisyInput" placeholder="Ask Daisy anything..." />
                        <button class="input-action-btn" onclick="attachFile()">
                            <i class="fas fa-paperclip"></i>
                        </button>
                        <button class="input-action-btn" onclick="toggleVoice()">
                            <i class="fas fa-microphone"></i>
                        </button>
                        <button class="send-btn" onclick="sendDaisyMessage()">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Right Column: AI Insights & Features -->
            <div class="daisy-right-column">
                <!-- AI Insights Widget -->
                <div class="daisy-insights-card">
                    <div class="insights-header">
                        <i class="fas fa-brain"></i>
                        <h4>AI Insights</h4>
                        <span class="insights-badge">Live</span>
                    </div>
                    <div class="insights-content">
                        <div class="insight-item">
                            <div class="insight-icon productivity">
                                <i class="fas fa-trending-up"></i>
                            </div>
                            <div class="insight-info">
                                <h5>Productivity Boost</h5>
                                <p>You're 23% more productive this week! Your focus time has increased.</p>
                            </div>
                        </div>
                        <div class="insight-item">
                            <div class="insight-icon schedule">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div class="insight-info">
                                <h5>Optimal Schedule</h5>
                                <p>Best time for deep work: 9-11 AM. Consider blocking this time.</p>
                            </div>
                        </div>
                        <div class="insight-item">
                            <div class="insight-icon tasks">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div class="insight-info">
                                <h5>Task Pattern</h5>
                                <p>You complete 40% more tasks on Tuesdays. Plan important work accordingly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Smart Suggestions -->
                <div class="daisy-suggestions-card">
                    <div class="suggestions-header">
                        <i class="fas fa-magic"></i>
                        <h4>Smart Suggestions</h4>
                    </div>
                    <div class="suggestions-list">
                        <div class="suggestion-item">
                            <div class="suggestion-type">
                                <i class="fas fa-envelope"></i>
                                <span>Email</span>
                            </div>
                            <p>Draft follow-up email for yesterday's client meeting</p>
                            <button class="suggestion-btn">Apply</button>
                        </div>
                        <div class="suggestion-item">
                            <div class="suggestion-type">
                                <i class="fas fa-calendar"></i>
                                <span>Calendar</span>
                            </div>
                            <p>Block 2 hours tomorrow for the quarterly report</p>
                            <button class="suggestion-btn">Schedule</button>
                        </div>
                        <div class="suggestion-item">
                            <div class="suggestion-type">
                                <i class="fas fa-users"></i>
                                <span>Team</span>
                            </div>
                            <p>Schedule team sync - it's been 5 days since last meeting</p>
                            <button class="suggestion-btn">Create</button>
                        </div>
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="daisy-activity-card">
                    <div class="activity-header">
                        <i class="fas fa-history"></i>
                        <h4>Recent AI Actions</h4>
                    </div>
                    <div class="activity-list">
                        <div class="activity-item">
                            <div class="activity-time">2 min ago</div>
                            <div class="activity-desc">
                                <i class="fas fa-tasks"></i>
                                <span>Created 3 tasks from meeting notes</span>
                            </div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-time">15 min ago</div>
                            <div class="activity-desc">
                                <i class="fas fa-chart-bar"></i>
                                <span>Generated weekly productivity report</span>
                            </div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-time">1 hour ago</div>
                            <div class="activity-desc">
                                <i class="fas fa-calendar-plus"></i>
                                <span>Scheduled team meeting for next week</span>
                            </div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-time">2 hours ago</div>
                            <div class="activity-desc">
                                <i class="fas fa-lightbulb"></i>
                                <span>Provided optimization suggestions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize Daisy AI functionality
    initializeDaisyAI();
}

function renderKanbanBoard(container) {
    container.innerHTML = `
        <!-- Kanban Board Header -->
        <div class="kanban-header">
            <div class="kanban-title">
                <h2>Project Board</h2>
                <span class="project-category">Development Team</span>
            </div>
            <div class="kanban-controls">
                <button class="kanban-btn add-task-btn" onclick="openTaskModal()">
                    <i class="fas fa-plus"></i>
                    Add task
                </button>
                <div class="kanban-options">
                    <button class="kanban-btn filter-btn">
                        <i class="fas fa-filter"></i>
                        Filter
                    </button>
                    <button class="kanban-btn sort-btn">
                        <i class="fas fa-sort"></i>
                        Sort
                    </button>
                    <button class="kanban-btn view-btn">
                        <i class="fas fa-eye"></i>
                        View
                    </button>
                </div>
            </div>
        </div>

        <!-- Kanban Board -->
        <div class="kanban-board">
            <!-- Not Ready Column -->
            <div class="kanban-column" data-status="not-ready">
                <div class="column-header">
                    <h3>Not Ready</h3>
                    <div class="column-actions">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div class="column-content" id="not-ready-tasks">
                    <div class="task-card" draggable="true" data-task-id="1">
                        <div class="task-image">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=120&fit=crop&crop=center" alt="Dashboard design">
                        </div>
                        <div class="task-content">
                            <h4>Design system implementation</h4>
                            <div class="task-labels">
                                <span class="task-label design">Design</span>
                                <span class="task-label frontend">Frontend</span>
                            </div>
                            <div class="task-stats">
                                <span class="task-stat"><i class="fas fa-paperclip"></i> 3</span>
                                <span class="task-stat"><i class="fas fa-comment"></i> 1</span>
                            </div>
                            <div class="task-assignees">
                                <div class="assignee-avatar">JS</div>
                                <div class="assignee-avatar">MK</div>
                                <div class="assignee-avatar">AL</div>
                            </div>
                        </div>
                    </div>

                    <div class="task-card" draggable="true" data-task-id="2">
                        <div class="task-content">
                            <h4>Database schema optimization</h4>
                            <div class="task-labels">
                                <span class="task-label backend">Backend</span>
                                <span class="task-label database">Database</span>
                            </div>
                            <div class="task-stats">
                                <span class="task-stat"><i class="fas fa-paperclip"></i> 3</span>
                                <span class="task-stat"><i class="fas fa-comment"></i> 1</span>
                            </div>
                            <div class="task-assignees">
                                <div class="assignee-avatar">TM</div>
                                <div class="assignee-avatar">RJ</div>
                                <div class="assignee-avatar">SK</div>
                            </div>
                        </div>
                    </div>

                    <div class="add-task-placeholder" onclick="openTaskModal('not-ready')">
                        <i class="fas fa-plus"></i>
                        <span>Add task</span>
                    </div>
                </div>
            </div>

            <!-- To Do Column -->
            <div class="kanban-column" data-status="todo">
                <div class="column-header">
                    <h3>To Do</h3>
                    <div class="column-actions">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div class="column-content" id="todo-tasks">
                    <div class="task-card" draggable="true" data-task-id="3">
                        <div class="task-content">
                            <h4>API endpoint documentation</h4>
                            <div class="task-labels">
                                <span class="task-label api">API</span>
                                <span class="task-label docs">Documentation</span>
                            </div>
                            <div class="task-stats">
                                <span class="task-stat"><i class="fas fa-paperclip"></i> 3</span>
                                <span class="task-stat"><i class="fas fa-comment"></i> 2</span>
                            </div>
                            <div class="task-assignees">
                                <div class="assignee-avatar">CL</div>
                                <div class="assignee-avatar">NK</div>
                            </div>
                        </div>
                    </div>

                    <div class="task-card" draggable="true" data-task-id="4">
                        <div class="task-image">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=120&fit=crop&crop=center" alt="Analytics dashboard">
                        </div>
                        <div class="task-content">
                            <h4>User analytics integration</h4>
                            <div class="task-labels">
                                <span class="task-label analytics">Analytics</span>
                                <span class="task-label integration">Integration</span>
                            </div>
                            <div class="task-stats">
                                <span class="task-stat"><i class="fas fa-paperclip"></i> 2</span>
                                <span class="task-stat"><i class="fas fa-comment"></i> 2</span>
                            </div>
                            <div class="task-assignees">
                                <div class="assignee-avatar">DM</div>
                                <div class="assignee-avatar">PL</div>
                            </div>
                        </div>
                    </div>

                    <div class="add-task-placeholder" onclick="openTaskModal('todo')">
                        <i class="fas fa-plus"></i>
                        <span>Add task</span>
                    </div>
                </div>
            </div>

            <!-- In Progress Column -->
            <div class="kanban-column" data-status="in-progress">
                <div class="column-header">
                    <h3>In Progress</h3>
                    <div class="column-actions">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div class="column-content" id="in-progress-tasks">
                    <div class="task-card" draggable="true" data-task-id="5">
                        <div class="task-content">
                            <h4>Authentication system refactor</h4>
                            <div class="task-labels">
                                <span class="task-label security">Security</span>
                                <span class="task-label refactor">Refactor</span>
                            </div>
                            <div class="task-stats">
                                <span class="task-stat"><i class="fas fa-paperclip"></i> 3</span>
                                <span class="task-stat"><i class="fas fa-comment"></i> 1</span>
                            </div>
                            <div class="task-assignees">
                                <div class="assignee-avatar">MT</div>
                                <div class="assignee-avatar">JS</div>
                            </div>
                        </div>
                    </div>

                    <div class="task-card" draggable="true" data-task-id="6">
                        <div class="task-image">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=120&fit=crop&crop=center" alt="Team collaboration">
                        </div>
                        <div class="task-content">
                            <h4>Team collaboration features</h4>
                            <div class="task-labels">
                                <span class="task-label collaboration">Collaboration</span>
                                <span class="task-label feature">Feature</span>
                            </div>
                            <div class="task-stats">
                                <span class="task-stat"><i class="fas fa-paperclip"></i> 2</span>
                                <span class="task-stat"><i class="fas fa-comment"></i> 2</span>
                            </div>
                            <div class="task-assignees">
                                <div class="assignee-avatar">AR</div>
                                <div class="assignee-avatar">TK</div>
                            </div>
                        </div>
                    </div>

                    <div class="add-task-placeholder" onclick="openTaskModal('in-progress')">
                        <i class="fas fa-plus"></i>
                        <span>Add task</span>
                    </div>
                </div>
            </div>

            <!-- In Review Column -->
            <div class="kanban-column" data-status="in-review">
                <div class="column-header">
                    <h3>In Review</h3>
                    <div class="column-actions">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div class="column-content" id="in-review-tasks">
                    <div class="task-card" draggable="true" data-task-id="7">
                        <div class="task-image">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=120&fit=crop&crop=center" alt="Code review">
                        </div>
                        <div class="task-content">
                            <h4>Performance optimization review</h4>
                            <div class="task-labels">
                                <span class="task-label performance">Performance</span>
                                <span class="task-label review">Review</span>
                            </div>
                            <div class="task-stats">
                                <span class="task-stat"><i class="fas fa-paperclip"></i> 3</span>
                                <span class="task-stat"><i class="fas fa-comment"></i> 1</span>
                            </div>
                            <div class="task-assignees">
                                <div class="assignee-avatar">KS</div>
                                <div class="assignee-avatar">ML</div>
                            </div>
                        </div>
                    </div>

                    <div class="task-card" draggable="true" data-task-id="8">
                        <div class="task-content">
                            <h4>Mobile responsive updates</h4>
                            <div class="task-labels">
                                <span class="task-label mobile">Mobile</span>
                                <span class="task-label responsive">Responsive</span>
                            </div>
                            <div class="task-stats">
                                <span class="task-stat"><i class="fas fa-paperclip"></i> 2</span>
                            </div>
                            <div class="task-assignees">
                                <div class="assignee-avatar">VB</div>
                            </div>
                        </div>
                    </div>

                    <div class="add-task-placeholder" onclick="openTaskModal('in-review')">
                        <i class="fas fa-plus"></i>
                        <span>Add task</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Task Modal -->
        <div class="task-modal" id="taskModal" style="display: none;">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Add New Task</h3>
                    <button class="close-modal" onclick="closeTaskModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="taskForm">
                        <div class="form-group">
                            <label>Task Title</label>
                            <input type="text" id="taskTitle" placeholder="Enter task title" required>
                        </div>
                        <div class="form-group">
                            <label>Labels</label>
                            <div class="label-input">
                                <input type="text" id="labelInput" placeholder="Add label">
                                <button type="button" onclick="addLabel()">Add</button>
                            </div>
                            <div class="selected-labels" id="selectedLabels"></div>
                        </div>
                        <div class="form-group">
                            <label>Assignees</label>
                            <div class="assignee-input">
                                <input type="text" id="assigneeInput" placeholder="Assignee initials" maxlength="2">
                                <button type="button" onclick="addAssignee()">Add</button>
                            </div>
                            <div class="selected-assignees" id="selectedAssignees"></div>
                        </div>
                        <div class="form-actions">
                            <button type="button" onclick="closeTaskModal()">Cancel</button>
                            <button type="submit">Create Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;
    
    // Initialize Kanban functionality
    initializeKanbanBoard();
}

function renderTasksContent(container) {
    container.innerHTML = `
        <div class="tasks-dashboard-row">
            <!-- Left Column -->
            <div class="tasks-left-column">
                <!-- My Tasks Section -->
                <section class="my-tasks-card">
                    <div class="section-header tasks-header">
                        <div class="header-left">
                            <i class="fas fa-tasks"></i>
                            <h3>My Tasks</h3>
                        </div>
                        <div class="header-actions">
                            <button class="tasks-add-btn">
                                <i class="fas fa-plus"></i>
                            </button>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    
                    <!-- In Progress Tasks -->
                    <div class="task-group">
                        <div class="task-group-header" data-group="in-progress">
                            <i class="fas fa-chevron-down task-chevron"></i>
                            <span class="task-status in-progress">IN PROGRESS</span>
                            <span class="task-count">• 2 tasks</span>
                            <div class="task-group-info">
                                <span>Priority</span>
                                <span>Due date</span>
                            </div>
                        </div>
                        <div class="task-list" id="in-progress-tasks">
                            <div class="task-item">
                                <div class="task-checkbox">
                                    <input type="checkbox" id="task1">
                                    <label for="task1"></label>
                                </div>
                                <div class="task-content">
                                    <span class="task-title">One-on-One Meeting</span>
                                </div>
                                <div class="task-priority">
                                    <span class="priority-badge high">High</span>
                                </div>
                                <div class="task-due-date">
                                    <span class="due-today">Today</span>
                                </div>
                            </div>
                            <div class="task-item">
                                <div class="task-checkbox">
                                    <input type="checkbox" id="task2">
                                    <label for="task2"></label>
                                </div>
                                <div class="task-content">
                                    <span class="task-title">Send a summary email to stakeholders</span>
                                </div>
                                <div class="task-priority">
                                    <span class="priority-badge low">Low</span>
                                </div>
                                <div class="task-due-date">
                                    <span class="due-later">3 days left</span>
                                </div>
                            </div>
                        </div>
                        <button class="add-task-btn" data-group="in-progress">
                            <i class="fas fa-plus"></i>
                            <span>Add task</span>
                        </button>
                    </div>
                    
                    <!-- To Do Tasks -->
                    <div class="task-group">
                        <div class="task-group-header" data-group="todo">
                            <i class="fas fa-chevron-down task-chevron"></i>
                            <span class="task-status todo">TO DO</span>
                            <span class="task-count">• 1 task</span>
                        </div>
                        <div class="task-list collapsed" id="todo-tasks">
                            <div class="task-item">
                                <div class="task-checkbox">
                                    <input type="checkbox" id="task3">
                                    <label for="task3"></label>
                                </div>
                                <div class="task-content">
                                    <span class="task-title">Review quarterly performance metrics</span>
                                </div>
                                <div class="task-priority">
                                    <span class="priority-badge medium">Medium</span>
                                </div>
                                <div class="task-due-date">
                                    <span class="due-later">Tomorrow</span>
                                </div>
                            </div>
                        </div>
                        <button class="add-task-btn" data-group="todo" style="display: none;">
                            <i class="fas fa-plus"></i>
                            <span>Add task</span>
                        </button>
                    </div>
                    
                    <!-- Upcoming Tasks -->
                    <div class="task-group">
                        <div class="task-group-header" data-group="upcoming">
                            <i class="fas fa-chevron-down task-chevron"></i>
                            <span class="task-status upcoming">UPCOMING</span>
                            <span class="task-count">• 1 tasks</span>
                        </div>
                        <div class="task-list collapsed" id="upcoming-tasks">
                            <div class="task-item">
                                <div class="task-checkbox">
                                    <input type="checkbox" id="task4">
                                    <label for="task4"></label>
                                </div>
                                <div class="task-content">
                                    <span class="task-title">Prepare client presentation</span>
                                </div>
                                <div class="task-priority">
                                    <span class="priority-badge high">High</span>
                                </div>
                                <div class="task-due-date">
                                    <span class="due-later">Next week</span>
                                </div>
                            </div>
                        </div>
                        <button class="add-task-btn" data-group="upcoming" style="display: none;">
                            <i class="fas fa-plus"></i>
                            <span>Add task</span>
                        </button>
                    </div>
                </section>
                
                <!-- My Goals Section -->
                <section class="my-goals-card">
                    <div class="section-header">
                        <div class="header-left">
                            <i class="fas fa-bullseye"></i>
                            <h3>My Goals</h3>
                        </div>
                    </div>
                    <div class="goals-list">
                        <div class="goal-item">
                            <div class="goal-info">
                                <h4>Check Emails and Messages</h4>
                                <p>Product launch • My Projects</p>
                            </div>
                            <div class="goal-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 73%"></div>
                                </div>
                                <span class="progress-text">73%</span>
                            </div>
                        </div>
                        <div class="goal-item">
                            <div class="goal-info">
                                <h4>Prepare a brief status update to the client</h4>
                                <p>Product launch • My Projects</p>
                            </div>
                            <div class="goal-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 11%"></div>
                                </div>
                                <span class="progress-text">11%</span>
                            </div>
                        </div>
                        <div class="goal-item">
                            <div class="goal-info">
                                <h4>Update project documentation</h4>
                                <p>Team brainstorm • My Projects</p>
                            </div>
                            <div class="goal-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 63%"></div>
                                </div>
                                <span class="progress-text">63%</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Right Column -->
            <div class="tasks-right-column">
                <!-- Time Tracking Section -->
                <section class="time-tracking-card">
                    <div class="section-header">
                        <div class="header-left">
                            <i class="fas fa-clock"></i>
                            <h3>Time Tracking</h3>
                        </div>
                    </div>
                    <div class="time-tracker-content">
                        <div class="tracker-project">
                            <div class="project-selector">
                                <i class="fas fa-folder"></i>
                                <span>Slack Web Redesign</span>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="time-display">
                            <div class="time-status">AWAITING</div>
                            <div class="time-counter" id="timeCounter">01:45:15</div>
                            <button class="start-timer-btn" id="startTimerBtn">
                                <i class="fas fa-play"></i>
                                <span>Start Time Tracker</span>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Previous Tasks -->
                    <div class="previous-tasks">
                        <h4>Previous Tasks</h4>
                        <div class="previous-task-item">
                            <div class="task-icon">
                                <i class="fas fa-laptop"></i>
                            </div>
                            <div class="task-details">
                                <span class="task-name">Loom App Design</span>
                                <span class="task-time">1:24:23</span>
                            </div>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        <div class="previous-task-item">
                            <div class="task-icon ai">
                                <i class="fas fa-brain"></i>
                            </div>
                            <div class="task-details">
                                <span class="task-name">AI Web Dashboard Design</span>
                                <span class="task-time">00:24:23</span>
                            </div>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        <div class="previous-task-item">
                            <div class="task-icon dashboard">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div class="task-details">
                                <span class="task-name">AI Web Dashboard Design</span>
                                <span class="task-time">00:24:23</span>
                            </div>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </section>
                
                <!-- Notes Section -->
                <section class="notes-card">
                    <div class="section-header">
                        <div class="header-left">
                            <i class="fas fa-sticky-note"></i>
                            <h3>Notes</h3>
                        </div>
                        <button class="add-note-btn">
                            <i class="fas fa-plus"></i>
                            <span>Add Note</span>
                        </button>
                    </div>
                    <div class="notes-list">
                        <div class="note-item">
                            <div class="note-status"></div>
                            <div class="note-content">
                                <h4>Meeting with Arthur Taylor</h4>
                                <p>Discuss the Loop Website Redesign...</p>
                                <div class="note-tags">
                                    <span class="tag today">Today</span>
                                    <span class="tag meeting">Meeting</span>
                                    <span class="note-date">Aug 03</span>
                                </div>
                            </div>
                        </div>
                        <div class="note-item">
                            <div class="note-status"></div>
                            <div class="note-content">
                                <h4>Meeting with Arthur Taylor</h4>
                                <p>Discuss the Loop Website Redesign...</p>
                                <div class="note-tags">
                                    <span class="tag today">Today</span>
                                    <span class="tag todo">To Do</span>
                                    <span class="note-date">Aug 03</span>
                                </div>
                            </div>
                        </div>
                        <div class="note-item completed">
                            <div class="note-status completed"></div>
                            <div class="note-content">
                                <h4>Meeting with Arthur Taylor</h4>
                                <p>Discuss the Loop Website Redesign...</p>
                                <div class="note-tags">
                                    <span class="tag today">Today</span>
                                    <span class="tag todo">To Do</span>
                                    <span class="note-date">Aug 03</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;
    
    // Initialize task functionality
    initializeTasksFeatures();
}

// Kanban Board Functions
function initializeKanbanBoard() {
    // Initialize drag and drop
    initializeDragAndDrop();
    
    // Initialize modal form
    initializeTaskModal();
}

function initializeDragAndDrop() {
    const taskCards = document.querySelectorAll('.task-card');
    const columns = document.querySelectorAll('.column-content');
    
    taskCards.forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
    });
    
    columns.forEach(column => {
        column.addEventListener('dragover', handleDragOver);
        column.addEventListener('drop', handleDrop);
        column.addEventListener('dragenter', handleDragEnter);
        column.addEventListener('dragleave', handleDragLeave);
    });
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedElement = null;
    
    // Remove drag over effects from all columns
    document.querySelectorAll('.column-content').forEach(col => {
        col.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    if (!this.contains(e.relatedTarget)) {
        this.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    if (draggedElement && this !== draggedElement.parentNode) {
        // Find the add task placeholder and insert before it
        const addPlaceholder = this.querySelector('.add-task-placeholder');
        if (addPlaceholder) {
            this.insertBefore(draggedElement, addPlaceholder);
        } else {
            this.appendChild(draggedElement);
        }
        
        // Update task status based on column
        const newStatus = this.parentNode.getAttribute('data-status');
        draggedElement.setAttribute('data-status', newStatus);
    }
}

// Task Modal Functions
let currentColumn = null;
let taskLabels = [];
let taskAssignees = [];

function openTaskModal(columnStatus = null) {
    currentColumn = columnStatus;
    taskLabels = [];
    taskAssignees = [];
    
    const modal = document.getElementById('taskModal');
    modal.style.display = 'flex';
    
    // Clear form
    document.getElementById('taskTitle').value = '';
    document.getElementById('labelInput').value = '';
    document.getElementById('assigneeInput').value = '';
    document.getElementById('selectedLabels').innerHTML = '';
    document.getElementById('selectedAssignees').innerHTML = '';
    
    // Focus on title input
    setTimeout(() => {
        document.getElementById('taskTitle').focus();
    }, 100);
}

function closeTaskModal() {
    const modal = document.getElementById('taskModal');
    modal.style.display = 'none';
}

function addLabel() {
    const labelInput = document.getElementById('labelInput');
    const labelText = labelInput.value.trim();
    
    if (labelText && !taskLabels.includes(labelText)) {
        taskLabels.push(labelText);
        updateSelectedLabels();
        labelInput.value = '';
    }
}

function updateSelectedLabels() {
    const container = document.getElementById('selectedLabels');
    container.innerHTML = '';
    
    taskLabels.forEach((label, index) => {
        const labelElement = document.createElement('div');
        labelElement.className = 'selected-label';
        labelElement.innerHTML = `
            <span>${label}</span>
            <button type="button" onclick="removeLabel(${index})">×</button>
        `;
        container.appendChild(labelElement);
    });
}

function removeLabel(index) {
    taskLabels.splice(index, 1);
    updateSelectedLabels();
}

function addAssignee() {
    const assigneeInput = document.getElementById('assigneeInput');
    const assigneeText = assigneeInput.value.trim().toUpperCase();
    
    if (assigneeText && assigneeText.length <= 2 && !taskAssignees.includes(assigneeText)) {
        taskAssignees.push(assigneeText);
        updateSelectedAssignees();
        assigneeInput.value = '';
    }
}

function updateSelectedAssignees() {
    const container = document.getElementById('selectedAssignees');
    container.innerHTML = '';
    
    taskAssignees.forEach((assignee, index) => {
        const assigneeElement = document.createElement('div');
        assigneeElement.className = 'selected-assignee';
        assigneeElement.innerHTML = `
            <div class="assignee-avatar">${assignee}</div>
            <button type="button" onclick="removeAssignee(${index})">×</button>
        `;
        container.appendChild(assigneeElement);
    });
}

function removeAssignee(index) {
    taskAssignees.splice(index, 1);
    updateSelectedAssignees();
}

function initializeTaskModal() {
    const form = document.getElementById('taskForm');
    form.addEventListener('submit', handleTaskSubmit);
    
    // Close modal when clicking outside
    document.getElementById('taskModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeTaskModal();
        }
    });
    
    // Handle Enter key in inputs
    document.getElementById('labelInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addLabel();
        }
    });
    
    document.getElementById('assigneeInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addAssignee();
        }
    });
}

function handleTaskSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('taskTitle').value.trim();
    if (!title) return;
    
    // Create new task card
    const taskId = Date.now();
    const taskCard = createTaskCard(taskId, title, taskLabels, taskAssignees);
    
    // Add to appropriate column
    const targetColumn = currentColumn ? 
        document.getElementById(`${currentColumn}-tasks`) : 
        document.getElementById('not-ready-tasks');
    
    const addPlaceholder = targetColumn.querySelector('.add-task-placeholder');
    targetColumn.insertBefore(taskCard, addPlaceholder);
    
    // Re-initialize drag and drop for new card
    taskCard.addEventListener('dragstart', handleDragStart);
    taskCard.addEventListener('dragend', handleDragEnd);
    
    // Close modal
    closeTaskModal();
}

function createTaskCard(id, title, labels, assignees) {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.draggable = true;
    taskCard.setAttribute('data-task-id', id);
    
    const labelsHtml = labels.map(label => 
        `<span class="task-label ${label.toLowerCase()}">${label}</span>`
    ).join('');
    
    const assigneesHtml = assignees.map(assignee => 
        `<div class="assignee-avatar">${assignee}</div>`
    ).join('');
    
    taskCard.innerHTML = `
        <div class="task-content">
            <h4>${title}</h4>
            <div class="task-labels">
                ${labelsHtml}
            </div>
            <div class="task-stats">
                <span class="task-stat"><i class="fas fa-paperclip"></i> 0</span>
                <span class="task-stat"><i class="fas fa-comment"></i> 0</span>
            </div>
            <div class="task-assignees">
                ${assigneesHtml}
            </div>
        </div>
    `;
    
    return taskCard;
}

function renderResourcesContent(container) {
    container.innerHTML = `
        <!-- Compact Resources Header -->
        <div class="resources-header">
            <div class="resources-title-section">
                <h2>RESOURCE LIBRARY</h2>
                <div class="resources-search">
                    <input type="text" placeholder="Search documents, templates..." class="search-input">
                    <button class="search-btn">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
            
            <!-- Quick Categories -->
            <div class="quick-categories">
                <div class="category-pill documents">
                    <i class="fas fa-file-alt"></i>
                    <span>Documents</span>
                    <span class="category-count">45</span>
                </div>
                <div class="category-pill templates">
                    <i class="fas fa-file-powerpoint"></i>
                    <span>Templates</span>
                    <span class="category-count">28</span>
                </div>
                <div class="category-pill forms">
                    <i class="fas fa-wpforms"></i>
                    <span>Forms</span>
                    <span class="category-count">33</span>
                </div>
                <div class="category-pill policies">
                    <i class="fas fa-shield-alt"></i>
                    <span>Policies</span>
                    <span class="category-count">19</span>
                </div>
            </div>
        </div>

        <!-- Main Content Grid -->
        <div class="resources-main-layout">
            <!-- Left Side: Featured & Popular -->
            <div class="resources-left">
                <!-- Featured Resources Compact -->
                <div class="featured-compact">
                    <div class="section-title">
                        <h3>Featured Resources</h3>
                        <span class="resource-badge-new">3 NEW</span>
                    </div>
                    
                    <div class="featured-grid">
                        <div class="resource-card compact">
                            <div class="resource-thumb">
                                <div class="placeholder-doc">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                                <div class="resource-badge">NEW</div>
                            </div>
                            <div class="resource-compact-info">
                                <span class="resource-category">DOCUMENT</span>
                                <h4>Project Management Guide</h4>
                                <div class="resource-meta">
                                    <div class="resource-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="resource-size">2.1 MB</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="resource-card compact">
                            <div class="resource-thumb">
                                <div class="placeholder-doc template">
                                    <i class="fas fa-file-powerpoint"></i>
                                </div>
                                <div class="resource-badge popular">HOT</div>
                            </div>
                            <div class="resource-compact-info">
                                <span class="resource-category">TEMPLATE</span>
                                <h4>Presentation Templates</h4>
                                <div class="resource-meta">
                                    <div class="resource-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <span class="resource-size">15.3 MB</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="resource-card compact">
                            <div class="resource-thumb">
                                <div class="placeholder-doc guide">
                                    <i class="fas fa-book"></i>
                                </div>
                            </div>
                            <div class="resource-compact-info">
                                <span class="resource-category">HANDBOOK</span>
                                <h4>Employee Handbook</h4>
                                <div class="resource-meta">
                                    <div class="resource-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="resource-size">5.8 MB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Popular Downloads -->
                <div class="popular-downloads">
                    <div class="section-title">
                        <h3>Popular Downloads</h3>
                        <button class="view-all-link">View All</button>
                    </div>
                    
                    <div class="download-list">
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-pdf"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Meeting Templates Pack</span>
                                <span class="download-stats">2.5 MB • 1.2k downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-excel"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Budget Tracker Template</span>
                                <span class="download-stats">1.2 MB • 856 downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-word"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Report Template</span>
                                <span class="download-stats">0.8 MB • 743 downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-powerpoint"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Onboarding Presentation</span>
                                <span class="download-stats">15.3 MB • 622 downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Company Policy Guide</span>
                                <span class="download-stats">3.1 MB • 445 downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        
                        <div class="download-item">
                            <div class="download-icon">
                                <i class="fas fa-file-code"></i>
                            </div>
                            <div class="download-info">
                                <span class="download-name">Development Guidelines</span>
                                <span class="download-stats">2.7 MB • 388 downloads</span>
                            </div>
                            <button class="download-btn-small">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Side: Categories & Recent -->
            <div class="resources-right">
                <!-- Category Showcase -->
                <div class="category-showcase-compact">
                    <div class="section-title">
                        <h3>Browse Categories</h3>
                    </div>
                    
                    <div class="category-cards-grid">
                        <div class="category-card-small policy">
                            <div class="category-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Policies & Procedures</span>
                                <span class="category-count">45 documents</span>
                            </div>
                        </div>
                        
                        <div class="category-card-small training">
                            <div class="category-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Training Materials</span>
                                <span class="category-count">28 resources</span>
                            </div>
                        </div>
                        
                        <div class="category-card-small guidelines">
                            <div class="category-icon">
                                <i class="fas fa-clipboard-check"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Guidelines & SOPs</span>
                                <span class="category-count">33 guides</span>
                            </div>
                        </div>
                        
                        <div class="category-card-small templates">
                            <div class="category-icon">
                                <i class="fas fa-file-powerpoint"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Templates & Forms</span>
                                <span class="category-count">56 files</span>
                            </div>
                        </div>
                        
                        <div class="category-card-small reports">
                            <div class="category-icon">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Reports & Analytics</span>
                                <span class="category-count">22 reports</span>
                            </div>
                        </div>
                        
                        <div class="category-card-small resources">
                            <div class="category-icon">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <div class="category-info">
                                <span class="category-name">Learning Resources</span>
                                <span class="category-count">41 materials</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="recent-activity">
                    <div class="section-title">
                        <h3>Recent Activity</h3>
                        <span class="activity-indicator">Live</span>
                    </div>
                    
                    <div class="activity-list">
                        <div class="activity-item">
                            <div class="activity-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="activity-info">
                                <span class="activity-text"><strong>Sarah Johnson</strong> downloaded <em>Budget Template</em></span>
                                <span class="activity-time">2 minutes ago</span>
                            </div>
                        </div>
                        
                        <div class="activity-item">
                            <div class="activity-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="activity-info">
                                <span class="activity-text"><strong>Mike Chen</strong> added new <em>Training Material</em></span>
                                <span class="activity-time">15 minutes ago</span>
                            </div>
                        </div>
                        
                        <div class="activity-item">
                            <div class="activity-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="activity-info">
                                <span class="activity-text"><strong>Emma Davis</strong> updated <em>Policy Document</em></span>
                                <span class="activity-time">1 hour ago</span>
                            </div>
                        </div>
                        
                        <div class="activity-item">
                            <div class="activity-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="activity-info">
                                <span class="activity-text"><strong>Alex Kim</strong> shared <em>Presentation Template</em></span>
                                <span class="activity-time">2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="quick-stats">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-download"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-number">2,847</span>
                            <span class="stat-label">Total Downloads</span>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-file"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-number">225</span>
                            <span class="stat-label">Available Files</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderBlogsContent(container) {
    container.innerHTML = `
        <!-- Blogs Hero Section -->
        <div class="blogs-hero">
            <div class="hero-content">
                <div class="hero-text">
                    <h2>Craft narratives <span class="highlight">that ignite</span> <span class="highlight-blue">inspiration</span>, <span class="highlight-green">knowledge</span>, and <span class="highlight-orange">entertainment</span></h2>
                </div>
                <div class="hero-image">
                    <div class="hero-image-container">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=240&fit=crop&crop=center" alt="Team meeting and project management" class="hero-img">
                        <div class="hero-badge">FEATURED</div>
                    </div>
                    <div class="hero-article-info">
                        <div class="author-info">
                            <div class="author-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <span class="author-name">Jackson • 8 min read</span>
                        </div>
                        <h3>Essential Project Management Strategies for Modern Teams</h3>
                        <p>Discover proven methodologies and frameworks that successful organizations use to deliver projects on time and within budget...</p>
                        <div class="article-meta">
                            <span class="category">Business</span>
                            <span class="read-time">8 min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Latest News Section -->
        <div class="blogs-section">
            <div class="section-header-blogs">
                <h3>Latest News</h3>
                <a href="#" class="see-all">See all →</a>
            </div>
            <div class="blogs-grid">
                <article class="blog-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=160&fit=crop&crop=center" alt="Software development" class="blog-img">
                        <div class="blog-category">Technology</div>
                    </div>
                    <div class="blog-content">
                        <h4>Software Development Best Practices and Productivity Tips</h4>
                        <p>Learn essential development methodologies and tools that help teams deliver high-quality software efficiently...</p>
                        <div class="blog-meta">
                            <span class="blog-date">April 5 • 8 min read</span>
                        </div>
                    </div>
                </article>

                <article class="blog-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=160&fit=crop&crop=center" alt="Team leadership" class="blog-img">
                        <div class="blog-category">Leadership</div>
                    </div>
                    <div class="blog-content">
                        <h4>Team Leadership Strategies for Competitive Success</h4>
                        <p>Explore effective leadership techniques and team management approaches that drive performance and results...</p>
                        <div class="blog-meta">
                            <span class="blog-date">Leadership • 6 min read</span>
                        </div>
                    </div>
                </article>

                <article class="blog-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=160&fit=crop&crop=center" alt="Business partnership" class="blog-img">
                        <div class="blog-category">Business</div>
                    </div>
                    <div class="blog-content">
                        <h4>Strategic Partnership Development: Building Strong Client Relationships</h4>
                        <p>Explore effective strategies for developing long-term partnerships that drive mutual growth and success...</p>
                        <div class="blog-meta">
                            <span class="blog-date">Business • 5 min read</span>
                        </div>
                    </div>
                </article>

                <article class="blog-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=160&fit=crop&crop=center" alt="Financial planning" class="blog-img">
                        <div class="blog-category">Finance</div>
                    </div>
                    <div class="blog-content">
                        <h4>Financial Planning Strategies for Growing Businesses</h4>
                        <p>Comprehensive guide to budgeting, forecasting, and investment strategies that help companies scale effectively...</p>
                        <div class="blog-meta">
                            <span class="blog-date">Finance • 6 min read</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- Must Read Section -->
        <div class="blogs-section">
            <div class="section-header-blogs">
                <h3>Must Read</h3>
                <a href="#" class="see-all">See all →</a>
            </div>
            <div class="must-read-grid">
                <article class="must-read-main">
                    <div class="blog-image-large">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=240&fit=crop&crop=center" alt="Strategic planning" class="blog-img-large">
                        <div class="blog-category">Strategy</div>
                    </div>
                    <div class="blog-content">
                        <h3>Strategic Planning: Building Competitive Advantage in Dynamic Markets</h3>
                        <p>Learn how successful companies develop and execute strategic initiatives that create sustainable competitive advantages in rapidly changing business environments...</p>
                        <div class="blog-meta">
                            <span class="blog-date">Strategy • 5 min read</span>
                        </div>
                    </div>
                </article>

                <div class="must-read-sidebar">
                    <article class="sidebar-article">
                        <div class="blog-image-small">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=60&fit=crop&crop=center" alt="Women leadership" class="blog-img-small">
                        </div>
                        <div class="blog-content">
                            <div class="blog-category">Leadership</div>
                            <h4>Empowering Women Leaders: Breaking Barriers in Corporate Culture</h4>
                            <div class="blog-meta">
                                <span class="blog-date">Leadership • 10 min read</span>
                            </div>
                        </div>
                    </article>

                    <article class="sidebar-article">
                        <div class="blog-image-small">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=60&fit=crop&crop=center" alt="Data analytics" class="blog-img-small">
                        </div>
                        <div class="blog-content">
                            <div class="blog-category">Data Science</div>
                            <h4>Data-Driven Decision Making: The Future of Business Intelligence</h4>
                            <div class="blog-meta">
                                <span class="blog-date">Analytics • 7 min read</span>
                            </div>
                        </div>
                    </article>

                    <article class="sidebar-article">
                        <div class="blog-image-small">
                            <img src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=80&h=60&fit=crop&crop=center" alt="Innovation and creativity" class="blog-img-small">
                        </div>
                        <div class="blog-content">
                            <div class="blog-category">Innovation</div>
                            <h4>Innovation Management: Fostering Creative Solutions in the Workplace</h4>
                            <div class="blog-meta">
                                <span class="blog-date">Innovation • 4 min read</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <!-- Editor's Pick Section -->
        <div class="blogs-section">
            <div class="section-header-blogs">
                <h3>Editor's Pick</h3>
                <a href="#" class="see-all">See all →</a>
            </div>
            
            <article class="editors-pick-main">
                <div class="blog-image-hero">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=320&fit=crop&crop=center" alt="Digital transformation" class="blog-img-hero">
                    <div class="blog-category">Technology</div>
                </div>
                <div class="blog-content">
                    <div class="author-info">
                        <div class="author-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <span class="author-name">Jackson • 12 min read</span>
                    </div>
                    <h2>Digital Transformation: Preparing Your Organization for the Future</h2>
                    <p>A comprehensive guide to implementing digital transformation strategies that modernize operations, enhance customer experience, and drive sustainable growth in today's competitive landscape.</p>
                </div>
            </article>

            <div class="editors-pick-grid">
                <article class="pick-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=120&fit=crop&crop=center" alt="Remote work setup" class="blog-img">
                        <div class="blog-category remote">Remote Work</div>
                    </div>
                    <div class="blog-content">
                        <h4>Remote Work Best Practices: Building Effective Distributed Teams</h4>
                        <div class="blog-meta">
                            <span class="blog-date">Workplace • 6 min read</span>
                        </div>
                    </div>
                </article>

                <article class="pick-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=120&fit=crop&crop=center" alt="AI and technology" class="blog-img">
                        <div class="blog-category ai">AI & Automation</div>
                    </div>
                    <div class="blog-content">
                        <h4>AI in Recruitment: Transforming How Companies Find Top Talent</h4>
                        <div class="blog-meta">
                            <span class="blog-date">HR Technology • 8 min read</span>
                        </div>
                    </div>
                </article>

                <article class="pick-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=120&fit=crop&crop=center" alt="Social media marketing" class="blog-img">
                        <div class="blog-category social">Social Media</div>
                    </div>
                    <div class="blog-content">
                        <h4>Social Media Strategy: Building Brand Authority in Digital Spaces</h4>
                        <div class="blog-meta">
                            <span class="blog-date">Marketing • 5 min read</span>
                        </div>
                    </div>
                </article>

                <article class="pick-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=120&fit=crop&crop=center" alt="Knowledge management" class="blog-img">
                        <div class="blog-category knowledge">Knowledge Management</div>
                    </div>
                    <div class="blog-content">
                        <h4>Building Organizational Knowledge: Documentation and Process Management</h4>
                        <div class="blog-meta">
                            <span class="blog-date">Operations • 12 min read</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    `;
}

function initializeTasksFeatures() {
    // Initialize task group expand/collapse
    const taskGroupHeaders = document.querySelectorAll('.task-group-header');
    taskGroupHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const group = this.getAttribute('data-group');
            const taskList = document.getElementById(`${group}-tasks`);
            const chevron = this.querySelector('.task-chevron');
            const addButton = this.parentElement.querySelector('.add-task-btn');
            
            if (taskList) {
                const isCollapsed = taskList.classList.contains('collapsed');
                
                if (isCollapsed) {
                    // Expand
                    taskList.classList.remove('collapsed');
                    taskList.style.maxHeight = taskList.scrollHeight + 'px';
                    chevron.style.transform = 'rotate(0deg)';
                    if (addButton) {
                        addButton.style.display = 'flex';
                    }
                } else {
                    // Collapse
                    taskList.style.maxHeight = '0px';
                    taskList.classList.add('collapsed');
                    chevron.style.transform = 'rotate(-90deg)';
                    if (addButton) {
                        addButton.style.display = 'none';
                    }
                }
            }
        });
    });
    
    // Initialize collapsed chevrons
    document.querySelectorAll('.task-list.collapsed').forEach(list => {
        const header = list.previousElementSibling;
        if (header) {
            const chevron = header.querySelector('.task-chevron');
            if (chevron) {
                chevron.style.transform = 'rotate(-90deg)';
            }
        }
    });
    
    // Initialize time tracking
    let timeCounter = 5475; // Start from 01:45:15
    let isRunning = false;
    let timerInterval;
    
    const startBtn = document.getElementById('startTimerBtn');
    const timeDisplay = document.getElementById('timeCounter');
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            if (!isRunning) {
                // Start timer
                isRunning = true;
                this.innerHTML = '<i class="fas fa-pause"></i><span>Pause Timer</span>';
                this.classList.add('running');
                
                timerInterval = setInterval(() => {
                    timeCounter++;
                    updateTimeDisplay(timeDisplay, timeCounter);
                }, 1000);
            } else {
                // Pause timer
                isRunning = false;
                this.innerHTML = '<i class="fas fa-play"></i><span>Start Time Tracker</span>';
                this.classList.remove('running');
                clearInterval(timerInterval);
            }
        });
    }
    
    // Initialize task checkboxes
    const taskCheckboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskItem = this.closest('.task-item');
            if (this.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });
    });
    
    // Initialize add task functionality
    const addTaskBtns = document.querySelectorAll('.add-task-btn');
    addTaskBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const group = this.getAttribute('data-group');
            const taskName = prompt('Enter task name:');
            if (taskName) {
                addNewTaskToGroup(taskName, group);
            }
        });
    });
    
    // Initialize add note functionality
    const addNoteBtn = document.querySelector('.add-note-btn');
    if (addNoteBtn) {
        addNoteBtn.addEventListener('click', function() {
            const noteTitle = prompt('Enter note title:');
            if (noteTitle) {
                addNewNote(noteTitle);
            }
        });
    }
}

function updateTimeDisplay(display, seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function addNewTaskToGroup(taskName, group) {
    const taskList = document.getElementById(`${group}-tasks`);
    const taskId = `task_${Date.now()}`;
    
    const taskHTML = `
        <div class="task-item">
            <div class="task-checkbox">
                <input type="checkbox" id="${taskId}">
                <label for="${taskId}"></label>
            </div>
            <div class="task-content">
                <span class="task-title">${taskName}</span>
            </div>
            <div class="task-priority">
                <span class="priority-badge medium">Medium</span>
            </div>
            <div class="task-due-date">
                <span class="due-later">No due date</span>
            </div>
        </div>
    `;
    
    if (taskList) {
        taskList.insertAdjacentHTML('beforeend', taskHTML);
        
        // Update task count
        const header = taskList.previousElementSibling;
        const countSpan = header.querySelector('.task-count');
        if (countSpan) {
            const currentCount = parseInt(countSpan.textContent.match(/\d+/)[0]);
            countSpan.textContent = `• ${currentCount + 1} tasks`;
        }
        
        // Re-initialize checkbox for new task
        const newCheckbox = document.getElementById(taskId);
        newCheckbox.addEventListener('change', function() {
            const taskItem = this.closest('.task-item');
            if (this.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });
        
        // Expand the group if it's collapsed
        if (taskList.classList.contains('collapsed')) {
            taskList.classList.remove('collapsed');
            taskList.style.maxHeight = taskList.scrollHeight + 'px';
            const chevron = header.querySelector('.task-chevron');
            if (chevron) {
                chevron.style.transform = 'rotate(0deg)';
            }
            const addButton = header.parentElement.querySelector('.add-task-btn');
            if (addButton) {
                addButton.style.display = 'flex';
            }
        } else {
            // Update max-height for expanded groups
            taskList.style.maxHeight = taskList.scrollHeight + 'px';
        }
    }
}

function addNewNote(noteTitle) {
    const notesList = document.querySelector('.notes-list');
    const noteHTML = `
        <div class="note-item">
            <div class="note-status"></div>
            <div class="note-content">
                <h4>${noteTitle}</h4>
                <p>Click to add note content...</p>
                <div class="note-tags">
                    <span class="tag today">Today</span>
                    <span class="tag new">New</span>
                    <span class="note-date">${new Date().toLocaleDateString('en-US', {month: 'short', day: '2-digit'})}</span>
                </div>
            </div>
        </div>
    `;
    
    notesList.insertAdjacentHTML('afterbegin', noteHTML);
}

// Collapsible Sections
function initializeCollapsibleSections() {
    const toggle = document.querySelector('.section-toggle');
    if (toggle) {
        toggle.addEventListener('click', function() {
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
function initializeProjectActions() {
    if (addProjectCard) {
        addProjectCard.addEventListener('click', function() {
            // Create new project dialog or form
            createNewProjectDialog();
        });
    }
    
    // Add click handlers to existing project cards
    const projectCards = document.querySelectorAll('.project-card:not(.add-project)');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectName = this.querySelector('h4').textContent;
            console.log(`Opening project: ${projectName}`);
            // Project details logic can be added here
        });
    });
}

function createNewProjectDialog() {
    // Simple prompt for demo purposes
    const projectName = prompt('Enter project name:');
    if (projectName) {
        const projectsGrid = document.querySelector('.projects-grid');
        const addProjectCard = document.querySelector('.add-project');
        const newProject = document.createElement('div');
        newProject.className = 'project-card';
        
        // Random colors for new projects
        const colors = ['purple', 'blue', 'cyan', 'green', 'orange'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        newProject.innerHTML = `
            <div class="project-icon ${randomColor}">
                <i class="fas fa-folder"></i>
            </div>
            <h4>${projectName}</h4>
            <p>0 tasks • 1 teammate</p>
        `;
        
        // Insert at the beginning of the grid (before other projects)
        projectsGrid.insertBefore(newProject, projectsGrid.firstChild);
        
        // Add click handler to new project
        newProject.addEventListener('click', function() {
            console.log(`Opening project: ${projectName}`);
        });
    }
}

// Calendar Functionality
let currentMonth = 6; // July (0-indexed)
let currentYear = 2024;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function initializeCalendar() {
    if (calendarNavLeft) {
        calendarNavLeft.addEventListener('click', function() {
            navigateMonth(-1);
        });
    }
    
    if (calendarNavRight) {
        calendarNavRight.addEventListener('click', function() {
            navigateMonth(1);
        });
    }
    
    // Date selection
    const dates = document.querySelectorAll('.date');
    dates.forEach(date => {
        date.addEventListener('click', function() {
            // Remove current class from all dates
            dates.forEach(d => d.classList.remove('current'));
            
            // Add current class to clicked date
            this.classList.add('current');
            
            console.log(`Selected date: ${this.textContent}`);
        });
    });
}

function navigateMonth(direction) {
    currentMonth += direction;
    
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    
    updateCalendarDisplay();
}

function updateCalendarDisplay() {
    // Update month display
    const monthDisplay = document.querySelector('.header-actions span');
    if (monthDisplay) {
        monthDisplay.textContent = months[currentMonth];
    }
    
    // Update calendar dates
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    // Generate calendar dates - get the calendar grid container
    const calendarGrid = document.querySelector('.calendar-grid');
    if (calendarGrid) {
        // Keep day headers, remove old dates
        const dayHeaders = calendarGrid.querySelectorAll('.day-header');
        calendarGrid.innerHTML = '';
        
        // Re-add day headers
        dayHeaders.forEach(header => {
            calendarGrid.appendChild(header);
        });
        
        // Add empty cells for days before the first day of the month
        // Adjust for Friday start (day 5)
        const adjustedStartDay = (startingDayOfWeek + 2) % 7; // Convert Sunday=0 to Friday=0
        for (let i = 0; i < adjustedStartDay; i++) {
            const emptyDate = document.createElement('div');
            emptyDate.className = 'date empty';
            calendarGrid.appendChild(emptyDate);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateElement = document.createElement('div');
            dateElement.className = 'date';
            dateElement.textContent = day.toString().padStart(2, '0');
            
            // Highlight current day (July 7th initially)
            if (currentMonth === 6 && day === 7) {
                dateElement.classList.add('current');
            }
            
            // Add click handler
            dateElement.addEventListener('click', function() {
                document.querySelectorAll('.date:not(.empty)').forEach(d => d.classList.remove('current'));
                this.classList.add('current');
            });
            
            calendarGrid.appendChild(dateElement);
        }
    }
}

// Spotlight Tabs
function initializeSpotlightTabs() {
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

function showSpotlightContent(tabName) {
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
function initializeFAB() {
    const fab = document.querySelector('.fab');
    if (fab) {
        fab.addEventListener('click', function() {
            // FAB action - could open quick actions menu
            showQuickActions();
        });
    }
}

function showQuickActions() {
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
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target) && !document.querySelector('.fab').contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
}

function handleQuickAction(action) {
    switch(action) {
        case 'new-task':
            const task = prompt('Enter new task:');
            if (task) {
                console.log(`New task created: ${task}`);
                // Add task logic here
            }
            break;
            
        case 'new-project':
            createNewProjectDialog();
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
function initializeDaisyAI() {
    // Initialize chat input
    const daisyInput = document.getElementById('daisyInput');
    if (daisyInput) {
        daisyInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendDaisyMessage();
            }
        });
    }
    
    // Initialize suggestion buttons
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const suggestion = this.parentElement.querySelector('p').textContent;
            applySuggestion(suggestion);
        });
    });
    
    // Initialize clear chat
    const clearBtn = document.querySelector('.daisy-action-btn[title="Clear Chat"]');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearDaisyChat);
    }
    
    // Auto-scroll chat to bottom
    setTimeout(() => {
        const chatContainer = document.querySelector('.daisy-chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, 100);
}

function sendDaisyMessage() {
    const input = document.getElementById('daisyInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addDaisyMessage(message, 'user');
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateDaisyResponse(message);
        addDaisyMessage(response, 'bot');
    }, 1500);
}

function addDaisyMessage(content, sender) {
    const chatContainer = document.querySelector('.daisy-chat-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = `daisy-message daisy-${sender}`;
    
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-bubble">
                    <p>${content}</p>
                </div>
                <span class="message-time">${time}</span>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-bubble">
                    <p>${content}</p>
                </div>
                <span class="message-time">${time}</span>
            </div>
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
        `;
    }
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function generateDaisyResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('task') || message.includes('todo')) {
        return "I can help you create and manage tasks! Would you like me to add this to your Kanban board or create a structured task list? I can also set priorities and due dates.";
    } else if (message.includes('meeting') || message.includes('schedule')) {
        return "I'll help you schedule that meeting! I can suggest optimal times based on your calendar, send invites to participants, and even prepare an agenda. What type of meeting are you planning?";
    } else if (message.includes('report') || message.includes('analysis')) {
        return "I can generate detailed reports and analytics for you! I have access to your productivity data, project progress, and team performance metrics. What specific insights would you like to see?";
    } else if (message.includes('help') || message.includes('what can you do')) {
        return "I'm here to boost your productivity! I can help with task management, meeting scheduling, document creation, data analysis, team coordination, and much more. Try asking me to create a task, schedule a meeting, or analyze your weekly progress!";
    } else if (message.includes('time') || message.includes('productivity')) {
        return "Based on your activity patterns, I've noticed you're most productive between 9-11 AM. I recommend blocking this time for your most important work. Would you like me to analyze your weekly productivity trends?";
    } else {
        return "That's an interesting question! I'm continuously learning to better assist you. While I process your request, you can try using the quick action buttons below or ask me about tasks, meetings, or productivity insights.";
    }
}

function handleDaisyQuickAction(action) {
    const responses = {
        'schedule': "Let me help you schedule a meeting! I'll check your calendar for optimal times. What's the meeting about and who should attend?",
        'tasks': "I'll create a task list for you! What project or area would you like to focus on? I can organize tasks by priority, deadline, or category.",
        'analyze': "Let me analyze your current progress! I can see you've completed 73% of your weekly goals and your team productivity is up 15% this month. Would you like a detailed breakdown?",
        'insights': "Here are your latest productivity insights: You're most focused on Tuesday mornings, respond to emails fastest on Wednesdays, and complete creative tasks best in the afternoon. Need specific recommendations?"
    };
    
    addDaisyMessage(responses[action], 'bot');
}

function applySuggestion(suggestion) {
    addDaisyMessage(`Applied suggestion: "${suggestion}". I'll take care of that for you right away!`, 'bot');
    
    // Add to recent activity
    setTimeout(() => {
        addRecentActivity(suggestion);
    }, 1000);
}

function addRecentActivity(action) {
    const activityList = document.querySelector('.activity-list');
    const newActivity = document.createElement('div');
    newActivity.className = 'activity-item';
    newActivity.innerHTML = `
        <div class="activity-time">Just now</div>
        <div class="activity-desc">
            <i class="fas fa-check"></i>
            <span>${action}</span>
        </div>
    `;
    
    activityList.insertBefore(newActivity, activityList.firstChild);
    
    // Remove oldest activity if more than 5
    if (activityList.children.length > 5) {
        activityList.removeChild(activityList.lastChild);
    }
}

function clearDaisyChat() {
    const chatContainer = document.querySelector('.daisy-chat-container');
    chatContainer.innerHTML = `
        <div class="daisy-message daisy-bot">
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-bubble">
                    <p>Chat cleared! I'm ready to help you with anything you need. How can I assist you today?</p>
                </div>
                <span class="message-time">Just now</span>
            </div>
        </div>
    `;
}

function attachFile() {
    addDaisyMessage("File attachment feature coming soon! For now, you can describe what you'd like to work on and I'll help you organize it.", 'bot');
}

function toggleVoice() {
    addDaisyMessage("Voice chat feature is being prepared! I'll be able to listen and respond with voice soon. For now, let's continue with text chat!", 'bot');
}

// Utility Functions
function formatDate(date) {
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Window resize handler
window.addEventListener('resize', debounce(function() {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
}, 250));

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for quick search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Quick search shortcut activated');
        // Implement quick search functionality
    }
    
    // Escape to close modals/menus
    if (e.key === 'Escape') {
        closeSidebar();
        const quickMenu = document.querySelector('.quick-actions-menu');
        if (quickMenu) {
            quickMenu.remove();
        }
    }
});

// Initialize theme switching (if needed in future)
function initializeTheme() {
    const savedTheme = localStorage.getItem('office-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Export functions for potential external use
window.OfficeWorkspace = {
    toggleSidebar,
    closeSidebar,
    handleNavigation,
    createNewProjectDialog,
    showQuickActions
};