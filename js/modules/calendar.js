// Module: calendar

// Internal state for calendar functionality
let currentMonth = 11; // December (0-indexed)
let currentYear = 2022;
let currentView = 'week'; // day, week, month
let selectedDate = new Date(2022, 11, 9); // December 9, 2022

// Home page calendar widget state
let homeCalendarMonth = 6; // July (0-indexed)
let homeCalendarYear = 2024;
let homeCalendarSelectedDate = new Date(2024, 6, 8); // July 8, 2024

// Sample events data for home calendar
const homeCalendarEvents = [
    {
        id: 1,
        title: 'Meeting with VP',
        date: '2024-07-08',
        time: '10:00 - 11:00 AM',
        type: 'meeting',
        attendees: 3,
        location: 'Google Meet',
        organizer: 'Sarah Johnson'
    },
    {
        id: 2,
        title: 'Team Standup',
        date: '2024-07-09',
        time: '09:00 - 09:30 AM',
        type: 'meeting',
        attendees: 8,
        location: 'Conference Room A',
        organizer: 'Mike Chen'
    },
    {
        id: 3,
        title: 'Project Review',
        date: '2024-07-10',
        time: '02:00 - 03:00 PM',
        type: 'meeting',
        attendees: 5,
        location: 'Zoom',
        organizer: 'Emily Davis'
    },
    {
        id: 4,
        title: 'Client Call',
        date: '2024-07-11',
        time: '11:00 - 12:00 PM',
        type: 'meeting',
        attendees: 4,
        location: 'Teams',
        organizer: 'Alex Thompson'
    },
    {
        id: 5,
        title: 'Deadline: Q2 Report',
        date: '2024-07-12',
        time: '05:00 PM',
        type: 'deadline',
        priority: 'high',
        organizer: 'Courtney Henry'
    },
    {
        id: 6,
        title: 'Team Lunch',
        date: '2024-07-13',
        time: '12:00 - 01:00 PM',
        type: 'event',
        attendees: 12,
        location: 'Office Cafeteria',
        organizer: 'David Wilson'
    },
    {
        id: 7,
        title: 'Product Launch Prep',
        date: '2024-07-14',
        time: '03:00 - 04:30 PM',
        type: 'meeting',
        attendees: 6,
        location: 'Board Room',
        organizer: 'Lisa Park'
    }
];

// Month names for display
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Sample events data
const sampleEvents = [
    {
        id: 1,
        title: 'Meeting title',
        startTime: '08:00',
        endTime: '09:00',
        date: '2022-12-05',
        location: 'Room 01',
        type: 'internal',
        attendees: ['Attendee1', 'Attendee2', 'Attendee3']
    },
    {
        id: 2,
        title: 'Meeting title',
        startTime: '10:00',
        endTime: '11:00',
        date: '2022-12-05',
        location: 'Room 02',
        type: 'external',
        attendees: ['Attendee4']
    },
    {
        id: 3,
        title: 'Meeting title',
        startTime: '08:00',
        endTime: '10:00',
        date: '2022-12-06',
        location: 'Room 01',
        type: 'external',
        attendees: ['Attendee5', 'Attendee6']
    },
    {
        id: 4,
        title: 'Meeting title',
        startTime: '09:00',
        endTime: '10:00',
        date: '2022-12-08',
        location: 'Room 01',
        type: 'internal',
        attendees: ['Attendee7', 'Attendee8']
    },
    {
        id: 5,
        title: 'Meeting title',
        startTime: '08:00',
        endTime: '09:00',
        date: '2022-12-09',
        location: 'Room 01',
        type: 'internal',
        attendees: ['Attendee9', 'Attendee10']
    },
    {
        id: 6,
        title: 'Meeting title',
        startTime: '10:00',
        endTime: '11:00',
        date: '2022-12-09',
        location: 'Room 02',
        type: 'external',
        attendees: ['Attendee11', 'Attendee12', 'Attendee13']
    }
];

