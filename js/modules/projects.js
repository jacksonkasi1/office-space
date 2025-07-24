// Module: projects
export function initializeProjectActions() {
    if (!window.addProjectCard) {
        window.addProjectCard = document.querySelector('.add-project');
    }
    
    if (window.addProjectCard) {
        window.addProjectCard.addEventListener('click', function() {
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


export function createNewProjectDialog() {
    // Simple prompt for demo purposes
    const projectName = prompt('Enter project name:');
    if (projectName) {
        const projectsGrid = document.querySelector('.projects-grid');
        // Query the add project card locally rather than using window properties
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



