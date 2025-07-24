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
            // Re-initialize components after content change
            setTimeout(() => {
                initializeCollapsibleSections();
                initializeSpotlightTabs();
            }, 100);
            break;
            
        case 'prodify':
            greeting.innerHTML = 'Prodify AI <span class="greeting-question">Your AI-powered productivity assistant</span>';
            dashboardContent.innerHTML = `
                <div class="dashboard-row">
                    <section class="ai-section">
                        <div class="section-header">
                            <i class="fas fa-robot"></i>
                            <h3>AI Assistant</h3>
                        </div>
                        <div class="ai-content">
                            <p>Ask me anything to boost your productivity!</p>
                            <div class="ai-suggestions">
                                <button class="suggestion-btn">Schedule a meeting</button>
                                <button class="suggestion-btn">Create task list</button>
                                <button class="suggestion-btn">Analyze project status</button>
                            </div>
                        </div>
                    </section>
                </div>
            `;
            break;
            
        case 'tasks':
            greeting.innerHTML = 'My Tasks <span class="greeting-question">Stay organized and productive</span>';
            dashboardContent.innerHTML = `
                <div class="dashboard-row">
                    <section class="tasks-section">
                        <div class="section-header">
                            <i class="fas fa-tasks"></i>
                            <h3>Today's Tasks</h3>
                            <button class="add-btn"><i class="fas fa-plus"></i> Add Task</button>
                        </div>
                        <div class="task-list">
                            <div class="task-item">
                                <input type="checkbox" id="task1">
                                <label for="task1">Review quarterly reports</label>
                                <span class="task-priority high">High</span>
                            </div>
                            <div class="task-item">
                                <input type="checkbox" id="task2">
                                <label for="task2">Team standup meeting</label>
                                <span class="task-priority medium">Medium</span>
                            </div>
                            <div class="task-item completed">
                                <input type="checkbox" id="task3" checked>
                                <label for="task3">Update project documentation</label>
                                <span class="task-priority low">Low</span>
                            </div>
                        </div>
                    </section>
                </div>
            `;
            break;
            
        case 'inbox':
            greeting.innerHTML = 'Inbox <span class="greeting-question">Your messages and notifications</span>';
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
            dashboardContent.innerHTML = window.originalContent.dashboard;
            setTimeout(() => {
                initializeCalendar();
            }, 100);
            break;
            
        case 'team-chat':
            greeting.innerHTML = 'Team Chat <span class="greeting-question">Collaborate with your team</span>';
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

function renderResourcesContent(container) {
    container.innerHTML = `
        <div class="dashboard-row">
            <section class="resources-section">
                <div class="section-header">
                    <i class="fas fa-folder-open"></i>
                    <h3>Resources</h3>
                </div>
                <div class="resources-grid">
                    <div class="resource-card">
                        <div class="resource-icon">
                            <i class="fas fa-file-pdf"></i>
                        </div>
                        <h4>Project Documentation</h4>
                        <p>Latest project specifications and requirements</p>
                    </div>
                    <div class="resource-card">
                        <div class="resource-icon">
                            <i class="fas fa-link"></i>
                        </div>
                        <h4>Useful Links</h4>
                        <p>Important links and references for the project</p>
                    </div>
                    <div class="resource-card">
                        <div class="resource-icon">
                            <i class="fas fa-images"></i>
                        </div>
                        <h4>Design Assets</h4>
                        <p>Brand guidelines, images, and design resources</p>
                    </div>
                </div>
            </section>
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