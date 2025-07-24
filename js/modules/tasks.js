// Module: tasks
export function renderKanbanBoard(container) {
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


export function renderTasksContent(container) {
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

export function initializeKanbanBoard() {
    // Initialize drag and drop
    initializeDragAndDrop();
    
    // Initialize modal form
    initializeTaskModal();
}


export function initializeDragAndDrop() {
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


export function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}


export function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedElement = null;
    
    // Remove drag over effects from all columns
    document.querySelectorAll('.column-content').forEach(col => {
        col.classList.remove('drag-over');
    });
}


export function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}


export function handleDragEnter(e) {
    this.classList.add('drag-over');
}


export function handleDragLeave(e) {
    if (!this.contains(e.relatedTarget)) {
        this.classList.remove('drag-over');
    }
}


export function handleDrop(e) {
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


export function openTaskModal(columnStatus = null) {
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


export function closeTaskModal() {
    const modal = document.getElementById('taskModal');
    modal.style.display = 'none';
}


export function addLabel() {
    const labelInput = document.getElementById('labelInput');
    const labelText = labelInput.value.trim();
    
    if (labelText && !taskLabels.includes(labelText)) {
        taskLabels.push(labelText);
        updateSelectedLabels();
        labelInput.value = '';
    }
}


export function updateSelectedLabels() {
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


export function removeLabel(index) {
    taskLabels.splice(index, 1);
    updateSelectedLabels();
}


export function addAssignee() {
    const assigneeInput = document.getElementById('assigneeInput');
    const assigneeText = assigneeInput.value.trim().toUpperCase();
    
    if (assigneeText && assigneeText.length <= 2 && !taskAssignees.includes(assigneeText)) {
        taskAssignees.push(assigneeText);
        updateSelectedAssignees();
        assigneeInput.value = '';
    }
}


export function updateSelectedAssignees() {
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


export function removeAssignee(index) {
    taskAssignees.splice(index, 1);
    updateSelectedAssignees();
}


export function initializeTaskModal() {
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


export function handleTaskSubmit(e) {
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


export function createTaskCard(id, title, labels, assignees) {
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


export function initializeTasksFeatures() {
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


export function updateTimeDisplay(display, seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}


export function addNewTaskToGroup(taskName, group) {
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


export function addNewNote(noteTitle) {
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