export function initializeCalendarPage() {
    // Initialize calendar navigation
    initializeCalendarNavigation();
    
    // Initialize view controls
    initializeViewControls();
    
    // Initialize mini calendar
    initializeMiniCalendar();
    
    // Initialize event blocks
    initializeEventBlocks();
    
    // Initialize meeting modal
    initializeMeetingModal();
    
    // Update display
    updateCalendarDisplay();
}

export function initializeCalendarNavigation() {
    const prevBtn = document.querySelector('.prev-month');
    const nextBtn = document.querySelector('.next-month');
    const todayBtn = document.querySelector('.today-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateMonth(-1));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateMonth(1));
    }
    
    if (todayBtn) {
        todayBtn.addEventListener('click', () => goToToday());
    }
}

export function initializeViewControls() {
    const viewSelector = document.querySelector('.view-selector');
    const createEventBtn = document.querySelector('.create-event-btn');
    
    if (viewSelector) {
        viewSelector.addEventListener('change', (e) => {
            currentView = e.target.value;
            updateCalendarDisplay();
        });
    }
    
    if (createEventBtn) {
        createEventBtn.addEventListener('click', () => openMeetingModal());
    }
}

export function initializeMiniCalendar() {
    const miniNavPrev = document.querySelector('.mini-nav-btn.prev');
    const miniNavNext = document.querySelector('.mini-nav-btn.next');
    const miniDates = document.querySelectorAll('.mini-date');
    
    if (miniNavPrev) {
        miniNavPrev.addEventListener('click', () => navigateMonth(-1));
    }
    
    if (miniNavNext) {
        miniNavNext.addEventListener('click', () => navigateMonth(1));
    }
    
    miniDates.forEach(date => {
        date.addEventListener('click', function() {
            miniDates.forEach(d => d.classList.remove('selected'));
            this.classList.add('selected');
            
            const day = parseInt(this.textContent);
            if (day >= 1 && day <= 31) {
                selectedDate = new Date(currentYear, currentMonth, day);
                updateCalendarDisplay();
            }
        });
    });
}

export function initializeEventBlocks() {
    const eventBlocks = document.querySelectorAll('.event-block');
    
    eventBlocks.forEach(block => {
        block.addEventListener('click', function() {
            // Handle event click - could open event details modal
            console.log('Event clicked:', this.querySelector('h4').textContent);
        });
    });
}

export function initializeMeetingModal() {
    const modal = document.getElementById('meetingModal');
    const closeBtn = document.querySelector('.close-modal');
    const saveBtn = document.querySelector('.save-meeting-btn');
    const copyBtn = document.querySelector('.copy-btn');
    const addInviteeBtn = document.querySelector('.add-invitee-btn');
    const removeInviteeBtns = document.querySelectorAll('.remove-invitee');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMeetingModal);
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', saveMeeting);
    }
    
    if (copyBtn) {
        copyBtn.addEventListener('click', copyMeetingLink);
    }
    
    if (addInviteeBtn) {
        addInviteeBtn.addEventListener('click', addInvitee);
    }
    
    removeInviteeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.invitee-tag').remove();
        });
    });
}

