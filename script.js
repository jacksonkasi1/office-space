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
    console.log(`Switching to tab: ${tabName}`);
    // Tab content switching logic can be added here
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