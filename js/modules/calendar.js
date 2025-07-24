// Module: calendar

// Internal state for calendar functionality
// Track the current month (0-indexed) and year
let currentMonth = 6; // July (0-indexed)
let currentYear = 2024;
// Month names for display
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function initializeCalendar() {
    if (!window.calendarNavLeft) {
        window.calendarNavLeft = document.querySelector('.calendar-nav .fa-chevron-left');
    }
    if (!window.calendarNavRight) {
        window.calendarNavRight = document.querySelector('.calendar-nav .fa-chevron-right');
    }
    
    if (window.calendarNavLeft) {
        window.calendarNavLeft.addEventListener('click', function() {
            navigateMonth(-1);
        });
    }
    
    if (window.calendarNavRight) {
        window.calendarNavRight.addEventListener('click', function() {
            navigateMonth(1);
        });
    }
    
    // Date selection
    // Query all date elements within the calendar grid
    const dates = document.querySelectorAll('.date');
    dates.forEach(date => {
        date.addEventListener('click', function() {
            // Remove current class from all non-empty date elements
            dates.forEach(d => d.classList.remove('current'));
            
            // Add current class to the clicked date
            this.classList.add('current');
            
            console.log(`Selected date: ${this.textContent}`);
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


export function updateCalendarDisplay() {
    // Update month display
    const monthDisplay = document.querySelector('.header-actions span');
    if (monthDisplay) {
        monthDisplay.textContent = months[currentMonth];
    }
    
    // Update calendar window.dates
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    // Generate calendar window.dates - get the calendar grid container
    const calendarGrid = document.querySelector('.calendar-grid');
    if (calendarGrid) {
        // Keep day headers, remove old window.dates
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