export function navigateMonth(direction) {
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

export function goToToday() {
    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    selectedDate = today;
    updateCalendarDisplay();
}

export function updateCalendarDisplay() {
    // Update month display
    const currentMonthDisplay = document.querySelector('.current-month');
    if (currentMonthDisplay) {
        currentMonthDisplay.textContent = `${months[currentMonth].substring(0, 3)}, ${currentYear}`;
    }
    
    // Update mini calendar month display
    const miniMonthDisplay = document.querySelector('.mini-calendar-header h4');
    if (miniMonthDisplay) {
        miniMonthDisplay.textContent = `${months[currentMonth].substring(0, 3)}, ${currentYear}`;
    }
    
    // Update mini calendar dates
    updateMiniCalendarDates();
    
    // Update day headers for week view
    updateDayHeaders();
    
    // Update events
    updateEvents();
}

export function updateMiniCalendarDates() {
    const miniCalendarGrid = document.querySelector('.mini-calendar-grid');
    if (!miniCalendarGrid) return;
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    // Clear existing dates (keep day headers)
    const dayHeaders = miniCalendarGrid.querySelectorAll('.mini-day-header');
    miniCalendarGrid.innerHTML = '';
    
    // Re-add day headers
    dayHeaders.forEach(header => {
        miniCalendarGrid.appendChild(header);
    });
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
        const emptyDate = document.createElement('div');
        emptyDate.className = 'mini-date';
        emptyDate.textContent = '';
        miniCalendarGrid.appendChild(emptyDate);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement('div');
        dateElement.className = 'mini-date';
        dateElement.textContent = day;
        
        // Highlight selected date
        if (day === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear()) {
            dateElement.classList.add('selected');
        }
        
        // Add click handler
        dateElement.addEventListener('click', function() {
            document.querySelectorAll('.mini-date').forEach(d => d.classList.remove('selected'));
            this.classList.add('selected');
            selectedDate = new Date(currentYear, currentMonth, day);
            updateCalendarDisplay();
        });
        
        miniCalendarGrid.appendChild(dateElement);
    }
}

export function updateDayHeaders() {
    const dayHeaders = document.querySelectorAll('.day-header');
    if (dayHeaders.length === 0) return;
    
    const weekStart = getWeekStart(selectedDate);
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    dayHeaders.forEach((header, index) => {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + index);
        
        const dayName = header.querySelector('.day-name');
        const dayDate = header.querySelector('.day-date');
        
        if (dayName) dayName.textContent = dayNames[index];
        if (dayDate) dayDate.textContent = date.getDate();
    });
}

export function updateEvents() {
    // This would typically fetch events from a backend
    // For now, we'll use the sample events
    console.log('Updating events for week view');
}

export function openMeetingModal() {
    const modal = document.getElementById('meetingModal');
    if (modal) {
        modal.classList.add('show');
    }
}

export function closeMeetingModal() {
    const modal = document.getElementById('meetingModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

export function saveMeeting() {
    const meetingName = document.getElementById('meetingName').value;
    const meetingLocation = document.getElementById('meetingLocation').value;
    const meetingLink = document.getElementById('meetingLink').value;
    
    if (!meetingName.trim()) {
        alert('Please enter a meeting name');
        return;
    }
    
    // Here you would typically save to backend
    console.log('Saving meeting:', {
        name: meetingName,
        location: meetingLocation,
        link: meetingLink,
        date: selectedDate
    });
    
    closeMeetingModal();
    
    // Clear form
    document.getElementById('meetingName').value = '';
    document.getElementById('meetingLocation').value = 'Room 01';
    document.getElementById('meetingLink').value = 'Link.com';
}

export function copyMeetingLink() {
    const linkInput = document.getElementById('meetingLink');
    linkInput.select();
    document.execCommand('copy');
    
    // Show feedback
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
    }, 2000);
}

export function addInvitee() {
    // This would typically open a user picker modal
    console.log('Add invitee clicked');
}

export function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    return new Date(d.setDate(diff));
}

// Home page calendar widget functions
export function initializeHomeCalendar() {
    const prevBtn = document.querySelector('.prev-month');
    const nextBtn = document.querySelector('.next-month');
    const monthSelector = document.querySelector('.calendar-month-selector');
    const dateElements = document.querySelectorAll('.calendar-grid .date');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateHomeCalendarMonth(-1));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateHomeCalendarMonth(1));
    }
    
    if (monthSelector) {
        monthSelector.addEventListener('click', () => {
            // Could open a month picker dropdown here
            console.log('Month selector clicked');
        });
    }
    
    // Add quick add event button handler
    const quickAddBtn = document.querySelector('.quick-add-btn');
    if (quickAddBtn) {
        quickAddBtn.addEventListener('click', () => {
            // Open quick add event modal or form
            console.log('Quick add event clicked for date:', homeCalendarSelectedDate);
            // Here you could open a simple modal to add an event
            showQuickAddEventModal();
        });
    }
    
    // Add click handlers to date elements
    dateElements.forEach(date => {
        date.addEventListener('click', function() {
            // Remove current class from all dates
            dateElements.forEach(d => d.classList.remove('current'));
            // Add current class to clicked date
            this.classList.add('current');
            
            // Update selected date
            const dateValue = this.getAttribute('data-date');
            if (dateValue) {
                homeCalendarSelectedDate = new Date(dateValue);
                updateHomeCalendarDisplay();
            }
        });
    });
    
    // Initialize display
    updateHomeCalendarDisplay();
    
    // Show events for current date
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    showEventsForDate(todayString);
}

