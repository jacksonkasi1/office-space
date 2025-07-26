// Module: navigation
export function initializeNavigation() {
    console.log('Initializing navigation...');
    if (!window.navItems) {
        window.navItems = document.querySelectorAll('.nav-item a');
        console.log('Found nav items:', window.navItems.length);
    }
    
    window.navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Nav item clicked:', this.getAttribute('data-page'));
            
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
    
    // Update active navigation item
    updateActiveNavigation(page);
    
    // Update main content based on navigation
    updateMainContent(page);
}

export function updateActiveNavigation(page) {
    // Remove active class from all nav items
    if (window.navItems) {
        window.navItems.forEach(nav => nav.parentElement.classList.remove('active'));
        
        // Add active class to current page
        const currentNavItem = document.querySelector(`[data-page="${page}"]`);
        if (currentNavItem) {
            currentNavItem.parentElement.classList.add('active');
        }
    }
}


export function renderCalendarPage(container) {
    console.log('Rendering calendar page...');
    container.innerHTML = `
        <div class="calendar-page">
            <!-- Main Calendar Area -->
            <div class="calendar-main">
                <!-- Calendar Header -->
                <div class="calendar-header">
                    <div class="calendar-title">
                        <h2>Calendar</h2>
                        <button class="create-event-btn" onclick="openMeetingModal()">
                            <i class="fas fa-plus"></i>
                            Create Event
                        </button>
                    </div>
                    <div class="calendar-controls">
                        <div class="date-navigation">
                            <button class="nav-btn prev-month">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <h3 class="current-month">Dec, 2022</h3>
                            <button class="nav-btn next-month">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                            <button class="today-btn">Today</button>
                        </div>
                        <div class="view-controls">
                            <select class="view-selector">
                                <option value="day">Day</option>
                                <option value="week" selected>Week</option>
                                <option value="month">Month</option>
                            </select>
                            <button class="filter-btn">
                                <i class="fas fa-filter"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Calendar Grid -->
                <div class="calendar-grid-container">
                    <div class="time-column">
                        <div class="time-header"></div>
                        <div class="time-slots">
                            <div class="time-slot">08:00 AM</div>
                            <div class="time-slot">08:30 AM</div>
                            <div class="time-slot">09:00 AM</div>
                            <div class="time-slot">09:30 AM</div>
                            <div class="time-slot">10:00 AM</div>
                            <div class="time-slot">10:30 AM</div>
                            <div class="time-slot">11:00 AM</div>
                            <div class="time-slot">11:30 AM</div>
                            <div class="time-slot">12:00 PM</div>
                            <div class="time-slot">12:30 PM</div>
                            <div class="time-slot">01:00 PM</div>
                            <div class="time-slot">01:30 PM</div>
                            <div class="time-slot">02:00 PM</div>
                            <div class="time-slot">02:30 PM</div>
                            <div class="time-slot">03:00 PM</div>
                            <div class="time-slot">03:30 PM</div>
                            <div class="time-slot">04:00 PM</div>
                            <div class="time-slot">04:30 PM</div>
                            <div class="time-slot">05:00 PM</div>
                        </div>
                    </div>
                    
                    <div class="calendar-days">
                        <div class="day-header">
                            <div class="day-name">Monday</div>
                            <div class="day-date">5</div>
                        </div>
                        <div class="day-header">
                            <div class="day-name">Tuesday</div>
                            <div class="day-date">6</div>
                        </div>
                        <div class="day-header">
                            <div class="day-name">Wednesday</div>
                            <div class="day-date">7</div>
                        </div>
                        <div class="day-header">
                            <div class="day-name">Thursday</div>
                            <div class="day-date">8</div>
                        </div>
                        <div class="day-header">
                            <div class="day-name">Friday</div>
                            <div class="day-date">9</div>
                        </div>
                    </div>
                    
                    <div class="calendar-events">
                        <div class="event-block" style="grid-row: 1 / 3; grid-column: 1;">
                            <div class="event-content">
                                <h4>Meeting title</h4>
                                <p>08:00 - 09:00 AM</p>
                                <p>Room 01</p>
                                <div class="event-tag internal">Internal</div>
                                <div class="event-attendees">
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee1" alt="Attendee">
                                    </div>
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee2" alt="Attendee">
                                    </div>
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee3" alt="Attendee">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="event-block" style="grid-row: 5 / 7; grid-column: 1;">
                            <div class="event-content">
                                <h4>Meeting title</h4>
                                <p>10:00 - 11:00 AM</p>
                                <p>Room 02</p>
                                <div class="event-tag external">External</div>
                                <div class="event-attendees">
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee4" alt="Attendee">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="event-block" style="grid-row: 1 / 5; grid-column: 2;">
                            <div class="event-content">
                                <h4>Meeting title</h4>
                                <p>08:00 - 10:00 AM</p>
                                <p>Room 01</p>
                                <div class="event-tag external">External</div>
                                <div class="event-attendees">
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee5" alt="Attendee">
                                    </div>
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee6" alt="Attendee">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="event-block" style="grid-row: 3 / 5; grid-column: 4;">
                            <div class="event-content">
                                <h4>Meeting title</h4>
                                <p>09:00 - 10:00 AM</p>
                                <p>Room 01</p>
                                <div class="event-tag internal">Internal</div>
                                <div class="event-attendees">
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee7" alt="Attendee">
                                    </div>
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee8" alt="Attendee">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="event-block" style="grid-row: 1 / 3; grid-column: 5;">
                            <div class="event-content">
                                <h4>Meeting title</h4>
                                <p>08:00 - 09:00 AM</p>
                                <p>Room 01</p>
                                <div class="event-tag internal">Internal</div>
                                <div class="event-attendees">
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee9" alt="Attendee">
                                    </div>
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee10" alt="Attendee">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="event-block" style="grid-row: 5 / 7; grid-column: 5;">
                            <div class="event-content">
                                <h4>Meeting title</h4>
                                <p>10:00 - 11:00 AM</p>
                                <p>Room 02</p>
                                <div class="event-tag external">External</div>
                                <div class="event-attendees">
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee11" alt="Attendee">
                                    </div>
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee12" alt="Attendee">
                                    </div>
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee13" alt="Attendee">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Sidebar -->
            <div class="calendar-sidebar">
                <!-- Mini Calendar -->
                <div class="mini-calendar">
                    <div class="mini-calendar-header">
                        <h4>Dec, 2022</h4>
                        <div class="mini-calendar-nav">
                            <button class="mini-nav-btn prev">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="mini-nav-btn next">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div class="mini-calendar-grid">
                        <div class="mini-day-header">Mon</div>
                        <div class="mini-day-header">Tue</div>
                        <div class="mini-day-header">Wed</div>
                        <div class="mini-day-header">Thu</div>
                        <div class="mini-day-header">Fri</div>
                        <div class="mini-day-header">Sat</div>
                        <div class="mini-day-header">Sun</div>
                        
                        <div class="mini-date">29</div>
                        <div class="mini-date">30</div>
                        <div class="mini-date">1</div>
                        <div class="mini-date">2</div>
                        <div class="mini-date">3</div>
                        <div class="mini-date">4</div>
                        <div class="mini-date">5</div>
                        <div class="mini-date">6</div>
                        <div class="mini-date">7</div>
                        <div class="mini-date">8</div>
                        <div class="mini-date selected">9</div>
                        <div class="mini-date">10</div>
                        <div class="mini-date">11</div>
                        <div class="mini-date">12</div>
                        <div class="mini-date">13</div>
                        <div class="mini-date">14</div>
                        <div class="mini-date">15</div>
                        <div class="mini-date">16</div>
                        <div class="mini-date">17</div>
                        <div class="mini-date">18</div>
                        <div class="mini-date">19</div>
                        <div class="mini-date">20</div>
                        <div class="mini-date">21</div>
                        <div class="mini-date">22</div>
                        <div class="mini-date">23</div>
                        <div class="mini-date">24</div>
                        <div class="mini-date">25</div>
                        <div class="mini-date">26</div>
                        <div class="mini-date">27</div>
                        <div class="mini-date">28</div>
                    </div>
                </div>

                <!-- Upcoming Events -->
                <div class="upcoming-events">
                    <div class="upcoming-header">
                        <h4>Upcoming events</h4>
                    </div>
                    <div class="upcoming-list">
                        <div class="upcoming-event">
                            <div class="event-time-badge">In 10 mins</div>
                            <div class="event-content">
                                <h5>Meeting title</h5>
                                <p>08:00 - 09:00 AM</p>
                                <p>Room 01</p>
                                <div class="event-tag internal">Internal</div>
                                <div class="event-attendees">
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee1" alt="Attendee">
                                    </div>
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee2" alt="Attendee">
                                    </div>
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee3" alt="Attendee">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="upcoming-event">
                            <div class="event-content">
                                <h5>Meeting title</h5>
                                <p>10:00 - 11:00 AM</p>
                                <p>Room 02</p>
                                <div class="event-tag external">External</div>
                                <div class="event-attendees">
                                    <div class="attendee-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Attendee4" alt="Attendee">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Add Meeting Modal -->
            <div class="meeting-modal" id="meetingModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Add Meeting</h3>
                        <button class="close-modal" onclick="closeMeetingModal()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="meetingName">Meeting Name</label>
                            <input type="text" id="meetingName" placeholder="Meeting Name">
                        </div>
                        <div class="form-group">
                            <label for="meetingDate">Date</label>
                            <div class="date-input">
                                <input type="text" id="meetingDate" value="Tue, Jul 18" readonly>
                                <i class="fas fa-calendar"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="meetingTime">Time</label>
                            <div class="time-input">
                                <input type="text" id="meetingTime" value="09:00 - 09:30 AM" readonly>
                                <i class="fas fa-clock"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="meetingLocation">Location</label>
                            <div class="location-input">
                                <input type="text" id="meetingLocation" value="Room 01">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="meetingLink">Online Link</label>
                            <div class="link-input">
                                <input type="text" id="meetingLink" value="Link.com">
                                <button class="copy-btn" onclick="copyMeetingLink()">
                                    <i class="fas fa-copy"></i>
                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Invitees</label>
                            <div class="invitees-container">
                                <div class="selected-invitees">
                                    <div class="invitee-tag">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Emily+Taylor" alt="Emily Taylor">
                                        <span>Emily Taylor</span>
                                        <button class="remove-invitee">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                    <div class="invitee-tag">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Jennifer+Scott" alt="Jennifer Scott">
                                        <span>Jennifer Scott</span>
                                        <button class="remove-invitee">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <button class="add-invitee-btn" onclick="addInvitee()">
                                    <i class="fas fa-plus"></i>
                                    Add
                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <button class="advanced-settings-btn">
                                <i class="fas fa-cog"></i>
                                Advanced settings
                            </button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="save-meeting-btn" onclick="saveMeeting()">
                            <i class="fas fa-check"></i>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize calendar functionality
    setTimeout(() => {
        console.log('Initializing calendar page...');
        initializeCalendarPage();
    }, 100);
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
                window.initializeCalendar(); // Re-initialize the home page calendar widget
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
            window.renderInboxContent(dashboardContent);
            break;
            
        case 'calendar':
            greeting.innerHTML = 'Calendar <span class="greeting-question">Manage your schedule</span>';
            tabNavigation.style.display = 'none';
            greeting.style.display = 'block';
            document.querySelector('.sidebar').style.display = 'block';
            renderCalendarPage(dashboardContent);
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
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Nathan+Wood" alt="Nathan Wood">
                                        <span class="status-dot online"></span>
                                    </div>
                                    <span class="user-name">Nathan Wood</span>
                                </div>
                                <div class="dm-item">
                                    <div class="user-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Ashley+Adams" alt="Ashley Adams">
                                        <span class="status-dot away"></span>
                                    </div>
                                    <span class="user-name">Ashley Adams</span>
                                </div>
                                <div class="dm-item">
                                    <div class="user-avatar">
                                        <img src="https://api.dicebear.com/9.x/micah/svg?seed=Sarah+Johnson" alt="Sarah Johnson">
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
                                    <img src="https://api.dicebear.com/9.x/micah/svg?seed=Macrow" alt="Macrow" class="message-avatar">
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
                                    <img src="https://api.dicebear.com/9.x/micah/svg?seed=Mondialov" alt="Mondialov" class="message-avatar">
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
                                    <img src="https://api.dicebear.com/9.x/micah/svg?seed=Javier+Ortiz" alt="Javier Ortiz" class="message-avatar">
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

