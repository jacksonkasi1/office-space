// Module: calendar

// Internal state for calendar functionality
let currentMonth = 11; // December (0-indexed)
let currentYear = 2022;
let currentView = 'week'; // day, week, month
let selectedDate = new Date(2022, 11, 9); // December 9, 2022

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

// Legacy functions for backward compatibility
export function initializeCalendar() {
    // This is kept for backward compatibility with the old calendar widget
    console.log('Legacy calendar initialization');
}