export function navigateHomeCalendarMonth(direction) {
    // Navigate by weeks instead of months for the home calendar
    const currentDate = new Date(homeCalendarSelectedDate);
    currentDate.setDate(currentDate.getDate() + (direction * 7));
    
    homeCalendarSelectedDate = currentDate;
    homeCalendarMonth = currentDate.getMonth();
    homeCalendarYear = currentDate.getFullYear();
    
    updateHomeCalendarDisplay();
}

export function updateHomeCalendarDisplay() {
    // Update month display based on the selected date
    const monthDisplay = document.querySelector('.current-month');
    if (monthDisplay) {
        const selectedDate = new Date(homeCalendarSelectedDate);
        monthDisplay.textContent = months[selectedDate.getMonth()];
    }
    
    // Update calendar grid with new dates
    updateHomeCalendarGrid();
}

export function updateHomeCalendarGrid() {
    const calendarGrid = document.querySelector('.calendar-grid');
    if (!calendarGrid) return;
    
    // Keep the day headers
    const dayHeaders = calendarGrid.querySelectorAll('.day-header');
    
    // Clear existing date elements
    const dateElements = calendarGrid.querySelectorAll('.date');
    dateElements.forEach(el => el.remove());
    
    // Re-add day headers
    dayHeaders.forEach(header => {
        calendarGrid.appendChild(header);
    });
    
    // Calculate the week start (Friday for this layout)
    const weekStart = getWeekStartForHomeCalendar();
    
    // Generate dates for the week view
    for (let i = 0; i < 7; i++) {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        
        const dateString = date.toISOString().split('T')[0];
        const dateElement = document.createElement('div');
        dateElement.className = 'date';
        dateElement.setAttribute('data-date', dateString);
        
        // Create date number element
        const dateNumber = document.createElement('span');
        dateNumber.className = 'date-number';
        dateNumber.textContent = date.getDate();
        dateElement.appendChild(dateNumber);
        
        // Check if this date has events
        const eventsForDate = homeCalendarEvents.filter(event => event.date === dateString);
        if (eventsForDate.length > 0) {
            dateElement.classList.add('has-events');
            
            // Add event indicators
            const eventIndicators = document.createElement('div');
            eventIndicators.className = 'event-indicators';
            
            eventsForDate.forEach(event => {
                const indicator = document.createElement('div');
                indicator.className = `event-dot ${event.type}`;
                if (event.priority) {
                    indicator.classList.add(event.priority);
                }
                indicator.setAttribute('title', `${event.title} - ${event.time}`);
                eventIndicators.appendChild(indicator);
            });
            
            dateElement.appendChild(eventIndicators);
            
            // Add hover tooltip
            const tooltip = createEventTooltip(eventsForDate);
            dateElement.appendChild(tooltip);
        }
        
        // Check if this is the current date
        const today = new Date();
        if (date.toDateString() === today.toDateString()) {
            dateElement.classList.add('current');
        }
        
        // Add click handler
        dateElement.addEventListener('click', function() {
            document.querySelectorAll('.calendar-grid .date').forEach(d => d.classList.remove('current'));
            this.classList.add('current');
            homeCalendarSelectedDate = new Date(this.getAttribute('data-date'));
            
            // Show events for selected date
            showEventsForDate(dateString);
        });
        
        calendarGrid.appendChild(dateElement);
    }
}

function createEventTooltip(events) {
    const tooltip = document.createElement('div');
    tooltip.className = 'event-tooltip';
    
    const tooltipContent = document.createElement('div');
    tooltipContent.className = 'tooltip-content';
    
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'tooltip-event';
        
        const eventTitle = document.createElement('div');
        eventTitle.className = 'tooltip-event-title';
        eventTitle.textContent = event.title;
        
        const eventTime = document.createElement('div');
        eventTime.className = 'tooltip-event-time';
        eventTime.textContent = event.time;
        
        if (event.location) {
            const eventLocation = document.createElement('div');
            eventLocation.className = 'tooltip-event-location';
            eventLocation.textContent = event.location;
            eventItem.appendChild(eventLocation);
        }
        
        eventItem.appendChild(eventTitle);
        eventItem.appendChild(eventTime);
        tooltipContent.appendChild(eventItem);
    });
    
    tooltip.appendChild(tooltipContent);
    return tooltip;
}

function showEventsForDate(dateString) {
    const eventsForDate = homeCalendarEvents.filter(event => event.date === dateString);
    const meetingInfo = document.querySelector('.meeting-info');
    
    if (eventsForDate.length > 0) {
        // Clear existing content
        meetingInfo.innerHTML = '';
        
        // Create events container
        const eventsContainer = document.createElement('div');
        eventsContainer.className = 'events-container';
        
        eventsForDate.forEach((event, index) => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            
            // Event header with title and actions
            const eventHeader = document.createElement('div');
            eventHeader.className = 'event-header';
            
            const eventTitle = document.createElement('h4');
            eventTitle.textContent = event.title;
            
            const eventActions = document.createElement('div');
            eventActions.className = 'event-actions';
            
            const quickAddBtn = document.createElement('button');
            quickAddBtn.className = 'quick-add-btn';
            quickAddBtn.innerHTML = '<i class="fas fa-plus"></i>';
            quickAddBtn.title = 'Add event';
            quickAddBtn.addEventListener('click', () => showQuickAddEventModal());
            
            const moreBtn = document.createElement('i');
            moreBtn.className = 'fas fa-ellipsis-h';
            moreBtn.style.cursor = 'pointer';
            moreBtn.style.color = '#9ca3af';
            
            eventActions.appendChild(quickAddBtn);
            eventActions.appendChild(moreBtn);
            eventHeader.appendChild(eventTitle);
            eventHeader.appendChild(eventActions);
            
            // Event time
            const eventTime = document.createElement('p');
            eventTime.className = 'event-time';
            const today = new Date();
            const eventDate = new Date(dateString);
            const isToday = eventDate.toDateString() === today.toDateString();
            eventTime.textContent = isToday ? `Today • ${event.time}` : `${eventDate.toLocaleDateString()} • ${event.time}`;
            
            // Event details with icon and location
            const eventDetails = document.createElement('div');
            eventDetails.className = 'event-details';
            
            // Event type icon
            const eventIcon = document.createElement('div');
            eventIcon.className = 'event-icon';
            
            let iconClass = 'fas fa-calendar';
            if (event.type === 'meeting') {
                iconClass = 'fas fa-video';
            } else if (event.type === 'deadline') {
                iconClass = 'fas fa-clock';
            } else if (event.type === 'event') {
                iconClass = 'fas fa-star';
            }
            
            eventIcon.innerHTML = `<i class="${iconClass}"></i>`;
            
            // Event location/type
            const eventLocation = document.createElement('span');
            eventLocation.textContent = event.location || event.type;
            
            // Attendees section
            const attendees = document.createElement('div');
            attendees.className = 'attendees';
            
            if (event.attendees && event.attendees > 0) {
                // Create attendee avatars
                for (let i = 0; i < Math.min(event.attendees, 2); i++) {
                    const attendeeAvatar = document.createElement('div');
                    attendeeAvatar.className = 'attendee-avatar';
                    const img = document.createElement('img');
                    img.src = `https://api.dicebear.com/9.x/micah/svg?seed=Attendee${i + 1}`;
                    img.alt = 'Attendee';
                    attendeeAvatar.appendChild(img);
                    attendees.appendChild(attendeeAvatar);
                }
                
                // Show additional attendees count
                if (event.attendees > 2) {
                    const attendeeCount = document.createElement('span');
                    attendeeCount.className = 'attendee-count';
                    attendeeCount.textContent = `+${event.attendees - 2}`;
                    attendees.appendChild(attendeeCount);
                }
            }
            
            eventDetails.appendChild(eventIcon);
            eventDetails.appendChild(eventLocation);
            eventDetails.appendChild(attendees);
            
            // Assemble the card
            eventCard.appendChild(eventHeader);
            eventCard.appendChild(eventTime);
            eventCard.appendChild(eventDetails);
            
            eventsContainer.appendChild(eventCard);
        });
        
        meetingInfo.appendChild(eventsContainer);
        
    } else {
        // Show empty state
        meetingInfo.innerHTML = `
            <div class="empty-events-state">
                <div class="empty-events-icon">
                    <i class="fas fa-calendar-plus"></i>
                </div>
                <h4>No events scheduled</h4>
                <p>Click the + button to add an event</p>
                <button class="add-first-event-btn">
                    <i class="fas fa-plus"></i>
                    Add Event
                </button>
            </div>
        `;
        
        // Add event listener to the add button
        const addBtn = meetingInfo.querySelector('.add-first-event-btn');
        if (addBtn) {
            addBtn.addEventListener('click', () => showQuickAddEventModal());
        }
    }
}

export function getWeekStartForHomeCalendar() {
    // For the home calendar, we want to show a week starting from Friday
    // Calculate based on the selected date
    const selectedDate = new Date(homeCalendarSelectedDate);
    const dayOfWeek = selectedDate.getDay();
    const daysToSubtract = (dayOfWeek + 2) % 7; // Adjust to start from Friday
    const weekStart = new Date(selectedDate);
    weekStart.setDate(selectedDate.getDate() - daysToSubtract);
    return weekStart;
}

function showQuickAddEventModal() {
    // Create a simple modal for quick event addition
    const modal = document.createElement('div');
    modal.className = 'quick-event-modal';
    modal.innerHTML = `
        <div class="quick-event-content">
            <div class="quick-event-header">
                <h3>Add Event</h3>
                <button class="close-quick-modal">&times;</button>
            </div>
            <div class="quick-event-body">
                <div class="form-group">
                    <label>Event Title</label>
                    <input type="text" id="quickEventTitle" placeholder="Enter event title">
                </div>
                <div class="form-group">
                    <label>Time</label>
                    <input type="time" id="quickEventTime">
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <select id="quickEventType">
                        <option value="meeting">Meeting</option>
                        <option value="event">Event</option>
                        <option value="deadline">Deadline</option>
                    </select>
                </div>
            </div>
            <div class="quick-event-footer">
                <button class="cancel-quick-event">Cancel</button>
                <button class="save-quick-event">Save Event</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeBtn = modal.querySelector('.close-quick-modal');
    const cancelBtn = modal.querySelector('.cancel-quick-event');
    const saveBtn = modal.querySelector('.save-quick-event');
    
    const closeModal = () => {
        document.body.removeChild(modal);
    };
    
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    saveBtn.addEventListener('click', () => {
        const title = document.getElementById('quickEventTitle').value;
        const time = document.getElementById('quickEventTime').value;
        const type = document.getElementById('quickEventType').value;
        
        if (title.trim()) {
            const newEvent = {
                id: Date.now(),
                title: title,
                date: homeCalendarSelectedDate.toISOString().split('T')[0],
                time: time,
                type: type,
                attendees: 1
            };
            
            homeCalendarEvents.push(newEvent);
            updateHomeCalendarDisplay();
            showEventsForDate(newEvent.date);
            closeModal();
        }
    });
}

// Legacy functions for backward compatibility
export function initializeCalendar() {
    // This is kept for backward compatibility with the old calendar widget
    console.log('Legacy calendar initialization');
}

